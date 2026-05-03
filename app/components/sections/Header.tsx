'use client';

import { useEffect, useState } from 'react';
import { navLinks, site } from '@/lib/data';
import { SplitBrand } from './shared';

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-white/10 bg-forest/95 px-4 py-3 text-cream shadow-xl shadow-black/20 backdrop-blur-md md:px-12'
          : 'border-transparent bg-transparent px-4 py-5 text-white md:px-12'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6">
        <a href="#" className="shrink-0" aria-label={`${site.name} home`}>
          <SplitBrand />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-current/75 transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md bg-accent px-6 py-3 text-sm font-bold text-forest transition-opacity hover:opacity-85 sm:inline-flex"
        >
          Order Now
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/10 text-current lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-4 max-w-[1400px] border-t border-white/10 pt-4 lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-sm font-semibold text-cream/80 transition-colors hover:bg-white/5 hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="mt-3 flex justify-center rounded-md bg-accent px-5 py-3 text-sm font-bold text-forest"
            onClick={() => setOpen(false)}
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
