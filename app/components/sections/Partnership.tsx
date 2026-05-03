'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { images, partnershipTypes } from '@/lib/data';
import { IconCheck } from '@/app/components/Icons';
import { SectionLabel } from './shared';

export function Partnership() {
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="partnership" className="bg-forest-deep px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative min-h-[360px] overflow-hidden rounded-[20px] lg:min-h-[520px]">
          <Image src={images.partner} alt="Partners meeting at a farm" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="self-center">
          <SectionLabel>Work With Us</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Let&apos;s Grow
            <br />
            <em className="text-accent">Together</em>
          </h2>
          <p className="mt-6 text-base leading-8 text-cream/60">
            Whether you&apos;re a restaurant sourcing fresh ingredients, an NGO driving food security, or an investor in Ugandan agriculture, we have a partnership model for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {partnershipTypes.map((type) => (
              <span key={type} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-cream/55">
                {type}
              </span>
            ))}
          </div>
          {sent ? (
            <div className="mt-8 flex items-center justify-center gap-3 rounded-xl border border-leaf/40 bg-leaf/10 p-5 text-center font-bold text-leaf">
              <IconCheck className="h-5 w-5 flex-shrink-0" />
              Thank you. We&apos;ll be in touch within 48 hours.
            </div>
          ) : (
            <form className="mt-8 grid gap-4" onSubmit={submitForm}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="field" name="name" placeholder="Your Name" required />
                <input className="field" name="organisation" placeholder="Organisation" />
              </div>
              <input className="field" name="type" placeholder="Partnership type" />
              <textarea className="field min-h-28 resize-y" name="message" placeholder="Tell us about your needs..." />
              <button className="rounded-lg bg-accent px-5 py-4 text-sm font-bold text-forest transition-opacity hover:opacity-85" type="submit">
                Send Partnership Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
