"use client"

import React from 'react';

const experiences = [
  {
    role: 'Generative AI Developer',
    company: 'AI Innovation Hub',
    period: '2023 - Present',
    description: 'Leading development of autonomous content agents and multi-agent LLM systems. Optimized pipeline latency by 40% through intelligent prompt caching and parallel task execution.',
    tech: ['Python', 'Generative AI Tools', 'LangChain', 'FastAPI']
  },
  {
    role: 'Python Developer Intern',
    company: 'Tech Solutions Inc.',
    period: '2022 - 2023',
    description: 'Engineered backend microservices for automated data analysis and predictive reporting. Developed custom internal tools for dataset cleaning and pre-processing.',
    tech: ['Python', 'SQL', 'Pandas', 'Docker']
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-40">
      <h2 className="section-heading">
        <span className="section-number">04.</span> Experience
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="space-y-24">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-16 group">
            {/* Timeline accent line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-white/10 to-transparent" />
            <div className="absolute left-[-6px] top-2 w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_15px_hsla(var(--primary),1)] group-hover:scale-150 transition-transform duration-500" />
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <h3 className="text-3xl font-headline font-bold text-white group-hover:text-glow-primary transition-all duration-500">{exp.role}</h3>
                  <p className="text-secondary font-mono text-base uppercase tracking-[0.25em]">{exp.company}</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground bg-white/5 px-5 py-2 rounded-full border border-white/10">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {exp.tech.map(t => (
                  <span key={t} className="text-xs font-mono font-bold px-4 py-2 bg-white/[0.03] border border-white/5 rounded-xl text-muted-foreground/60 uppercase tracking-widest">
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
