'use client';

import { useEffect, useState } from 'react';
import { testimonials, contactDetails, site } from '@/lib/data';
import { SectionLabel } from '@/app/(mobile)/_components/SectionLabel';
import { IconMapPin } from '@/app/components/Icons';

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <div className="px-4 pb-8">
      <SectionLabel>Testimonials</SectionLabel>
      <div className="mt-4 bg-[var(--m-s1)] border border-[var(--m-border)] rounded-xl p-6">
        <div className="text-4xl text-[var(--m-accent-dim)] mb-4">"</div>
        <p className="text-sm text-[var(--m-muted)] leading-relaxed mb-4 min-h-[60px]">
          {testimonial.quote}
        </p>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[var(--m-accent)] text-[var(--m-btn-text)] flex items-center justify-center font-bold text-xs">
            {testimonial.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--m-text)]">{testimonial.name}</p>
            <p className="text-xs text-[var(--m-sub)]">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex gap-1 justify-center">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current
                  ? 'bg-[var(--m-accent)] w-6'
                  : 'bg-[var(--m-accent-dim)] w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MorePage() {
  return (
    <div className="pt-4 pb-8">
      <div className="px-4 mb-6">
        <SectionLabel>More</SectionLabel>
        <h1 className="text-2xl font-bold text-[var(--m-text)] mt-2">Connect With Us</h1>
      </div>

      <TestimonialCarousel />

      <div className="px-4 pb-8">
        <SectionLabel>Contact</SectionLabel>
        <div className="mt-4 space-y-3">
          {contactDetails.map((detail, idx) => (
            <div
              key={idx}
              className="bg-[var(--m-s1)] border border-[var(--m-border)] rounded-lg p-4"
            >
              <p className="text-xs font-bold text-[var(--m-accent)] uppercase tracking-wide mb-2">
                {detail.title}
              </p>
              <p className="text-sm text-[var(--m-text)] whitespace-pre-line">{detail.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4">
        <SectionLabel>Map</SectionLabel>
        <a
          href="https://maps.google.com/?q=Mubende,Uganda"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block bg-[var(--m-s1)] border border-[var(--m-border)] rounded-lg p-6 text-center active:opacity-70"
        >
          <div className="mb-2"><IconMapPin className="h-8 w-8 mx-auto text-[var(--m-accent)]" /></div>
          <p className="text-sm font-semibold text-[var(--m-text)]">Mubende, Uganda</p>
          <p className="text-xs text-[var(--m-sub)] mt-1">Tap to open in Maps</p>
        </a>
      </div>
    </div>
  );
}
