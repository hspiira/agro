'use client';

import { useCart } from '@/lib/cart';

export function CartBar() {
  const { count, total, openCart } = useCart();

  if (count === 0) return null;

  return (
    <div className="fixed bottom-16 inset-x-0 z-40 px-3 md:hidden">
      <button
        onClick={openCart}
        className="w-full flex items-center justify-between bg-[var(--m-accent)] text-[var(--m-btn-text)] px-4 py-3 rounded-lg shadow-lg active:opacity-80 transition-opacity"
      >
        <span className="flex items-center gap-2 font-semibold text-sm">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--m-btn-text)]/20 text-xs font-bold">
            {count}
          </span>
          View Cart
        </span>
        <span className="font-money font-bold text-sm">{total}</span>
      </button>
    </div>
  );
}
