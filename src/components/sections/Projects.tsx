"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
    description: 'Modern OTT-style movie streaming web application with dynamic movie categories, search functionality, and a fully responsive UI.',
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
    <section id="projects" className="py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-tight">
          Featured <span className="text-primary neon-text">Systems</span>
        </h2>
        <div className="h-px bg-white/10 flex-1 hidden md:block ml-6" />
      </div>
      
      {/* 2-Column Grid for Desktop and Tablet */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
  
  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Raw mouse coordinates for lighting
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth movement
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 20 });
  
  // Parallax for the image content
  const imageTranslateX = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 30 });
  const imageTranslateY = useSpring(useTransform(y, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRel = event.clientX - rect.left;
    const mouseYRel = event.clientY - rect.top;
    
    x.set(mouseXRel / width - 0.5);
    y.set(mouseYRel / height - 0.5);
    
    mouseX.set(mouseXRel);
    mouseY.set(mouseYRel);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut" 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY,
        perspective: "1000px"
      }}
      className="group relative flex flex-col bg-gradient-to-br from-[#0d0d0d] via-[#080808] to-[#050505] border border-primary/20 rounded-[1.5rem] overflow-hidden transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.1)] hover:border-primary/40 hover:-translate-y-1.5"
    >
      {/* Apple-style Light Sweep Effect */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none"
        initial={{ x: '-150%', opacity: 0 }}
        whileHover={{ 
          x: '150%', 
          opacity: [0, 1, 1, 0] 
        }}
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

      {/* Animated Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-40">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-dot-move" />
      </div>

      {/* Cursor-Following Glow */}
      <motion.div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([cx, cy]) => `radial-gradient(350px circle at ${cx}px ${cy}px, rgba(16, 185, 129, 0.06), transparent 80%)`
          )
        }}
      />

      {/* Decorative Particles */}
      <div className="absolute top-3 right-3 z-20 flex gap-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <motion.div 
          animate={{ y: [0, -2, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-1 bg-primary rounded-full shadow-[0_0_6px_rgba(16,185,129,0.6)]"
        />
        <motion.div 
          animate={{ y: [0, 2, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          className="w-1 h-1 bg-primary/50 rounded-full shadow-[0_0_6px_rgba(16,185,129,0.3)]"
        />
      </div>

      {/* Compact Preview Image */}
      <div className="relative w-full aspect-video overflow-hidden border-b border-white/5 bg-black/40">
        <motion.div 
          style={{ x: imageTranslateX, y: imageTranslateY }}
          className="relative w-full h-full"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white/10" />
            </div>
          )}
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80" />
        
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-primary/20 z-20">
          <Sparkles className="w-2 h-2 text-primary" />
          <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-white/90">
            {project.category}
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-3 p-5 flex-grow">
        <h3 className="text-lg font-headline font-bold text-white group-hover:text-primary transition-all duration-300 leading-tight">
          {project.title}
        </h3>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <motion.span 
              key={t} 
              whileHover={{ y: -1, scale: 1.02 }}
              className="text-[9px] font-mono font-bold px-2.5 py-0.5 bg-white/[0.03] border border-white/10 rounded-full text-muted-foreground/80 uppercase tracking-tight hover:border-primary/50 hover:text-white transition-all duration-300"
            >
              {t}
            </motion.span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto pt-3">
          <Button 
            asChild
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-lg h-9 font-bold text-[10px] uppercase tracking-wider group/btn relative overflow-hidden active:scale-95"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
              <ArrowUpRight className="ml-1.5 w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>
          
          <Button 
            variant="outline"
            asChild
            size="sm"
            className="flex-1 border-white/10 hover:bg-white/5 hover:border-white/20 rounded-lg h-9 font-bold text-[10px] uppercase tracking-wider transition-all text-muted-foreground hover:text-white active:scale-95 group/btn"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
              <Github className="w-3 h-3 transition-transform group-hover/btn:rotate-6" />
              Repo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};