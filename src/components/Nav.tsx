import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Stylists',
    href: '#stylists'
  },
  {
    name: 'Gallery',
    href: '#gallery'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${isScrolled ? 'glass-panel bg-brand-purple-900/40' : 'bg-transparent'}`}>
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 z-50">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-brand-cream">
              RB3
            </span>
            <span className="hidden md:block w-px h-5 bg-brand-gold-500/50 mx-2"></span>
            <span className="hidden md:block text-xs uppercase tracking-[0.2em] text-brand-gold-400 font-medium mt-1">
              Rock Boss
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-brand-cream/80 hover:text-brand-gold-400 transition-colors">
              
                {link.name}
              </a>
            )}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <a
              href="#book"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm uppercase tracking-widest font-medium text-brand-purple-900 bg-brand-gold-500 hover:bg-brand-gold-400 transition-colors rounded-full">
              
              Book Now
            </a>
            <button
              className="md:hidden text-brand-cream hover:text-brand-gold-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400/30 rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 0.3
          }}
          id="mobile-menu"
          className="absolute top-full left-6 right-6 mt-2 glass-panel bg-brand-purple-900/90 rounded-2xl overflow-hidden md:hidden">
          
            <div className="flex flex-col py-6 px-8 gap-6">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-widest text-brand-cream hover:text-brand-gold-400 transition-colors border-b border-white/5 pb-4 block w-full">
                  {link.name}
                </a>
            )}
              <a
              href="#book"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center px-6 py-3 text-sm uppercase tracking-widest font-medium text-brand-purple-900 bg-brand-gold-500 rounded-full mt-2">
                Book Appointment
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}