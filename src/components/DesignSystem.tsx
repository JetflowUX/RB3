import React from 'react';
export const Ornament = ({ className = 'w-6 h-6 text-gold' }) =>
<svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
    d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
    fill="currentColor" />
  
  </svg>;

export const CornerBrackets = () =>
<>
    <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-gold/60 z-20" />
    <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-gold/60 z-20" />
    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-gold/60 z-20" />
    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-gold/60 z-20" />
  </>;

export const GlassCard = ({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) =>
<div
  className={`relative rounded-2xl p-[1px] bg-gradient-to-br from-gold/40 via-transparent to-gold/10 ${className}`}>
  
    <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] pointer-events-none z-10" />
    <div className="h-full w-full rounded-2xl bg-purple-surface/40 backdrop-blur-2xl overflow-hidden relative">
      {/* Inner top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      {children}
    </div>
  </div>;