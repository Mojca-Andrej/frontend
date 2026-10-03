import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { navigation } from "@/content/navigation";
import { NavMenu } from "./nav-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <a
        href="#vsebina"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow"
      >
        Skoči na vsebino
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} – domov`}>
          <Image
            src="/art/logo.jpeg"
            alt=""
            width={56}
            height={56}
            sizes="56px"
            preload
            className="size-12 rounded-full object-cover shadow-sm ring-1 ring-line transition group-hover:ring-plum-300 md:size-14"
          />
          <span className="font-serif text-xl font-semibold tracking-tight text-ink md:text-2xl">{site.name}</span>
        </Link>
        <NavMenu items={navigation} />
      </div>
    </header>
  );
}
