'use client';

import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { SectionLabel } from './shared';

export function Blog() {
  return (
    <section id="blog" className="bg-forest px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel>Farming Knowledge</SectionLabel>
        <h2 className="mb-12 font-serif text-4xl font-bold tracking-tight md:text-5xl">Advice &amp; Insights</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-card transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative h-56">
                <Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-7">
                <div className="mb-4 inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase text-accent">
                  {post.category}
                </div>
                <h3 className="font-serif text-xl font-bold leading-snug text-cream">{post.title}</h3>
                <div className="mt-5 flex gap-3 text-sm text-cream/45">
                  <span>{post.date}</span>
                  <span aria-hidden>-</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
