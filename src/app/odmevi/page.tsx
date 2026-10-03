import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  MessageSquareQuote,
  Newspaper,
  Podcast,
  Radio,
  Video,
  type LucideIcon,
} from "lucide-react";
import { PageHeader, SectionTitle } from "@/components/page-header";
import { ExternalLink } from "@/components/external-link";
import { getBook } from "@/content/books";
import { odmevi, type Odmev, type OdmevKind } from "@/content/odmevi";
import type { BookSlug } from "@/content/types";
import { formatDate } from "@/lib/dates";
import { imageSize } from "@/lib/images";

export const metadata: Metadata = {
  title: "Odmevi",
  description:
    "Pogovori, kritike in prispevki o knjigah Mojce Andrej – Radio Maribor, Radio Ars, Ars Litera, Primorske novice in drugi mediji.",
  alternates: { canonical: "/odmevi" },
};

const kinds: Record<OdmevKind, { label: string; icon: LucideIcon }> = {
  radio: { label: "Radijska oddaja", icon: Radio },
  podkast: { label: "Podkast", icon: Podcast },
  clanek: { label: "Članek", icon: Newspaper },
  intervju: { label: "Intervju", icon: MessageSquareQuote },
  video: { label: "Video", icon: Video },
  odlomki: { label: "Odlomki", icon: BookOpen },
};

/** Od najnovejšega; vnosi brez datuma na koncu. */
function byNewest(a: Odmev, b: Odmev) {
  return (b.date ?? "").localeCompare(a.date ?? "");
}

/** Skupine po knjigah; vrstni red skupin določa najnovejši odmev posamezne knjige. */
function groupByBook(entries: Odmev[]) {
  const groups = new Map<BookSlug, Odmev[]>();
  for (const entry of [...entries].sort(byNewest)) {
    groups.set(entry.book, [...(groups.get(entry.book) ?? []), entry]);
  }
  return [...groups.entries()];
}

function OdmevCard({ odmev }: { odmev: Odmev }) {
  const { label, icon: Icon } = kinds[odmev.kind];
  return (
    <ExternalLink
      href={odmev.url}
      className="group flex h-full gap-4 rounded-lg border border-line bg-white p-5 shadow-sm hover:border-plum-300 hover:shadow-md motion-safe:transition"
    >
      <span
        aria-hidden
        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-plum-50 text-plum-700"
      >
        <Icon className="size-5" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm text-muted">
          <strong className="font-semibold text-ink">{odmev.source}</strong>
          <span aria-hidden> · </span>
          <span className="sr-only">, </span>
          {label}
        </span>
        <span className="mt-1 font-serif text-lg leading-snug text-ink group-hover:text-plum-700 group-hover:underline">
          {odmev.title}
        </span>
        {odmev.people && <span className="mt-1 text-sm text-ink">{odmev.people}</span>}
        {(odmev.date || odmev.note) && (
          <span className="mt-2 text-sm text-muted">
            {odmev.date && <time dateTime={odmev.date}>{formatDate(odmev.date)}</time>}
            {odmev.date && odmev.note && <span aria-hidden> · </span>}
            {odmev.date && odmev.note && <span className="sr-only">, </span>}
            {odmev.note}
          </span>
        )}
      </span>
      <ArrowUpRight aria-hidden className="size-5 shrink-0 text-plum-700" />
    </ExternalLink>
  );
}

export default function OdmeviPage() {
  const groups = groupByBook(odmevi);

  return (
    <div>
      <PageHeader title="Odmevi" intro="Pogovori, kritike in prispevki o knjigah in nastopih." />
      <div className="space-y-14">
        {groups.map(([slug, entries]) => {
          const book = getBook(slug);
          const cover = imageSize(book.cover);
          const headingId = `odmevi-${slug}`;
          return (
            <section key={slug} aria-labelledby={headingId}>
              <div className="mb-6 flex items-center gap-4 [&>h2]:mb-0">
                <Image
                  src={book.cover}
                  width={cover.width}
                  height={cover.height}
                  alt=""
                  sizes="56px"
                  className="h-20 w-auto shrink-0 rounded-sm border border-line shadow-sm"
                />
                <SectionTitle id={headingId}>
                  <Link
                    href={`/knjige/${slug}`}
                    className="underline decoration-plum-300 decoration-2 underline-offset-4 hover:text-plum-700 hover:decoration-plum-700"
                  >
                    {book.title}
                  </Link>
                </SectionTitle>
              </div>
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {entries.map((odmev) => (
                  <li key={odmev.url}>
                    <OdmevCard odmev={odmev} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
