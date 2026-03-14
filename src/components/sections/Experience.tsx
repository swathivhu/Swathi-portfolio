"use client"

import React from 'react';

const experiences = [
  {
    role: 'Generative AI Developer',
    company: 'AI Innovation Hub',
    period: '2023 - Present',
    description: 'Leading development of autonomous content agents and multi-agent LLM systems. Optimized pipeline latency by 40% through intelligent prompt caching.',
    tech: ['Python', 'GenAI', 'LangChain', 'FastAPI']
  },
  {
    role: 'Python Developer Intern',
    company: 'Tech Solutions Inc.',
    period: '2022 - 2023',
    description: 'Engineered backend microservices for automated data analysis and predictive reporting. Developed custom internal tools for dataset cleaning.',
    tech: ['Python', 'SQL', 'Pandas', 'Docker']
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="section-heading">
        <span className="section-number">04.</span> Experience
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="space-y-16">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 group">
            <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="absolute left-[2px] top-4 h-full w-[1px] bg-white/5" />
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-primary font-mono text-sm uppercase tracking-wider">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded-full border border-white/5">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded border border-white/5 text-muted-foreground/60 uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
