import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { languages } from "@/content/languages";
import { translations } from "@/content/translations";
import { linkClass, poemCount, translationBook } from "./translation-books";

export const metadata: Metadata = {
  title: "Prevodi",
  description: "Pesmi Mojce Andrej, prevedene v angleščino, hrvaščino, makedonščino in poljščino.",
  alternates: { canonical: "/prevodi" },
};

export default function Prevodi() {
  const withPoems = languages
    .map((language) => ({ ...language, poems: translations.filter((t) => t.language === language.code) }))
    .filter((language) => language.poems.length > 0);
  const ang = translationBook("en");
  const hrv = translationBook("hr");

  return (
    <div>
      <PageHeader title="Prevodi" intro="Pesmi Mojce Andrej, prevedene v tuje jezike.">
        {ang && hrv && (
          <p className="mt-4 max-w-2xl text-muted">
            Več prevodov njenih pesmi v angleščino je izšlo v knjigi{" "}
            <Link href={`/knjige/${ang.slug}`} className={linkClass}>
              <cite>{ang.title}</cite>
            </Link>{" "}
            ({ang.year}), v hrvaščino pa v knjigi{" "}
            <Link href={`/knjige/${hrv.slug}`} className={linkClass}>
              <cite>{hrv.title}</cite>
            </Link>{" "}
            ({hrv.year}).
          </p>
        )}
      </PageHeader>

      <ul className="grid gap-6 md:grid-cols-2">
        {withPoems.map((language) => (
          <li key={language.code}>
            <Link
              href={`/prevodi/${language.code}`}
              className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-sm transition-colors hover:border-plum-300 md:p-8"
            >
              <h2 className="font-serif text-2xl font-semibold text-ink group-hover:text-plum-700 first-letter:uppercase">
                {language.label}
              </h2>
              <p className="mt-1 text-sm text-muted">{poemCount(language.poems.length)}</p>
              <p lang={language.htmlLang} className="mt-4 grow font-serif text-ink">
                {language.poems.map((poem) => poem.title).join(" · ")}
              </p>
              <span aria-hidden className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-plum-700">
                Pesmi {language.menuLabel}
                <ArrowRight className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
