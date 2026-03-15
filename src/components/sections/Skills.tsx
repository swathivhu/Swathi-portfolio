
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
  { name: 'Python', icon: Terminal },
  { name: 'JavaScript', icon: FileJson },
  { name: 'TypeScript', icon: Code2 },
  { name: 'SQL', icon: Database },
  { name: 'React', icon: Atom },
  { name: 'Next.js', icon: Zap },
  { name: 'FastAPI', icon: FastForward },
  { name: 'Node.js', icon: Server },
  { name: 'LangChain', icon: LinkIcon },
  { name: 'OpenAI / GenAI', icon: Bot },
  { name: 'PyTorch', icon: Flame },
  { name: 'Docker', icon: Box },
  { name: 'Firebase', icon: Flame },
  { name: 'TailwindCSS', icon: Palette },
  { name: 'Git', icon: GitBranch },
  { name: 'Figma', icon: Figma },
];

export const Skills: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-xs md:text-sm font-mono font-bold uppercase tracking-[0.5em] text-primary neon-text">
          SKILLS
        </h2>
        <div className="p-2 rounded-full bg-primary/5 border border-primary/10">
          <ArrowUpRight className="w-4 h-4 text-primary opacity-60" />
        </div>
      </div>

      {/* Skills Grid */}
      <TooltipProvider delayDuration={0}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div className={cn(
                  "group relative aspect-square flex flex-col items-center justify-center rounded-[1.5rem] md:rounded-[2rem]",
                  "bg-white/[0.02] border border-white/5 backdrop-blur-sm",
                  "transition-all duration-300 ease-out",
                  "hover:scale-105 hover:bg-white/[0.05] hover:border-primary/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
                  "cursor-default"
                )}>
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] bg-primary/0 group-hover:bg-primary/[0.02] transition-colors" />
                  
                  <div className="relative z-10 p-4 md:p-6 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    <skill.icon className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5px]" />
                  </div>

                  {/* Tile Border Pulse (Hover only) */}
                  <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] border border-primary/0 group-hover:border-primary/20 animate-pulse pointer-events-none" />
                </div>
              </TooltipTrigger>
              <TooltipContent 
                side="top" 
                className="bg-[#0a0a0a] border-white/10 text-primary font-mono text-[10px] uppercase tracking-widest py-2 px-4 rounded-lg shadow-2xl"
              >
                {skill.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      {/* Footer Decoration */}
      <div className="pt-6 border-t border-white/5 flex items-center gap-4">
        <div className="h-px bg-gradient-to-r from-primary/20 to-transparent flex-1" />
        <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest opacity-40">
          Technical Arsenal 2024
        </span>
      </div>
    </div>
  );
};
