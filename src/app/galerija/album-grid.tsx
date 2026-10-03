"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { Lightbox } from "@/components/lightbox";
import { cn } from "@/lib/cn";
import type { Slide } from "@/lib/images";

/** Na mobilnem prikažemo toliko fotografij, ostale po kliku na »Pokaži vse«. */
const MOBILE_VISIBLE = 6;

const SIZES_FIRST = "(min-width: 1152px) 460px, (min-width: 1024px) 40vw, (min-width: 768px) 66vw, 50vw";
const SIZES_REST = "(min-width: 1152px) 230px, (min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw";

export function AlbumGrid({ slides, preloadFirst = false }: { slides: Slide[]; preloadFirst?: boolean }) {
  const [index, setIndex] = useState(-1);
  const [expanded, setExpanded] = useState(false);
  const gridId = useId();
  const hasMore = slides.length > MOBILE_VISIBLE;

  return (
    <>
      <ul id={gridId} className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-5">
        {slides.map((slide, i) => (
          <li
            key={slide.src}
            className={cn(
              i === 0 && "md:col-span-2 md:row-span-2",
              !expanded && i >= MOBILE_VISIBLE && "hidden md:block",
            )}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Odpri fotografijo: ${slide.alt}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-md bg-paper-deep"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes={i === 0 ? SIZES_FIRST : SIZES_REST}
                preload={preloadFirst && i === 0}
                className="object-cover group-hover:opacity-85 motion-safe:transition-opacity"
              />
            </button>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={gridId}
          onClick={() => setExpanded((e) => !e)}
          className="mt-4 inline-flex min-h-11 items-center rounded-md border border-line bg-white px-4 text-sm font-medium text-plum-700 shadow-sm hover:bg-plum-50 md:hidden"
        >
          {expanded ? "Pokaži manj fotografij" : `Pokaži vse fotografije (${slides.length})`}
        </button>
      )}

      <Lightbox slides={slides} index={index} onClose={() => setIndex(-1)} />
    </>
  );
}
