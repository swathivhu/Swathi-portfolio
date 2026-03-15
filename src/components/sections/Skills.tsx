"use client"

import React from 'react';
import { Cpu, Terminal, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: 'Core Architecture',
    icon: Terminal,
    skills: ['Python', 'Rust', 'JavaScript', 'SQL']
  },
  {
    title: 'AI Engineering',
    icon: Cpu,
    skills: ['GenAI', 'Prompt Eng', 'LangChain', 'PyTorch']
  },
  {
    title: 'Deployment',
    icon: Globe,
    skills: ['Next.js', 'Firebase', 'FastAPI', 'Docker']
  }
];

export const Skills: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-4">
        <h2 className="section-heading !mb-0">
          <span className="section-number mr-4">02.</span> Technical Arsenal
        </h2>
        <div className="h-px bg-white/5 w-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div 
            key={category.title} 
            className={cn(
              "bg-white/[0.03] p-8 rounded-[2rem] border border-white/5 transition-all duration-500",
              "hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]",
              "group relative overflow-hidden"
            )}
          >
            {/* Subtle background glow for the card */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <category.icon className="w-6 h-6 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                {category.title}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-2.5">
              {category.skills.map((skill) => (
                <div 
                  key={skill}
                  className={cn(
                    "px-4 py-2 rounded-full bg-white/10 border border-white/20 transition-all duration-300",
                    "text-[10px] font-mono font-bold text-white text-center uppercase tracking-wider",
                    "hover:border-primary hover:text-primary hover:bg-primary/5 hover:shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                  )}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};