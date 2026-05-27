import React from "react";
import { motion } from "framer-motion";

// Generate a themed SVG data URL with initials as a reliable portrait placeholder.
function portraitDataUrl(name: string) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const bg = "#1a0b2e"; // brand.purple.800
  const accent = "#d4af37"; // brand.gold.500
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1067' viewBox='0 0 800 1067'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop offset='0%' stop-color='#241043' />
        <stop offset='100%' stop-color='#130722' />
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)' />
    <rect width='100%' height='100%' fill='rgba(0,0,0,0.25)' />
    <text x='50%' y='48%' dominant-baseline='middle' text-anchor='middle' font-family='Playfair Display, serif' font-size='160' fill='${accent}' opacity='0.95'>${initials}</text>
    <text x='50%' y='60%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='28' fill='#fdfbf7' opacity='0.6'>${name}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const stylists = [
  {
    name: "Marcus Vance",
    title: "Master Barber / Founder",
    bio: "15 years of precision cutting. The original Rock Boss.",
  },
  {
    name: "Elena Rostova",
    title: "Senior Colorist",
    bio: "Editorial styling and custom color formulations.",
  },
  {
    name: "Julian Hayes",
    title: "Style Director",
    bio: "Specializing in modern texture and classic tapers.",
  },
];

export function Stylists() {
  return (
    <section
      id="stylists"
      className="py-24 lg:py-32 relative bg-brand-purple-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-brand-gold-500/30"></span>
              <span className="text-brand-gold-500 font-serif text-xl italic">
                03
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold-400">
                The Team
              </span>
              <span className="w-8 h-px bg-brand-gold-500/30"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">
              Meet the Artists
            </h2>
            <p className="text-brand-cream/60 max-w-2xl mx-auto text-sm leading-relaxed">
              Our roster of elite stylists and barbers bring decades of combined
              experience, continuous education, and an uncompromising eye for
              detail.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stylists.map((stylist, idx) => (
            <motion.div
              key={stylist.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
              }}
              className="group relative"
            >
              <div className="aspect-[3/4] w-full bg-brand-purple-900 overflow-hidden relative mb-6">
                <img
                  src={portraitDataUrl(stylist.name)}
                  alt={stylist.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                />

                {/* Glass overlay on hover */}
                <div className="absolute inset-0 bg-brand-purple-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-brand-cream/90 font-light mb-8 italic">
                    "{stylist.bio}"
                  </p>
                  <a
                    href="#book"
                    className="inline-flex items-center justify-center px-6 py-2 text-xs uppercase tracking-widest font-medium text-brand-cream border border-brand-gold-500/50 hover:bg-brand-gold-500 hover:text-brand-purple-900 hover:border-brand-gold-500 transition-all rounded-full"
                  >
                    Book with {stylist.name.split(" ")[0]}
                  </a>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-serif mb-1">{stylist.name}</h3>
                <p className="text-brand-gold-400 text-xs uppercase tracking-widest">
                  {stylist.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
