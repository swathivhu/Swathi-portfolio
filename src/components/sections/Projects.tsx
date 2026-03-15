"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

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
    <section id="projects" className="py-12 md:py-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <h2 className="text-2xl md:text-4xl font-headline font-bold text-white tracking-tight">
          Featured <span className="text-primary neon-text">Systems</span>
        </h2>
        <div className="h-px bg-white/10 flex-1 hidden md:block ml-8" />
      </div>
      
      {/* 2-column grid for desktop/tablet, 1-column for mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ 
        y: -6, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative h-full flex flex-col bg-gradient-to-br from-[#0d0d0d] to-[#050505] border border-primary/20 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-primary/40 shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]"
    >
      {/* Preview Image at Top */}
      <div className="relative w-full aspect-video overflow-hidden border-b border-white/5">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            data-ai-hint="project dashboard interface"
          />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white/10" />
          </div>
        )}
        
        {/* Image Overlay Gradient for separation */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-primary/20">
          <Sparkles className="w-2.5 h-2.5 text-primary" />
          <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-white/90">
            {project.category}
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 p-6 flex-grow">
        {/* Project Title with increased brightness */}
        <h3 className="text-lg md:text-xl font-headline font-bold text-white group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] transition-all duration-300 leading-tight">
          {project.title}
        </h3>

        {/* Short Description - Max 2 lines */}
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="text-[9px] font-mono font-bold px-2.5 py-0.5 bg-white/[0.03] border border-white/10 rounded-full text-muted-foreground/80 uppercase tracking-tighter group-hover:border-primary/30 group-hover:text-white transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Compact Action Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4">
          <Button 
            asChild
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-lg h-9 font-bold text-[10px] uppercase tracking-wider transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group/btn"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Demo
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>
          
          <Button 
            variant="outline"
            asChild
            size="sm"
            className="flex-1 border-white/10 hover:bg-white/5 hover:border-white/20 rounded-lg h-9 font-bold text-[10px] uppercase tracking-wider transition-all text-muted-foreground hover:text-white"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Subtle Internal Edge Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_40px_rgba(16,185,129,0.03)] pointer-events-none" />
    </motion.div>
  );
};