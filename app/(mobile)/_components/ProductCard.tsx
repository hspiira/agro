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
    <div className="bg-[var(--m-s1)] rounded-xl overflow-hidden border border-[var(--m-border)]">
      <div className="relative h-40 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="50vw"
        />
        <span className="absolute top-3 left-3 text-xs font-bold px-2 py-1 bg-[var(--m-accent-dim)] text-[var(--m-accent)] rounded-full">
          {product.badge}
        </span>
      </div>
      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-[var(--m-text)]">{product.name}</h3>
        <p className="text-xs text-[var(--m-muted)]">{product.body}</p>
        <div className="flex items-baseline gap-1">
          <span className="font-money text-xl font-semibold text-[var(--m-accent)]">
            {product.price}
          </span>
          <span className="text-xs text-[var(--m-sub)]">{product.unit}</span>
        </div>
        {qty > 0 ? (
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => remove(product.name)}
              className="flex-1 bg-[var(--m-accent-dim)] text-[var(--m-accent)] py-2 rounded font-semibold text-sm active:opacity-70"
            >
              Remove
            </button>
            <span className="bg-[var(--m-s2)] text-[var(--m-text)] px-3 py-2 rounded font-semibold text-sm">
              {qty}
            </span>
          </div>
        ) : (
          <button
            onClick={() => add(product)}
            className="w-full bg-[var(--m-accent)] text-[var(--m-btn-text)] py-2 rounded font-semibold text-sm active:opacity-80 mt-1"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
