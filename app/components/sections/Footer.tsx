'use client';

import { footerColumns, site } from '@/lib/data';
import { SplitBrand } from './shared';

const socialLinks = ['f', 'in', 'tw', 'yt'] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-footer px-4 py-14 text-cream md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <SplitBrand />
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">
              Cultivating Uganda&apos;s finest coffee, bananas, and beef from the fertile highlands of Mubende since {site.founded}.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-white/70">{column.title}</h3>
              <div className="grid gap-3">
                {column.links.map((link) => (
                  <a key={link} href="#contact" className="text-sm text-white/45 transition-colors hover:text-accent">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 text-sm text-white/35 sm:flex-row sm:items-center">
          <div>© 2026 {site.name}. All rights reserved. Mubende, Uganda.</div>
          <div className="flex gap-3">
            {socialLinks.map((handle) => (
              <a
                key={handle}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-xs font-bold transition-colors hover:bg-accent hover:text-forest"
              >
                {handle}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
