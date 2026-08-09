"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AppImage } from "@/lib/common/AppImage";

interface ProjectGalleryProps {
  title: string;
  images: string[];
}

const AUTO_ADVANCE_MS = 4000;
/** Fallback ratio (height/width) used only until the first image reports its real size. */
const DEFAULT_RATIO = 9 / 16;
/** Clamp so one unusually tall/wide image can't blow out the layout — object-contain covers any edge case beyond this. */
const MIN_RATIO = 0.45;
const MAX_RATIO = 1.15;

const arrowButtonClasses = cn(
  "flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full",
  "bg-bg-secondary border border-border-color text-text-primary",
  "transition-all duration-200 hover:bg-bg-hover hover:border-border-hover hover:scale-110",
  "active:scale-95"
);

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [ratio, setRatio] = useState(DEFAULT_RATIO);
  const touchStartX = useRef<number | null>(null);

  const goToNext = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const goToPrev = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const intervalId = setInterval(goToNext, AUTO_ADVANCE_MS);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, images.length]);

  // Measure the real image dimensions directly (next/image's onLoad can silently
  // never fire when the browser serves the image from cache before the listener attaches).
  useEffect(() => {
    if (!images[currentImageIndex]) return;
    const img = new window.Image();
    const applyRatio = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setRatio(img.naturalHeight / img.naturalWidth);
      }
    };
    img.src = `/assets/images/projects/${images[currentImageIndex]}`;
    if (img.complete) {
      applyRatio();
    } else {
      img.onload = applyRatio;
    }
    return () => {
      img.onload = null;
    };
  }, [currentImageIndex, images]);

  if (!images || images.length === 0) return null;

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const distance = touchStartX.current - e.changedTouches[0].clientX;
    if (distance > 50) goToNext();
    else if (distance < -50) goToPrev();
    touchStartX.current = null;
  };

  return (
    <div className="mb-20">
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-bg-hover transition-[padding-top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ paddingTop: `${Math.min(Math.max(ratio, MIN_RATIO), MAX_RATIO) * 100}%` }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={(e) => {
          setIsPaused(true);
          touchStartX.current = e.targetTouches[0].clientX;
        }}
        onTouchEnd={(e) => {
          setIsPaused(false);
          handleTouchEnd(e);
        }}
      >
        {images.map((src, index) => (
          <div
            key={src + index}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              index === currentImageIndex ? "z-[1] opacity-100" : "z-0 opacity-0"
            )}
            aria-hidden={index !== currentImageIndex}
          >
            <AppImage
              src={`/assets/images/projects/${src}`}
              alt={`${title} screenshot ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <button
            className={arrowButtonClasses}
            onClick={goToPrev}
            aria-label="Previous image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className={arrowButtonClasses}
            onClick={goToNext}
            aria-label="Next image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
