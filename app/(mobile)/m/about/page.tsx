'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { images, farmValues } from '@/lib/data';
import { SectionLabel } from '@/app/(mobile)/_components/SectionLabel';

const farmMetrics = [
  { label: 'Organic Farming', value: 94 },
  { label: 'Local Employment', value: 87 },
  { label: 'Community Support', value: 92 },
  { label: 'Land Cultivated', value: 75 },
];

function ProgressBar({ label, value }: { label: string; value: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  const displayValue = isVisible ? value : 0;

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm font-semibold text-[var(--m-text)]">{label}</span>
        <span className="text-xs font-semibold text-[var(--m-accent)]">{displayValue}%</span>
      </div>
      <div className="h-2 bg-[var(--m-s2)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--m-accent)] transition-all duration-1400 ease-out"
          style={{
            width: `${displayValue}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-4 pb-8">
      <div className="px-4 mb-8">
        <SectionLabel>Our Story</SectionLabel>
        <h1 className="text-2xl font-bold text-[var(--m-text)] mt-2 mb-4">
          Rooted in the Red Soils of Mubende
        </h1>
      </div>

      <div className="px-4 mb-8">
        <div className="relative h-56 rounded-xl overflow-hidden mb-4">
          <Image
            src={images.about}
            alt="Alm Agros Farm"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="flex gap-2 mb-4">
          <div className="px-2 py-1 bg-[var(--m-accent-dim)] text-[var(--m-accent)] text-xs font-bold rounded">
            EST. 2012
          </div>
          <div className="px-2 py-1 bg-[var(--m-accent-dim)] text-[var(--m-accent)] text-xs font-bold rounded">
            MUBENDE
          </div>
        </div>
        <p className="text-sm text-[var(--m-muted)] leading-relaxed">
          For over 12 years, we've cultivated coffee, bananas, and premium beef on 500+ acres of Mubende's
          richest farmland. Every crop is grown with respect for the soil, the community, and the consumer.
        </p>
      </div>

      <div className="px-4 mb-8">
        <h2 className="text-lg font-semibold text-[var(--m-text)] mb-4">Farm Performance</h2>
        {farmMetrics.map((metric, idx) => (
          <ProgressBar key={idx} label={metric.label} value={metric.value} />
        ))}
      </div>

      <div className="px-4">
        <h2 className="text-lg font-semibold text-[var(--m-text)] mb-4">Our Values</h2>
        <div className="grid grid-cols-2 gap-3">
          {farmValues.map((value, idx) => (
            <div
              key={idx}
              className="bg-[var(--m-s1)] border border-[var(--m-border)] rounded-lg p-4"
            >
              <h3 className="font-semibold text-[var(--m-text)] text-sm mb-2">{value.title}</h3>
              <p className="text-xs text-[var(--m-muted)] leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
