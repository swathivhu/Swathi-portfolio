"use client"

import React, { useEffect, useRef, useState } from 'react';

export const BackgroundParticles: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-black overflow-hidden">
      {/* Tech Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Animated Radial Pulse that follows scroll/mouse slightly */}
      <div 
        className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] transition-transform duration-1000 ease-out"
        style={{
          left: mousePos.x - 400,
          top: mousePos.y - 400,
          opacity: 0.4
        }}
      />

      {/* Static ambient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
    </div>
  );
};