import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AudioPlayer } from "@/components/audio-player";
import { PageHeader } from "@/components/page-header";
import { Poem } from "@/components/poem";
import { agicaSong, childrenPoems } from "@/content/children-poems";
import { imageSize } from "@/lib/images";
import { slugify } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Pesmi za otroke",
  description:
    "Pesmi za otroke Mojce Andrej iz zbirke Rastem do tebe in revij Galeb ter Mlada Sodobnost – mnoge tudi uglasbene.",
  alternates: { canonical: "/branja/za-otroke" },
};

export default function ZaOtroke() {
  const { width, height } = imageSize(agicaSong.image.src);
  return (
    <div>
      <PageHeader
        title="Za otroke"
        intro="Pesmi za otroke za branje na glas, petje in poslušanje – mnoge so uglasbene."
      />

      <section
        aria-labelledby="agica"
        className="mb-12 grid items-center gap-8 rounded-lg border border-line bg-linear-to-br from-plum-50 to-sea-50 p-6 shadow-sm md:grid-cols-2 md:p-10"
      >
        <div>
          <h2 id="agica" className="font-serif text-2xl font-semibold text-ink md:text-3xl">
            {agicaSong.title}
          </h2>
          <p className="mt-3 text-muted">Ilustracije: {agicaSong.illustrations}</p>
          <AudioPlayer src={agicaSong.audio.src} caption={agicaSong.audio.caption} className="mt-6 bg-white" />
          <p className="mt-6">
            <Link
              href={`/knjige/${agicaSong.book}`}
              className="text-plum-700 underline decoration-plum-300 underline-offset-2 hover:decoration-plum-700"
            >
              Več o slikanici Agica, mala čarovnica
            </Link>
          </p>
        </div>
        <Image
          src={agicaSong.image.src}
          alt={agicaSong.image.alt}
          width={width}
          height={height}
          sizes="(min-width: 1152px) 500px, (min-width: 768px) 45vw, 100vw"
          preload
          className="mx-auto w-full max-w-md rounded-md shadow-md"
        />
      </section>

      <div className="gap-8 xl:columns-2">
        {childrenPoems.map((poem) => (
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
