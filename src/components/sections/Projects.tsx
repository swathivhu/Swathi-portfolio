"use client"

import React, { useState, useRef } from 'react';
import { Github, Sparkles, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'career-os',
    title: 'Career OS',
    category: 'AI SYSTEM ARCHITECT',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    description: 'A unified career operating system integrating placement tracking, ATS resume scoring, and deployment verification.',
    github: 'https://github.com/swathivhu/career-os',
    demo: 'https://career-os-kappa.vercel.app'
  },
  {
    id: 'streamverse',
    title: 'StreamVerse',
    category: 'WEB APPLICATION',
    tech: ['Next.js', 'TMDB API', 'Tailwind CSS'],
    description: 'Modern OTT-style movie streaming web application built using Next.js and TMDB API with dynamic categories and search.',
    github: 'https://github.com/swathivhu/streamverse',
    demo: 'https://streamverse-blue.vercel.app'
  },
  {
    id: 'codbank',
    title: 'CodBank',
    category: 'FINTECH SOLUTION',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    description: 'Secure full-stack banking application with authentication, real-time transactions, and Firebase integration.',
    github: 'https://github.com/swathivhu/codbank-production',
    demo: 'https://codbank-production.vercel.app'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tight">
          Featured <span className="text-primary neon-text">Systems</span>
        </h2>
        <div className="h-px bg-white/10 flex-1 hidden md:block ml-12" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative h-full flex flex-col bg-[#050505] border border-white/5 rounded-[2.5rem] p-8 md:p-10 transition-all duration-300 hover:bg-white/[0.02] hover:border-primary/20 overflow-hidden"
    >
      {/* Interactive Radial Highlight */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.08), transparent 40%)`,
        }}
      />

      {/* Radiant Glow Shadow (Active on Hover) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_20px_50px_rgba(16,185,129,0.05)] pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 flex flex-col gap-6 h-full">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-primary/80">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 py-4">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="text-[9px] md:text-[10px] font-mono font-bold px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-muted-foreground uppercase tracking-widest group-hover:border-primary/30 group-hover:text-white transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto pt-4">
          <Button 
            asChild
            size="lg"
            className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl h-12 font-bold text-xs uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group/btn"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Demo
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>
          
          <Button 
            variant="outline"
            asChild
            className="border-white/10 hover:bg-white/5 hover:border-white/20 rounded-xl h-12 w-12 p-0 flex items-center justify-center transition-all text-muted-foreground hover:text-white"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View Github">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};