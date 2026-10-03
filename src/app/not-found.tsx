import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Strani ni mogoče najti",
};

const suggestions = [
  { href: "/knjige", label: "Knjige" },
  { href: "/nastopi", label: "Nastopi" },
  { href: "/branja", label: "Branja" },
  { href: "/galerija", label: "Galerija" },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="vsebina" className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-4 py-16 md:px-8">
        <p className="font-serif text-6xl font-semibold text-plum-300">404</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">Strani ni mogoče najti</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Morda je bila stran premaknjena ali pa je naslov napačno zapisan. Poskusite z eno od teh strani:
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          <li>
            <Link href="/" className="inline-block rounded-full bg-plum-700 px-5 py-2.5 text-white hover:bg-plum-800">
              Domača stran
            </Link>
          </li>
          {suggestions.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="inline-block rounded-full border border-line bg-white px-5 py-2.5 hover:border-plum-300 hover:text-plum-700"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
