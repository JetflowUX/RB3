import React from 'react';
export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top right gold glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gold/10 blur-[120px] mix-blend-screen" />

      {/* Center left purple glow */}
      <div className="absolute top-[40%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-light/40 blur-[150px] mix-blend-screen" />

      {/* Bottom right mixed glow */}
      <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[100px] mix-blend-screen" />

      {/* Optional subtle noise overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      
    </div>);

}