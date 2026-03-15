
"use client"

import React from 'react';
import { 
  Terminal, 
  Code2, 
  Atom, 
  Zap, 
  Flame, 
  GitBranch, 
  Figma,
  ArrowUpRight,
  FileJson,
  Wind,
  Server,
  Box,
  Bot
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

/**
 * Skill definitions with official brand colors for high-fidelity logo cards.
 * Ordered to fit a 4x3 grid (12 skills total).
 */
const skills = [
  { name: 'Python', icon: Terminal, color: '#3776AB' },
  { name: 'JavaScript', icon: FileJson, color: '#F7DF1E' },
  { name: 'React', icon: Atom, color: '#61DAFB' },
  { name: 'Next.js', icon: Zap, color: '#FFFFFF' },
  { name: 'FastAPI', icon: Server, color: '#05998B' },
  { name: 'LangChain', icon: Bot, color: '#00A3FF' },
  { name: 'PyTorch', icon: Flame, color: '#EE4C2C' },
  { name: 'Docker', icon: Box, color: '#2496ED' },
  { name: 'Firebase', icon: Flame, color: '#FFCA28' },
  { name: 'Tailwind CSS', icon: Wind, color: '#06B6D4' },
  { name: 'Git', icon: GitBranch, color: '#F05032' },
  { name: 'Figma', icon: Figma, color: '#A259FF' },
];

export const Skills: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Header Row - Compact and Professional */}
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.5em] text-primary neon-text">
          TECHNICAL STACK
        </h2>
        <div className="p-1.5 rounded-full bg-primary/5 border border-primary/10">
          <ArrowUpRight className="w-3 h-3 text-primary opacity-60" />
        </div>
      </div>

      {/* Skills Grid - Balanced 4x3 layout */}
      <TooltipProvider delayDuration={0}>
        <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div className={cn(
                  "group relative aspect-square flex flex-col items-center justify-center rounded-[1rem]",
                  "bg-white/[0.06] border border-white/10 backdrop-blur-md shadow-lg",
                  "transition-all duration-300 ease-out",
                  "hover:scale-105 hover:bg-white/[0.1] hover:border-primary/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
                  "cursor-default overflow-hidden"
                )}>
                  {/* Subtle Internal Glow */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] transition-colors" />
                  
                  {/* Icon Centered Perfectly */}
                  <div className="relative z-10 p-2 md:p-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    <skill.icon 
                      className="w-7 h-7 md:w-9 md:h-9 stroke-[1.5px] drop-shadow-sm" 
                      style={{ color: skill.color }}
                    />
                  </div>

                  {/* Tile Border Pulse (Hover only) */}
                  <div className="absolute inset-0 rounded-[1rem] border border-primary/0 group-hover:border-primary/20 animate-pulse pointer-events-none" />
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

      {/* Footer Decoration - Minimal vertical footprint */}
      <div className="pt-2 border-t border-white/5 flex items-center gap-4">
        <div className="h-px bg-gradient-to-r from-primary/10 to-transparent flex-1" />
        <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest opacity-30">
          Ready for deployment
        </span>
      </div>
    </div>
  );
};
