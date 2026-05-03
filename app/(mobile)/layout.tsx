import { CartProvider } from '@/lib/cart';
import { MobileBottomNav } from './_components/MobileBottomNav';
import { DesktopTopNav } from './_components/DesktopTopNav';
import { SwRegistrar } from './_components/SwRegistrar';
import { CartSheet } from './_components/CartSheet';
import { CartBar } from './_components/CartBar';

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="bg-[var(--m-bg)] text-[var(--m-text)] min-h-screen">
        <SwRegistrar />
        <DesktopTopNav />
        <main className="m-main pb-20 md:pb-0 md:pt-16">
          {children}
        </main>
        <CartBar />
        <div className="md:hidden">
          <MobileBottomNav />
        </div>
        <CartSheet />
      </div>
    </CartProvider>
  );
}
