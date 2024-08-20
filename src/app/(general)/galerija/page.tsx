'use client';
import React, { useState, useEffect } from 'react';
import { Photo } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import { Captions, Share } from 'yet-another-react-lightbox/plugins';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { regeImages, agicaImages, veronikaImages, nastopiImages, gledalisceImages} from './images';
import Gallery from './gallery';
import "yet-another-react-lightbox/plugins/captions.css";

export default function Gal() {
  const [index1, setindex1] = useState(-1);
  const [index2, setindex2] = useState(-1);
  const [index3, setindex3] = useState(-1);
  const [index4, setindex4] = useState(-1);
  const [index5, setindex5] = useState(-1);

  const [regePhotos] = useState<Photo[]>(
    regeImages.map((image) => ({
      src: image.src,
      alt: image.alt,
      width: 1080,
      height: 1080,
      title: image.title,
      description: image.description,
    })),
  );

  const [agicaPhotos] = useState<Photo[]>(
    agicaImages.map((image) => ({
      src: image.src,
      alt: image.alt,
      width: 1080,
      height: 1080,
      title: image.title,
      description: image.description,
    })),
  );
  
  const [veronikaPhotos] = useState<Photo[]>(
    veronikaImages.map((image) => ({
      src: image.src,
      alt: image.alt,
      width: 1080,
      height: 1080,
      title: image.title,
      description: image.description,
    })),
  );

  const [nastopiPhotos] = useState<Photo[]>(
    nastopiImages.map((image) => ({
      src: image.src,
      alt: image.alt,
      width: 1080,
      height: 1080,
      title: image.title,
      description: image.description,
    })),
  );


  const [gledaliscePhotos] = useState<Photo[]>(
    gledalisceImages.map((image) => ({
      src: image.src,
      alt: image.alt,
      width: 1080,
      height: 1080,
      title: image.title,
      description: image.description,
    })),
  );

  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial call to set the initial state

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      <h1 className='text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-pink-500 w-fit to-fuchsia-500 pb-4'>Veronika</h1>
      <div>
        <Gallery color1="#d9a7c7" color2="#fffcdc" onClick={setindex1} isMobile={isMobile} images={veronikaImages}/>
          <Lightbox
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            slides={veronikaPhotos}
            open={index1 >= 0}
            index={index1}
            close={() => setindex1(-1)}
            plugins={[Fullscreen, Slideshow, Zoom, Captions, Share]}
            captions={{showToggle: true ,descriptionTextAlign: 'start', descriptionMaxLines: 3}}
          />
        </div>

      <h1 className='text-2xl font-bold pt-10 pb-4 bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 w-fit to-violet-500'>Agica</h1>
        <div>
        <Gallery color1="#b993d6" color2="#8ca6db" onClick={setindex2} isMobile={isMobile} images={agicaImages}/>
          <Lightbox
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            slides={agicaPhotos}
            open={index2 >= 0}
            index={index2}
            close={() => setindex2(-1)}
            plugins={[Fullscreen, Slideshow, Zoom, Captions, Share]}
            captions={{showToggle: true ,descriptionTextAlign: 'start', descriptionMaxLines: 3}}
          />
        </div>

        <h1 className='text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-emerald-500 w-fit to-green-500 pt-10 pb-4'>Rege, žabje frke</h1>
        <div>
        <Gallery color1="#a1ffce" color2="#faffd1" onClick={setindex3} isMobile={isMobile} images={regeImages}/>
          <Lightbox
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            slides={regePhotos}
            open={index3 >= 0}
            index={index3}
            close={() => setindex3(-1)}
            plugins={[Fullscreen, Slideshow, Zoom, Captions, Share]}
            captions={{showToggle: true ,descriptionTextAlign: 'start', descriptionMaxLines: 3}}
          />
        </div>

        <h1 className='text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 w-fit to-sky-500 pt-10 pb-4'>Gledališče</h1>
        <div>
        <Gallery color1="#74ebd5" color2="#acb6e5" onClick={setindex4} isMobile={isMobile} images={gledalisceImages}/>
          <Lightbox
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            slides={gledaliscePhotos}
            open={index4 >= 0}
            index={index4}
            close={() => setindex4(-1)}
            plugins={[Fullscreen, Slideshow, Zoom, Captions, Share]}
            captions={{showToggle: true ,descriptionTextAlign: 'start', descriptionMaxLines: 3}}
          />
        </div>

        <h1 className='text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-orange-500 w-fit to-amber-500 pt-10 pb-4'>Nastopi</h1>
        <div>
        <Gallery color1="#ff5f6d" color2="#ffc371" onClick={setindex5} isMobile={isMobile} images={nastopiImages}/>
          <Lightbox
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            slides={nastopiPhotos}
            open={index5 >= 0}
            index={index5}
            close={() => setindex5(-1)}
            plugins={[Fullscreen, Slideshow, Zoom, Captions, Share]}
            captions={{showToggle: true ,descriptionTextAlign: 'start', descriptionMaxLines: 3}}
          />
        </div>
    </main>

  );
}