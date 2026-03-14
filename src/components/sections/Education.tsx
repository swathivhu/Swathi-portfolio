"use client"

import React from 'react';
import { GraduationCap } from 'lucide-react';

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
    <section id="education" className="py-32">
      <h2 className="section-heading">
        <span className="section-number">05.</span> Education
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="space-y-12">
        {education.map((edu, idx) => (
          <div key={idx} className="flex flex-col lg:flex-row gap-12 items-start group">
            <div className="p-6 rounded-[2rem] bg-secondary/5 border border-secondary/10 text-secondary group-hover:bg-secondary/10 transition-colors">
              <GraduationCap className="w-12 h-12" />
            </div>
            
            <div className="space-y-4 flex-1">
              <div className="space-y-1">
                <span className="text-secondary font-mono text-sm uppercase tracking-widest">{edu.period}</span>
                <h3 className="text-3xl font-headline font-bold text-white group-hover:text-glow-secondary transition-all">
                  {edu.degree}
                </h3>
                <p className="text-xl text-primary font-medium">{edu.field} • {edu.school}</p>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {edu.focus.map(f => (
                  <span key={f} className="text-xs font-bold px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary/80 uppercase tracking-tighter">
                    {f}
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
