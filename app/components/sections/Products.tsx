'use client';

import Image from 'next/image';
import { useState } from 'react';
import { products } from '@/lib/data';
import { IconCart } from '@/app/components/Icons';
import { SectionLabel, badgeTones } from './shared';

export function Products() {
  const [addedProduct, setAddedProduct] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);

  function addToOrder(name: string) {
    setAddedProduct(name);
    setCartCount((c) => c + 1);
    window.setTimeout(() => setAddedProduct(null), 1400);
  }

  return (
    <section id="products" className="bg-forest-deep px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>What We Grow</SectionLabel>
            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">Product Catalog</h2>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-forest">
            <IconCart className="h-5 w-5" />
            Cart ({cartCount})
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <div className="relative h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase ${badgeTones[product.tone]}`}>
                  {product.badge}
                </div>
                <h3 className="font-bold text-cream">{product.name}</h3>
                <p className="mt-2 text-sm text-cream/55">{product.body}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-money text-2xl font-semibold text-accent">{product.price}</span>
                  <span className="text-sm text-cream/45">{product.unit}</span>
                </div>
                <button
                  type="button"
                  className="mt-6 w-full rounded-lg bg-accent px-4 py-3 text-sm font-bold text-forest transition-opacity hover:opacity-85"
                  onClick={() => addToOrder(product.name)}
                >
                  {addedProduct === product.name ? 'Added' : 'Add to Order'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
