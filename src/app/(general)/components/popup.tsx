"use client";
import Image from "next/image";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

interface PopupProps {
  src: string;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Popup({ src, setIsOpen }: PopupProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay background */}
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" />

      {/* Popup content */}
      <div className="relative z-50 bg-white rounded-lg shadow-xl p-4 max-w-3xl w-full mx-4">
        <button
          className="absolute top-2 right-2 text-blue-500 hover:text-blue-700 text-lg"
          onClick={() => setIsOpen(false)}
        >
          Zapri ✖
        </button>

        <div className="pt-6">
          <Image
            src={src}
            alt="Popup Image"
            className="w-full h-auto rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
