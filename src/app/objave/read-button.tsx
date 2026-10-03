"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import { Lightbox } from "@/components/lightbox";
import type { Slide } from "@/lib/images";

/** Gumb »Preberi objavo«: odpre fotografije strani v skupnem pregledovalniku slik. */
export function ReadButton({ slides, title }: { slides: Slide[]; title: string }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <button
        type="button"
        onClick={() => setIndex(0)}
        className="inline-flex min-h-11 items-center gap-2 rounded-md bg-plum-700 px-4 text-sm font-medium text-white transition-colors hover:bg-plum-800"
      >
        <BookOpen aria-hidden className="size-4" />
        Preberi objavo<span className="sr-only">: {title}</span>
      </button>
      <Lightbox slides={slides} index={index} onClose={() => setIndex(-1)} />
    </>
  );
}
