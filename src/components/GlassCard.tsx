"use client"

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, id }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [borderAngle, setBorderAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Relative mouse position for the internal radial glow
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Calculate angle for the moving radiant border
    // We calculate from the center of the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Math.atan2 returns angle in radians, convert to degrees
    // Adding 90 to align with CSS conic-gradient 0deg (top)
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;
    setBorderAngle(angle);
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        // Passing the angle as a CSS variable to the container
        '--border-angle': `${borderAngle}deg`,
      } as React.CSSProperties}
      className={cn(
        "glass-card p-8 md:p-12 mb-16 rounded-[2.5rem] group/card",
        className
      )}
    >
      {/* Radiant Moving Border strictly on the edge, reacts to --border-angle */}
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