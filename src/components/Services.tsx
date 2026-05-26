import React from "react";
import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Droplets,
  Wind,
  Heart,
  Crown,
  ArrowRight,
} from "lucide-react";
import { Ornament } from "./DesignSystem";
const services = [
  {
    icon: Scissors,
    title: "Precision Cuts",
    description:
      "Tailored haircuts designed to complement your face shape, lifestyle, and personal aesthetic.",
    price: "From $85",
    img: "https://images.pexels.com/photos/3993316/pexels-photo-3993316.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Sparkles,
    title: "Color & Highlights",
    description:
      "Dimensional color, root touch-ups, and full transformations using premium, hair-safe products.",
    price: "From $120",
    img: "https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Droplets,
    title: "Balayage",
    description:
      "Hand-painted, sun-kissed highlights for a natural, low-maintenance grow-out.",
    price: "From $195",
    img: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Wind,
    title: "Styling & Blowouts",
    description:
      "Signature bouncy blowouts and sleek styling for events, nights out, or just because.",
    price: "From $65",
    img: "https://images.pexels.com/photos/3993131/pexels-photo-3993131.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Heart,
    title: "Treatments",
    description:
      "Deep conditioning, keratin, and scalp treatments to restore health and shine to your hair.",
    price: "From $45",
    img: "https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Crown,
    title: "Bridal & Event",
    description:
      "Flawless, long-lasting hair styling for your most important days. In-salon or on-location.",
    price: "Consultation",
    img: "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Asymmetric Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-end">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Ornament className="w-4 h-4 text-gold shrink-0" />
              <h2 className="text-xs font-medium tracking-widest uppercase text-gold">
                Our Expertise
              </h2>
              <div className="h-px w-12 bg-gold/40 shrink-0" />
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Signature Services
            </h3>
          </div>

          <div className="md:border-l md:border-gold/20 md:pl-8">
            <span className="block text-xs font-serif italic text-gold/60 mb-3">
              NO. 01 — 06
            </span>
            <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-md">
              Elevate your look with our comprehensive range of luxury hair
              services, executed with precision and artistry.
            </p>
          </div>
        </div>

        {/* Editorial List */}
        <div className="flex flex-col border-t border-gold/20">
          {services.map((service, index) => (
            <motion.div
              key={index}
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
                margin: "-50px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group relative grid grid-cols-12 gap-4 md:gap-6 py-8 md:py-10 border-b border-gold/10 hover:border-gold/40 transition-colors cursor-pointer items-center overflow-hidden"
            >
              {/* Giant Outline Numeral */}
              <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 text-[3.5rem] md:text-[7rem] lg:text-[10rem] font-serif italic text-stroke-gold group-hover:text-stroke-gold-hover transition-all duration-500 pointer-events-none -z-10 leading-none select-none">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="col-span-2 md:col-span-1">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <service.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                </div>
              </div>

              {/* Title + Description */}
              <div className="col-span-10 md:col-span-6">
                <h4 className="text-2xl md:text-3xl font-serif mb-1 md:mb-2 group-hover:text-gold-light transition-colors">
                  {service.title}
                </h4>
                <p className="text-white/60 font-light text-sm leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>

              {/* Hover Image (Desktop) */}
              <div className="hidden lg:block col-span-3">
                <div className="w-full h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Price + Arrow */}
              <div className="col-span-12 md:col-span-5 lg:col-span-2 flex items-center justify-between md:justify-end gap-6 mt-3 md:mt-0">
                <span className="text-base md:text-lg font-serif italic text-gold whitespace-nowrap">
                  {service.price}
                </span>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-purple-base transition-all shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
