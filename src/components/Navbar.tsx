import React, { useEffect, useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'About',
    href: '#about'
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
    name: 'Reviews',
    href: '#reviews'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel border-b border-gold/10' : 'py-6 bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Scissors className="w-6 h-6 text-gold group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-serif text-2xl font-bold tracking-wider text-white">
              RB<span className="text-gold">3</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors">
              
                {link.name}
              </a>
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#booking" className="btn-primary py-2.5 text-sm">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">
            
            {isMobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
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
          className="absolute top-full left-0 right-0 glass-panel border-b border-gold/20 md:hidden">
          
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif text-white/90 hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              
                  {link.name}
                </a>
            )}
              <a
              href="#booking"
              className="btn-primary w-full mt-4"
              onClick={() => setIsMobileMenuOpen(false)}>
              
                Book Appointment
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}