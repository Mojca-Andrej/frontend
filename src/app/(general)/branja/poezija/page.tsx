import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Poem } from "@/components/poem";
import { poems } from "@/content/poems";
import { slugify } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Poezija",
  description: "Izbor pesmi Mojce Andrej iz zbirk Ostanek umrle zvezde, Dež v gugalnici in Močvirje pozabe, nekatere tudi uglasbene.",
  alternates: { canonical: "/branja/poezija" },
};

export default function Poezija() {
  return (
    <div>
      <PageHeader
        title="Poezija"
        intro="Izbor pesmi iz pesniških zbirk Mojce Andrej. Ob nekaterih je posnetek uglasbene različice."
      />
      <div className="gap-8 xl:columns-2">
        {poems.map((poem) => (
          <Poem
            key={poem.title}
            id={slugify(poem.title)}
            title={poem.title}
            text={poem.text}
            source={poem.source}
            sourceHref={poem.book && `/knjige/${poem.book}`}
            audio={poem.audio}
            className="mb-8 break-inside-avoid rounded-lg border border-line bg-white p-6 shadow-sm md:p-10"
          />
        ))}
      </div>
    </div>
  );
}
