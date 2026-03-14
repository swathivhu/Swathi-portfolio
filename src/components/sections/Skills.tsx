"use client"

import React from 'react';
import { Cpu, Terminal, Globe, Workflow } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Architecture',
    icon: Terminal,
    skills: ['Python', 'Rust', 'JavaScript', 'SQL', 'C++']
  },
  {
    title: 'AI Engineering',
    icon: Cpu,
    skills: ['GenAI', 'Prompt Engineering', 'LangChain', 'PyTorch', 'Hugging Face']
  },
  {
    title: 'Deployment',
    icon: Globe,
    skills: ['Next.js', 'Firebase', 'FastAPI', 'Docker', 'Kubernetes']
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32">
      <h2 className="section-heading">
        <span className="section-number">02.</span> Technical Arsenal
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-8 glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all duration-500 group">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-glow-primary transition-all">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-headline font-bold tracking-tight">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div 
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-mono font-medium hover:border-secondary/50 hover:bg-secondary/5 transition-all cursor-default text-muted-foreground hover:text-secondary uppercase tracking-tighter"
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
