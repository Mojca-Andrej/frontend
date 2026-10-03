/**
 * Slovenska ednina, dvojina in množina: 1 (in 101 …), 2, 3–4, 5 in več.
 * plural(3, ["nastop", "nastopa", "nastopi", "nastopov"]) -> "nastopi"
 */
export function plural(n: number, [one, two, few, many]: [string, string, string, string]): string {
  const mod = n % 100;
  if (mod === 1) return one;
  if (mod === 2) return two;
  if (mod === 3 || mod === 4) return few;
  return many;
}
