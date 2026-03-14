"use client"

import React, { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isHidden) setIsHidden(false);
    setPosition({ x: e.clientX, y: e.clientY });
    
    const target = e.target as HTMLElement;
    const isClickable = 
      window.getComputedStyle(target).cursor === 'pointer' ||
      target.closest('button') ||
      target.closest('a') ||
      target.closest('.group') ||
      target.closest('[role="button"]');
    
    setIsPointer(!!isClickable);
  }, [isHidden]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  if (isHidden) return null;

  return (
    <>
      <div 
        className="fixed pointer-events-none z-[9999] w-4 h-4 rounded-full bg-primary/40 border border-primary/20 transition-[width,height] duration-200 hidden lg:block"
        style={{ 
          left: position.x, 
          top: position.y,
          transform: 'translate(-50%, -50%)',
          width: isPointer ? '32px' : '16px',
          height: isPointer ? '32px' : '16px',
        }}
      />
    </>
  );
};
