'use client';

import Image from 'next/image';
import { useCart } from '@/lib/cart';
import { IconClose } from '@/app/components/Icons';

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, increment, decrement, remove, total } = useCart();
  const phoneNumber = '256700000000';
  const message = items
    .map((item) => `${item.product.name} x${item.qty} (${item.product.price}${item.product.unit})`)
    .join('\n');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hi, I'd like to order:\n${message}\n\nTotal: ${total}`
  )}`;

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <dialog
        open={open}
        className="fixed inset-x-0 bottom-0 z-50 max-w-md mx-auto w-full bg-[var(--m-s1)] rounded-t-2xl border-t border-[var(--m-border)]"
        style={{
          animation: open ? 'slideUp 0.3s ease-out' : undefined,
        }}
      >
        <div className="max-h-[80vh] overflow-y-auto flex flex-col">
          <div className="sticky top-0 bg-[var(--m-s1)] border-b border-[var(--m-border)] px-4 py-3 flex items-center justify-between">
            <h2 className="font-semibold text-[var(--m-text)]">Your Cart</h2>
            <button
              onClick={() => onOpenChange(false)}
              className="text-[var(--m-sub)] active:opacity-50"
              aria-label="Close"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 divide-y divide-[var(--m-border)]">
            {items.map((item) => (
              <div key={item.product.name} className="p-3 flex gap-3">
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-[var(--m-s2)]">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-[var(--m-text)] text-sm">{item.product.name}</h3>
                    <p className="text-xs text-[var(--m-muted)] mt-0.5">{item.product.body}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrement(item.product.name)}
                      className="w-6 h-6 bg-[var(--m-s2)] text-[var(--m-text)] rounded text-xs active:opacity-70"
                    >
                      −
                    </button>
                    <span className="text-sm font-semibold text-[var(--m-text)] w-6 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => increment(item.product.name)}
                      className="w-6 h-6 bg-[var(--m-s2)] text-[var(--m-text)] rounded text-xs active:opacity-70"
                    >
                      +
                    </button>
                    <button
                      onClick={() => remove(item.product.name)}
                      className="ml-auto text-xs text-[var(--m-sub)] active:opacity-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sticky bottom-0 bg-[var(--m-s1)] border-t border-[var(--m-border)] p-4 space-y-3">
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
              onClick={() => onOpenChange(false)}
              className="w-full bg-[var(--m-s2)] text-[var(--m-text)] py-2 rounded-lg font-semibold text-center active:opacity-70"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
