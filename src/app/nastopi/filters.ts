import type { Performance } from "@/content/nastopi";

/** Filtri na strani /nastopi (vrednost `id` je tudi ?vrsta=… v naslovu URL). */
export const filters = [
  { id: "vse", label: "Vse" },
  { id: "otroci", label: "Za otroke" },
  { id: "gledalisce", label: "Gledališče" },
  { id: "literarni", label: "Literarni nastopi" },
  { id: "tujina", label: "V tujini" },
] as const;

export type FilterId = (typeof filters)[number]["id"];

/** Kateri filtri (razen "vse") ujamejo nastop. */
export function filterTags(p: Performance): FilterId[] {
  const tags: FilterId[] = [];
  if (p.category === "kamisibaj" || p.category === "magnetno-gledalisce") tags.push("otroci");
  if (p.category === "gledalisce") tags.push("gledalisce");
  if (p.category === "literarni-nastop" || p.category === "sejem" || p.category === "razstava") tags.push("literarni");
  if (p.abroad) tags.push("tujina");
  return tags;
}

export function isFilterId(value: string | null): value is FilterId {
  return filters.some((f) => f.id === value);
}
