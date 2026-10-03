import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { RichText } from "@/components/rich-text";
import { authorNames, bookImages, books, findBook, sortedBooks, type Book } from "@/content/books";
import { site } from "@/content/site";
import { imageSize, toSlide } from "@/lib/images";
import { BookCovers } from "./book-covers";
import { RelatedContent } from "./related";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

/** Navadno besedilo brez oznak *…* / **…** / […](…). */
function plain(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.–]+$/, "")}…`;
}

/** Povzetek za opis strani (≤ 155 znakov). */
function summary(book: Book): string {
  const lead = `${book.title} (${book.year}) – ${book.type}, ${authorNames(book)}. `;
  const quote = book.quotes?.[0];
  if (!quote) return truncate(lead + plain(book.description), 155);
  const text = truncate(`${lead}»${plain(quote.text).replace(/^…\s*/, "")}`, 154);
  return `${text}«`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = findBook(slug);
  if (!book) return {};
  return {
    title: book.title,
    description: summary(book),
    alternates: { canonical: `/knjige/${book.slug}` },
    openGraph: {
      type: "book",
      title: book.title,
      description: summary(book),
      url: `/knjige/${book.slug}`,
      images: [{ url: book.cover, ...imageSize(book.cover), alt: `Naslovnica knjige ${book.title}` }],
    },
  };
}

function jsonLd(book: Book) {
  const url = `${site.url}/knjige/${book.slug}`;
  const person = (name: string) => ({ "@type": "Person", name });
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": url,
    url,
    name: book.title,
    author: book.authors.map(person),
    ...(book.illustrator && { illustrator: person(book.illustrator) }),
    datePublished: String(book.year),
    publisher: { "@type": "Organization", name: book.publisher },
    image: `${site.url}${book.cover}`,
    inLanguage: book.inLanguage,
    genre: book.type,
    ...(book.isbn && { isbn: book.isbn }),
    ...(book.editions && {
      workExample: book.editions.map((edition) => ({
        "@type": "Book",
        datePublished: String(edition.year),
        publisher: { "@type": "Organization", name: edition.publisher },
        ...(edition.cover && { image: `${site.url}${edition.cover}` }),
      })),
    }),
  };
}

/** Besedilo z odstavki: prazna vrstica loči odstavke. */
function Paragraphs({ text }: { text: string }) {
  return (
    <div className="space-y-4">
      {text.split(/\n\s*\n/).map((paragraph, i) => (
        <RichText key={i} text={paragraph} />
      ))}
    </div>
  );
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = findBook(slug);
  if (!book) notFound();

  const images = bookImages(book).map((image) => ({ ...image, ...imageSize(image.src) }));
  const slides = images.map((image) =>
    toSlide({ src: image.src, alt: image.alt, title: book.title, description: image.caption }),
  );

  const ordered = sortedBooks();
  const position = ordered.findIndex((b) => b.slug === book.slug);
  const prev = ordered[position - 1];
  const next = ordered[position + 1];

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(book)).replace(/</g, "\\u003c") }}
      />

      <Link
        href="/knjige"
        className="mb-8 inline-flex min-h-11 items-center gap-2 text-plum-700 underline decoration-plum-300 underline-offset-4 hover:decoration-plum-700"
      >
        <ArrowLeft aria-hidden className="size-4" />
        Vse knjige
      </Link>

      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_20rem] md:gap-14 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="min-w-0">
          <PageHeader title={book.title} intro={`${book.type} · ${book.year}`} />

          <dl className="mb-10 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 rounded-lg border border-line bg-white p-5 shadow-sm">
            <Row label={book.authors.length > 1 ? "Avtorja" : "Avtorica"}>{authorNames(book)}</Row>
            {book.illustrator && <Row label="Ilustratorka">{book.illustrator}</Row>}
            {book.editions ? (
              <Row label="Izdaje">
                <ul className="space-y-1">
                  {[...book.editions]
                    .sort((a, b) => a.year - b.year)
                    .map((edition) => (
                      <li key={edition.year}>
                        {edition.year} – {edition.publisher}
                        {edition.note && <span className="text-muted"> ({edition.note})</span>}
                      </li>
                    ))}
                </ul>
              </Row>
            ) : (
              <>
                <Row label="Založba">{book.publisher}</Row>
                <Row label="Leto izdaje">{book.year}</Row>
              </>
            )}
            {book.cd && <Row label="CD uglasbenih pesmi">{book.cd}</Row>}
            {book.isbn && <Row label="ISBN">{book.isbn}</Row>}
          </dl>

          <div className="max-w-prose text-lg leading-relaxed text-ink">
            <Paragraphs text={book.description} />

            {book.quotes?.map((quote) => (
              <figure key={quote.author} className="mt-6">
                {quote.intro && <RichText text={quote.intro} className="mb-4" />}
                <blockquote className="border-l-4 border-plum-300 pl-5 font-serif text-ink/90 italic">
                  <p>»{quote.text}«</p>
                </blockquote>
                <figcaption className="mt-3 pl-5 text-base text-muted">
                  – <cite className="not-italic">{quote.author}</cite>
                  {quote.role && `, ${quote.role}`}
                </figcaption>
              </figure>
            ))}

            {book.longDescription && (
              <section aria-labelledby="kratek-opis" className="mt-12">
                <h2 id="kratek-opis" className="mb-4 font-serif text-2xl font-semibold">
                  Kratek opis
                </h2>
                <div className="rounded-lg bg-linear-to-br from-plum-50 to-sea-50 p-6 font-serif">
                  <Paragraphs text={book.longDescription} />
                </div>
              </section>
            )}
          </div>
        </div>

        <aside aria-label="Naslovnice" className="order-first md:order-none">
          <div className="mx-auto max-w-xs sm:max-w-sm md:sticky md:top-28 md:max-w-none">
            <BookCovers images={images} slides={slides} />
          </div>
        </aside>
      </div>

      <RelatedContent slug={book.slug} />

      <nav aria-label="Druge knjige" className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/knjige/${prev.slug}`}
            className="group flex min-h-11 flex-col rounded-lg border border-line bg-white p-4 shadow-sm hover:shadow-md"
          >
            <span className="inline-flex items-center gap-1 text-sm text-muted">
              <ArrowLeft aria-hidden className="size-4" /> Prejšnja knjiga
            </span>
            <span className="font-serif text-lg text-plum-700 group-hover:underline">{prev.title}</span>
          </Link>
        ) : (
          <span aria-hidden className="hidden sm:block" />
        )}
        {next && (
          <Link
            href={`/knjige/${next.slug}`}
            className="group flex min-h-11 flex-col rounded-lg border border-line bg-white p-4 text-right shadow-sm hover:shadow-md sm:col-start-2"
          >
            <span className="inline-flex items-center justify-end gap-1 text-sm text-muted">
              Naslednja knjiga <ArrowRight aria-hidden className="size-4" />
            </span>
            <span className="font-serif text-lg text-plum-700 group-hover:underline">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <>
      <dt className="font-semibold text-ink">{label}</dt>
      <dd className="text-ink">{children}</dd>
    </>
  );
}
