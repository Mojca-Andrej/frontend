"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { Lightbox } from "@/components/lightbox";
import type { Slide } from "@/lib/images";

export type CoverImage = { src: string; alt: string; caption?: string; width: number; height: number };

/** Naslovnica in dodatne slike knjige; klik odpre skupni pregledovalnik slik. */
export function BookCovers({ images, slides }: { images: CoverImage[]; slides: Slide[] }) {
  const [index, setIndex] = useState(-1);
  const [main, ...rest] = images;
  if (!main) return null;

  return (
    <div>
      <figure>
        <button
          type="button"
          onClick={() => setIndex(0)}
          aria-label={`Povečaj sliko: ${main.alt}`}
          className="group relative block w-full overflow-hidden rounded-md border border-line bg-paper-deep shadow-sm transition-shadow hover:shadow-md"
        >
          <Image
            src={main.src}
            alt={main.alt}
            width={main.width}
            height={main.height}
            preload
            sizes="(min-width: 768px) 340px, (min-width: 640px) 60vw, 80vw"
            className="mx-auto h-auto max-h-[70vh] w-auto object-contain"
          />
          <Expand
            aria-hidden
            className="absolute right-2 bottom-2 size-8 rounded-full bg-white/90 p-1.5 text-ink shadow-sm"
          />
        </button>
        {main.caption && <figcaption className="mt-2 text-center text-sm text-muted">{main.caption}</figcaption>}
      </figure>

      {rest.length > 0 && (
        <ul className="mt-6 grid grid-cols-2 gap-4">
          {rest.map((image, i) => (
            <li key={image.src}>
              <figure>
                <button
                  type="button"
                  onClick={() => setIndex(i + 1)}
                  aria-label={`Povečaj sliko: ${image.alt}`}
                  className="relative block aspect-[2/3] w-full overflow-hidden rounded-md border border-line bg-paper-deep shadow-sm transition-shadow hover:shadow-md"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 160px, 40vw"
                    className="object-contain p-1"
                  />
                </button>
                {image.caption && (
                  <figcaption className="mt-2 text-center text-sm text-muted">{image.caption}</figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      )}

      <Lightbox slides={slides} index={index} onClose={() => setIndex(-1)} />
    </div>
  );
}
