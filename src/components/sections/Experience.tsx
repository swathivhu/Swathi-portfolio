"use client"

import React from 'react';

const experiences = [
  {
    role: 'Generative AI Developer',
    company: 'AI Innovation Hub',
    period: '2023 - Present',
    description: 'Worked on AI-based content creation, prompt engineering, and automation tools. Focused on optimizing LLM workflows and integrating multimodal AI capabilities.',
    tech: ['Python', 'Generative AI Tools', 'LangChain', 'FastAPI']
  },
  {
    role: 'Python Developer Intern',
    company: 'Tech Solutions Inc.',
    period: '2022 - 2023',
    description: 'Developed backend microservices for data processing and automated reporting tasks using Python and SQL.',
    tech: ['Python', 'SQL', 'Pandas', 'Docker']
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
        <span className="text-secondary">04.</span> Experience
        <div className="h-px bg-white/10 flex-1" />
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="glass-card p-8 rounded-3xl hover:border-secondary/30 transition-all">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-headline font-bold text-glow-primary">{exp.role}</h3>
                <p className="text-secondary font-medium">{exp.company}</p>
              </div>
              <p className="text-muted-foreground font-mono">{exp.period}</p>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map(t => (
                <span key={t} className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
