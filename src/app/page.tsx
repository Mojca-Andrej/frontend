import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about } from "@/content/about";
import { newestBook } from "@/content/books";
import { site } from "@/content/site";
import { SectionTitle } from "@/components/page-header";
import { RichText, formatInline } from "@/components/rich-text";
import { imageSize } from "@/lib/images";
import { Latest } from "./latest";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: "Mojca Alešovec",
  url: site.url,
  image: new URL(about.portrait.src, site.url).toString(),
  jobTitle: "pesnica, pisateljica, profesorica slovenščine",
  birthDate: "1973",
  birthPlace: { "@type": "Place", name: "Maribor" },
  homeLocation: { "@type": "Place", name: "Ruše" },
  memberOf: { "@type": "Organization", name: "Društvo slovenskih pisateljev" },
  sameAs: site.socials.map((s) => s.href),
};

export default function Home() {
  const newest = newestBook();
  const quote = newest.quotes?.[0];
  const portrait = imageSize(about.portrait.src);
  const cover = imageSize(newest.cover);

  return (
    <div className="space-y-20 md:space-y-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Uvod */}
      <section className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-16">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-plum-700 uppercase">{site.tagline}</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight md:text-7xl">{site.name}</h1>
          <div aria-hidden className="mt-6 h-1 w-20 rounded-full bg-linear-to-r from-plum-500 to-sea-400" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">{about.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/knjige"
              className="rounded-full bg-plum-700 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-plum-800"
            >
              Knjige
            </Link>
            <Link
              href="/nastopi"
              className="rounded-full border border-line bg-white px-6 py-3 font-medium transition-colors hover:border-plum-300 hover:text-plum-700"
            >
              Nastopi
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full px-4 py-3 font-medium text-plum-700 underline decoration-plum-300 underline-offset-4 hover:decoration-plum-700"
            >
              Pišite mi
            </a>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl bg-sea-100 md:-right-5 md:-bottom-5"
            />
            <Image
              src={about.portrait.src}
              alt={about.portrait.alt}
              width={portrait.width}
              height={portrait.height}
              sizes="(min-width: 768px) 40vw, 90vw"
              preload
              className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-md"
            />
          </div>
          <figcaption className="mt-6 text-sm text-muted">{about.portrait.credit}</figcaption>
        </figure>
      </section>

      {/* Nova knjiga */}
      <section
        aria-labelledby="nova-knjiga"
        className="overflow-hidden rounded-2xl bg-linear-to-br from-plum-50 via-paper to-sea-50 ring-1 ring-line"
      >
        <div className="grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-14">
          <Link href={`/knjige/${newest.slug}`} className="mx-auto block w-44 md:w-full">
            <Image
              src={newest.cover}
              alt={`Naslovnica knjige ${newest.title}`}
              width={cover.width}
              height={cover.height}
              sizes="(min-width: 768px) 15rem, 11rem"
              className="w-full rounded-sm shadow-lg ring-1 ring-black/5"
            />
          </Link>
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-sea-700 uppercase">
              Nova knjiga · {newest.year}
            </p>
            <h2 id="nova-knjiga" className="mt-2 font-serif text-3xl font-semibold md:text-4xl">
              {newest.title}
            </h2>
            <p className="mt-1 text-muted">{newest.type}</p>
            {quote && (
              <blockquote className="mt-6 border-l-2 border-plum-300 pl-5">
                <p className="line-clamp-4 font-serif text-lg leading-relaxed text-ink/90 italic">
                  »{formatInline(quote.text)}«
                </p>
                <footer className="mt-2 text-sm text-muted">— {quote.author}</footer>
              </blockquote>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/knjige/${newest.slug}`}
                className="rounded-full bg-plum-700 px-5 py-2.5 font-medium text-white hover:bg-plum-800"
              >
                Več o knjigi
              </Link>
              <Link
                href="/odmevi"
                className="rounded-full border border-line bg-white px-5 py-2.5 font-medium hover:border-plum-300 hover:text-plum-700"
              >
                Odmevi
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Latest />

      {/* O avtorici */}
      <section aria-labelledby="o-avtorici" className="grid gap-10 md:grid-cols-[1fr_18rem] md:gap-16">
        <div>
          <SectionTitle id="o-avtorici">O avtorici</SectionTitle>
          <div className="max-w-prose space-y-4 text-lg leading-relaxed">
            {about.bio.map((paragraph) => (
              <RichText key={paragraph.slice(0, 24)} text={paragraph} />
            ))}
          </div>
        </div>
        <aside aria-label="Na kratko" className="h-fit rounded-lg border border-line bg-white p-6 shadow-sm">
          <h3 className="font-serif text-xl font-semibold">Na kratko</h3>
          <dl className="mt-4 space-y-3">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm font-semibold tracking-wider text-muted uppercase">{fact.label}</dt>
                <dd className="mt-0.5">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
    </div>
  );
}
