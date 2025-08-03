"use client";

import ReactDOM from "react-dom";
import { useCallback, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowRight, ArrowLeft, X } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div
        {...swipeHandlers}
        className="relative w-full h-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${sources[index]})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 text-white hover:text-blue-300"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-blue-300 disabled:opacity-30"
        >
          <ArrowLeft className="w-10 h-10" />
        </button>
        <button
          onClick={handleNext}
          disabled={index === sources.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-blue-300 disabled:opacity-30"
        >
          <ArrowRight className="w-10 h-10" />
        </button>

        {/* Counter */}
        {sources.length > 1 && (
          <div className="absolute bottom-6 text-white text-sm bg-black/50 px-3 py-1 rounded">
            Slika {index + 1} / {sources.length}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
