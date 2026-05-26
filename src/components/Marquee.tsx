import React, { Fragment } from "react";
import { Ornament } from "./DesignSystem";
export function Marquee() {
  const phrases = ["ROCK BOSS", "CHARLOTTE", "LUXURY HAIR", "EST. —", "RB3"];
  // Duplicate for seamless infinite scroll
  const items = [...phrases, ...phrases, ...phrases, ...phrases];
  return (
    <div className="w-full overflow-hidden bg-purple-base py-6 border-y border-gold/10 relative z-10">
      <div className="flex w-[200%] animate-marquee">
        <div className="flex items-center justify-around w-1/2">
          {items.slice(0, items.length / 2).map((phrase, i) => (
            <Fragment key={i}>
              <span className="text-2xl md:text-4xl font-serif italic text-stroke-gold whitespace-nowrap px-6 md:px-8">
                {phrase}
              </span>
              <Ornament className="w-6 h-6 text-gold/40 shrink-0" />
            </Fragment>
          ))}
        </div>
        <div className="flex items-center justify-around w-1/2">
          {items.slice(items.length / 2).map((phrase, i) => (
            <Fragment key={`dup-${i}`}>
              <span className="text-4xl md:text-5xl font-serif italic text-stroke-gold whitespace-nowrap px-8">
                {phrase}
              </span>
              <Ornament className="w-6 h-6 text-gold/40 shrink-0" />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
