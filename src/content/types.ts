/**
 * Skupni tipi vsebin. `BookSlug` povezuje knjige z nastopi, odmevi, galerijami in branji,
 * da lahko stran knjige pokaže vse, kar je z njo povezano.
 */
export const bookSlugs = [
  "nikoli-ne-reci-da-ni-skrivnosti",
  "dez-v-gugalnici",
  "ostanek-umrle-zvezde",
  "kavc-uciteljice-veronike",
  "transitions",
  "rastem-do-tebe",
  "agica-mala-carovnica",
  "mijene",
  "mocvirje-pozabe",
] as const;

export type BookSlug = (typeof bookSlugs)[number];

/**
 * Datum v obliki ISO: "2024-08-12" (dan), "2024-08" (mesec) ali "2024" (leto).
 * Prikaz uredi `formatDate` v src/lib/dates.ts.
 */
export type IsoDate = string;
