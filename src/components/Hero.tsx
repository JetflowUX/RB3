import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Ornament, CornerBrackets, GlassCard } from "./DesignSystem";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden">
      {/* Dramatic Vignette Background */}
      <div className="absolute inset-0 z-0 bg-purple-base">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,rgba(21,10,36,1)_70%)]" />
      </div>

      {/* Vertical Label removed per request */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Editorial Typography */}
          <motion.div
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
              ease: "easeOut",
            }}
            className="lg:col-span-7 relative"
          >
            <div className="flex items-center gap-4 mb-8">
              <Ornament className="w-4 h-4 text-gold animate-pulse-slow shrink-0" />
              <div className="h-px w-12 bg-gold/40 shrink-0" />
              <span className="text-xs font-medium tracking-widest uppercase text-gold-light">
                Charlotte's Premier Salon
              </span>
            </div>

            <h1 className="font-serif leading-[0.95] mb-10 relative z-10">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-normal mb-3 text-white/90">
                We Cut the
              </span>
              <span className="block text-4xl sm:text-5xl md:text-[6.5rem] lg:text-[8.5rem] italic text-gradient-gold relative leading-none pb-4">
                Best Hair
                <svg
                  className="absolute -bottom-1 md:bottom-0 left-0 w-3/4 h-3 text-gold/40"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q50,20 100,0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl font-normal mt-4 text-white/90">
                in Charlotte.
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/70 mb-10 max-w-md font-light leading-relaxed border-l border-gold/20 pl-6">
              Experience the Rock Boss standard. Precision cuts, masterful
              color, and an editorial approach to everyday beauty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="btn-primary">
                Book Appointment
              </a>
              <a href="#services" className="btn-secondary">
                View Services
              </a>
            </div>
          </motion.div>

          {/* Right: Image Collage */}
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
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="lg:col-span-5 relative h-64 md:h-[420px] lg:h-[600px] hidden md:block"
          >
            {/* Primary Portrait */}
            <div className="absolute top-0 right-0 w-[80%] md:w-[85%] h-[70%] md:h-[60%] z-10">
              <CornerBrackets />
              <img
                src="https://source.unsplash.com/1260x840/?hair-salon,interior"
                alt="Luxury Hair Salon Interior"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[20%] contrast-125"
              />
            </div>

            {/* Secondary Portrait */}
            <div className="absolute bottom-0 left-0 w-[55%] md:w-[50%] h-[45%] md:h-[40%] z-20 border border-gold/20 p-1 bg-purple-base">
              <img
                src="https://source.unsplash.com/900x1200/?hair-model,portrait"
                alt="Hair Model"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Review Card — positioned safely within column */}
            <div className="absolute bottom-8 right-0 z-30 w-64">
              <GlassCard className="p-5">
                <CornerBrackets />
                <div className="relative mb-3 z-20">
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                    ))}
                  </div>
                  <Ornament className="w-4 h-4 text-gold/50 absolute right-0 top-0" />
                </div>
                <p className="text-xs text-white/80 italic mb-3 relative z-20 leading-relaxed text-center">
                  "Absolutely transformed my look. The attention to detail at
                  RB3 is unmatched in Charlotte."
                </p>
                <div className="text-[10px] font-medium text-gold uppercase tracking-widest relative z-20 text-center">
                  — Sarah M.
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — pinned to bottom, won't overlap content */}
      <div className="hidden md:flex md:flex-col absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-3 z-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
