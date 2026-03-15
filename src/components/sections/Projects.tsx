
"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'career-os',
    title: 'Career OS – AI-Powered Career Management System',
    category: 'AI SYSTEM ARCHITECT',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    description: 'A unified career operating system integrating placement tracking, ATS resume scoring, and deployment verification.',
    github: 'https://github.com/swathivhu/career-os',
    demo: 'https://career-os-kappa.vercel.app',
    image: PlaceHolderImages.find(img => img.id === 'project-career-os')?.imageUrl
  },
  {
    id: 'streamverse',
    title: 'StreamVerse – Netflix-Style Streaming Platform',
    category: 'WEB APPLICATION',
    tech: ['Next.js', 'TMDB API', 'Tailwind CSS'],
    description: 'Modern OTT-style movie streaming web application with dynamic movie categories, search functionality, and a fully responsive UI built using TMDB API.',
    github: 'https://github.com/swathivhu/streamverse',
    demo: 'https://streamverse-blue.vercel.app',
    image: PlaceHolderImages.find(img => img.id === 'project-streamverse')?.imageUrl
  },
  {
    id: 'codbank',
    title: 'CodBank – Secure Modern Banking Platform',
    category: 'FINTECH SOLUTION',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    description: 'Secure full-stack banking application with authentication, real-time transactions, and Firebase integration for reliable financial management.',
    github: 'https://github.com/swathivhu/codbank-production',
    demo: 'https://codbank-production.vercel.app',
    image: PlaceHolderImages.find(img => img.id === 'project-codbank')?.imageUrl
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        y: -6, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative h-full flex flex-col bg-[#050505] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-300 hover:bg-white/[0.02] hover:border-primary/20"
    >
      {/* 1. Project Preview Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-white/5">
        <Image
          src={project.image || ''}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          data-ai-hint="project dashboard"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
        
        {/* Category Label Overlay */}
        <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white">
            {project.category}
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 p-8 md:p-10 flex-grow">
        {/* 2. Project Title */}
        <h3 className="text-2xl md:text-3xl font-headline font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
          {project.title}
        </h3>

        {/* 3. Short Description */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Row */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="text-[10px] font-mono font-bold px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-muted-foreground uppercase tracking-widest group-hover:border-primary/30 group-hover:text-white transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 4. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto pt-8">
          <Button 
            asChild
            size="lg"
            className="w-full sm:flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl h-12 font-bold text-xs uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group/btn"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>
          
          <Button 
            variant="outline"
            asChild
            className="w-full sm:flex-1 border-white/10 hover:bg-white/5 hover:border-white/20 rounded-xl h-12 font-bold text-xs uppercase tracking-[0.2em] transition-all text-muted-foreground hover:text-white"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Github className="w-4 h-4" />
              GitHub Repo
            </a>
          </Button>
        </div>
      </div>

      {/* Glow shadow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_20px_50px_rgba(16,185,129,0.05)] pointer-events-none" />
    </motion.div>
  );
};
