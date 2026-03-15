"use client"

import React from 'react';

const experiences = [
  {
    role: 'Generative AI Developer',
    company: 'AI Innovation Hub',
    period: '2023 - Present',
    description: 'Leading development of autonomous content agents and multi-agent LLM systems. Optimized pipeline latency by 40%.',
    tech: ['Python', 'GenAI', 'LangChain', 'FastAPI']
  },
  {
    role: 'Python Developer Intern',
    company: 'Tech Solutions Inc.',
    period: '2022 - 2023',
    description: 'Engineered backend microservices for automated data analysis and predictive reporting.',
    tech: ['Python', 'SQL', 'Pandas', 'Docker']
  }
];

export const Experience: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="section-heading">
        <span className="section-number">04.</span> Experience
      </h2>
      
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 group">
            <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all" />
            <div className="absolute left-[2px] top-4 h-full w-[1px] bg-white/5" />
            
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-primary/80 font-mono text-xs uppercase tracking-wider">{exp.company}</p>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/60 px-2 py-1 rounded-md border border-white/5">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-1">
                {exp.tech.map(t => (
                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 bg-white/5 rounded border border-white/5 text-muted-foreground/60 uppercase">
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