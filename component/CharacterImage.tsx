"use client";

import Image from "next/image";
import { useState } from "react";

export function CharacterImage({ src, alt }: { src: string; alt: string }) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsImageOpen(false);
    }
  };

  return (
    <>
      <div className="relative h-48 md:h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
        <button 
          onClick={() => setIsImageOpen(true)}
          className="w-full h-full focus:outline-none"
          aria-label="Zoom character image"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105 cursor-zoom-in"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </button>
      </div>

      {isImageOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-2xl h-[80vh]">
            <Image
              src={src}
              alt={`Zoomed ${alt}`}
              fill
              className="object-contain"
              priority
            />
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 focus:outline-none"
              aria-label="Close zoom"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}