import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import { site } from "@/content/site";
import { navigation } from "@/content/navigation";
import { ExternalLink } from "./external-link";

const socialIcons = { Facebook, YouTube: Youtube, Instagram } as const;

export function SiteFooter() {
  return (
    <footer id="kontakt" className="scroll-mt-24 bg-plum-950 text-plum-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-2xl font-semibold text-white">{site.name}</p>
          <p className="mt-1 text-plum-200">{site.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-plum-200">Kontakt</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white hover:underline">
                <Mail aria-hidden className="size-5" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phone.href} className="inline-flex items-center gap-2 hover:text-white hover:underline">
                <Phone aria-hidden className="size-5" />
                {site.phone.display}
              </a>
            </li>
          </ul>
          <ul className="mt-4 flex gap-3">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <li key={social.label}>
                  <ExternalLink
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                  >
                    <Icon aria-hidden className="size-5" />
                  </ExternalLink>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Noga">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-plum-200">Strani</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
            {navigation
              .filter((item) => !item.href.startsWith("#"))
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-sm text-plum-200 md:px-8">
          © {new Date().getFullYear()} {site.name}. Vse pravice pridržane.
        </p>
      </div>
    </footer>
  );
}
