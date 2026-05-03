'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart';
import { IconHome, IconLeaf, IconShoppingBag, IconGrid } from '@/app/components/Icons';

interface Tab {
  id: string;
  label: string;
  href: string;
  Icon: React.FC<{className?: string}>;
}

const TABS: Tab[] = [
  { id: 'home', label: 'Home', href: '/m/home', Icon: IconHome },
  { id: 'about', label: 'About', href: '/m/about', Icon: IconLeaf },
  { id: 'shop', label: 'Shop', href: '/m/shop', Icon: IconShoppingBag },
  { id: 'gallery', label: 'Gallery', href: '/m/gallery', Icon: IconGrid },
  { id: 'more', label: 'More', href: '/m/more', Icon: MoreIcon },
];

function MoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <circle cx={12} cy={5} r={1} fill="currentColor" />
      <circle cx={12} cy={12} r={1} fill="currentColor" />
      <circle cx={12} cy={19} r={1} fill="currentColor" />
    </svg>
  );
}

export function MobileBottomNav() {
  const pathname = usePathname();
  const { count } = useCart();

  const isSubScreen = pathname.startsWith('/m/video') || pathname.startsWith('/m/blog') || pathname.startsWith('/m/partner');
  if (isSubScreen) return null;

  const activeTab = TABS.find((t) => pathname.startsWith(t.href))?.id;

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 bg-[var(--m-nav-bg)] backdrop-blur-md border-t border-[var(--m-border)]"
      style={{
        paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
        height: 'calc(68px + max(0px, env(safe-area-inset-bottom) - 16px))',
      }}
    >
      <div className="flex items-end justify-around h-full pb-3">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className="flex flex-col items-center gap-1 flex-1 py-2 transition-all duration-200"
            >
              <div className="relative">
                <tab.Icon className="h-6 w-6" style={{ color: isActive ? 'var(--m-accent)' : 'var(--m-sub)' }} />
                {tab.id === 'shop' && count > 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--m-accent)] text-[var(--m-btn-text)] text-xs font-bold">
                    {count}
                  </span>
                )}
              </div>
              <span
                className={`text-xs font-bold transition-colors ${
                  isActive ? 'text-[var(--m-accent)]' : 'text-[var(--m-sub)]'
                }`}
              >
                {tab.label}
              </span>
              {isActive && (
                <div className="h-0.5 w-6 rounded-full bg-[var(--m-accent)] mt-0.5" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
