import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Ornament } from "./DesignSystem";
const reviews = [
  {
    name: "Jessica T.",
    text: "I've been to many salons in Charlotte, but RB3 is on another level. The attention to detail and the luxurious atmosphere make every visit a treat. My balayage has never looked better.",
    service: "Balayage & Cut",
  },
  {
    name: "Amanda R.",
    text: "The 'Rock Boss' mentality is real! I walked out feeling like a million bucks. The stylists truly listen to what you want and execute it flawlessly. Highly recommend.",
    service: "Color Transformation",
  },
  {
    name: "Michelle K.",
    text: "Found my forever salon. The glass of champagne upon arrival, the thorough consultation, and the incredible blowout... it's the ultimate pampering experience.",
    service: "Signature Blowout",
  },
];

// Local Glass wrapper with proper inner padding behavior
function TestimonialCard({
  children,
  className = "",
  featured = false,
}: {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-[1px] bg-gradient-to-br from-gold/40 via-transparent to-gold/10 h-full ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none" />
      <div
        className={`h-full w-full rounded-2xl bg-purple-surface/40 backdrop-blur-2xl overflow-hidden relative shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] ${featured ? "p-10 md:p-16" : "p-8 md:p-10"}`}
      >
        {children}
      </div>
    </div>
  );
}
export function Testimonials() {
  return (
    <section id="reviews" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/40" />
            <h2 className="text-xs font-medium tracking-widest uppercase text-gold">
              Client Love
            </h2>
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold">
            Word on the Street
          </h3>
        </div>

        {/* Featured Testimonial — full width */}
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
            margin: "-50px",
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-8"
        >
          <TestimonialCard featured>
            {/* Decorative Watermark Quote Mark */}
            <div className="hidden sm:block absolute top-2 left-6 md:top-4 md:left-10 text-[5rem] md:text-[9rem] lg:text-[12rem] font-serif italic text-gold/[0.07] leading-none pointer-events-none select-none -z-10">
              "
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-serif italic mb-10 leading-relaxed">
                "{reviews[0].text}"
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold/40" />
                <Ornament className="w-4 h-4 text-gold" />
                <div className="h-px w-12 bg-gold/40" />
              </div>

              {/* Attribution */}
              <div className="font-serif font-bold text-xl text-white mb-2">
                {reviews[0].name}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                {reviews[0].service}
              </div>
            </div>
          </TestimonialCard>
        </motion.div>

        {/* Supporting Testimonials — equal 2-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.slice(1).map((review, index) => (
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
                duration: 0.6,
                delay: 0.15 + index * 0.15,
              }}
            >
              <TestimonialCard>
                <div className="flex flex-col h-full relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 font-serif italic mb-8 leading-relaxed text-base md:text-lg flex-grow">
                    "{review.text}"
                  </p>

                  {/* Attribution with divider */}
                  <div className="pt-6 border-t border-gold/20 flex items-end justify-between gap-4">
                    <div>
                      <div className="font-serif font-bold text-lg text-white mb-1">
                        {review.name}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                        {review.service}
                      </div>
                    </div>
                    <Ornament className="w-4 h-4 text-gold/40 shrink-0 mb-1" />
                  </div>
                </div>
              </TestimonialCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
