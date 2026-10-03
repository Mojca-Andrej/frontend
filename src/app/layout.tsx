import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import "./globals.css";

// Prednaložena sta le latinica in razširjena latinica (č, š, ž); cirilica za makedonske prevode se naloži po potrebi.
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin", "latin-ext"], variable: "--font-lora" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} – ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", locale: "sl_SI", siteName: site.name },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sl" data-scroll-behavior="smooth" className={`${inter.variable} ${lora.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <SiteHeader />
        <main id="vsebina" className="mx-auto min-h-[70vh] max-w-6xl px-4 pt-10 pb-24 md:px-8 md:pt-16">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
