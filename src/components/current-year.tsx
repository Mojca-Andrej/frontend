"use client";

/** Tekoče leto v brskalniku – statična stran sicer obdrži leto zadnje gradnje. */
export function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
