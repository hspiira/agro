"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import {
  activities,
  blogPosts,
  contactDetails,
  farmValues,
  footerColumns,
  heroStats,
  images,
  navLinks,
  partnershipTypes,
  products,
  site,
  testimonials,
} from "@/lib/data";

const badgeTones = {
  accent: "bg-accent/15 text-accent",
  green: "bg-leaf/15 text-leaf",
  muted: "bg-white/10 text-cream/60",
} as const;

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

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.6v12.8L18.5 12 8 5.6Z" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">{children}</div>;
}

function SplitBrand() {
  const [first, ...rest] = site.name.split(" ");

  return (
    <span className="font-serif text-xl font-bold text-current">
      {first} <span className="text-accent">{rest.join(" ")}</span>
    </span>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-white/10 bg-forest/95 px-4 py-3 text-cream shadow-xl shadow-black/20 backdrop-blur-md md:px-12"
          : "border-transparent bg-transparent px-4 py-5 text-white md:px-12"
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
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
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

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-forest pt-28 text-white">
      <Image
        src={images.hero}
        alt="Green farm landscape in Uganda"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35 saturate-125"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.22),rgba(0,0,0,0.58))]" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pb-36 pt-16 md:px-12 md:pt-24">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {site.location}
        </div>
        <h1 className="max-w-4xl font-serif text-5xl font-black leading-none text-white md:text-7xl lg:text-8xl">
          Farm Fresh,
          <br />
          <em className="font-serif text-accent">Grown with</em>
          <br />
          Purpose
        </h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
          {site.tagline}. Coffee, bananas and premium cattle raised on rich Ugandan soil.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#products" className="rounded-lg bg-accent px-8 py-4 text-sm font-bold text-forest transition-opacity hover:opacity-85">
            Shop Our Products
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-3 rounded-lg border border-white/40 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <PlayIcon className="h-4 w-4" />
            Watch Our Story
          </a>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-5 px-4 pb-8 md:grid-cols-4 md:gap-12 md:px-12 md:pb-12">
          {heroStats.map((stat) => (
            <div key={stat.label} className="border-l-4 border-accent pl-4">
              <div className="font-serif text-3xl font-bold leading-none text-white md:text-4xl">{stat.value}</div>
              <div className="mt-2 text-xs font-medium text-white/55 md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-forest px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative min-h-[460px] overflow-hidden rounded-2xl">
          <Image src={images.about} alt="Alm Agros cultivated field" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute bottom-6 right-4 rounded-xl bg-accent px-7 py-5 text-forest shadow-2xl md:-right-5">
            <div className="text-3xl">Growing</div>
            <div className="mt-1 font-serif text-lg font-bold">Est. {site.founded}</div>
          </div>
        </div>

        <div className="self-center">
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="max-w-2xl font-serif text-4xl font-bold leading-tight text-cream md:text-5xl">
            Rooted in the
            <br />
            <em className="text-accent">Red Soils of Mubende</em>
          </h2>
          <p className="mt-7 text-base leading-8 text-cream/60 md:text-lg">
            Nestled in the fertile highlands of Mubende District, our farm has been cultivating Uganda&apos;s finest coffee, bananas, and cattle for over a decade. We combine generational farming wisdom with modern, sustainable practices.
          </p>
          <p className="mt-5 text-base leading-8 text-cream/60 md:text-lg">
            We believe that great food starts with healthy land. Every acre we tend and every animal we raise reflects our commitment to quality, community, and the future of Ugandan agriculture.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {farmValues.map((value) => (
              <div key={value.title} className="rounded-xl border border-white/10 bg-surface p-5">
                <div className="mb-3 inline-flex rounded-md bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  {value.icon}
                </div>
                <h3 className="font-bold text-cream">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cream/55">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section id="activities" className="bg-forest-deep px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Farm Life</SectionLabel>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Activities &
              <br />
              Gallery
            </h2>
          </div>
          <a href="#contact" className="w-fit border-b border-accent pb-1 text-sm font-bold text-accent">
            Plan a farm visit
          </a>
        </div>

        <div className="grid auto-rows-[240px] gap-4 md:grid-cols-4 md:auto-rows-[280px]">
          {activities.map((activity) => {
            const featured = "featured" in activity && activity.featured;
            const tag = "tag" in activity ? activity.tag : undefined;

            return (
            <article
              key={activity.label}
              className={`group relative overflow-hidden rounded-2xl ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <Image
                src={activity.image}
                alt={activity.label}
                fill
                sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.74),transparent_62%)]" />
              {tag && (
                <div className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-forest">{tag}</div>
              )}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-bold text-white">{activity.label}</h3>
                <p className="mt-1 text-sm text-white/65">{activity.body}</p>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="story" className="bg-forest px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px] text-center">
        <SectionLabel>Our Farm Story</SectionLabel>
        <h2 className="font-serif text-4xl font-bold md:text-5xl">See How We Farm</h2>
        <button
          type="button"
          className="group relative mx-auto mt-12 block aspect-video w-full max-w-5xl overflow-hidden rounded-[20px] bg-black text-left"
          onClick={() => setPlaying(true)}
          aria-label="Play farm story video"
        >
          <Image src={images.farm1} alt="Coffee farm workers at Alm Agros" fill sizes="(min-width: 1024px) 900px, 100vw" className="object-cover opacity-70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-forest shadow-[0_0_42px_rgba(232,160,32,0.38)] transition-transform group-hover:scale-105">
              <PlayIcon className="h-9 w-9" />
            </div>
            <div className="mt-5 text-sm font-semibold text-white">
              {playing ? "Preview selected" : `Watch: A Day at ${site.name}`}
            </div>
          </div>
        </button>
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
          {[
            ["Sunrise to Harvest", "Follow our farmers from dawn through the full daily harvest cycle."],
            ["Coffee Processing", "From cherry to cup through artisan wet and dry processing methods."],
            ["Cattle Life", "Pasture management, feeding routines, and animal welfare practices."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-xl border border-white/10 bg-surface p-6 text-center">
              <h3 className="font-bold text-cream">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/55">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const [addedProduct, setAddedProduct] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);

  function addToOrder(name: string) {
    setAddedProduct(name);
    setCartCount((count) => count + 1);
    window.setTimeout(() => setAddedProduct(null), 1400);
  }

  return (
    <section id="products" className="bg-forest-deep px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>What We Grow</SectionLabel>
            <h2 className="font-serif text-4xl font-bold md:text-5xl">Product Catalog</h2>
          </div>
          <div className="w-fit rounded-lg bg-accent px-5 py-3 text-sm font-bold text-forest">Cart ({cartCount})</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-2xl border border-white/10 bg-card transition-transform duration-200 hover:-translate-y-1">
              <div className="relative h-56">
                <Image src={product.image} alt={product.name} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <div className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase ${badgeTones[product.tone]}`}>
                  {product.badge}
                </div>
                <h3 className="font-bold text-cream">{product.name}</h3>
                <p className="mt-2 text-sm text-cream/55">{product.body}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-serif text-2xl font-bold text-accent">{product.price}</span>
                  <span className="text-sm text-cream/45">{product.unit}</span>
                </div>
                <button
                  type="button"
                  className="mt-6 w-full rounded-lg bg-accent px-4 py-3 text-sm font-bold text-forest transition-opacity hover:opacity-85"
                  onClick={() => addToOrder(product.name)}
                >
                  {addedProduct === product.name ? "Added" : "Add to Order"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="bg-forest px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel>Farming Knowledge</SectionLabel>
        <h2 className="mb-12 font-serif text-4xl font-bold md:text-5xl">Advice & Insights</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-2xl border border-white/10 bg-card transition-transform duration-200 hover:-translate-y-1">
              <div className="relative h-56">
                <Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-7">
                <div className="mb-4 inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase text-accent">{post.category}</div>
                <h3 className="font-serif text-xl font-bold leading-snug text-cream">{post.title}</h3>
                <div className="mt-5 flex gap-3 text-sm text-cream/45">
                  <span>{post.date}</span>
                  <span aria-hidden>-</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partnership() {
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="partnership" className="bg-forest-deep px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative min-h-[360px] overflow-hidden rounded-[20px] lg:min-h-[520px]">
          <Image src={images.partner} alt="Partners meeting at a farm" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="self-center">
          <SectionLabel>Work With Us</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
            Let&apos;s Grow
            <br />
            <em className="text-accent">Together</em>
          </h2>
          <p className="mt-6 text-base leading-8 text-cream/60">
            Whether you&apos;re a restaurant sourcing fresh ingredients, an NGO driving food security, or an investor in Ugandan agriculture, we have a partnership model for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {partnershipTypes.map((type) => (
              <span key={type} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-cream/55">
                {type}
              </span>
            ))}
          </div>
          {sent ? (
            <div className="mt-8 rounded-xl border border-leaf/40 bg-leaf/10 p-5 text-center font-bold text-leaf">
              Thank you. We&apos;ll be in touch within 48 hours.
            </div>
          ) : (
            <form className="mt-8 grid gap-4" onSubmit={submitForm}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="field" name="name" placeholder="Your Name" required />
                <input className="field" name="organisation" placeholder="Organisation" />
              </div>
              <input className="field" name="type" placeholder="Partnership type" />
              <textarea className="field min-h-28 resize-y" name="message" placeholder="Tell us about your needs..." />
              <button className="rounded-lg bg-accent px-5 py-4 text-sm font-bold text-forest transition-opacity hover:opacity-85" type="submit">
                Send Partnership Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((value) => (value + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-forest px-4 py-20 text-cream md:px-12 md:py-28">
      <Image src={images.farm1} alt="" fill sizes="100vw" className="object-cover opacity-15 saturate-50" />
      <div className="absolute inset-0 bg-forest/80" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <SectionLabel>What People Say</SectionLabel>
        <h2 className="mb-12 font-serif text-4xl font-bold text-white md:text-5xl">Trusted by Buyers Across East Africa</h2>
        <div className="px-2">
          <div className="font-serif text-7xl leading-none text-accent">&quot;</div>
          <p className="mx-auto max-w-3xl font-serif text-xl italic leading-9 text-white/90 md:text-2xl">{testimonial.quote}</p>
          <div className="mx-auto mt-9 flex h-14 w-14 items-center justify-center rounded-full bg-accent font-bold text-forest">
            {testimonial.initials}
          </div>
          <div className="mt-4 font-bold text-white">{testimonial.name}</div>
          <div className="mt-1 text-sm text-white/50">{testimonial.role}</div>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              className={`h-2 rounded-full transition-all ${index === current ? "w-8 bg-accent" : "w-2 bg-white/30"}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function OrderContact() {
  const [tab, setTab] = useState<"order" | "wholesale">("order");
  const [sent, setSent] = useState(false);

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-forest px-4 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="mb-8 font-serif text-4xl font-bold md:text-5xl">Place an Order</h2>
          <div className="mb-8 grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-surface p-1">
            {[
              ["order", "Single Order"],
              ["wholesale", "Wholesale"],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={`rounded-lg px-4 py-3 text-sm font-bold transition-colors ${tab === id ? "bg-accent text-forest" : "text-cream/55 hover:text-cream"}`}
                onClick={() => setTab(id as "order" | "wholesale")}
              >
                {label}
              </button>
            ))}
          </div>
          {sent ? (
            <div className="rounded-xl border border-leaf/40 bg-leaf/10 p-5 text-center font-bold text-leaf">
              Order received. We&apos;ll confirm via WhatsApp shortly.
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={submitOrder}>
              <input className="field" name="name" placeholder="Full Name" required />
              <input className="field" name="phone" placeholder="Phone / WhatsApp" required />
              <select className="field" name="product" defaultValue="">
                <option value="" disabled>
                  Select Product
                </option>
                {products.map((product) => (
                  <option key={product.name}>{product.name}</option>
                ))}
              </select>
              <input className="field" name="quantity" placeholder={tab === "order" ? "Quantity (e.g. 2kg)" : "Volume / Monthly Estimate"} required />
              <input className="field" name="delivery" placeholder="Delivery address or pickup preference" />
              <button className="rounded-lg bg-accent px-5 py-4 text-sm font-bold text-forest transition-opacity hover:opacity-85" type="submit">
                Submit Order
              </button>
            </form>
          )}
        </div>
        <div>
          <SectionLabel>Find Us</SectionLabel>
          <h2 className="mb-8 font-serif text-4xl font-bold md:text-5xl">Contact & Location</h2>
          <div className="rounded-2xl border border-white/10 bg-surface p-7">
            {contactDetails.map((detail) => (
              <div key={detail.title} className="mb-7 flex gap-4 last:mb-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold uppercase text-accent">
                  {detail.title.slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-bold text-cream">{detail.title}</h3>
                  <p className="mt-1 whitespace-pre-line text-sm leading-6 text-cream/55">{detail.body}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Mubende%2C%20Uganda"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex min-h-56 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-surface text-center transition-colors hover:border-accent/50"
          >
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Map</span>
            <span className="font-mono text-xs text-cream/35">0.5893 N 31.3642 E - Mubende</span>
            <span className="text-sm font-bold text-accent">Open in Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
            {["f", "in", "tw", "yt"].map((item) => (
              <a
                key={item}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-xs font-bold transition-colors hover:bg-accent hover:text-forest"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function AlmAgrosSite() {
  return (
    <div className="min-h-screen bg-forest text-cream">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <VideoSection />
        <Products />
        <Blog />
        <Partnership />
        <Testimonials />
        <OrderContact />
      </main>
      <Footer />
    </div>
  );
}
