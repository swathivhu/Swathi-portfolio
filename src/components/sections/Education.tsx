"use client"

import React from 'react';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science',
    school: 'Technical University',
    period: '2021 – 2025',
    focus: ['Artificial Intelligence', 'Python Programming', 'Software Development']
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
        <span className="text-secondary">05.</span> Education
        <div className="h-px bg-white/10 flex-1" />
      </h2>
      
      <div className="relative pl-8 border-l-2 border-white/10 ml-4 space-y-12">
        {education.map((edu, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-secondary bg-glow-secondary" />
            
            <div className="glass-card p-8 rounded-3xl">
              <span className="text-secondary font-mono text-sm mb-2 block">{edu.period}</span>
              <h3 className="text-2xl font-headline font-bold mb-1">{edu.degree}</h3>
              <p className="text-primary font-medium mb-4">{edu.field} • {edu.school}</p>
              
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">Focus areas:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.focus.map(f => (
                    <span key={f} className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
