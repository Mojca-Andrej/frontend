import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SectionTitle } from "@/components/page-header";
import { getBook } from "@/content/books";
import { galleries } from "@/content/galleries";
import { toSlide } from "@/lib/images";
import { plural } from "@/lib/plural";
import { AlbumGrid } from "./album-grid";

export const metadata: Metadata = {
  title: "Galerija",
  description:
    "Fotografije z nastopov, predstavitev knjig, kamišibaja in gledaliških predstav pesnice in pisateljice Mojce Andrej.",
  alternates: { canonical: "/galerija" },
};

function photosWord(n: number) {
  return plural(n, ["fotografija", "fotografiji", "fotografije", "fotografij"]);
}

export default function GalleryPage() {
  return (
    <div>
      <PageHeader
        title="Galerija"
        intro="Utrinki z nastopov, predstavitev knjig, kamišibaja in gledaliških odrov. Za povečavo izberite fotografijo."
      >
        <nav aria-label="Albumi" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {galleries.map((gallery) => (
              <li key={gallery.slug}>
                <a
                  href={`#${gallery.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-4 text-sm font-medium text-plum-700 shadow-sm hover:border-plum-300 hover:bg-plum-50"
                >
                  {gallery.title}
                  <span className="text-muted">
                    {gallery.images.length}
                    <span className="sr-only"> {photosWord(gallery.images.length)}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <div className="space-y-14 md:space-y-20">
        {galleries.map((gallery, i) => {
          const book = gallery.book ? getBook(gallery.book) : undefined;
          return (
            <section key={gallery.slug} aria-labelledby={gallery.slug}>
              <SectionTitle id={gallery.slug}>{gallery.title}</SectionTitle>
              {(gallery.description || book) && (
                <div className="-mt-3 mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  {gallery.description && <p className="text-muted">{gallery.description}</p>}
                  {book && (
                    <Link
                      href={`/knjige/${book.slug}`}
                      className="font-medium text-plum-700 underline underline-offset-4 hover:text-plum-900"
                    >
                      Več o knjigi <cite>{book.title}</cite>
                    </Link>
                  )}
                </div>
              )}
              <AlbumGrid slides={gallery.images.map(toSlide)} preloadFirst={i === 0} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
