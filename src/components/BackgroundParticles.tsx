"use client"

import React, { useEffect, useState } from 'react';

export const BackgroundParticles: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; top: number; left: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-secondary/20 animate-float"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.id * -1}s`,
          }}
        />
      ))}
    </div>
  );
};
