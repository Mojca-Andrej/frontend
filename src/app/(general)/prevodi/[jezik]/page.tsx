import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Poem } from "@/components/poem";
import { languages } from "@/content/languages";
import { translations } from "@/content/translations";
import { linkClass, poemCount, translationBook } from "../translation-books";

type Props = { params: Promise<{ jezik: string }> };

export const dynamicParams = false;

function getLanguage(code: string) {
  const language = languages.find((l) => l.code === code);
  if (!language) return undefined;
  const poems = translations.filter((t) => t.language === language.code);
  return poems.length > 0 ? { ...language, poems } : undefined;
}

export function generateStaticParams() {
  return languages.filter((l) => getLanguage(l.code)).map((l) => ({ jezik: l.code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const language = getLanguage((await params).jezik);
  if (!language) return {};
  const translators = [...new Set(language.poems.map((p) => p.translator))].join(", ");
  const full = `Pesmi Mojce Andrej ${language.menuLabel} (${poemCount(language.poems.length)}). Prevodi: ${translators}.`;
  return {
    title: `Pesmi ${language.menuLabel}`,
    description: full.length <= 155 ? full : `Pesmi Mojce Andrej ${language.menuLabel} (${poemCount(language.poems.length)}).`,
    alternates: { canonical: `/prevodi/${language.code}` },
  };
}

export default async function PrevodiJezik({ params }: Props) {
  const language = getLanguage((await params).jezik);
  if (!language) notFound();
  const book = translationBook(language.htmlLang);
  const others = languages.filter((l) => l.code !== language.code && getLanguage(l.code));

  return (
    <div>
      <PageHeader title={`Pesmi ${language.menuLabel}`} intro="Pesmi Mojce Andrej v prevodu. Pod vsako pesmijo je navedeno, kdo jo je prevedel.">
        {book && (
          <p className="mt-4 max-w-2xl text-muted">
            Več prevodov je izšlo v knjigi{" "}
            <Link href={`/knjige/${book.slug}`} className={linkClass}>
              <cite>{book.title}</cite>
            </Link>{" "}
            ({book.year}).
          </p>
        )}
      </PageHeader>

      <div lang={language.htmlLang} className="gap-8 xl:columns-2">
        {language.poems.map((poem) => (
          <Poem
            key={poem.title}
            title={poem.title}
            text={poem.text}
            lang={language.htmlLang}
            className="mb-8 break-inside-avoid rounded-lg border border-line bg-white p-6 shadow-sm md:p-10"
          >
            <p>
              Prevod: {poem.translator}
              {poem.note && `, ${poem.note}`}
            </p>
            {poem.originalTitle && (
              <p>
                Izvirnik: <cite>{poem.originalTitle}</cite>
              </p>
            )}
          </Poem>
        ))}
      </div>

      {others.length > 0 && (
        <nav aria-label="Prevodi v drugih jezikih" className="mt-12 border-t border-line pt-8">
          <h2 className="font-serif text-xl font-semibold text-ink">Prevodi v drugih jezikih</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {others.map((l) => (
              <li key={l.code}>
                <Link
                  href={`/prevodi/${l.code}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-5 text-sm font-medium hover:border-plum-300 hover:text-plum-700"
                >
                  Pesmi {l.menuLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
