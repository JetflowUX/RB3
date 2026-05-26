import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative bg-brand-purple-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}
            className="relative">
            
            <div className="aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 bg-brand-purple-900 rounded-sm overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Luxurious dark salon interior"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-80" />
              
              <div className="absolute inset-0 bg-brand-purple-900/20 mix-blend-multiply"></div>
            </div>
            {/* Offset smaller image */}
            <div className="absolute -bottom-12 -right-6 md:-right-12 w-2/3 aspect-square bg-brand-purple-700 p-2 glass-panel hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80"
                alt="Premium salon chair"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover" />
              
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="flex flex-col justify-center">
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-brand-gold-500 font-serif text-xl italic">
                01
              </span>
              <span className="w-12 h-px bg-brand-gold-500/30"></span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold-400">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              More than a haircut.
              <br />
              <span className="italic text-brand-cream/70">A statement.</span>
            </h2>

            <div className="space-y-6 text-brand-cream/70 font-light leading-relaxed text-lg">
              <p>
                Founded in the heart of Charlotte, RB3 was born from a singular
                vision: to elevate the standard of grooming and styling. We
                don't just cut hair; we sculpt confidence.
              </p>
              <p>
                Our space is designed as a sanctuary for those who appreciate
                the finer details. From the ambient lighting to the precision of
                our shears, every element is curated to provide an unparalleled
                experience. We blend classic barbering techniques with modern
                editorial aesthetics.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="font-serif italic text-2xl text-brand-cream/90">
                "The Rock Boss standard is uncompromising."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}