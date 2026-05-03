'use client';

import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Activities } from './sections/Activities';
import { VideoSection } from './sections/VideoSection';
import { Products } from './sections/Products';
import { Blog } from './sections/Blog';
import { Partnership } from './sections/Partnership';
import { Testimonials } from './sections/Testimonials';
import { OrderContact } from './sections/OrderContact';
import { Footer } from './sections/Footer';

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
