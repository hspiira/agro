'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { images, testimonials } from '@/lib/data';
import { SectionLabel } from './shared';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((v) => (v + 1) % testimonials.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-forest px-4 py-20 text-cream md:px-12 md:py-28">
      <Image src={images.farm1} alt="" fill sizes="100vw" className="object-cover opacity-15 saturate-50" />
      <div className="absolute inset-0 bg-forest/80" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <SectionLabel>What People Say</SectionLabel>
        <h2 className="mb-12 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
          Trusted by Buyers Across East Africa
        </h2>
        <div className="px-2">
          <div className="font-serif text-7xl leading-none text-accent">&quot;</div>
          <p
            className="mx-auto max-w-3xl font-serif text-xl italic leading-9 text-white/90 md:text-2xl"
            style={{ marginBottom: '8px' }}
          >
            {testimonial.quote}
          </p>
          <div className="mx-auto mt-9 flex h-14 w-14 items-center justify-center rounded-full bg-accent font-bold text-forest">
            {testimonial.initials}
          </div>
          <div className="mt-4 font-bold text-white">{testimonial.name}</div>
          <div className="mt-1 text-sm text-white/50">{testimonial.role}</div>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              className={`h-2 rounded-full transition-all ${index === current ? 'w-8 bg-accent' : 'w-2 bg-white/30'}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
