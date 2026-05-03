'use client';

import Image from 'next/image';
import { SubScreenHeader } from '@/app/(mobile)/_components/SubScreenHeader';
import { images } from '@/lib/data';

const videos = [
  {
    title: 'A Day at Alm Agros',
    image: images.hero,
    duration: '12:04',
    featured: true,
  },
  {
    title: 'Coffee: Cherry to Cup',
    image: images.coffee,
    duration: '7:15',
  },
  {
    title: 'Cattle & Pasture Management',
    image: images.cattle,
    duration: '5:48',
  },
  {
    title: 'Processing Day at the Farm',
    image: images.farm2,
    duration: '3:22',
  },
];

export default function VideoPage() {
  return (
    <div className="pt-16 pb-8">
      <SubScreenHeader title="Videos" />

      <div className="px-4 space-y-4">
        {videos.map((video, idx) => (
          <button
            key={idx}
            className="w-full bg-[var(--m-s1)] border border-[var(--m-border)] rounded-xl overflow-hidden active:opacity-70 transition-opacity"
          >
            <div className="relative h-32 w-full bg-[var(--m-s2)]">
              <Image
                src={video.image}
                alt={video.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[var(--m-accent)] flex items-center justify-center">
                  <span className="text-[var(--m-btn-text)] text-lg">▶</span>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 text-xs font-bold bg-black/60 text-white px-2 py-1 rounded">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-[var(--m-text)] text-left">{video.title}</h3>
              {video.featured && (
                <p className="text-xs text-[var(--m-accent)] mt-2 font-semibold">Featured</p>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
