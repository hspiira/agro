"use client";

import { useState, useEffect } from "react";
import { classes } from "@/lib/theme";
import { site, header } from "@/lib/data";
import { LeafLogo } from "./LeafLogo";

const SCROLL_THRESHOLD = 16;

function IconMenu({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${classes.topBar} ${classes.topBarTransparent} ${scrolled ? classes.topBarScrolled : ""}`}>
      <div className="flex items-center gap-4 md:gap-6">
        <a href="/" className="flex items-center gap-2 text-white font-semibold shrink-0">
          <LeafLogo className="h-7 w-7" />
          <span className="text-lg">{site.name}</span>
        </a>
        <div className={classes.topBarContact}>
          <a href={`tel:${header.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
            {header.phone}
          </a>
          <a href={`mailto:${header.email}`} className="hover:text-white transition-colors">
            {header.email}
          </a>
        </div>
      </div>

      <nav className={classes.topBarNav}>
        {header.links.map((link) => (
          <a key={link.href} href={link.href} className={classes.topBarLink}>
            {link.label}
          </a>
        ))}
        <a href={header.signUp.href} className={classes.topBarSignUp}>
          {header.signUp.label}
        </a>
        <a href={header.login.href} className={classes.btnPrimaryHeader}>
          <span className={classes.loginDot} aria-hidden />
          {header.login.label}
        </a>
      </nav>

      <button
        type="button"
        onClick={() => setMobileOpen((o) => !o)}
        className={classes.mobileMenuButton}
        aria-expanded={mobileOpen}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
      </button>

      {mobileOpen && (
        <div className={classes.mobileMenu}>
          {header.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={classes.mobileMenuLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={classes.mobileMenuCtas}>
            <a href={header.signUp.href} className={`${classes.topBarSignUp} flex-1 justify-center py-2`} onClick={() => setMobileOpen(false)}>
              {header.signUp.label}
            </a>
            <a href={header.login.href} className={`${classes.btnPrimaryHeader} flex-1 justify-center`} onClick={() => setMobileOpen(false)}>
              <span className={classes.loginDot} aria-hidden />
              {header.login.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
