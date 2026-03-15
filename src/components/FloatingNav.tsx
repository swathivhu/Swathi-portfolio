"use client"

import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, GraduationCap, Mail, Star, Sparkles } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'experience', icon: Star, label: 'Experience' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'ai-creations', icon: Sparkles, label: 'AI Creations' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  /**
   * Smooth scrolls to the target section by ID.
   */
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Intersection Observer to detect which section is currently in view.
   * rootMargin is set to detect the section occupying the middle of the viewport.
   */
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed top-8 right-8 z-50 flex flex-row gap-2 md:flex-col glass-card p-2 rounded-2xl">
      <TooltipProvider delayDuration={0}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "p-3 rounded-xl transition-all duration-300 group relative flex items-center justify-center",
                    isActive 
                      ? "bg-primary/15 shadow-[0_0_20px_rgba(16,185,129,0.2)] scale-110" 
                      : "hover:bg-white/[0.05]"
                  )}
                  aria-label={item.label}
                >
                  <item.icon 
                    className={cn(
                      "w-5 h-5 transition-colors duration-300",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                    )} 
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  {/* Subtle pulsing glow for the active item */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl border border-primary/30 animate-pulse pointer-events-none" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-card border-white/10 text-primary font-bold">
                <p className="text-[10px] uppercase tracking-widest">{item.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </div>
  );
};