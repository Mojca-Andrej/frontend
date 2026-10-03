import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { RichText } from "@/components/rich-text";
import { ExternalLink } from "@/components/external-link";
import { publications, type Publication } from "@/content/objave";
import { byDateDesc, formatDate, yearOf } from "@/lib/dates";
import { imageSize, toSlide } from "@/lib/images";
import { ReadButton } from "./read-button";
import { linkClass } from "@/lib/styles";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Objave",
  description:
    "Pesmi, zgodbe in prevodi Mojce Andrej v literarnih revijah, zbornikih in na radiu – Sodobnost, Mentor, Poetikon, Galeb, Literatura, Radio Ars.",
  alternates: { canonical: "/objave" },
};

/** Kratko ime revije za opise slik: "Galeb, revija za otroke …" -> "Galeb". */
function shortName(publication: string) {
  return publication.split(/,| – /)[0];
}

/** Datum ali razpon: "junij–julij 2025" (stični pomišljaj, leto le enkrat). */
function PublicationDate({ date, dateEnd }: Pick<Publication, "date" | "dateEnd">) {
  if (!dateEnd) return <time dateTime={date}>{formatDate(date)}</time>;
  const start = formatDate(date);
  const sameYear = yearOf(date) === yearOf(dateEnd);
  return (
    <>
      <time dateTime={date}>{sameYear ? start.replace(/\s*\d{4}$/, "") : start}</time>–
      <time dateTime={dateEnd}>{formatDate(dateEnd)}</time>
    </>
  );
}

function slidesFor(entry: Publication) {
  const name = shortName(entry.publication);
  const images = [
    ...(entry.cover ? [{ src: entry.cover, alt: `${name}, naslovnica` }] : []),
    ...(entry.pages ?? []).map((src, i) => ({ src, alt: `${name}, stran ${i + 1}` })),
  ];
  return images.map((image) => toSlide({ ...image, title: `${entry.title} (${name})` }));
}

export default function ObjavePage() {
  const sorted = [...publications].sort(byDateDesc);

  return (
    <div>
      <PageHeader
        title="Objave"
        intro="Pesmi, zgodbe in prevodi, objavljeni v literarnih revijah, zbornikih in na radiu."
      />
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((entry) => {
          const slides = slidesFor(entry);
          const cover = entry.cover ? imageSize(entry.cover) : null;
          return (
            <li key={`${entry.date}-${entry.title}`} className="flex">
              <article className="flex w-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm">
                {entry.cover && cover && (
                  <div className="flex justify-center bg-linear-to-br from-plum-50 to-sea-50 px-6 py-5">
                    <Image
                      src={entry.cover}
                      width={cover.width}
                      height={cover.height}
                      alt={`Naslovnica: ${shortName(entry.publication)}`}
                      sizes="160px"
                      className="h-52 w-auto rounded-sm border border-line object-contain shadow-sm"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-xl font-semibold text-ink">{entry.title}</h2>
                  <p className="mt-1 text-sm font-medium text-plum-700">{entry.publication}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    <PublicationDate date={entry.date} dateEnd={entry.dateEnd} />
                  </p>
                  {entry.description && <RichText text={entry.description} className="mt-3 text-ink" />}
                  {entry.note && <RichText text={entry.note} className="mt-2 text-sm text-muted" />}
                  {(slides.length > 0 || entry.link) && (
                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
                      {slides.length > 0 && <ReadButton slides={slides} title={entry.title} />}
                      {entry.link && (
                        <ExternalLink
                          href={entry.link}
                          className={cn(linkClass, "inline-flex min-h-11 items-center gap-1.5 text-sm font-medium")}
                        >
                          Več o objavi<span className="sr-only">: {entry.title}</span>
                          <ArrowUpRight aria-hidden className="size-4" />
                        </ExternalLink>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
