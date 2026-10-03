import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="vsebina" className="mx-auto min-h-[70vh] max-w-6xl px-4 pb-24 pt-10 md:px-8 md:pt-16">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
