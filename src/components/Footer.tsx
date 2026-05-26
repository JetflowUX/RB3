import React from 'react';
import { MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-brand-purple-950 pt-20 pb-10 border-t border-brand-gold-500/10">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <span className="font-serif text-4xl font-bold tracking-wider text-brand-cream">
                RB3
              </span>
            </a>
            <p className="text-brand-gold-400 font-serif italic text-xl mb-4">
              Rock Boss
            </p>
            <p className="text-brand-cream/60 text-sm max-w-sm leading-relaxed">
              We cut the best hair in Charlotte, NC. A premium grooming and
              styling experience for those who demand excellence.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-brand-gold-400 mb-6">
              Location
            </h4>
            <div className="flex items-start gap-3 text-sm text-brand-cream/70">
              <MapPin
                size={16}
                className="mt-1 flex-shrink-0 text-brand-gold-500" />
              
              <p>
                1234 N Davidson St
                <br />
                Charlotte, NC 28206
                <br />
                NoDa District
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-brand-gold-400 mb-6">
              Social
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-cream/70 hover:text-brand-gold-400 hover:border-brand-gold-400 transition-colors">
                
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-cream/70 hover:text-brand-gold-400 hover:border-brand-gold-400 transition-colors">
                
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-cream/70 hover:text-brand-gold-400 hover:border-brand-gold-400 transition-colors">
                
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-cream/40">
          <p>
            &copy; {new Date().getFullYear()} RB3 Salon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-gold-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-gold-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}