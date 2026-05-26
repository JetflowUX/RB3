import { motion } from "framer-motion";
import { CornerBrackets } from "./DesignSystem";
import PixImg from "./PixImg";
export function About() {
  return (
    <section id="about" className="py-32 relative z-10 overflow-hidden">
      {/* Giant Watermark — show only on large screens and keep behind content */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block text-[8rem] lg:text-[18rem] font-serif italic text-stroke-gold pointer-events-none -z-10 leading-none select-none">
        3
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Collage Side */}
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
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative h-[600px] lg:h-[700px] hidden md:block"
          >
            {/* Primary Image */}
            <div className="absolute top-0 left-0 w-[75%] h-[75%] z-10">
              <CornerBrackets />
              {/** try pixabay first, fallback to Unsplash source */}
              <PixImg
                query={"stylist working"}
                srcOverride={"/assets/pexels-7755226.jpg"}
                fallback={"/assets/pexels-7755226.jpg"}
                className={"w-full h-full object-cover grayscale-[30%]"}
                alt={"Stylist working on client's hair"}
              />
            </div>

            {/* Secondary Image Overlapping */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[45%] z-20 border border-gold/20 p-2 bg-purple-base">
              <PixImg
                query={"hair detail texture"}
                srcOverride={"/assets/pexels-10647102.jpg"}
                fallback={"/assets/pexels-10647102.jpg"}
                className={"w-full h-full object-cover"}
                alt={"Hair detail"}
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            {/* Vertical Label — sits to the LEFT of the content, properly */}
            <div className="absolute -left-8 top-0 hidden lg:flex items-start h-full pointer-events-none">
              <span className="vertical-rl rotate-180 text-gold tracking-[0.3em] text-[10px] uppercase whitespace-nowrap">
                THE ROCK BOSS STORY
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-gold/40" />
              <h2 className="text-xs font-medium tracking-widest uppercase text-gold">
                Heritage
              </h2>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-[1.05]">
              Redefining Luxury <br />
              <span className="italic text-white/80 font-light">
                in Charlotte
              </span>
            </h3>

            {/* Signature Flourish */}
            <svg
              className="w-32 h-8 text-gold mb-10"
              viewBox="0 0 100 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5,25 Q30,5 50,20 T95,10" />
            </svg>

            <div className="space-y-6 text-white/70 font-light text-base md:text-lg mb-12">
              <p>
                At RB3, we believe your hair is your ultimate accessory. Founded
                on the principle of the "Rock Boss" mentality—owning your look
                with absolute confidence—we've created a space where high-end
                editorial styling meets everyday wearability.
              </p>
              <p>
                Our team of master stylists continually refine their craft,
                bringing global trends and innovative techniques right here to
                Charlotte, NC. Whether you're looking for a subtle refresh or a
                complete transformation, we deliver results that turn heads.
              </p>
            </div>

            {/* Editorial Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-2">
              <div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-gold mb-3 leading-none">
                  10+
                </div>
                <div className="h-px w-full bg-gold/20 mb-3" />
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Years Exp
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-gold mb-3 leading-none">
                  5k+
                </div>
                <div className="h-px w-full bg-gold/20 mb-3" />
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-gold mb-3 leading-none">
                  15
                </div>
                <div className="h-px w-full bg-gold/20 mb-3" />
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Beauty Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Uses shared PixImg component from ./PixImg
