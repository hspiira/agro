'use client';

import Image from 'next/image';
import { heroStats, images, site } from '@/lib/data';

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.6v12.8L18.5 12 8 5.6Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-forest pt-28 text-white">
      <Image
        src={images.hero}
        alt="Green farm landscape in Uganda"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35 saturate-125"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.22),rgba(0,0,0,0.58))]" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pb-36 pt-16 md:px-12 md:pt-24">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {site.location}
        </div>
        <h1 className="max-w-4xl font-serif text-5xl font-black leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
          Farm Fresh,
          <br />
          <em className="font-serif text-accent">Grown with</em>
          <br />
          Purpose
        </h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
          {site.tagline}. Coffee, bananas and premium cattle raised on rich Ugandan soil.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#products" className="rounded-lg bg-accent px-8 py-4 text-sm font-bold text-forest transition-opacity hover:opacity-85">
            Shop Our Products
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-3 rounded-lg border border-white/40 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <PlayIcon className="h-4 w-4" />
            Watch Our Story
          </a>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-5 px-4 pb-8 md:grid-cols-4 md:gap-12 md:px-12 md:pb-12">
          {heroStats.map((stat) => (
            <div key={stat.label} className="border-l-[3px] border-accent pl-4">
              <div className="font-money text-3xl font-semibold leading-none text-white md:text-4xl">{stat.value}</div>
              <div className="mt-2 text-xs font-medium text-white/55 md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
