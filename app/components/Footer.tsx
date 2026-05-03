"use client";

import { useState } from "react";
import { classes } from "@/lib/theme";
import { footer } from "@/lib/data";
import { LeafLogo } from "./LeafLogo";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className={classes.footer}>
      <div className={classes.footerInner}>
        <div className={classes.footerGrid}>
            <div className={classes.footerBrand}>
              <a href="/" className="flex items-center gap-2 text-white font-semibold mb-2">
                <LeafLogo className="h-6 w-6" />
                <span>{footer.brandName}</span>
              </a>
              <p className={classes.footerTagline}>{footer.tagline}</p>
            </div>
            {footer.columns.map((col) => (
              <div key={col.title} className={classes.footerColumn}>
                <p className={classes.footerColumnTitle}>{col.title}</p>
                <ul className={classes.footerLinks}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={classes.footerLink}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={classes.footerContact}>
              <p className={classes.footerColumnTitle}>{footer.contactTitle}</p>
              <a href={`mailto:${footer.contactEmail}`} className={`${classes.footerLink} block`}>{footer.contactEmail}</a>
              <a href={`tel:${footer.contactPhone.replace(/\s/g, "")}`} className={classes.footerLink}>{footer.contactPhone}</a>
            </div>
            <div className={classes.footerNewsletter}>
              <p className={classes.footerNewsletterTitle}>{footer.newsletterTitle}</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  placeholder={footer.newsletterPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={classes.footerInput}
                  aria-label="Email for newsletter"
                />
                <button type="submit" className={classes.footerSubmit}>
                  {footer.newsletterButton}
                </button>
              </form>
            </div>
        </div>
        <div className={classes.footerBottom}>
          <span>{footer.copyright}</span>
          <div className={classes.footerBottomLinks}>
            {footer.bottomLinks.map((link) => (
              <a key={link.label} href={link.href} className={classes.footerLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
