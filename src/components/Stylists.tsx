import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Ornament, CornerBrackets } from './DesignSystem';
const stylists = [
{
  name: 'Elena Vance',
  specialty: 'Master Colorist & Balayage',
  image:
  'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800',
  handle: '@elenadoeshair'
},
{
  name: 'Marcus Chen',
  specialty: 'Precision Cuts & Styling',
  image:
  'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
  handle: '@marcus.cuts'
},
{
  name: 'Sophia Laurent',
  specialty: 'Extensions & Bridal',
  image:
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
  handle: '@sophia.styles'
}];

export function Stylists() {
  return (
    <section id="stylists" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Asymmetric Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Ornament className="w-4 h-4 text-gold" />
              <h2 className="text-xs font-medium tracking-widest uppercase text-gold">
                Meet The Team
              </h2>
              <div className="h-px w-12 bg-gold/40" />
            </div>
            <h3 className="text-5xl md:text-6xl font-serif font-bold leading-none">
              The Artists Behind <br className="hidden md:block" />
              <span className="italic text-white/80 font-light">the Chair</span>
            </h3>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:block h-px w-24 bg-gold/20" />
            <a href="#booking" className="btn-secondary whitespace-nowrap">
              Join Our Team
            </a>
          </div>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stylists.map((stylist, index) =>
          <motion.div
            key={index}
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
              margin: '-50px'
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2
            }}
            className={`group relative aspect-[3/4] ${index === 1 ? 'md:mt-24' : index === 2 ? 'md:mt-12' : ''}`}>
            
              <CornerBrackets />

              <div className="w-full h-full overflow-hidden relative bg-purple-surface">
                <img
                src={stylist.image}
                alt={stylist.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%]" />
              

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-base via-purple-base/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Outline Numeral */}
                <div className="absolute top-4 left-4 text-6xl font-serif italic text-stroke-gold opacity-50">
                  0{index + 1}
                </div>

                {/* Vertical Role */}
                <div className="absolute top-8 right-4 vertical-rl rotate-180 text-[10px] tracking-[0.3em] text-gold uppercase">
                  {stylist.specialty}
                </div>

                {/* Content Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl font-serif font-bold text-white mb-6">
                    {stylist.name}
                  </h4>

                  <div className="h-px w-full bg-gold/20 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />

                  {/* Hover Reveal Actions */}
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <a
                    href={`https://instagram.com/${stylist.handle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-gold text-xs tracking-wider">
                    
                      <Instagram className="w-4 h-4" />
                      {stylist.handle}
                    </a>
                    <a
                    href="#booking"
                    className="text-xs font-medium text-gold hover:text-gold-light uppercase tracking-[0.2em]">
                    
                      Book
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}