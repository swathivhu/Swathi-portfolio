"use client"

import React from 'react';
import { Home, User, Code, Briefcase, GraduationCap, Mail, Star, Sparkles } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

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
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-row gap-2 md:flex-col glass-card p-2 rounded-full md:rounded-2xl">
      <TooltipProvider delayDuration={0}>
        {navItems.map((item) => (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <button
                onClick={() => scrollTo(item.id)}
                className="p-2 md:p-3 hover:bg-white/10 rounded-full transition-colors group"
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-secondary transition-colors" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};
