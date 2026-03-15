"use client"

import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Electronics & Communication',
    school: 'Acharya Institute of Technology (AIT)',
    period: '2022 – 2026',
    description: 'Focused on electronics systems, communication technologies, and modern computing. Actively exploring Artificial Intelligence, Generative AI, and Full Stack Development through projects and practical implementations.',
    focus: ['AI', 'Generative AI', 'Full Stack', 'Electronics']
  },
  {
    degree: 'Class 12',
    field: 'Science Stream',
    school: 'MES PU College of Arts, Commerce & Science',
    period: '2021 – 2022',
    description: 'Studied core subjects including Physics, Chemistry, and Mathematics, building a strong analytical and problem-solving foundation for engineering studies.',
    focus: ['Physics', 'Chemistry', 'Mathematics', 'Analysis']
  },
  {
    degree: 'Class 10',
    field: 'Secondary Education',
    school: 'Raja Rajeshwari English School',
    period: '2020 – 2021',
    description: 'Completed secondary education with a strong focus on academic excellence. Developed early interest in technology, computing, and logical problem solving.',
    focus: ['Computing', 'Logic', 'Problem Solving']
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <h2 className="section-heading">
        <span className="section-number">05.</span> Education
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="space-y-16">
        {education.map((edu, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 items-start group">
            <div className="p-4 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <GraduationCap className="w-8 h-8" />
            </div>
            
            <div className="space-y-4 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <span className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em]">{edu.period}</span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">{edu.field} • {edu.school}</p>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-3xl">
                {edu.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {edu.focus.map(f => (
                  <span key={f} className="text-[9px] font-bold px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground uppercase tracking-widest hover:border-primary/30 hover:text-primary transition-all">
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
