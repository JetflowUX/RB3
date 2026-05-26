import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Stylists } from './components/Stylists';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { BookingCta } from './components/BookingCta';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-brand-purple-900 text-brand-cream selection:bg-brand-gold-500/30 selection:text-brand-gold-300">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Stylists />
        <Gallery />
        <Testimonials />
        <BookingCta />
      </main>
      <Footer />
    </div>);

}