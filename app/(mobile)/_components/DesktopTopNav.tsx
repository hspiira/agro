'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart';
import { site } from '@/lib/data';
import { IconHome, IconLeaf, IconShoppingBag, IconGrid } from '@/app/components/Icons';

const NAV_ITEMS = [
  { id: 'home',    label: 'Home',    href: '/m/home',    Icon: IconHome },
  { id: 'about',   label: 'About',   href: '/m/about',   Icon: IconLeaf },
  { id: 'shop',    label: 'Shop',    href: '/m/shop',    Icon: IconShoppingBag },
  { id: 'gallery', label: 'Gallery', href: '/m/gallery', Icon: IconGrid },
];

export function DesktopTopNav() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="hidden md:flex fixed inset-x-0 top-0 z-50 h-16 items-center justify-between px-8 lg:px-12 bg-[var(--m-nav-bg)] backdrop-blur-md border-b border-[var(--m-border)]">
      {/* Brand */}
      <Link href="/m/home" className="flex items-center gap-2 shrink-0">
        <span className="font-serif text-xl font-bold text-[var(--m-text)]">
          Alm <span className="text-[var(--m-accent)]">Agros</span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--m-sub)] hidden lg:block">
          Mubende, Uganda
        </span>
      </Link>

      {/* Nav links */}
      <nav className="flex items-center gap-1" aria-label="Primary navigation">
        {NAV_ITEMS.map(({ id, label, href, Icon }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={id}
              href={href}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'text-[var(--m-accent)] bg-[var(--m-accent-dim)]'
                  : 'text-[var(--m-sub)] hover:text-[var(--m-text)] hover:bg-[var(--m-s2)]'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
              {id === 'shop' && count > 0 && (
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[var(--m-accent)] text-[var(--m-btn-text)] text-[10px] font-bold">
                  {count}
                </span>
              )}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-[var(--m-accent)]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right side actions */}
      <div className="flex items-center gap-3 shrink-0">
        <a
          href={`https://wa.me/${site.phone.replace(/\s+/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[var(--m-sub)] hover:text-[var(--m-text)] transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.117 1.516 5.845L.057 23.7a.5.5 0 0 0 .614.636l6.04-1.581A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.026-1.37l-.36-.214-3.735.979.996-3.636-.235-.374A9.86 9.86 0 0 1 2.1 12C2.1 6.534 6.534 2.1 12 2.1c5.465 0 9.9 4.434 9.9 9.9 0 5.465-4.435 9.9-9.9 9.9z" />
          </svg>
          WhatsApp Us
        </a>
        <Link
          href="/m/shop"
          className="bg-[var(--m-accent)] text-[var(--m-btn-text)] px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}
