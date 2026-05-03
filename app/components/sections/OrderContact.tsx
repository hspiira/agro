'use client';

import { FormEvent, useState } from 'react';
import { contactDetails, products } from '@/lib/data';
import { IconPackage, IconBuilding, IconMapPin, IconPhone, IconMail, IconClock, IconCheck } from '@/app/components/Icons';
import { SectionLabel } from './shared';

const contactIconMap: Record<string, React.FC<{ className?: string }>> = {
  Location: IconMapPin,
  'Phone / WhatsApp': IconPhone,
  Email: IconMail,
  'Farm Hours': IconClock,
};

export function OrderContact() {
  const [tab, setTab] = useState<'order' | 'wholesale'>('order');
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
          <h2 className="mb-8 font-serif text-4xl font-bold tracking-tight md:text-5xl">Place an Order</h2>
          <div className="mb-8 grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-surface p-1">
            {([
              ['order', IconPackage, 'Single Order'] as const,
              ['wholesale', IconBuilding, 'Wholesale'] as const,
            ]).map(([id, Icon, label]) => (
              <button
                key={id}
                type="button"
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition-colors ${tab === id ? 'bg-accent text-forest' : 'text-cream/55 hover:text-cream'}`}
                onClick={() => setTab(id as 'order' | 'wholesale')}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
          {sent ? (
            <div className="flex items-center justify-center gap-3 rounded-xl border border-leaf/40 bg-leaf/10 p-5 text-center font-bold text-leaf">
              <IconCheck className="h-5 w-5 flex-shrink-0" />
              Order received. We&apos;ll confirm via WhatsApp shortly.
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={submitOrder}>
              <input className="field" name="name" placeholder="Full Name" required />
              <input className="field" name="phone" placeholder="Phone / WhatsApp" required />
              <select className="field" name="product" defaultValue="">
                <option value="" disabled>Select Product</option>
                {products.map((product) => (
                  <option key={product.name}>{product.name}</option>
                ))}
              </select>
              <input
                className="field"
                name="quantity"
                placeholder={tab === 'order' ? 'Quantity (e.g. 2kg)' : 'Volume / Monthly Estimate'}
                required
              />
              <input className="field" name="delivery" placeholder="Delivery address or pickup preference" />
              <button className="rounded-lg bg-accent px-5 py-4 text-sm font-bold text-forest transition-opacity hover:opacity-85" type="submit">
                Submit Order
              </button>
            </form>
          )}
        </div>
        <div>
          <SectionLabel>Find Us</SectionLabel>
          <h2 className="mb-8 font-serif text-4xl font-bold tracking-tight md:text-5xl">Contact &amp; Location</h2>
          <div className="rounded-2xl border border-white/10 bg-surface p-7">
            {contactDetails.map((detail) => {
              const Icon = contactIconMap[detail.title];
              return (
                <div key={detail.title} className="mb-7 flex gap-4 last:mb-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-cream">{detail.title}</h3>
                    <p className="mt-1 whitespace-pre-line text-sm leading-6 text-cream/55">{detail.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Mubende%2C%20Uganda"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex min-h-56 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-surface text-center transition-colors hover:border-accent/50"
          >
            <span className="text-5xl">🗺️</span>
            <span className="font-mono text-xs text-cream/35">0.5893 N 31.3642 E - Mubende</span>
            <span className="text-sm font-bold text-accent">Open in Google Maps →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
