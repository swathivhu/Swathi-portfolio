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
      target.closest('[role="button"]') ||
      target.closest('[role="tab"]');
    
    setIsPointer(!!isClickable);
  }, [isHidden]);

  const handleMouseLeave = useCallback(() => {
    setIsHidden(true);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHidden(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  if (isHidden) return null;

  return (
    <>
      {/* Central Pointer (Dot) - Locked to mouse speed */}
      <div 
        className="custom-cursor custom-cursor-dot hidden lg:block"
        style={{ 
          left: position.x, 
          top: position.y,
        }}
      />
      {/* Synchronized Outer Ring - Locked to mouse speed */}
      <div 
        className={cn(
          "custom-cursor custom-cursor-ring hidden lg:block",
          isPointer && "active"
        )}
        style={{ 
          left: position.x, 
          top: position.y,
        }}
      />
    </>
  );
};
