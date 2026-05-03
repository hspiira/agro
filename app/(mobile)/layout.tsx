import { CartProvider } from '@/lib/cart';
import { MobileBottomNav } from './_components/MobileBottomNav';
import { DesktopTopNav } from './_components/DesktopTopNav';
import { SwRegistrar } from './_components/SwRegistrar';

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="bg-[var(--m-bg)] text-[var(--m-text)] min-h-screen">
        <SwRegistrar />
        {/* Desktop: top nav — Mobile: bottom nav */}
        <DesktopTopNav />
        <main className="m-main pb-20 md:pb-0 md:pt-16">
          {children}
        </main>
        <div className="md:hidden">
          <MobileBottomNav />
        </div>
      </div>
    </CartProvider>
  );
}
