
"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, Sparkles, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateProjectSummary } from '@/ai/flows/generate-project-summary-flow';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 'career-os',
    title: 'Career OS',
    subtitle: 'AI-Powered Career Management',
    description: 'A unified career operating system integrating placement tracking, ATS resume scoring, and deployment verification.',
    longDescription: 'Career OS is a comprehensive platform designed to streamline the job search and career management process. It features an intelligent ATS scoring engine to optimize resumes, a robust tracking system for applications and placements, and automated verification tools to ensure deployment accuracy.',
    tags: ['Next.js', 'TypeScript', 'Firebase'],
    github: 'https://github.com/swathivhu/career-os',
    demo: 'https://career-os-kappa.vercel.app'
  },
  {
    id: 'streamverse',
    title: 'StreamVerse',
    subtitle: 'Netflix-Style Streaming',
    description: 'Modern OTT-style movie streaming web application built using Next.js and TMDB API with dynamic categories.',
    longDescription: 'StreamVerse provides a premium streaming experience with dynamic movie categories, real-time search functionality, and a fully responsive UI. It leverages the TMDB API for up-to-date content and Next.js for high-performance rendering.',
    tags: ['Next.js', 'TMDB API', 'Tailwind'],
    github: 'https://github.com/swathivhu/streamverse',
    demo: 'https://streamverse-blue.vercel.app'
  },
  {
    id: 'codbank',
    title: 'CodBank',
    subtitle: 'Secure Modern Banking',
    description: 'Secure full-stack banking application with authentication, real-time transactions, and Firebase integration.',
    longDescription: 'CodBank is a robust fintech solution featuring secure user authentication, real-time balance tracking, and transaction history. Built with a focus on security and scalability using Firebase and TypeScript.',
    tags: ['Next.js', 'TypeScript', 'Firebase'],
    github: 'https://github.com/swathivhu/codbank-production',
    demo: 'https://codbank-production.vercel.app'
  }
];

export const Projects: React.FC = () => {
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleGenerateSummary = async (projectId: string, description: string) => {
    if (summaries[projectId]) return;
    setLoading(prev => ({ ...prev, [projectId]: true }));
    try {
      const result = await generateProjectSummary({ projectDescription: description });
      setSummaries(prev => ({ ...prev, [projectId]: result.summary }));
    } catch (error) {
      console.error("Failed to generate AI summary", error);
    } finally {
      setLoading(prev => ({ ...prev, [projectId]: false }));
    }
  };

  return (
    <div ref={sectionRef} className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="section-heading !mb-0">
          <span className="section-number">03.</span> Featured Systems
        </h2>
        <div className="h-px bg-white/5 flex-1 hidden md:block ml-8" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0",
              !isVisible && index === 0 && "-translate-x-10",
              !isVisible && index === 1 && "translate-y-10",
              !isVisible && index === 2 && "translate-x-10"
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <ProjectCard 
              project={project}
              summary={summaries[project.id]}
              loading={loading[project.id]}
              onSummarize={() => handleGenerateSummary(project.id, project.longDescription)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  summary?: string;
  loading?: boolean;
  onSummarize: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, summary, loading, onSummarize }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:bg-white/[0.06] hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(16,185,129,0.1)] overflow-hidden"
    >
      {/* Interactive Radial Highlight */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 space-y-4 flex-grow">
        <div className="flex items-start justify-between">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-primary/40 hover:text-primary hover:bg-transparent transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onSummarize();
            }}
            disabled={loading}
          >
            <Sparkles className={cn("w-4 h-4", loading && "animate-spin")} />
          </Button>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[10px] font-mono text-primary font-bold uppercase tracking-[0.2em]">
            {project.subtitle}
          </p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* AI Insight Bubble */}
        {summary && (
          <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl animate-in fade-in slide-in-from-top-2">
            <p className="text-[11px] italic text-primary/90 font-medium leading-relaxed">
              "{summary}"
            </p>
          </div>
        )}

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-2 pt-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 uppercase tracking-wider group-hover:border-primary/40 group-hover:text-zinc-200 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="relative z-10 flex items-center gap-3 pt-8 mt-auto">
        <Button 
          asChild
          className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl h-10 font-bold text-xs uppercase tracking-wider transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group/btn"
        >
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live Demo
            <ExternalLink className="ml-2 w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </Button>
        <Button 
          variant="outline"
          asChild
          className="w-12 h-10 border-white/10 hover:bg-white/5 hover:border-white/20 rounded-xl p-0 transition-all"
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
            <Github className="w-4 h-4 text-muted-foreground group-hover:text-white" />
          </a>
        </Button>
      </div>
    </div>
  );
};
