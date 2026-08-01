"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  title: string;
  images: string[];
}

const carouselButtonClasses = cn(
  "z-10 flex h-[50px] w-[50px] shrink-0 cursor-pointer items-center justify-center rounded-full text-2xl",
  "bg-[rgba(59,130,246,0.12)] border border-[rgba(59,130,246,0.3)] text-accent-blue",
  "transition-all duration-300",
  "hover:bg-accent-blue hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
  "active:scale-95",
  "max-[768px]:h-10 max-[768px]:w-10 max-[768px]:text-[1.2rem]"
);

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextImage();
    if (distance < -50) prevImage();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevImage();
    else if (e.key === "ArrowRight") nextImage();
  };

  return (
    <div
      className="mb-20 outline-none focus-visible:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent-blue"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative mb-6 flex items-center gap-4">
        <button
          className={carouselButtonClasses}
          onClick={prevImage}
          aria-label="Previous image"
        >
          ←
        </button>

        <div className="relative h-[600px] w-full overflow-hidden rounded-2xl border border-border-color bg-bg-secondary shadow-[0_20px_60px_rgba(0,0,0,0.15)] max-[1024px]:h-[500px] max-[768px]:h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="relative h-full w-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={`/assets/images/projects/${images[currentImageIndex]}`}
                alt={`${title} screenshot ${currentImageIndex + 1}`}
                fill
                className="!object-contain object-center"
                priority={currentImageIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className={carouselButtonClasses}
          onClick={nextImage}
          aria-label="Next image"
        >
          →
        </button>
      </div>

      {images.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2.5 w-2.5 cursor-pointer rounded-full border-none bg-border-color p-0 transition-all duration-300",
                "hover:scale-120 hover:bg-[rgba(59,130,246,0.5)]",
                "focus:outline-2 focus:outline-offset-2 focus:outline-accent-blue",
                index === currentImageIndex &&
                  "h-3 w-3 bg-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              )}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
