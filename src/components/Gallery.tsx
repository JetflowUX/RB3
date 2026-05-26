import React from 'react';
import { motion } from 'framer-motion';
import { Ornament } from './DesignSystem';
const images = [
{
  src: 'https://images.pexels.com/photos/3993316/pexels-photo-3993316.jpeg?auto=compress&cs=tinysrgb&w=800',
  alt: 'Blonde balayage',
  aspect: 'aspect-[3/4]'
},
{
  src: 'https://images.pexels.com/photos/3993131/pexels-photo-3993131.jpeg?auto=compress&cs=tinysrgb&w=800',
  alt: 'Brunette styling',
  aspect: 'aspect-[4/5]'
},
{
  src: 'https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=800',
  alt: 'Precision cut',
  aspect: 'aspect-square'
},
{
  src: 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=800',
  alt: 'Bridal updo',
  aspect: 'aspect-[4/3]'
},
{
  src: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=800',
  alt: 'Color transformation',
  aspect: 'aspect-[3/4]'
},
{
  src: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800',
  alt: 'Vibrant color',
  aspect: 'aspect-square'
}];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-32 relative z-10 bg-purple-surface/20 border-y border-gold/5">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Ornament className="w-4 h-4 text-gold" />
              <h2 className="text-xs font-medium tracking-widest uppercase text-gold">
                The Portfolio
              </h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-serif font-bold">
              Our Masterpieces
            </h3>
          </div>
          <div className="max-w-sm">
            <p className="text-white/70 text-sm font-light mb-6">
              A glimpse into the transformations created daily at RB3. Follow us
              on Instagram for more.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gold uppercase tracking-[0.2em] hover:text-gold-light flex items-center gap-2">
              
              View Full Gallery <span className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>

        {/* True Masonry via CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) =>
          <motion.div
            key={index}
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
              duration: 0.6,
              delay: index % 3 * 0.1
            }}
            className={`relative group overflow-hidden break-inside-avoid ${img.aspect}`}>
            
              <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-base/90 via-purple-base/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number Tag */}
              <div className="absolute top-4 right-4 text-[10px] font-serif italic text-white/70">
                0{index + 1} / 06
              </div>

              {/* Editorial Caption */}
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="h-px w-8 bg-gold mb-3" />
                <span className="text-white font-serif italic text-xl">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}