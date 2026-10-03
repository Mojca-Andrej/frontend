import { books, type Book } from "@/content/books";

/** Knjiga s prevodi v izbranem jeziku (npr. Transitions za "en"), če obstaja – prepozna jo po `inLanguage` v books.ts. */
export function translationBook(htmlLang: string): Book | undefined {
  return books.find((book) => book.inLanguage === htmlLang);
}

/** 1 pesem, 2 pesmi, 5 pesmi … (101 pesem) */
export function poemCount(n: number) {
  return `${n} ${n % 100 === 1 ? "pesem" : "pesmi"}`;
}

export const linkClass = "text-plum-700 underline decoration-plum-300 underline-offset-2 hover:decoration-plum-700";
