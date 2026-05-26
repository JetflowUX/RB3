import React, { Fragment } from "react";
import { Ornament } from "./DesignSystem";
export function Marquee() {
  const phrases = ["ROCK BOSS", "CHARLOTTE", "LUXURY HAIR", "EST. —", "RB3"];
  // Duplicate once for seamless infinite scroll
  const items = [...phrases, ...phrases];
  return (
    <div className="w-full overflow-hidden bg-purple-base py-6 border-y border-gold/10 relative z-10">
      <div className="flex w-max min-w-full flex-nowrap items-center gap-6 md:gap-8 whitespace-nowrap animate-marquee">
        {items.map((phrase, i) => (
          <Fragment key={i}>
            <span className="text-2xl md:text-4xl font-serif italic text-gold whitespace-nowrap leading-none">
              {phrase}
            </span>
            <Ornament className="w-5 h-5 md:w-6 md:h-6 text-gold/40 shrink-0" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
