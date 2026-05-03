'use client';

import Image from 'next/image';
import { activities } from '@/lib/data';
import { SectionLabel } from './shared';

export function Activities() {
  return (
    <section id="activities" className="bg-forest-deep px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Farm Life</SectionLabel>
            <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Activities &amp;
              <br />
              Gallery
            </h2>
          </div>
          <a href="#contact" className="w-fit border-b border-accent pb-1 text-sm font-bold text-accent">
            Plan a farm visit
          </a>
        </div>

        <div className="grid auto-rows-[240px] gap-4 md:grid-cols-4 md:auto-rows-[280px]">
          {activities.map((activity) => {
            const featured = 'featured' in activity && activity.featured;
            const tag = 'tag' in activity ? activity.tag : undefined;
            return (
              <article
                key={activity.label}
                className={`group relative overflow-hidden rounded-2xl ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <Image
                  src={activity.image}
                  alt={activity.label}
                  fill
                  sizes={featured ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 100vw'}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.74),transparent_62%)]" />
                {tag && (
                  <div className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-forest">{tag}</div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-bold text-white">{activity.label}</h3>
                  <p className="mt-1 text-sm text-white/65">{activity.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
