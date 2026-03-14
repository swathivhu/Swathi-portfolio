"use client"

import React, { useEffect, useState } from 'react';

export const BackgroundParticles: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; top: number; left: number; size: number; duration: number; opacity: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 15 + 10,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden tech-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-secondary/40 animate-float blur-[1px]"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.id * -0.5}s`,
          }}
        />
      ))}
    </div>
  );
};
