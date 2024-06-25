"use client";
import { regeImages } from './images';
import { cn } from '@/app/utils/cn';
import { IImage } from './images';
import Image from 'next/image';

interface Props {
  onClick: (index: number) => void;
  isMobile: boolean;
  images: IImage[];
  color1: string;
  color2: string;

}
export default function Gallery({ onClick, isMobile, images, color1, color2}: Props) {
  return (
<main className={`bg-neutral-50 shadow-lg bg-gradient-to-tr from-${color1} to-${color2} p-2 md:p-8 rounded-lg `} id="gallery">
      <div className="container max-h-[400px] md:max-h-max overflow-hidden grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              onClick={() => onClick(index)}
              className={cn(
                'relative aspect-square h-full w-full cursor-pointer rounded-md overflow-hidden hover:opacity-90',
                index === 0 && !isMobile && 'col-span-2 row-span-2',
              )}
            >
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={index === 0 ? 800 : 200}
                height={index === 0 ? 800 : 200}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}