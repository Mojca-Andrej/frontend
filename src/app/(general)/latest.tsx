import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { nastopi, categoryLabels } from "@/content/nastopi";
import { publications } from "@/content/objave";
import { odmevi } from "@/content/odmevi";
import { SectionTitle } from "@/components/page-header";
import { ExternalLink } from "@/components/external-link";
import { formatInline } from "@/components/rich-text";
import { byDateDesc, formatDate } from "@/lib/dates";
import type { IsoDate } from "@/content/types";

type Item = { kind: string; date: IsoDate; title: string; detail?: string; href: string; external?: boolean };

/** Zadnje novice: najnovejši nastopi, objave in odmevi, samodejno iz podatkov. */
export function Latest() {
  const items: Item[] = [
    ...nastopi.map((n) => ({
      kind: categoryLabels[n.category],
      date: n.date,
      title: n.title ?? n.text ?? "",
      detail: n.place,
      href: "/nastopi",
    })),
    ...publications.map((p) => ({ kind: "Objava", date: p.date, title: p.title, detail: p.publication, href: "/objave" })),
    ...odmevi
      .filter((o): o is typeof o & { date: IsoDate } => Boolean(o.date))
      .map((o) => ({ kind: "Odmev", date: o.date, title: o.title, detail: o.source, href: o.url, external: true })),
  ]
    .sort(byDateDesc)
    .slice(0, 4);

  return (
    <section aria-labelledby="zadnje">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionTitle id="zadnje">Zadnje novice</SectionTitle>
        <Link href="/nastopi" className="mb-6 inline-flex items-center gap-1 font-medium text-plum-700 hover:underline">
          Vsi nastopi <ArrowRight aria-hidden className="size-4" />
        </Link>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const content = (
            <>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="rounded-full bg-sea-50 px-2.5 py-0.5 font-medium text-sea-800">{item.kind}</span>
                <time dateTime={item.date} className="text-muted">
                  {formatDate(item.date)}
                </time>
              </p>
              <p className="mt-3 line-clamp-3 font-serif text-lg leading-snug">{formatInline(item.title)}</p>
              {item.detail && <p className="mt-1 line-clamp-2 text-sm text-muted">{item.detail}</p>}
            </>
          );
          const className =
            "block h-full rounded-lg border border-line bg-white p-5 shadow-sm transition-colors hover:border-plum-300";
          return (
            <li key={`${item.kind}-${item.date}-${item.title}`}>
              {item.external ? (
                <ExternalLink href={item.href} className={className}>
                  {content}
                </ExternalLink>
              ) : (
                <Link href={item.href} className={className}>
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
