
"use client"

import React from 'react';
import { GraduationCap, BookOpen, School, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Electronics & Communication',
    school: 'Acharya Institute of Technology (AIT)',
    period: '2022 – 2026',
    description: (
      <>
        Focused on electronics systems, communication technologies, and modern computing. 
        Actively exploring <span className="text-white font-bold">Artificial Intelligence, Generative AI, and Full Stack Development</span> through projects and hands-on development.
      </>
    ),
    focus: ['AI', 'Generative AI', 'Full Stack', 'Electronics'],
    icon: GraduationCap
  },
  {
    degree: 'Class 12',
    field: 'Science Stream',
    school: 'MES PU College of Arts, Commerce & Science',
    period: '2021 – 2022',
    description: (
      <>
        Studied core subjects including <span className="text-white font-bold">Physics, Chemistry, and Mathematics</span>, building strong analytical and problem-solving foundations for engineering studies.
      </>
    ),
    focus: ['Physics', 'Chemistry', 'Mathematics', 'Analytical Thinking'],
    icon: BookOpen
  },
  {
    degree: 'Class 10',
    field: 'Secondary Education',
    school: 'Raja Rajeshwari English School',
    period: '2020 – 2021',
    description: (
      <>
        Completed secondary education with strong academic performance and developed an early interest in <span className="text-white font-bold">technology, computing, and logical problem solving</span>.
      </>
    ),
    focus: ['Mathematics', 'Science', 'Logical Thinking'],
    icon: School
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative space-y-12">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full blur-[2px]" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.1, 0.4, 0.1] 
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-20 w-1.5 h-1.5 bg-primary rounded-full blur-[1px]" 
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <h2 className="section-heading m-0">
          <span className="section-number">05.</span> Education
        </h2>
        <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-1 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
      </motion.div>
      
      <div className="relative space-y-16 pl-8">
        {/* Animated Vertical Timeline Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-[3.5px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-primary via-primary/40 to-transparent origin-top shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
        />

        {education.map((edu, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Pulsing Timeline Node */}
            <div className="absolute -left-[32.5px] top-1.5 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.5 }}
                className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(16,185,129,1)] z-10 transition-all duration-300" 
              />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary/40 animate-ping" />
              <div className="absolute inset-[-4px] w-4.5 h-4.5 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <edu.icon className="w-6 h-6 text-primary drop-shadow-[0_0_10px_rgba(16,185,129,0.6)] group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground font-medium flex items-center gap-2 flex-wrap">
                      <span className="text-white/80">{edu.field}</span>
                      <span className="text-white/20 hidden sm:inline">•</span> 
                      <span className="text-white/60">{edu.school}</span>
                    </p>
                  </div>

                  {/* Floating Year Badge */}
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -4 }}
                    animate={{ y: [0, -2, 0] }}
                    transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                    className="inline-flex items-center px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-primary/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:border-primary/60 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
                  >
                    <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">
                      {edu.period}
                    </span>
                  </motion.div>
                </div>

                <div className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-4xl">
                  {edu.description}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {edu.focus.map(f => (
                    <motion.span 
                      key={f}
                      whileHover={{ y: -2, backgroundColor: "rgba(16, 185, 129, 0.1)", borderColor: "rgba(16, 185, 129, 0.4)" }}
                      className="text-[9px] font-bold px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground/60 uppercase tracking-widest hover:text-primary transition-all duration-300 cursor-default shadow-sm"
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
