'use client';

import Image from 'next/image';
import { useState } from 'react';
import { images, site } from '@/lib/data';
import { IconSunrise, IconCoffee, IconCow } from '@/app/components/Icons';
import { SectionLabel } from './shared';

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.6v12.8L18.5 12 8 5.6Z" />
    </svg>
  );
}

const features = [
  [IconSunrise, 'Sunrise to Harvest', 'Follow our farmers from dawn through the full daily harvest cycle.'] as const,
  [IconCoffee, 'Coffee Processing', 'From cherry to cup through artisan wet and dry processing methods.'] as const,
  [IconCow, 'Cattle Life', 'Pasture management, feeding routines, and animal welfare practices.'] as const,
];

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="story" className="bg-forest px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px] text-center">
        <SectionLabel>Our Farm Story</SectionLabel>
        <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">See How We Farm</h2>
        <button
          type="button"
          className="group relative mx-auto mt-12 block aspect-video w-full max-w-5xl overflow-hidden rounded-[20px] bg-black text-left"
          onClick={() => setPlaying(true)}
          aria-label="Play farm story video"
        >
          <Image src={images.farm1} alt="Coffee farm workers at Alm Agros" fill sizes="(min-width: 1024px) 900px, 100vw" className="object-cover opacity-70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-forest shadow-[0_0_42px_rgba(232,160,32,0.38)] transition-transform group-hover:scale-105">
              <PlayIcon className="h-9 w-9" />
            </div>
            <div className="mt-5 text-sm font-semibold text-white">
              {playing ? 'Preview selected' : `Watch: A Day at ${site.name}`}
            </div>
          </div>
        </button>
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
          {features.map(([Icon, title, body]) => (
            <div key={title} className="rounded-xl border border-white/10 bg-surface p-6 text-center">
              <div className="mb-3">
                <Icon className="mx-auto h-9 w-9 text-cream" />
              </div>
              <h3 className="font-bold text-cream">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/55">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
