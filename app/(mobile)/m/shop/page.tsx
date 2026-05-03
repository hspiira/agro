'use client';

import { useState } from 'react';
import { products } from '@/lib/data';
import { SectionLabel } from '@/app/(mobile)/_components/SectionLabel';
import { ProductCard } from '@/app/(mobile)/_components/ProductCard';

type FilterCategory = 'All' | 'Coffee' | 'Bananas' | 'Beef';

const FILTERS: FilterCategory[] = ['All', 'Coffee', 'Bananas', 'Beef'];

function filterProducts(items: typeof products, filter: FilterCategory) {
  if (filter === 'All') return items;
  if (filter === 'Coffee') return items.filter((p) => p.name.toLowerCase().includes('coffee'));
  if (filter === 'Bananas') return items.filter((p) => p.name.toLowerCase().includes('banana'));
  if (filter === 'Beef') return items.filter((p) => p.name.toLowerCase().includes('beef'));
  return items;
}

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const filtered = filterProducts(products, activeFilter);

  return (
    <div className="pt-4 md:pt-8 pb-8 md:pb-12">
      <div className="px-4 md:px-12 mb-6 md:mb-8">
        <SectionLabel>Shop</SectionLabel>
        <h1 className="text-2xl md:text-4xl font-bold text-[var(--m-text)] mt-2">Farm Fresh Products</h1>
      </div>

      <div className="px-4 md:px-12 mb-6 md:mb-8 flex gap-2 overflow-x-auto md:overflow-x-visible md:flex-wrap pb-2 md:pb-0">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-colors flex-shrink-0 ${
              activeFilter === filter
                ? 'bg-[var(--m-accent)] text-[var(--m-btn-text)]'
                : 'bg-[var(--m-s2)] text-[var(--m-muted)] hover:bg-[var(--m-s1)]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="px-4 md:px-12 mb-8 md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
