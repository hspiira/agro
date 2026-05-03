'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryItems, galleryCategories, GalleryCategory } from '@/lib/data';
import { SectionLabel } from '@/app/(mobile)/_components/SectionLabel';
import { Lightbox } from './Lightbox';

function filterGallery(items: typeof galleryItems, category: GalleryCategory) {
  if (category === 'All') return items;
  return items.filter((item) => item.category === category);
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = filterGallery(galleryItems, activeFilter);

  return (
    <div className="pt-4 pb-8">
      <div className="px-4 mb-6">
        <SectionLabel>Gallery</SectionLabel>
        <h1 className="text-2xl font-bold text-[var(--m-text)] mt-2">Farm Life</h1>
      </div>

      <div className="px-4 mb-6 flex gap-2 overflow-x-auto pb-2">
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors flex-shrink-0 whitespace-nowrap ${
              activeFilter === category
                ? 'bg-[var(--m-accent)] text-[var(--m-btn-text)]'
                : 'bg-[var(--m-s2)] text-[var(--m-muted)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="px-4">
        <div className="columns-2 gap-3 space-y-3">
          {filtered.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(item.image)}
              className="relative w-full break-inside-avoid rounded-lg overflow-hidden group active:opacity-70 transition-opacity"
              style={{
                aspectRatio: idx % 3 === 0 ? '1 / 1.3' : '1',
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <p className="text-white text-sm font-semibold">{item.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
}
