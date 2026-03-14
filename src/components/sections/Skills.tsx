"use client"

import React from 'react';
import { Cpu, Terminal, Globe } from 'lucide-react';

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
    <section id="skills" className="py-24">
      <h2 className="section-heading">
        <span className="section-number">02.</span> Technical Arsenal
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/5 text-primary">
                <category.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div 
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-tight"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};