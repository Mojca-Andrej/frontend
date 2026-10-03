"use client";

import YetAnotherLightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import type { Slide } from "@/lib/images";

const labels = {
  Previous: "Prejšnja",
  Next: "Naslednja",
  Close: "Zapri",
  Lightbox: "Pregledovalnik slik",
  Carousel: "Vrtiljak",
  Slide: "Slika",
  "Photo gallery": "Galerija",
  "Enter Fullscreen": "Celozaslonski način",
  "Exit Fullscreen": "Izhod iz celozaslonskega načina",
  "Zoom in": "Povečaj",
  "Zoom out": "Pomanjšaj",
  "{index} of {total}": "{index} od {total}",
};

/**
 * Skupni pregledovalnik slik (galerija, objave, naslovnice).
 * `slides` pripravi strežnik s `toSlide()` iz src/lib/images.ts, `index` -1 pomeni zaprto.
 */
export function Lightbox({ slides, index, onClose }: { slides: Slide[]; index: number; onClose: () => void }) {
  return (
    <YetAnotherLightbox
      open={index >= 0}
      index={Math.max(index, 0)}
      close={onClose}
      slides={slides}
      labels={labels}
      plugins={[Captions, Counter, Fullscreen, Zoom]}
      captions={{ descriptionTextAlign: "center" }}
      carousel={{ preload: 1 }}
      zoom={{ maxZoomPixelRatio: 2 }}
    />
  );
}
