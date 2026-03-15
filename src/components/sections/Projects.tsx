"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'career-os',
    title: 'Career OS',
    category: 'AI SYSTEM ARCHITECT',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    description: 'A unified career operating system integrating placement tracking, ATS resume scoring, and deployment verification.',
    github: 'https://github.com/swathivhu/career-os',
    demo: 'https://career-os-kappa.vercel.app',
    image: PlaceHolderImages.find(img => img.id === 'project-career-os')?.imageUrl
  },
  {
    id: 'streamverse',
    title: 'StreamVerse',
    category: 'WEB APPLICATION',
    tech: ['Next.js', 'TMDB API', 'Tailwind CSS'],
    description: 'Modern OTT-style movie streaming web application with dynamic movie categories, search functionality, and a fully responsive UI.',
    github: 'https://github.com/swathivhu/streamverse',
    demo: 'https://streamverse-blue.vercel.app',
    image: PlaceHolderImages.find(img => img.id === 'project-streamverse')?.imageUrl
  },
  {
    id: 'codbank',
    title: 'CodBank',
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
    <section id="projects" className="py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-tight">
          Featured <span className="text-primary neon-text">Systems</span>
        </h2>
        <div className="h-px bg-white/10 flex-1 hidden md:block ml-6" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative flex flex-col bg-gradient-to-br from-[#0d0d0d] to-[#050505] border border-primary/20 rounded-[1.5rem] overflow-hidden transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.05)] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:border-primary/40"
    >
      {/* Apple-style Light Sweep Reflection */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-[1.5rem]">
        <motion.div
          className="absolute inset-0"
          initial={{ x: '-150%', opacity: 0 }}
          animate={isHovered ? { x: '150%', opacity: [0, 1, 1, 0] } : { x: '-150%', opacity: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
          }}
          style={{
            background: 'linear-gradient(110deg, transparent 0%, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 65%, transparent 100%)',
            width: '100%',
            height: '100%',
            skewX: -25,
          }}
        />
      </div>

      {/* Project Image Section */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/5 bg-zinc-950">
        <div className="relative w-full h-full overflow-hidden">
          {project.image ? (
            <motion.div
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority={index < 2}
              />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-white/[0.03] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white/10" />
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0d0d0d] to-transparent z-10" />
        </div>
        
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-primary/30 z-20">
          <Sparkles className="w-2.5 h-2.5 text-primary" />
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/90">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Information Section */}
      <div className="flex flex-col gap-4 p-6 md:p-8 flex-grow">
        <div className="space-y-3">
          <h3 className="text-2xl font-headline font-bold text-primary neon-text transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] leading-tight">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Skills revealed on hover */}
          <div className="h-8 relative overflow-hidden">
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[9px] font-mono px-2 py-0.5 bg-primary/5 rounded border border-primary/20 text-primary uppercase tracking-wider shadow-[0_0_10px_rgba(16,185,129,0.1)]"
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4">
          <Button 
            asChild
            variant="outline"
            className="flex-1 border-white/10 hover:bg-white/5 hover:border-primary/40 rounded-xl h-11 font-bold text-[10px] uppercase tracking-widest transition-all text-muted-foreground hover:text-white group/btn"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Github className="w-4 h-4 transition-transform group-hover/btn:rotate-12" />
              Repo
            </a>
          </Button>

          <Button 
            asChild
            className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl h-11 font-bold text-[10px] uppercase tracking-widest group/btn relative overflow-hidden active:scale-95 shadow-lg shadow-primary/20"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              Live Demo
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
