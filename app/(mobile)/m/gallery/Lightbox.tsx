'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { IconClose } from '@/app/components/Icons';

interface LightboxProps {
  src: string;
  onClose: () => void;
}

export function Lightbox({ src, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchEndY - touchStartY.current > 100) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={dialogRef}
        className="relative w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt="Lightbox"
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white active:opacity-50"
          aria-label="Close"
        >
          <IconClose className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
