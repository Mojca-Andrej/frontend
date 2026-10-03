import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { BookSlug } from "@/content/types";
import { nastopi, categoryLabels } from "@/content/nastopi";
import { odmevi } from "@/content/odmevi";
import { publications } from "@/content/objave";
import { galleries } from "@/content/galleries";
import { readingsFor } from "@/content/readings";
import { ExternalLink } from "@/components/external-link";
import { formatInline } from "@/components/rich-text";
import { byDateDesc, formatDate } from "@/lib/dates";

function Block({ title, href, linkLabel, children }: { title: string; href: string; linkLabel: string; children: ReactNode }) {
  return (
    <section className="rounded-lg border border-line bg-white p-6 shadow-sm">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-xl font-semibold">{title}</h3>
        <Link href={href} className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-plum-700 hover:underline">
          {linkLabel} <ArrowRight aria-hidden className="size-4" />
        </Link>
      </div>
      <ul className="mt-4 space-y-3">{children}</ul>
    </section>
  );
}

/** Vse, kar je povezano s knjigo: odmevi, nastopi, objave, branja in fotografije (prek polja `book` v podatkih). */
export function RelatedContent({ slug }: { slug: BookSlug }) {
  const bookOdmevi = odmevi.filter((o) => o.book === slug);
  const bookNastopi = nastopi.filter((n) => n.book === slug).sort(byDateDesc);
  const bookObjave = publications.filter((p) => p.book === slug).sort(byDateDesc);
  const bookGalleries = galleries.filter((g) => g.book === slug);
  const bookReadings = readingsFor(slug);

  if (!bookOdmevi.length && !bookNastopi.length && !bookObjave.length && !bookGalleries.length && !bookReadings.length) {
    return null;
  }

  return (
    <section aria-labelledby="povezano" className="mt-16 border-t border-line pt-12">
      <h2 id="povezano" className="font-serif text-2xl font-semibold md:text-3xl">
        Povezano s knjigo
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {bookOdmevi.length > 0 && (
          <Block title="Odmevi" href="/odmevi" linkLabel="Vsi odmevi">
            {bookOdmevi.slice(0, 5).map((o) => (
              <li key={o.url}>
                <ExternalLink href={o.url} className="group inline-flex items-start gap-1.5 hover:text-plum-700">
                  <span>
                    <span className="font-semibold">{o.source}</span> – {o.title}
                    {o.date && <span className="text-muted"> ({formatDate(o.date)})</span>}
                  </span>
                  <ArrowUpRight aria-hidden className="mt-1 size-4 shrink-0 text-muted group-hover:text-plum-700" />
                </ExternalLink>
              </li>
            ))}
          </Block>
        )}

        {bookNastopi.length > 0 && (
          <Block title="Nastopi" href="/nastopi" linkLabel="Vsi nastopi">
            {bookNastopi.slice(0, 5).map((n) => (
              <li key={`${n.date}-${n.title ?? n.text}`}>
                <p>{formatInline(n.title ?? n.text ?? categoryLabels[n.category])}</p>
                <p className="text-sm text-muted">
                  {[n.place, formatDate(n.date)].filter(Boolean).join(" · ")}
                </p>
              </li>
            ))}
          </Block>
        )}

        {bookReadings.length > 0 && (
          <Block title="Preberite in poslušajte" href="/branja" linkLabel="Vsa branja">
            {bookReadings.map((r) => (
              <li key={r.href + r.title}>
                <Link href={r.href} className="hover:text-plum-700">
                  {r.title}
                </Link>
                {r.detail && <p className="text-sm text-muted">{r.detail}</p>}
              </li>
            ))}
          </Block>
        )}

        {bookObjave.length > 0 && (
          <Block title="Objave" href="/objave" linkLabel="Vse objave">
            {bookObjave.map((p) => (
              <li key={p.title + p.date}>
                <p>{formatInline(p.title)}</p>
                <p className="text-sm text-muted">
                  {p.publication} · {formatDate(p.date)}
                </p>
              </li>
            ))}
          </Block>
        )}

        {bookGalleries.map((g) => (
          <Block key={g.slug} title="Fotografije" href={`/galerija#${g.slug}`} linkLabel="Odpri galerijo">
            <li>
              <Link href={`/galerija#${g.slug}`} className="grid grid-cols-4 gap-2" aria-label={`Galerija ${g.title}`}>
                {g.images.slice(0, 4).map((image) => (
                  <span key={image.src} className="relative aspect-square overflow-hidden rounded-md bg-paper-deep">
                    <Image src={image.src} alt="" fill sizes="(min-width: 768px) 8rem, 22vw" className="object-cover" />
                  </span>
                ))}
              </Link>
            </li>
          </Block>
        ))}
      </div>
    </section>
  );
}
