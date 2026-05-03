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
    <div className="relative h-80 md:h-screen w-full mb-6 md:mb-0 pt-4 md:pt-0 px-4 md:px-12">
      <div className="relative h-full rounded-2xl md:rounded-none overflow-hidden">
        <Image
          src={images.hero}
          alt="Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-transparent md:bg-gradient-to-r" />
        <div className="absolute inset-0 flex flex-col items-start justify-end md:justify-center p-6 md:p-12 gap-3 md:gap-6 md:max-w-2xl">
          {/* Delivery badge */}
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--m-accent)] animate-pulse" />
            <span className="text-white text-xs font-semibold">Delivering to Kampala · 160 km · Next day</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white font-serif leading-tight">Farm Fresh, Grown With Purpose</h1>
          <p className="text-sm md:text-lg text-white/80 hidden md:block">From the heart of Mubende's red soils, we grow coffee, bananas, and premium beef with purpose.</p>
          <div className="flex gap-2">
            <Link
              href="/m/shop"
              className="bg-[var(--m-accent)] text-[var(--m-btn-text)] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base active:opacity-80 hover:opacity-90 transition-opacity"
            >
              Shop Now
            </Link>
            <Link
              href="/m/about"
              className="border border-white/30 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base active:opacity-70 hover:bg-white/10 transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat }: { stat: (typeof heroStats)[number] }) {
  const { ref, isVisible } = useIntersectionObserver();
  const value = useCountUp(parseInt(stat.value.replace(/[^0-9]/g, '')), 1200, isVisible);

  return (
    <div ref={ref} className="text-center py-3 md:py-4">
      <div className="text-lg md:text-4xl font-bold font-money text-[var(--m-accent)] leading-tight tabular-nums">
        {value}
        {stat.value.includes('%') && '%'}
        {stat.value.includes('+') && '+'}
      </div>
      <p className="text-[10px] md:text-sm text-[var(--m-sub)] mt-1 leading-snug">{stat.label}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="px-3 md:px-12 mb-8 md:mb-12">
      <div className="bg-[var(--m-s1)] rounded-md py-1 grid grid-cols-4 border border-[var(--m-border)] divide-x divide-[var(--m-border)]">
        {heroStats.map((stat, idx) => (
          <StatCard key={idx} stat={stat} />
        ))}
      </div>
    </div>
  );
}

function ProductShelf() {
  return (
    <div className="px-4 md:px-12 mb-8 md:mb-12" id="products">
      <div className="flex items-baseline justify-between mb-3 md:mb-6">
        <h2 className="text-lg md:text-3xl font-semibold text-[var(--m-text)]">Featured Products</h2>
        <Link href="/m/shop" className="text-xs md:text-sm text-[var(--m-accent)] font-semibold">
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.slice(0, 3).map((product) => (
          <div key={product.name}>
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
    <div className="px-4 md:px-12 mb-8 md:mb-12">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-[var(--m-s1)] border border-[var(--m-border)] rounded-lg p-3 md:p-6 text-center active:opacity-70 hover:opacity-80 transition-opacity"
          >
            <div className="mb-2"><link.Icon className="h-6 md:h-8 w-6 md:w-8 mx-auto text-[var(--m-accent)]" /></div>
            <p className="text-xs md:text-sm font-semibold text-[var(--m-text)]">{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="pt-2 md:pt-0 pb-4 md:pb-8">
      <HeroSection />
      <div className="px-4 md:px-12 mb-6 md:mb-12 mt-6 md:mt-0" id="story">
        <SectionLabel>Our Story</SectionLabel>
        <p className="text-sm md:text-lg text-[var(--m-muted)] mt-2 leading-relaxed md:max-w-2xl">
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
