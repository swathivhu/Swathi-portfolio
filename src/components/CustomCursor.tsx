"use client"

import React, { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setIsHidden(false);
    setPosition({ x: e.clientX, y: e.clientY });
    
    const target = e.target as HTMLElement;
    const isClickable = 
      window.getComputedStyle(target).cursor === 'pointer' ||
      target.closest('button') ||
      target.closest('a') ||
      target.closest('.group');
    
    setIsPointer(!!isClickable);
  }, []);

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
    
    // Smooth follower effect using linear interpolation
    let frameId: number;
    const updateFollower = () => {
      setFollowerPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      frameId = requestAnimationFrame(updateFollower);
    };
    frameId = requestAnimationFrame(updateFollower);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(frameId);
    };
  }, [position, handleMouseMove, handleMouseEnter, handleMouseLeave]);

  if (isHidden) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="custom-cursor custom-cursor-dot hidden lg:block"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
        }}
      />
      {/* Smoother trailing ring */}
      <div 
        className={cn(
          "custom-cursor custom-cursor-ring hidden lg:block",
          isPointer && "active"
        )}
        style={{ 
          left: `${followerPosition.x}px`, 
          top: `${followerPosition.y}px`,
        }}
      />
    </>
  );
};
