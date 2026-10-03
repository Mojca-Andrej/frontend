import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Feather, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Branja",
  description:
    "Pesmi, odlomki proze in pesmi za otroke Mojce Andrej – za branje in poslušanje, nekatere tudi uglasbene.",
  alternates: { canonical: "/branja" },
};

const sections = [
  {
    href: "/branja/poezija",
    title: "Poezija",
    text: "Izbor pesmi iz pesniških zbirk – nekatere lahko tudi poslušate v uglasbeni različici.",
    Icon: Feather,
  },
  {
    href: "/branja/proza",
    title: "Proza",
    text: "Odlomki iz romana Kavč učiteljice Veronike.",
    Icon: BookOpen,
  },
  {
    href: "/branja/za-otroke",
    title: "Za otroke",
    text: "Pesmi za otroke, mnoge tudi uglasbene, in pesem iz slikanice Agica, mala čarovnica.",
    Icon: Sparkles,
  },
];

export default function Branja() {
  return (
    <div>
      <PageHeader
        title="Branja"
        intro="Izbor besedil Mojce Andrej za branje in poslušanje: pesmi, odlomki proze in pesmi za otroke."
      />
      <ul className="grid gap-6 md:grid-cols-3">
        {sections.map(({ href, title, text, Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-sm transition-colors hover:border-plum-300 md:p-8"
            >
              <Icon aria-hidden className="size-7 text-plum-600" />
              <h2 className="mt-4 font-serif text-2xl font-semibold text-ink group-hover:text-plum-700">{title}</h2>
              <p className="mt-3 grow text-muted">{text}</p>
              <span aria-hidden className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-plum-700">
                Preberi
                <ArrowRight className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
