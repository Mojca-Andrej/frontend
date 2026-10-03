import type { BookSlug } from "./types";
import { poems } from "./poems";
import { childrenPoems, agicaSong } from "./children-poems";
import { proseWorks } from "./prose";
import { plural } from "@/lib/plural";
import { slugify } from "@/lib/slug";

function excerptCount(n: number) {
  return `${n} ${plural(n, ["odlomek", "odlomka", "odlomki", "odlomkov"])}`;
}

export type Reading = { title: string; href: string; detail?: string };

/** Pesmi, odlomki in posnetki na strani Branja, ki pripadajo knjigi. */
export function readingsFor(slug: BookSlug): Reading[] {
  const poemReadings = [
    ...poems.filter((p) => p.book === slug).map((p) => ({ poem: p, page: "/branja/poezija" })),
    ...childrenPoems.filter((p) => p.book === slug).map((p) => ({ poem: p, page: "/branja/za-otroke" })),
  ].map(({ poem, page }) => ({
    title: poem.title,
    href: `${page}#${slugify(poem.title)}`,
    detail: poem.audio ? "pesem s posnetkom" : "pesem",
  }));

  const agica =
    agicaSong.book === slug ? [{ title: agicaSong.title, href: "/branja/za-otroke#agica", detail: "posnetek" }] : [];

  const prose = proseWorks
    .filter((w) => w.book === slug)
    .map((w) => ({
      title: `Odlomki iz romana ${w.title}`,
      href: "/branja/proza",
      detail: excerptCount(w.excerpts.length),
    }));

  return [...agica, ...poemReadings, ...prose];
}
