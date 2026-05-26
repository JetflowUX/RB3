import React from "react";
import { Scissors, Instagram, Facebook, Twitter } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-purple-base border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-2 group mb-6">
              <Scissors className="w-6 h-6 text-gold group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                RB<span className="text-gold">3</span>
              </span>
            </a>
            <p className="text-white/60 font-light max-w-sm mb-6">
              Rock Boss. We cut the best hair in Charlotte, NC. Elevating
              everyday beauty with editorial precision and luxury service.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 inline-flex items-center justify-center text-white/60 hover:text-gold hover:bg-gold/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 inline-flex items-center justify-center text-white/60 hover:text-gold hover:bg-gold/10 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/5 inline-flex items-center justify-center text-white/60 hover:text-gold hover:bg-gold/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#stylists"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  The Team
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} RB3 Salon. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Designed with <span className="text-gold">♥</span> in Charlotte
          </p>
        </div>
      </div>
    </footer>
  );
}
