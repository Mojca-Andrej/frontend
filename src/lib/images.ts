import sizes from "@/content/image-sizes.json";

export type ImageSize = { width: number; height: number };

const manifest: Record<string, ImageSize> = sizes;

/** Dejanske dimenzije slike iz public/. Manifest ustvari `npm run images` (teče tudi pred vsako gradnjo). */
export function imageSize(src: string): ImageSize {
  const size = manifest[src];
  if (!size) {
    console.warn(`Ni dimenzij za ${src} – zaženi npm run images.`);
    return { width: 1600, height: 1200 };
  }
  return size;
}

export type GalleryImage = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

export type Slide = GalleryImage &
  ImageSize & {
    srcSet: { src: string; width: number; height: number }[];
  };

const SLIDE_WIDTHS = [640, 1080, 1920];

function optimized(src: string, width: number) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
}

/** Pripravi sliko za lightbox: prava razmerja in pomanjšane različice namesto izvirnika. */
export function toSlide(image: GalleryImage): Slide {
  const { width, height } = imageSize(image.src);
  // Največja različica: 2048 px ali izvirna širina, če je manjša (optimizator ne povečuje).
  const largest = Math.min(width, 2048);
  const srcSet = [...SLIDE_WIDTHS.filter((w) => w < largest), largest].map((w) => ({
    src: optimized(image.src, w === largest ? 2048 : w),
    width: w,
    height: Math.round((height * w) / width),
  }));
  return { ...image, width, height, srcSet };
}
