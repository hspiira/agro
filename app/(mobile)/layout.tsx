import { CartProvider } from '@/lib/cart';
import { MobileBottomNav } from './_components/MobileBottomNav';
import { SwRegistrar } from './_components/SwRegistrar';

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="bg-[var(--m-bg)] text-[var(--m-text)] min-h-screen">
        <SwRegistrar />
        <main className="pb-20 md:pb-0">
          {children}
        </main>
        {/* Mobile bottom nav - hidden on desktop */}
        <div className="md:hidden">
          <MobileBottomNav />
        </div>
      </div>
    </CartProvider>
  );
}
