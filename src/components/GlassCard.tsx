"use client"

import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, id }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Relative mouse position for the internal radial glow
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "glass-card p-8 md:p-12 mb-16 rounded-[2.5rem] group/card transition-all duration-500 hover:scale-[1.01]",
        className
      )}
    >
      {/* Radiant Moving Border strictly on the edge, automated via CSS animation */}
      <div className="animated-border" />

      {/* Dynamic Cursor Glow (Radial follows mouse) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.08), transparent 40%)`,
        }}
      />
      
      {/* Content wrapper to ensure z-index above border effects */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};