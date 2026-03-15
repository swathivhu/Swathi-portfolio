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
    image: PlaceHolderImages.find(img => img.id === 'project-ai-video')?.imageUrl
  },
  {
    id: 'streamverse',
    title: 'StreamVerse – Netflix-Style Streaming Platform',
    category: 'WEB APPLICATION',
    tech: ['Next.js', 'TMDB API', 'Tailwind CSS'],
    description: 'Modern OTT-style movie streaming web application with dynamic movie categories, search functionality, and a fully responsive UI built using TMDB API.',
    github: 'https://github.com/swathivhu/streamverse',
    demo: 'https://streamverse-blue.vercel.app',
    image: PlaceHolderImages.find(img => img.id === 'project-ai-video')?.imageUrl
  },
  {
    id: 'codbank',
    title: 'CodBank – Secure Modern Banking Platform',
    category: 'FINTECH SOLUTION',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    description: 'Secure full-stack banking application with authentication, real-time transactions, and Firebase integration for reliable financial management.',
    github: 'https://github.com/swathivhu/codbank-production',
    demo: 'https://codbank-production.vercel.app',
    image: PlaceHolderImages.find(img => img.id === 'project-ai-video')?.imageUrl
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 20 });
  
  // Parallax for the image content
  const imageTranslateX = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });
  const imageTranslateY = useSpring(useTransform(y, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRel = event.clientX - rect.left;
    const mouseYRel = event.clientY - rect.top;
    
    // Update relative values for tilt (-0.5 to 0.5)
    x.set(mouseXRel / width - 0.5);
    y.set(mouseYRel / height - 0.5);
    
    // Update raw pixel values for cursor-following glow
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
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15, // Staggered reveal
        ease: "easeOut" 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY,
        perspective: "1000px"
      }}
      className="group relative flex flex-col bg-gradient-to-br from-[#0d0d0d] via-[#080808] to-[#050505] border border-primary/20 rounded-[2rem] overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.1)] hover:border-primary/40 hover:-translate-y-2 hover:scale-[1.02]"
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
          background: 'linear-gradient(110deg, transparent 0%, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0) 65%, transparent 100%)',
          width: '100%',
          height: '100%',
          skewX: -25,
        }}
      />

      {/* Animated Accent Line (Top Edge Lighting) */}
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-40">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-dot-move" />
      </div>

      {/* Interactive Cursor-Following Glow */}
      <motion.div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([cx, cy]) => `radial-gradient(400px circle at ${cx}px ${cy}px, rgba(16, 185, 129, 0.08), transparent 80%)`
          )
        }}
      />

      {/* Floating Decorative Particles */}
      <div className="absolute top-4 right-4 z-20 flex gap-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <motion.div 
          animate={{ y: [0, -4, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"
        />
        <motion.div 
          animate={{ y: [0, 4, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          className="w-1 h-1 bg-primary/60 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"
        />
      </div>

      {/* Preview Image with Parallax & Zoom */}
      <div className="relative w-full aspect-video overflow-hidden border-b border-white/5 bg-black/20">
        <motion.div 
          style={{ x: imageTranslateX, y: imageTranslateY }}
          className="relative w-full h-full"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              data-ai-hint="project dashboard interface"
            />
          ) : (
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white/10" />
            </div>
          )}
        </motion.div>
        
        {/* Dark Gradient Overlay for text separation */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-90" />
        
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-primary/20 shadow-lg z-20">
          <Sparkles className="w-2.5 h-2.5 text-primary" />
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/90">
            {project.category}
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 p-6 flex-grow">
        {/* Project Title */}
        <h3 className="text-xl font-headline font-bold text-white group-hover:text-primary transition-all duration-300 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Badges with Micro-interactions */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((t) => (
            <motion.span 
              key={t} 
              whileHover={{ y: -2, scale: 1.05 }}
              className="text-[10px] font-mono font-bold px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-muted-foreground/80 uppercase tracking-tight hover:border-primary/50 hover:text-white hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all duration-300"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons with Icon Micro-interactions */}
        <div className="flex items-center gap-4 mt-auto pt-4">
          <Button 
            asChild
            size="lg"
            className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl h-11 font-bold text-xs uppercase tracking-[0.15em] transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] group/btn relative overflow-hidden active:scale-95"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
              <ArrowUpRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </a>
          </Button>
          
          <Button 
            variant="outline"
            asChild
            size="lg"
            className="flex-1 border-white/10 hover:bg-white/5 hover:border-white/20 rounded-xl h-11 font-bold text-xs uppercase tracking-[0.15em] transition-all text-muted-foreground hover:text-white active:scale-95 group/btn"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Github className="w-3.5 h-3.5 transition-transform group-hover/btn:rotate-12" />
              Repo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};