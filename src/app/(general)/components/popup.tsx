"use client";

import ReactDOM from "react-dom";
import { useCallback, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

interface PopupProps {
  sources: string[];
  setIsOpen: (isOpen: boolean) => void;
}

export default function Popup({ sources, setIsOpen }: PopupProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleNext = useCallback(() => {
    if (index < sources.length - 1) setIndex(index + 1);
  }, [index, sources.length]);

  const handlePrev = useCallback(() => {
    if (index > 0) setIndex(index - 1);
  }, [index]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  if (!isMounted) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      {/* Modal content */}
      <div
        {...swipeHandlers}
        className="relative z-50 bg-white rounded-md max-w-4xl w-[92vw] md:w-[90vw] max-h-[90vh] flex flex-col items-center overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-1 right-0 z-10 text-blue-600 hover:text-blue-800"
        >
          <X className="w-5 sm:w-7 h-5 sm:h-7" />
        </button>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-blue-500 hover:text-blue-700 disabled:opacity-30"
        >
          <ArrowLeft className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>
        <button
          onClick={handleNext}
          disabled={index === sources.length - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-blue-500 hover:text-blue-700 disabled:opacity-30"
        >
          <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>

        {/* Zoomable image */}
        <div className="w-full h-full flex justify-center items-center p-4 sm:p-6 overflow-hidden">
          <InnerImageZoom
            src={sources[index]}
            zoomSrc={sources[index]}
            zoomType="click"
            zoomScale={1.8} // Now this will visibly zoom
            moveType="drag"
            fullscreenOnMobile={true}
            zoomPreload={true}
            hideCloseButton={true}
            className="max-w-full max-h-[75vh]"
          />
        </div>

        {/* Counter */}
        {sources.length > 1 && (
          <div className="pb-2 sm:pb-4 text-sm text-gray-600">
            Slika {index + 1} / {sources.length}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
