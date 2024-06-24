'use client';
import React, { useState, useEffect } from 'react';
import { Photo } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { regeImages } from './images';
import Gallery from './gallery';

export default function Gal() {
  const [index1, setindex1] = useState(-1);
  const [index2, setindex2] = useState(-1);
  const [index3, setindex3] = useState(-1);
  const [index4, setindex4] = useState(-1);
  const [index5, setindex5] = useState(-1);
  const [index6, setindex6] = useState(-1);

  const [regePhotos] = useState<Photo[]>(
    regeImages.map((image) => ({
      src: image.src,
      alt: image.alt,
      width: 1080,
      height: 1080,
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
      <h1>Veronika</h1>
      <div>
        <Gallery onClick={setindex1} isMobile={isMobile}/>
          <Lightbox
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            slides={regePhotos}
            open={index1 >= 0}
            index={index1}
            close={() => setindex1(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>

      <h1>Agica</h1>
        <div>
        <Gallery onClick={setindex2} isMobile={isMobile}/>
          <Lightbox
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            slides={regePhotos}
            open={index2 >= 0}
            index={index2}
            close={() => setindex2(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>

        <h1>Rege, žabje frke</h1>
        <div>
        <Gallery onClick={setindex3} isMobile={isMobile}/>
          <Lightbox
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            slides={regePhotos}
            open={index3 >= 0}
            index={index3}
            close={() => setindex3(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>

        <h1>Gledališče</h1>
        <div>
        <Gallery onClick={setindex4} isMobile={isMobile}/>
          <Lightbox
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            slides={regePhotos}
            open={index4 >= 0}
            index={index4}
            close={() => setindex4(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>

        <h1>Nastopi</h1>
        <div>
        <Gallery onClick={setindex5} isMobile={isMobile}/>
          <Lightbox
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            slides={regePhotos}
            open={index5 >= 0}
            index={index5}
            close={() => setindex5(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>

        <h1>Posnetki</h1>
        <div>
        <Gallery onClick={setindex6} isMobile={isMobile}/>
          <Lightbox
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            slides={regePhotos}
            open={index6 >= 0}
            index={index6}
            close={() => setindex6(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
    </main>

  );
}