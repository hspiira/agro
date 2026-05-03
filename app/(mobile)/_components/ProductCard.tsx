'use client';

import Image from 'next/image';
import { useCart } from '@/lib/cart';
import { products } from '@/lib/data';

type Product = (typeof products)[number];

export function ProductCard({ product }: { product: Product }) {
  const { items, add, remove } = useCart();
  const cartItem = items.find((item) => item.product.name === product.name);
  const qty = cartItem?.qty || 0;

  return (
    <div className="group bg-[var(--m-s1)] rounded-2xl overflow-hidden border border-[var(--m-border)] hover:border-[var(--m-accent)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--m-accent)]/10 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden bg-gradient-to-br from-[var(--m-s2)] to-[var(--m-s1)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--m-accent)]/90 backdrop-blur-sm text-[var(--m-btn-text)] text-xs font-bold rounded-full shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--m-btn-text)]" />
            {product.badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
        {/* Title */}
        <div>
          <h3 className="text-base md:text-lg font-bold text-[var(--m-text)] leading-tight group-hover:text-[var(--m-accent)] transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-[var(--m-muted)] leading-relaxed flex-1">
          {product.body}
        </p>

        {/* Price & Unit */}
        <div className="flex items-baseline gap-2 pt-1 border-t border-[var(--m-border)]">
          <span className="font-money text-2xl md:text-3xl font-bold text-[var(--m-accent)] tracking-tight">
            {product.price}
          </span>
          <span className="text-xs md:text-sm text-[var(--m-sub)] font-medium">
            /{product.unit}
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {qty > 0 ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => remove(product.name)}
                className="flex-1 bg-[var(--m-accent-dim)] hover:bg-[var(--m-accent)]/30 text-[var(--m-accent)] py-2.5 md:py-3 rounded-lg font-semibold text-sm transition-colors active:opacity-70"
              >
                Remove
              </button>
              <div className="bg-[var(--m-s2)] border border-[var(--m-border)] text-[var(--m-text)] px-4 py-2.5 md:py-3 rounded-lg font-bold text-sm">
                {qty}
              </div>
            </div>
          ) : (
            <button
              onClick={() => add(product)}
              className="w-full bg-[var(--m-accent)] hover:bg-[var(--m-accent)]/90 text-[var(--m-btn-text)] py-2.5 md:py-3 rounded-lg font-bold text-sm transition-all duration-200 active:opacity-80 shadow-md hover:shadow-lg hover:shadow-[var(--m-accent)]/30 group-hover:shadow-[var(--m-accent)]/40"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
