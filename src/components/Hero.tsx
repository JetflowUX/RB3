import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background subtle glow (hidden on very small screens to avoid overflow) */}
      <div className="hidden sm:block absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-purple-700/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="hidden sm:block absolute bottom-0 right-0 w-1/3 h-1/3 bg-brand-gold-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              <p className="text-brand-gold-400 text-xs md:text-sm uppercase tracking-[0.3em] font-medium mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-brand-gold-500/50"></span>
                Charlotte, NC — Est. 2018
              </p>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            >
              <span className="block text-brand-cream/90 italic mb-2">
                We cut the
              </span>
              <span className="block text-brand-cream">Best Hair</span>
              <span className="block text-brand-cream/70 text-4xl md:text-6xl lg:text-7xl mt-4">
                in Charlotte.
              </span>
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href="#book"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest font-medium text-brand-purple-900 bg-brand-gold-500 overflow-hidden rounded-full transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Your Cut
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-brand-gold-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              </a>

              <a
                href="#services"
                className="text-sm uppercase tracking-widest text-brand-cream hover:text-brand-gold-400 transition-colors border-b border-transparent hover:border-brand-gold-400 pb-1"
              >
                View Services
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none lg:ml-auto"
            >
              <div className="absolute inset-0 bg-brand-purple-800 rounded-t-full rounded-b-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
                  alt="Barber styling hair in a moody salon"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 mix-blend-luminosity hover:mix-blend-normal"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-900 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-brand-gold-500/30 rounded-full"></div>
              <div className="absolute top-12 -right-4 w-24 h-24 border border-brand-gold-500/20 rounded-full"></div>

              {/* Floating badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                }}
                className="absolute top-1/4 -right-4 md:-right-12 glass-panel bg-brand-purple-900/60 p-4 rounded-2xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-brand-gold-500/20 flex items-center justify-center text-brand-gold-400 font-serif italic text-xl">
                  RB3
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand-cream/60">
                    Signature
                  </p>
                  <p className="text-sm font-medium text-brand-cream">
                    Rock Boss Style
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
