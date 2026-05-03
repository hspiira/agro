'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SubScreenHeader } from '@/app/(mobile)/_components/SubScreenHeader';
import { images, partnershipTypes, site } from '@/lib/data';
import { IconCheck } from '@/app/components/Icons';

type TabType = 'partner' | 'order';

export default function PartnerPage() {
  const [activeTab, setActiveTab] = useState<TabType>('partner');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="pt-16 pb-8">
      <SubScreenHeader title="Partnership" />

      <div className="px-4 pt-4 mb-6">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('partner')}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold text-sm transition-colors ${
              activeTab === 'partner'
                ? 'bg-[var(--m-accent)] text-[var(--m-btn-text)]'
                : 'bg-[var(--m-s2)] text-[var(--m-muted)]'
            }`}
          >
            Partner
          </button>
          <button
            onClick={() => setActiveTab('order')}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold text-sm transition-colors ${
              activeTab === 'order'
                ? 'bg-[var(--m-accent)] text-[var(--m-btn-text)]'
                : 'bg-[var(--m-s2)] text-[var(--m-muted)]'
            }`}
          >
            Order
          </button>
        </div>
      </div>

      {activeTab === 'partner' && (
        <div className="px-4 space-y-6">
          <div className="relative h-48 rounded-xl overflow-hidden">
            <Image
              src={images.partner}
              alt="Partnership"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <p className="text-white text-lg font-bold text-center px-4">
                Let's Grow Together
              </p>
            </div>
          </div>

          <div className="bg-[var(--m-s1)] border border-[var(--m-border)] rounded-lg p-4">
            <p className="text-sm text-[var(--m-muted)] leading-relaxed">
              Join us as a wholesale buyer, investor, NGO partner, or restaurant. We're building
              sustainable agriculture networks across Uganda.
            </p>
          </div>

          <div className="space-y-2">
            {partnershipTypes.map((type, idx) => (
              <button
                key={idx}
                className="w-full px-4 py-3 bg-[var(--m-s2)] text-[var(--m-text)] rounded-lg font-semibold text-sm active:opacity-70 transition-opacity"
              >
                {type}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2.5 bg-[var(--m-s2)] border border-[var(--m-border)] text-[var(--m-text)] rounded-lg text-sm placeholder-[var(--m-sub)] outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2.5 bg-[var(--m-s2)] border border-[var(--m-border)] text-[var(--m-text)] rounded-lg text-sm placeholder-[var(--m-sub)] outline-none"
              required
            />
            <textarea
              placeholder="Tell us about your interest..."
              rows={3}
              className="w-full px-4 py-2.5 bg-[var(--m-s2)] border border-[var(--m-border)] text-[var(--m-text)] rounded-lg text-sm placeholder-[var(--m-sub)] outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[var(--m-accent)] text-[var(--m-btn-text)] py-3 rounded-lg font-semibold active:opacity-80 flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <IconCheck className="h-5 w-5" />
                  Sent!
                </>
              ) : (
                'Send Inquiry'
              )}
            </button>
          </form>
        </div>
      )}

      {activeTab === 'order' && (
        <div className="px-4 space-y-4">
          <div className="bg-[var(--m-s1)] border border-[var(--m-border)] rounded-lg p-4">
            <p className="text-sm text-[var(--m-muted)] leading-relaxed">
              Place a bulk order with delivery to your location. Our farm team will confirm availability
              and coordinate logistics with you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2.5 bg-[var(--m-s2)] border border-[var(--m-border)] text-[var(--m-text)] rounded-lg text-sm placeholder-[var(--m-sub)] outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2.5 bg-[var(--m-s2)] border border-[var(--m-border)] text-[var(--m-text)] rounded-lg text-sm placeholder-[var(--m-sub)] outline-none"
              required
            />
            <select className="w-full px-4 py-2.5 bg-[var(--m-s2)] border border-[var(--m-border)] text-[var(--m-text)] rounded-lg text-sm outline-none">
              <option value="">Select Product</option>
              <option value="coffee">Arabica Coffee Beans</option>
              <option value="banana">East African Bananas</option>
              <option value="beef">Premium Beef Cuts</option>
            </select>
            <input
              type="number"
              placeholder="Quantity (kg)"
              className="w-full px-4 py-2.5 bg-[var(--m-s2)] border border-[var(--m-border)] text-[var(--m-text)] rounded-lg text-sm placeholder-[var(--m-sub)] outline-none"
              required
            />
            <select className="w-full px-4 py-2.5 bg-[var(--m-s2)] border border-[var(--m-border)] text-[var(--m-text)] rounded-lg text-sm outline-none">
              <option value="">Select Delivery Option</option>
              <option value="farm">Pickup at Farm</option>
              <option value="kampala">Kampala Delivery</option>
              <option value="mubende">Mubende Town</option>
            </select>
            <button
              type="submit"
              className="w-full bg-[var(--m-accent)] text-[var(--m-btn-text)] py-3 rounded-lg font-semibold active:opacity-80 flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <IconCheck className="h-5 w-5" />
                  Submitted!
                </>
              ) : (
                'Submit Order'
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
