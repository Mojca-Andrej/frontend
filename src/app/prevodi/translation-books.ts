import { books, type Book } from "@/content/books";
import { plural } from "@/lib/plural";

/** Knjiga s prevodi v izbranem jeziku (npr. Transitions za "en"), če obstaja – prepozna jo po `inLanguage` v books.ts. */
export function translationBook(htmlLang: string): Book | undefined {
  return books.find((book) => book.inLanguage === htmlLang);
}

/** 1 pesem, 2 pesmi, 5 pesmi … (101 pesem) */
export function poemCount(n: number) {
  return `${n} ${plural(n, ["pesem", "pesmi", "pesmi", "pesmi"])}`;
}
