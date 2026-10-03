import type { ReactNode } from "react";

/** Enoten naslov strani: en <h1> na stran, neobvezen uvod. */
export function PageHeader({ title, intro, children }: { title: string; intro?: ReactNode; children?: ReactNode }) {
  return (
    <header className="mb-10 md:mb-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h1>
      <div aria-hidden className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-plum-500 to-sea-400" />
      {intro && <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>}
      {children}
    </header>
  );
}

/** Naslov razdelka znotraj strani (<h2>). */
export function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="mb-6 scroll-mt-28 font-serif text-2xl font-semibold text-ink md:text-3xl">
      {children}
    </h2>
  );
}
