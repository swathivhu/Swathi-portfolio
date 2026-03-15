
"use client"

import React from 'react';
import { 
  Terminal, 
  Code2, 
  Database, 
  Atom, 
  Zap, 
  FastForward, 
  Server, 
  Link as LinkIcon, 
  Bot, 
  Flame, 
  Box, 
  Palette, 
  GitBranch, 
  Figma,
  ArrowUpRight,
  FileJson
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

const skills = [
  { name: 'Python', icon: Terminal, color: '#3776AB' },
  { name: 'JavaScript', icon: FileJson, color: '#F7DF1E' },
  { name: 'TypeScript', icon: Code2, color: '#3178C6' },
  { name: 'SQL', icon: Database, color: '#4479A1' },
  { name: 'React', icon: Atom, color: '#61DAFB' },
  { name: 'Next.js', icon: Zap, color: '#FFFFFF' },
  { name: 'FastAPI', icon: FastForward, color: '#05998B' },
  { name: 'Node.js', icon: Server, color: '#339933' },
  { name: 'LangChain', icon: LinkIcon, color: '#15B79E' },
  { name: 'OpenAI / GenAI', icon: Bot, color: '#FFFFFF' },
  { name: 'PyTorch', icon: Flame, color: '#EE4C2C' },
  { name: 'Docker', icon: Box, color: '#2496ED' },
  { name: 'Firebase', icon: Flame, color: '#FFCA28' },
  { name: 'TailwindCSS', icon: Palette, color: '#06B6D4' },
  { name: 'Git', icon: GitBranch, color: '#F05032' },
  { name: 'Figma', icon: Figma, color: '#A259FF' },
];

export const Skills: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.5em] text-primary neon-text">
          SKILLS
        </h2>
        <div className="p-1.5 rounded-full bg-primary/5 border border-primary/10">
          <ArrowUpRight className="w-3.5 h-3.5 text-primary opacity-60" />
        </div>
      </div>

      {/* Skills Grid */}
      <TooltipProvider delayDuration={0}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div className={cn(
                  "group relative aspect-square flex flex-col items-center justify-center rounded-[1.25rem] md:rounded-[1.5rem]",
                  "bg-white/[0.02] border border-white/5 backdrop-blur-sm",
                  "transition-all duration-300 ease-out",
                  "hover:scale-105 hover:bg-white/[0.05] hover:border-primary/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]",
                  "cursor-default"
                )}>
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 rounded-[1.25rem] md:rounded-[1.5rem] bg-primary/0 group-hover:bg-primary/[0.01] transition-colors" />
                  
                  <div className="relative z-10 p-3 md:p-4 transition-transform duration-300 group-hover:scale-110">
                    <skill.icon 
                      className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5px]" 
                      style={{ color: skill.color }}
                    />
                  </div>

                  {/* Tile Border Pulse (Hover only) */}
                  <div className="absolute inset-0 rounded-[1.25rem] md:rounded-[1.5rem] border border-primary/0 group-hover:border-primary/15 animate-pulse pointer-events-none" />
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
      <div className="pt-4 border-t border-white/5 flex items-center gap-4">
        <div className="h-px bg-gradient-to-r from-primary/10 to-transparent flex-1" />
        <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest opacity-30">
          Arsenal 2024
        </span>
      </div>
    </div>
  );
};
