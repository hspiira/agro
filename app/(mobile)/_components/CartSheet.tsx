'use client';

import Image from 'next/image';
import { useCart } from '@/lib/cart';
import { IconClose } from '@/app/components/Icons';

export function CartSheet() {
  const { items, increment, decrement, remove, total, isCartOpen, closeCart } = useCart();

  const phoneNumber = '256700000000';
  const message = items
    .map((item) => `${item.product.name} x${item.qty} (${item.product.price}/${item.product.unit})`)
    .join('\n');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hi, I'd like to order:\n${message}\n\nTotal: ${total}`
  )}`;

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop — above nav (z-50) but below sheet */}
      <div
        className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Sheet — highest layer */}
      <dialog
        open
        className="fixed inset-x-0 bottom-0 z-[60] w-full max-w-lg mx-auto bg-[var(--m-s1)] rounded-t-xl border-t border-[var(--m-border)] outline-none"
        style={{ animation: 'slideUp 0.28s ease-out' }}
      >
        <div className="flex flex-col" style={{ maxHeight: 'calc(85vh - env(safe-area-inset-top))' }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--m-border)] flex-shrink-0">
            <h2 className="font-semibold text-[var(--m-text)]">Your Cart</h2>
            <button onClick={closeCart} className="text-[var(--m-sub)] active:opacity-50 p-1" aria-label="Close cart">
              <IconClose className="h-5 w-5" />
            </button>
          </div>

          {/* Items — scrollable */}
          <div className="flex-1 overflow-y-auto divide-y divide-[var(--m-border)]">
            {items.map((item) => (
              <div key={item.product.name} className="p-3 flex gap-3">
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-[var(--m-s2)]">
                  <Image src={item.product.image} alt={item.product.name} fill className="object-cover" sizes="80px" />
                </div>
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <h3 className="font-semibold text-[var(--m-text)] text-sm truncate">{item.product.name}</h3>
                    <p className="text-xs text-[var(--m-muted)] mt-0.5 line-clamp-1">{item.product.body}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => decrement(item.product.name)} className="w-7 h-7 bg-[var(--m-s2)] text-[var(--m-text)] rounded font-bold text-sm active:opacity-70 flex-shrink-0">−</button>
                    <span className="text-sm font-semibold text-[var(--m-text)] w-6 text-center">{item.qty}</span>
                    <button onClick={() => increment(item.product.name)} className="w-7 h-7 bg-[var(--m-s2)] text-[var(--m-text)] rounded font-bold text-sm active:opacity-70 flex-shrink-0">+</button>
                    <button onClick={() => remove(item.product.name)} className="ml-auto text-xs text-[var(--m-sub)] active:opacity-50 px-1">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer — above device home indicator */}
          <div
            className="flex-shrink-0 border-t border-[var(--m-border)] px-4 pt-3 pb-4 space-y-3"
            style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
          >
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-[var(--m-muted)]">Total</span>
              <span className="font-money text-2xl font-semibold text-[var(--m-accent)]">{total}</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[var(--m-accent)] text-[var(--m-btn-text)] py-3 rounded-lg font-semibold text-center active:opacity-80"
            >
              Enquire via WhatsApp
            </a>
            <button
              onClick={closeCart}
              className="w-full bg-[var(--m-s2)] text-[var(--m-text)] py-2.5 rounded-lg font-semibold text-center active:opacity-70"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
