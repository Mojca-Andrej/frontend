import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, SectionTitle } from "@/components/page-header";
import { booksFor, newestBook, type Book } from "@/content/books";

export const metadata: Metadata = {
  title: "Knjige",
  description:
    "Knjige Mojce Andrej: pesniške zbirke, roman Kavč učiteljice Veronike, zbirke prevodov ter knjige za otroke z uglasbenimi pesmimi.",
  alternates: { canonical: "/knjige" },
};

const sections = [
  { id: "za-odrasle", title: "Za odrasle", books: booksFor("odrasli") },
  { id: "za-otroke", title: "Za otroke", books: booksFor("otroci") },
];

export default function BooksPage() {
  const newest = newestBook();
  const firstSlug = sections[0]?.books[0]?.slug;

  return (
    <div>
      <PageHeader
        title="Knjige"
        intro="Pesniške zbirke, roman, zbirke prevodov in knjige za otroke z uglasbenimi pesmimi."
      />
      {sections.map((section) => (
        <section key={section.id} aria-labelledby={section.id} className="mb-16 last:mb-0">
          <SectionTitle id={section.id}>{section.title}</SectionTitle>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {section.books.map((book) => (
              <li key={book.slug}>
                <BookCard book={book} isNew={book.slug === newest.slug} priority={book.slug === firstSlug} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function BookCard({ book, isNew, priority }: { book: Book; isNew: boolean; priority: boolean }) {
  return (
    <Link href={`/knjige/${book.slug}`} className="group block rounded-lg">
      <div className="relative aspect-[2/3] overflow-hidden rounded-md border border-line bg-paper-deep shadow-sm transition-shadow group-hover:shadow-md motion-safe:duration-200">
        <Image
          src={book.cover}
          alt=""
          fill
          preload={priority}
          sizes="(min-width: 1024px) 270px, (min-width: 640px) 31vw, 46vw"
          className="object-contain p-2"
        />
        {isNew && (
          <span className="absolute top-2 left-2 rounded-full bg-plum-700 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            Nova knjiga
          </span>
        )}
      </div>
      <h3 className="mt-3 font-serif text-lg leading-snug font-semibold text-ink group-hover:text-plum-700 group-hover:underline group-hover:decoration-plum-300 group-hover:underline-offset-4">
        {book.title}
      </h3>
      <p className="mt-1 text-sm text-muted">
        {book.type} · {book.year}
      </p>
    </Link>
  );
}
