'use client';

import Image from 'next/image';
import { farmValues, images, site } from '@/lib/data';
import { IconSprout, IconLeaf, IconHandshake, IconSun, IconPackage } from '@/app/components/Icons';
import { SectionLabel } from './shared';

const valueIconMap: Record<string, React.FC<{ className?: string }>> = {
  Organic: IconLeaf,
  People: IconHandshake,
  Land: IconSun,
  Direct: IconPackage,
};

export function About() {
  return (
    <section id="about" className="bg-forest px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative min-h-[460px] overflow-hidden rounded-2xl">
          <Image src={images.about} alt="Alm Agros cultivated field" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute bottom-6 right-4 rounded-xl bg-accent px-7 py-5 text-forest shadow-2xl md:-right-5">
            <IconSprout className="h-8 w-8" />
            <div className="mt-1 font-serif text-lg font-bold">Est. {site.founded}</div>
          </div>
        </div>

        <div className="self-center">
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="max-w-2xl font-serif text-4xl font-bold leading-tight tracking-tight text-cream md:text-5xl">
            Rooted in the
            <br />
            <em className="text-accent">Red Soils of Mubende</em>
          </h2>
          <p className="mt-7 text-base leading-8 text-cream/60 md:text-lg">
            Nestled in the fertile highlands of Mubende District, our farm has been cultivating Uganda&apos;s finest coffee, bananas, and cattle for over a decade. We combine generational farming wisdom with modern, sustainable practices.
          </p>
          <p className="mt-5 text-base leading-8 text-cream/60 md:text-lg">
            We believe that great food starts with healthy land. Every acre we tend and every animal we raise reflects our commitment to quality, community, and the future of Ugandan agriculture.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {farmValues.map((value) => {
              const Icon = valueIconMap[value.icon];
              return (
                <div key={value.title} className="rounded-xl border border-white/10 bg-surface p-5">
                  {Icon ? (
                    <Icon className="mb-3 h-8 w-8 text-cream" />
                  ) : (
                    <div className="mb-3 text-3xl">{value.icon}</div>
                  )}
                  <h3 className="font-bold text-cream">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/55">{value.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
