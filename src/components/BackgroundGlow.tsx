import React from "react";
export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top right gold glow */}
      <div className="hidden sm:block absolute top-[-10%] right-[-5%] w-[40vw] md:w-[35vw] h-[40vw] md:h-[35vw] rounded-full bg-gold/10 blur-[120px] mix-blend-screen" />

      {/* Center left purple glow */}
      <div className="hidden sm:block absolute top-[40%] left-[-10%] w-[50vw] md:w-[40vw] h-[50vw] md:h-[40vw] rounded-full bg-purple-light/40 blur-[150px] mix-blend-screen" />

      {/* Bottom right mixed glow */}
      <div className="hidden sm:block absolute bottom-[-10%] right-[10%] w-[35vw] md:w-[30vw] h-[35vw] md:h-[30vw] rounded-full bg-gold/5 blur-[100px] mix-blend-screen" />

      {/* Optional subtle noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay noise-overlay" />
    </div>
  );
}
