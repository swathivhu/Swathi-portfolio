
"use client"

import React from 'react';
import { 
  Terminal, 
  Code2, 
  Database, 
  Atom, 
  Zap, 
  Server, 
  Flame, 
  GitBranch, 
  Figma,
  ArrowUpRight,
  FileJson,
  Coffee,
  Wind,
  Search
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
 */
const skills = [
  { name: 'Java', icon: Coffee, color: '#ED8B00' },
  { name: 'JavaScript', icon: FileJson, color: '#F7DF1E' },
  { name: 'TypeScript', icon: Code2, color: '#3178C6' },
  { name: 'React', icon: Atom, color: '#61DAFB' },
  { name: 'Next.js', icon: Zap, color: '#FFFFFF' },
  { name: 'Node.js', icon: Server, color: '#339933' },
  { name: 'MySQL', icon: Database, color: '#4479A1' },
  { name: 'TailwindCSS', icon: Wind, color: '#06B6D4' },
  { name: 'Python', icon: Terminal, color: '#3776AB' },
  { name: 'Firebase', icon: Flame, color: '#FFCA28' },
  { name: 'Git', icon: GitBranch, color: '#F05032' },
  { name: 'Figma', icon: Figma, color: '#A259FF' },
];

export const Skills: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Header Row - Tighter spacing */}
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.5em] text-primary neon-text">
          SKILLS
        </h2>
        <div className="p-1.5 rounded-full bg-primary/5 border border-primary/10">
          <ArrowUpRight className="w-3 h-3 text-primary opacity-60" />
        </div>
      </div>

      {/* Skills Grid - Compact 4-column layout */}
      <TooltipProvider delayDuration={0}>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div className={cn(
                  "group relative aspect-square flex flex-col items-center justify-center rounded-[1rem] md:rounded-[1.25rem]",
                  "bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-lg",
                  "transition-all duration-300 ease-out",
                  "hover:scale-105 hover:bg-white/[0.08] hover:border-primary/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]",
                  "cursor-default"
                )}>
                  {/* Internal Radiant Hover State */}
                  <div className="absolute inset-0 rounded-[1rem] md:rounded-[1.25rem] bg-primary/0 group-hover:bg-primary/[0.02] transition-colors" />
                  
                  <div className="relative z-10 p-2 md:p-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    <skill.icon 
                      className="w-6 h-6 md:w-8 md:h-8 stroke-[1.5px] drop-shadow-sm" 
                      style={{ color: skill.color }}
                    />
                  </div>

                  {/* Tile Border Pulse (Hover only) */}
                  <div className="absolute inset-0 rounded-[1rem] md:rounded-[1.25rem] border border-primary/0 group-hover:border-primary/20 animate-pulse pointer-events-none" />
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

      {/* Footer Decoration - Reduced margin */}
      <div className="pt-2 border-t border-white/5 flex items-center gap-4">
        <div className="h-px bg-gradient-to-r from-primary/10 to-transparent flex-1" />
        <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest opacity-30">
          Tech Stack 2024
        </span>
      </div>
    </div>
  );
};
