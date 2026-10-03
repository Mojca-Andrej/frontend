import type { Metadata } from "next";
import Link from "next/link";
import { Globe, MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { RichText, formatInline } from "@/components/rich-text";
import { findBook } from "@/content/books";
import {
  abroadCountries,
  categoryDescriptions,
  categoryLabels,
  nastopi,
  type Performance,
  type PerformanceCategory,
} from "@/content/nastopi";
import type { IsoDate } from "@/content/types";
import { byDateDesc, formatDate, yearOf } from "@/lib/dates";
import { cn } from "@/lib/cn";
import { filterTags } from "./filters";
import { NastopiTimeline, type TimelineGroup } from "./timeline";
import { linkClass } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Nastopi in predstavitve",
  description:
    "Gledališke predstave, kamišibaj, magnetno gledališče, predstavitve knjig in literarni nastopi Mojce Andrej doma in v tujini.",
  alternates: { canonical: "/nastopi" },
};

const categoryStyles: Record<PerformanceCategory, string> = {
  gledalisce: "bg-plum-100 text-plum-900",
  kamisibaj: "bg-sea-100 text-sea-900",
  "magnetno-gledalisce": "bg-sea-100 text-sea-900",
  "literarni-nastop": "bg-plum-50 text-plum-800",
  sejem: "bg-paper-deep text-ink",
  razstava: "bg-paper-deep text-ink",
};

/** "16.–17. 6. 2018", "1. 12.–2. 1. 2018", "2012–2019". */
function formatDateRange(date: IsoDate, dateEnd?: IsoDate): string {
  if (!dateEnd) return formatDate(date);
  const [y1, m1, d1] = date.split("-");
  const [y2, m2, d2] = dateEnd.split("-");
  if (d1 && d2 && y1 === y2) {
    return m1 === m2
      ? `${Number(d1)}.–${Number(d2)}. ${Number(m2)}. ${y2}`
      : `${Number(d1)}. ${Number(m1)}.–${Number(d2)}. ${Number(m2)}. ${y2}`;
  }
  return `${formatDate(date)}–${formatDate(dateEnd)}`;
}

function PerformanceCard({ performance: p }: { performance: Performance }) {
  const book = p.book ? findBook(p.book) : undefined;
  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-sm md:p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
        <span className={cn("rounded-full px-2.5 py-1", categoryStyles[p.category])}>{categoryLabels[p.category]}</span>
        {p.abroad && (
          <span className="inline-flex items-center gap-1 rounded-full border border-sea-300 px-2.5 py-0.5 text-sea-800">
            <Globe aria-hidden className="size-3.5" />
            Tujina
          </span>
        )}
      </div>

      {p.title && <h3 className="mt-3 font-serif text-lg font-semibold text-ink md:text-xl">{p.title}</h3>}
      {p.text && <RichText text={p.text} className={cn("leading-relaxed text-ink", p.title ? "mt-2" : "mt-3")} />}

      {p.credits && (
        <dl className="mt-3 grid gap-x-3 gap-y-1 text-sm sm:grid-cols-[max-content_1fr]">
          {p.credits.map((credit) => (
            <div key={credit.label} className="contents">
              <dt className="text-muted">{credit.label}:</dt>
              <dd className="text-ink">{formatInline(credit.value)}</dd>
            </div>
          ))}
        </dl>
      )}

      <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
        {p.place && (
          <span className="inline-flex items-start gap-1.5">
            <MapPin aria-hidden className="mt-0.5 size-4 shrink-0" />
            {p.place}
          </span>
        )}
        <time dateTime={p.date}>{formatDateRange(p.date, p.dateEnd)}</time>
      </p>

      {book && (
        <p className="mt-3 text-sm">
          <span className="text-muted">Knjiga: </span>
          <Link href={`/knjige/${book.slug}`} className={cn(linkClass, "font-medium")}>
            {book.title}
          </Link>
        </p>
      )}
    </article>
  );
}

function buildGroups(): TimelineGroup[] {
  const groups = new Map<string, TimelineGroup>();
  [...nastopi].sort(byDateDesc).forEach((p, i) => {
    const year = String(yearOf(p.date));
    if (!groups.has(year)) groups.set(year, { year, items: [] });
    groups.get(year)!.items.push({
      key: `${p.date}-${i}`,
      tags: filterTags(p),
      node: <PerformanceCard performance={p} />,
    });
  });
  return [...groups.values()];
}

export default function NastopiPage() {
  const notes = (Object.entries(categoryDescriptions) as [PerformanceCategory, string][]).map(([category, text]) => ({
    label: categoryLabels[category],
    text,
  }));

  return (
    <div>
      <PageHeader
        title="Nastopi"
        intro="Gledališke predstave, kamišibaj, magnetno gledališče, predstavitve knjig in literarni nastopi doma in v tujini."
      >
        <dl className="mt-6 max-w-2xl space-y-2 text-sm text-muted">
          {notes.map((note) => (
            <div key={note.label}>
              <dt className="inline font-semibold text-ink">{note.label}: </dt>
              <dd className="inline">{formatInline(note.text)}</dd>
            </div>
          ))}
          <div>
            <dt className="inline font-semibold text-ink">Gostovanja v tujini: </dt>
            <dd className="inline">{abroadCountries}</dd>
          </div>
        </dl>
      </PageHeader>

      <NastopiTimeline groups={buildGroups()} />
    </div>
  );
}
