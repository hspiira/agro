'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { products } from '@/lib/data';
import { SectionLabel } from '@/app/(mobile)/_components/SectionLabel';
import { ProductCard } from '@/app/(mobile)/_components/ProductCard';
import { CartSheet } from './CartSheet';

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
  const [cartSheetOpen, setCartSheetOpen] = useState(false);
  const { count } = useCart();

  const filtered = filterProducts(products, activeFilter);

  return (
    <div className="pt-4 pb-8">
      <div className="px-4 mb-6">
        <SectionLabel>Shop</SectionLabel>
        <h1 className="text-2xl font-bold text-[var(--m-text)] mt-2">Farm Fresh Products</h1>
      </div>

      <div className="px-4 mb-6 flex gap-2 overflow-x-auto pb-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors flex-shrink-0 ${
              activeFilter === filter
                ? 'bg-[var(--m-accent)] text-[var(--m-btn-text)]'
                : 'bg-[var(--m-s2)] text-[var(--m-muted)]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="px-4 mb-8">
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>

      {count > 0 && (
        <button
          onClick={() => setCartSheetOpen(true)}
          className="fixed bottom-24 right-4 w-14 h-14 bg-[var(--m-accent)] text-[var(--m-btn-text)] rounded-full flex items-center justify-center font-bold text-lg shadow-lg active:opacity-80"
        >
          {count}
        </button>
      )}

      <CartSheet open={cartSheetOpen} onOpenChange={setCartSheetOpen} />
    </div>
  );
}
