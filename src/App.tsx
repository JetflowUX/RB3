import React from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { About } from './components/About';
import { Stylists } from './components/Stylists';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-purple-base text-white selection:bg-gold/30 selection:text-white">
      <BackgroundGlow />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Stylists />
        <Gallery />
        <Marquee />
        <Testimonials />
        <Booking />
      </main>

      <Footer />
    </div>);

}