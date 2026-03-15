
"use client"

import React from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import { cn } from '@/lib/utils';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Electronics & Communication',
    school: 'Acharya Institute of Technology (AIT)',
    period: '2022 – 2026',
    description: 'Focused on electronics systems, communication technologies, and modern computing. Actively exploring Artificial Intelligence, Generative AI, and Full Stack Development through projects and practical implementations.',
    focus: ['AI', 'Generative AI', 'Full Stack', 'Electronics'],
    icon: GraduationCap
  },
  {
    degree: 'Class 12',
    field: 'Science Stream',
    school: 'MES PU College of Arts, Commerce & Science',
    period: '2021 – 2022',
    description: 'Studied core subjects including Physics, Chemistry, and Mathematics, building a strong analytical and problem-solving foundation for engineering studies.',
    focus: ['Physics', 'Chemistry', 'Mathematics', 'Analysis'],
    icon: BookOpen
  },
  {
    degree: 'Class 10',
    field: 'Secondary Education',
    school: 'Raja Rajeshwari English School',
    period: '2020 – 2021',
    description: 'Completed secondary education with a strong focus on academic excellence. Developed early interest in technology, computing, and logical problem solving.',
    focus: ['Computing', 'Logic', 'Problem Solving'],
    icon: School
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <h2 className="section-heading">
        <span className="section-number">05.</span> Education
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="relative space-y-16 pl-8">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[3.5px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        {education.map((edu, idx) => (
          <div key={idx} className="relative group">
            
            {/* Pulsing Timeline Node */}
            <div className="absolute -left-[32.5px] top-1.5 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.8)] z-10 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary/40 animate-ping" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <edu.icon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground font-medium flex items-center gap-2">
                      {edu.field} 
                      <span className="text-white/20">•</span> 
                      <span className="text-white/60">{edu.school}</span>
                    </p>
                  </div>

                  {/* Floating Year Badge */}
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-black border border-primary/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:border-primary/60 group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-4xl">
                  {edu.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {edu.focus.map(f => (
                    <span key={f} className="text-[9px] font-bold px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground/60 uppercase tracking-widest hover:border-primary/30 hover:text-primary transition-all duration-300">
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
