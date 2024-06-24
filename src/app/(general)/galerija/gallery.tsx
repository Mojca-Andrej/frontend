"use client";
import { regeImages } from './images';
import { cn } from '@/app/utils/cn';
import { IImage } from './images';
import Image from 'next/image';

interface Props {
  onClick: (index: number) => void;
  isMobile: boolean;
  images: IImage[];

}
export default function Gallery({ onClick, isMobile, images}: Props) {
  return (
    <main className="bg-neutral-200 rounded-sm px-4 py-10 md:px-16 md:pb-10 md:pt-20" id="gallery">
      <div className="container mb-10  max-h-[400px] md:max-h-max overflow-hidden grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              onClick={() => onClick(index)}
              className={cn(
                'relative aspect-square h-full w-full cursor-pointer rounded-md overflow-hidden hover:opacity-85',
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
      <div className="view-gallery flex justify-center md:justify-end">
        <button
          className="flex items-center px-5 md:text-lg text-md text-my-white hover:text-black"
          onClick={() => onClick(0)}
        >
        </button>
      </div>
    </main>
  );
}