import React from 'react';
import { motion } from 'framer-motion';
const images = [
{
  src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
  alt: 'Hair styling detail',
  className: 'col-span-1 row-span-2 aspect-[3/4]'
},
{
  src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
  alt: 'Woman with styled hair',
  className: 'col-span-1 row-span-1 aspect-square'
},
{
  src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
  alt: 'Hair washing station',
  className: 'col-span-1 row-span-1 aspect-square'
},
{
  src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
  alt: 'Stylist and client',
  className:
  'col-span-1 md:col-span-2 row-span-1 aspect-[21/9] md:aspect-[2/1]'
}];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 relative bg-brand-purple-900">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-gold-500 font-serif text-xl italic">
                04
              </span>
              <span className="w-12 h-px bg-brand-gold-500/30"></span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold-400">
                Lookbook
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif">The Aesthetic</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {images.map((img, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: idx * 0.15
            }}
            className={`relative overflow-hidden group bg-brand-purple-800 ${img.className}`}>
            
              <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-brand-purple-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}