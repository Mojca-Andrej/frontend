import type { IsoDate } from "@/content/types";

const months = [
  "januar", "februar", "marec", "april", "maj", "junij",
  "julij", "avgust", "september", "oktober", "november", "december",
];

/**
 * "2024-08-12" -> "12. 8. 2024", "2024-08" -> "avgust 2024", "2024" -> "2024".
 * Slovenski pravopis: presledki za pikami, mesec z malo začetnico.
 */
export function formatDate(date: IsoDate): string {
  const [year = "", month, day] = date.split("-");
  if (day) return `${Number(day)}. ${Number(month)}. ${year}`;
  if (month) return `${months[Number(month) - 1]} ${year}`;
  return year;
}

export function yearOf(date: IsoDate): number {
  return Number(date.slice(0, 4));
}

/** Za razvrščanje od najnovejšega: delni datumi se primerjajo kot nizi ISO. */
export function byDateDesc<T extends { date: IsoDate }>(a: T, b: T): number {
  return b.date.localeCompare(a.date);
}
