import type { ReactNode } from "react";
import Link from "next/link";
import { AudioPlayer } from "@/components/audio-player";
import { formatInline } from "@/components/rich-text";
import { cn } from "@/lib/cn";
import { linkClass } from "@/lib/styles";

/** Razdeli besedilo pesmi na kitice (ločene s prazno vrstico); presledke na robovih vrstic odstrani. */
export function toStanzas(text: string): string[] {
  return text
    .trim()
    .split(/\n[ \t]*\n/)
    .map((stanza) =>
      stanza
        .split("\n")
        .map((line) => line.trim())
        .join("\n"),
    );
}

/** Kitice pesmi (ali pesmi sredi proze): <p> na kitico, vrstice ločene z <br />. */
export function Verse({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn("max-w-prose space-y-5 font-serif text-lg leading-relaxed text-ink", className)}>
      {toStanzas(text).map((stanza, i) => (
        <p key={i}>{formatInline(stanza)}</p>
      ))}
    </div>
  );
}

type PoemProps = {
  title: string;
  text: string;
  /** Raven naslova glede na okolico strani. */
  headingLevel?: "h2" | "h3";
  /** Zbirka, revija ali opomba; z `sourceHref` postane povezava (npr. na stran knjige). */
  source?: string;
  sourceHref?: string;
  audio?: { src: string; caption: string };
  /** Jezik besedila pesmi (BCP 47), npr. "en" za prevode. Podatki pod pesmijo ostanejo slovenski. */
  lang?: string;
  id?: string;
  className?: string;
  /** Dodatna vrstica pod pesmijo (npr. prevajalec). */
  children?: ReactNode;
};

export function Poem({
  title,
  text,
  headingLevel = "h2",
  source,
  sourceHref,
  audio,
  lang,
  id,
  className,
  children,
}: PoemProps) {
  const Heading = headingLevel;
  const hasFooter = Boolean(source || audio || children);
  return (
    <article lang={lang} id={id} className={cn("scroll-mt-28", className)}>
      <Heading className="mb-5 font-serif text-xl font-semibold text-ink md:text-2xl">{title}</Heading>
      <Verse text={text} />
      {hasFooter && (
        <footer lang={lang ? "sl" : undefined} className="mt-6 space-y-4 text-sm text-muted">
          {source && (
            <p>
              <cite>
                {sourceHref ? (
                  <Link href={sourceHref} className={linkClass}>
                    {source}
                  </Link>
                ) : (
                  source
                )}
              </cite>
            </p>
          )}
          {children}
          {audio && <AudioPlayer src={audio.src} caption={audio.caption} />}
        </footer>
      )}
    </article>
  );
}
