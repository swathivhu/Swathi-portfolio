"use client"

import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science',
    school: 'Technical University',
    period: '2021 – 2025',
    focus: ['AI', 'Python', 'Software Dev']
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <h2 className="section-heading">
        <span className="section-number">05.</span> Education
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div key={idx} className="flex gap-8 items-start">
            <div className="p-4 rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-primary font-mono text-xs uppercase tracking-widest">{edu.period}</span>
                <h3 className="text-2xl font-bold text-white">
                  {edu.degree}
                </h3>
                <p className="text-lg text-muted-foreground font-medium">{edu.field} • {edu.school}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {edu.focus.map(f => (
                  <span key={f} className="text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 text-muted-foreground uppercase">
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
