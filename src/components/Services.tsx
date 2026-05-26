import React from 'react';
import { motion } from 'framer-motion';
const servicesList = [
{
  category: 'Cuts & Styling',
  items: [
  {
    name: 'The Signature Cut',
    price: '$65',
    desc: 'Precision cut, wash, hot towel, and styling.'
  },
  {
    name: 'Executive Restyle',
    price: '$85',
    desc: 'Complete transformation with consultation.'
  },
  {
    name: 'Clean Up & Line',
    price: '$35',
    desc: 'Edges, neck, and sideburns maintenance.'
  },
  {
    name: 'Kids Cut (Under 12)',
    price: '$45',
    desc: 'Premium service for the younger bosses.'
  }]

},
{
  category: 'Grooming & Color',
  items: [
  {
    name: 'Beard Sculpt & Shave',
    price: '$45',
    desc: 'Straight razor finish, oils, and hot towel.'
  },
  {
    name: 'Full Color / Highlights',
    price: 'from $120',
    desc: 'Custom color formulation and application.'
  },
  {
    name: 'Grey Blending',
    price: '$55',
    desc: 'Subtle, natural-looking grey reduction.'
  },
  {
    name: 'Scalp Treatment',
    price: '$40',
    desc: 'Exfoliation, massage, and deep conditioning.'
  }]

}];

export function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative bg-brand-purple-900">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
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
                02
              </span>
              <span className="w-12 h-px bg-brand-gold-500/30"></span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold-400">
                Menu
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif">
              Signature Services
            </h2>
          </motion.div>

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
              duration: 0.6,
              delay: 0.2
            }}>
            
            <p className="text-brand-cream/60 max-w-sm text-sm leading-relaxed">
              Every service includes a consultation, premium product
              application, and a complimentary beverage from our bar.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {servicesList.map((section, sectionIdx) =>
          <motion.div
            key={section.category}
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
              delay: sectionIdx * 0.2
            }}>
            
              <h3 className="text-2xl font-serif italic text-brand-gold-400 mb-8 pb-4 border-b border-brand-gold-500/20">
                {section.category}
              </h3>

              <div className="space-y-6">
                {section.items.map((item, idx) =>
              <div key={idx} className="group cursor-default">
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="text-lg font-medium text-brand-cream group-hover:text-brand-gold-300 transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex-grow mx-4 border-b border-dashed border-white/20 group-hover:border-brand-gold-500/40 transition-colors relative top-[-6px]"></div>
                      <span className="text-brand-gold-400 font-serif text-xl">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-brand-cream/50 font-light">
                      {item.desc}
                    </p>
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}