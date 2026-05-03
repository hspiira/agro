'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { useCountUp } from '@/lib/hooks/useCountUp';
import { images, heroStats, products } from '@/lib/data';
import { SectionLabel } from '@/app/(mobile)/_components/SectionLabel';
import { ProductCard } from '@/app/(mobile)/_components/ProductCard';
import { IconVideo, IconPen, IconHandshake } from '@/app/components/Icons';

function HeroSection() {
  return (
    <div className="relative h-80 w-full mb-6 pt-4 px-4">
      <div className="relative h-full rounded-2xl overflow-hidden">
        <Image
          src={images.hero}
          alt="Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 gap-3">
          <h1 className="text-3xl font-bold text-white font-serif">Farm Fresh, Grown With Purpose</h1>
          <div className="flex gap-2">
            <Link
              href="/m/shop"
              className="bg-[var(--m-accent)] text-[var(--m-btn-text)] px-4 py-2 rounded-full font-semibold text-sm active:opacity-80"
            >
              Shop Now
            </Link>
            <Link
              href="/m/video"
              className="border border-white/30 text-white px-4 py-2 rounded-full font-semibold text-sm active:opacity-70"
            >
              Watch Video
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat, index }: { stat: (typeof heroStats)[number]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  const value = useCountUp(parseInt(stat.value.replace(/[^0-9]/g, '')), 1200, isVisible);

  return (
    <div ref={ref} className="text-center px-3 py-2">
      <div className="text-2xl font-bold font-money text-[var(--m-accent)]">
        {value}
        {stat.value.includes('%') && '%'}
        {stat.value.includes('+') && '+'}
      </div>
      <p className="text-xs text-[var(--m-sub)] mt-1">{stat.label}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="px-4 mb-8">
      <div className="bg-[var(--m-s1)] rounded-xl p-4 flex justify-between overflow-x-auto gap-2 border border-[var(--m-border)]">
        {heroStats.map((stat, idx) => (
          <StatCard key={idx} stat={stat} index={idx} />
        ))}
      </div>
    </div>
  );
}

function ProductShelf() {
  return (
    <div className="px-4 mb-8">
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-lg font-semibold text-[var(--m-text)]">Featured Products</h2>
        <Link href="/m/shop" className="text-xs text-[var(--m-accent)] font-semibold">
          View All →
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
        {products.slice(0, 3).map((product) => (
          <div key={product.name} className="flex-shrink-0 w-56 snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickLinks() {
  const links = [
    { href: '/m/video', label: 'Watch Videos', Icon: IconVideo },
    { href: '/m/blog', label: 'Read Blog', Icon: IconPen },
    { href: '/m/partner', label: 'Partner', Icon: IconHandshake },
  ];

  return (
    <div className="px-4 mb-8">
      <div className="grid grid-cols-3 gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-[var(--m-s1)] border border-[var(--m-border)] rounded-lg p-3 text-center active:opacity-70 transition-opacity"
          >
            <div className="mb-2"><link.Icon className="h-6 w-6 mx-auto text-[var(--m-accent)]" /></div>
            <p className="text-xs font-semibold text-[var(--m-text)]">{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="pt-2 pb-4">
      <HeroSection />
      <div className="px-4 mb-6">
        <SectionLabel>Our Story</SectionLabel>
        <p className="text-sm text-[var(--m-muted)] mt-2 leading-relaxed">
          From the heart of Mubende's red soils, we grow coffee, bananas, and premium beef with purpose.
          Every harvest honors the land and feeds families.
        </p>
      </div>
      <StatsSection />
      <ProductShelf />
      <QuickLinks />
    </div>
  );
}
