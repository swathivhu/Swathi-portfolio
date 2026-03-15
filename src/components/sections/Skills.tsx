
"use client"

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

/**
 * High-Fidelity Technical Stack
 * Each entry includes the official brand color for the background tile
 * to create a professional "App Icon" grid look.
 */
const skills = [
  { name: 'Python', icon: 'devicon-python-plain', bgColor: '#3776AB' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain', bgColor: '#F7DF1E', darkText: true },
  { name: 'React', icon: 'devicon-react-original', bgColor: '#61DAFB', darkText: true },
  { name: 'Next.js', icon: 'devicon-nextjs-original', bgColor: '#000000' },
  { name: 'FastAPI', icon: 'devicon-fastapi-plain', bgColor: '#05998B' },
  { name: 'LangChain', icon: 'devicon-python-plain', bgColor: '#1C3C3C' }, // Using Python icon as placeholder for LangChain
  { name: 'PyTorch', icon: 'devicon-pytorch-original', bgColor: '#EE4C2C' },
  { name: 'Docker', icon: 'devicon-docker-plain', bgColor: '#2496ED' },
  { name: 'Firebase', icon: 'devicon-firebase-plain', bgColor: '#FFCA28', darkText: true },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original', bgColor: '#06B6D4' },
  { name: 'Git', icon: 'devicon-git-plain', bgColor: '#F05032' },
  { name: 'Figma', icon: 'devicon-figma-plain', bgColor: '#F24E1E' },
];

export const Skills: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.5em] text-primary neon-text">
          TECHNICAL STACK
        </h2>
        <div className="p-1.5 rounded-full bg-primary/5 border border-primary/10">
          <ArrowUpRight className="w-3 h-3 text-primary opacity-60" />
        </div>
      </div>

      {/* Branded Logo Grid (4x3) */}
      <TooltipProvider delayDuration={0}>
        <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div 
                  className={cn(
                    "group relative aspect-square flex items-center justify-center rounded-2xl shadow-xl transition-all duration-300 cursor-default overflow-hidden border border-white/5",
                    "hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  )}
                  style={{ backgroundColor: skill.bgColor }}
                >
                  {/* Subtle Overlays for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
                  
                  {/* Technology Icon */}
                  <i 
                    className={cn(
                      skill.icon,
                      "text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110 relative z-10",
                      skill.darkText ? "text-black/80" : "text-white"
                    )}
                  />

                  {/* Tile Border Pulse (Hover only) */}
                  <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/40 animate-pulse pointer-events-none" />
                </div>
              </TooltipTrigger>
              <TooltipContent 
                side="top" 
                className="bg-[#0a0a0a] border-white/10 text-primary font-mono text-[9px] uppercase tracking-widest py-1.5 px-3 rounded-lg shadow-2xl"
              >
                {skill.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      {/* Footer Decoration */}
      <div className="pt-2 border-t border-white/5 flex items-center gap-4">
        <div className="h-px bg-gradient-to-r from-primary/10 to-transparent flex-1" />
        <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest opacity-30">
          Ready for deployment
        </span>
      </div>
    </div>
  );
};
