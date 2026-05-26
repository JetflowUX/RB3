import React from 'react';
import { motion } from 'framer-motion';
const testimonials = [
{
  quote:
  "The attention to detail is unmatched. I walked out feeling like a completely new person. RB3 isn't just a salon, it's an experience.",
  author: 'Jameson T.',
  role: 'Client since 2020'
},
{
  quote:
  "Elena's color work is pure artistry. The atmosphere is moody, luxurious, and completely unpretentious. Found my forever spot.",
  author: 'Sarah M.',
  role: 'Client since 2022'
}];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative bg-brand-purple-800 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {testimonials.map((t, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: idx * 0.2
            }}
            className="relative">
            
              <span className="absolute -top-10 -left-6 text-8xl font-serif text-brand-gold-500/10 leading-none">
                "
              </span>
              <blockquote className="relative z-10">
                <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-brand-cream/90 mb-8">
                  {t.quote}
                </p>
                <footer>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-brand-gold-500/50"></div>
                    <div>
                      <cite className="not-italic text-sm uppercase tracking-widest text-brand-gold-400 block mb-1">
                        {t.author}
                      </cite>
                      <span className="text-xs text-brand-cream/40 uppercase tracking-wider">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}