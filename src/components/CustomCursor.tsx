"use client"

import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="custom-cursor hidden lg:block"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          width: isPointer ? '40px' : '20px',
          height: isPointer ? '40px' : '20px',
          backgroundColor: isPointer ? 'hsla(var(--secondary), 0.1)' : 'transparent'
        }}
      />
      <div 
        className="custom-cursor-follower hidden lg:block"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};
