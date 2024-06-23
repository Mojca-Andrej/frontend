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
import { images } from './images';
import Gallery from './gallery';

export default function Gal() {
  const [index, setIndex] = useState(-1);
  const [photos] = useState<Photo[]>(
    images.map((image) => ({
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
    <div>
    <Gallery onClick={setIndex} isMobile={isMobile}/>
      <Lightbox
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}