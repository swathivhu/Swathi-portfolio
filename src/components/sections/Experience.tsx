"use client"

import React from 'react';

const experiences = [
  {
    role: 'Generative AI Developer',
    company: 'AI Innovation Lab',
    period: 'Present',
    description: 'Developing AI-driven applications and intelligent automation workflows using modern Generative AI frameworks.',
    tech: ['Python', 'GenAI', 'LangChain', 'Prompt Engineering', 'LLM Integration']
  },
  {
    role: 'Python Full Stack with Gen AI',
    company: 'KodNest',
    period: 'Training',
    description: 'Trained in building full-stack web applications with modern frontend and backend technologies.',
    tech: ['Python', 'JavaScript', 'React', 'Next.js', 'FastAPI', 'Firebase', 'Git']
  },
  {
    role: 'AI Content Creator',
    company: 'Sangeetha Sudha',
    period: 'Project Based',
    description: 'Created AI-driven educational content and multimedia using advanced generative tools for audio, video, and storytelling.',
    tech: ['Suno AI', 'ElevenLabs', 'Runway ML', 'AI Content Generation', 'Creative AI Tools']
  }
];

export const Experience: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="section-heading flex items-center gap-4 mb-10">
        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.8)] flex-shrink-0" />
        Professional Experience
        <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-1" />
      </h2>
      
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 group">
            <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-300 z-10" />
            <div className="absolute left-[3.5px] top-4 h-full w-[1px] bg-gradient-to-b from-primary/30 to-transparent" />
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-primary/90 font-mono text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/60 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] self-start">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tech.map(t => (
                  <span 
                    key={t} 
                    className="text-[9px] font-mono px-3 py-1 bg-primary/5 rounded-full border border-primary/20 text-primary uppercase tracking-widest hover:bg-primary/10 transition-colors shadow-[0_0_10px_rgba(16,185,129,0.05)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
