'use client';

import { site } from '@/lib/data';

export const badgeTones = {
  accent: 'bg-accent/15 text-accent',
  green: 'bg-leaf/15 text-leaf',
  muted: 'bg-white/10 text-cream/60',
} as const;

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">
      {children}
    </div>
  );
}

export function SplitBrand() {
  const [first, ...rest] = site.name.split(' ');
  return (
    <span className="font-serif text-xl font-bold text-current">
      {first} <span className="text-accent">{rest.join(' ')}</span>
    </span>
  );
}
