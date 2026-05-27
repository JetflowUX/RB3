import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Clock } from "lucide-react";
export function BookingCta() {
  return (
    <section id="book" className="py-24 lg:py-32 relative bg-brand-purple-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80"
              alt="Salon interior"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-900/90 to-brand-purple-900/40"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 lg:p-20 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                Ready for the cut <br />
                <span className="italic text-brand-gold-400">
                  that fits you?
                </span>
              </h2>
              <p className="text-brand-cream/70 mb-10 max-w-md text-lg font-light">
                Secure your spot in the chair. Walk-ins are welcome, but
                appointments are highly recommended to guarantee your time.
              </p>

              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest font-medium text-brand-purple-900 bg-brand-gold-500 hover:bg-brand-gold-400 transition-colors rounded-full"
              >
                Book Appointment <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>

            <motion.div
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
                duration: 0.8,
                delay: 0.2,
              }}
              className="glass-panel bg-brand-purple-900/60 p-8 md:p-10 rounded-2xl lg:ml-auto w-full max-w-md"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-brand-gold-400 mb-4 flex items-center gap-2">
                    <Phone size={14} /> Contact
                  </h3>
                  <p className="text-2xl font-serif">(704) 555-0198</p>
                  <p className="text-sm text-brand-cream/60 mt-1">
                    hello@rb3salon.com
                  </p>
                </div>

                <div className="w-full h-px bg-white/10"></div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-brand-gold-400 mb-4 flex items-center gap-2">
                    <Clock size={14} /> Hours
                  </h3>
                  <ul className="space-y-2 text-sm text-brand-cream/80">
                    <li className="flex justify-between">
                      <span>Tuesday - Friday</span>
                      <span>10am - 7pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>9am - 5pm</span>
                    </li>
                    <li className="flex justify-between text-brand-cream/40">
                      <span>Sunday - Monday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
