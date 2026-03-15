
"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateProjectSummary } from '@/ai/flows/generate-project-summary-flow';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 'career-os',
    title: 'Career OS',
    subtitle: 'AI-Powered Career Management',
    techLine: 'Next.js • TypeScript • Firebase',
    description: 'A unified career operating system integrating placement tracking, ATS resume scoring, and deployment verification.',
    longDescription: 'Career OS is a comprehensive platform designed to streamline the job search and career management process. It features an intelligent ATS scoring engine to optimize resumes, a robust tracking system for applications and placements, and automated verification tools to ensure deployment accuracy.',
    github: 'https://github.com/swathivhu/career-os',
    demo: 'https://career-os-kappa.vercel.app'
  },
  {
    id: 'streamverse',
    title: 'StreamVerse',
    subtitle: 'Netflix-Style Streaming',
    techLine: 'Next.js • TMDB API • Tailwind',
    description: 'Modern OTT-style movie streaming web application built using Next.js and TMDB API with dynamic categories.',
    longDescription: 'StreamVerse provides a premium streaming experience with dynamic movie categories, real-time search functionality, and a fully responsive UI. It leverages the TMDB API for up-to-date content and Next.js for high-performance rendering.',
    github: 'https://github.com/swathivhu/streamverse',
    demo: 'https://streamverse-blue.vercel.app'
  },
  {
    id: 'codbank',
    title: 'CodBank',
    subtitle: 'Secure Modern Banking',
    techLine: 'Next.js • TypeScript • Firebase',
    description: 'Secure full-stack banking application with authentication, real-time transactions, and Firebase integration.',
    longDescription: 'CodBank is a robust fintech solution featuring secure user authentication, real-time balance tracking, and transaction history. Built with a focus on security and scalability using Firebase and TypeScript.',
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
      
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "transition-all duration-[800ms] ease-out",
              isVisible 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 translate-y-20 scale-95"
            )}
            style={{ transitionDelay: `${index * 200}ms` }}
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
      className="group relative bg-[#050505] border border-white/5 rounded-[2.5rem] p-8 md:p-12 flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] hover:bg-white/[0.02] hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(16,185,129,0.05)] overflow-hidden"
    >
      {/* Interactive Radial Highlight */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.05), transparent 40%)`,
        }}
      />

      {/* Content Structure */}
      <div className="relative z-10 flex flex-col gap-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-primary">
            Featured Project
          </span>
        </div>

        {/* Heading & Tech */}
        <div className="space-y-3">
          <h3 className="text-3xl md:text-5xl font-headline font-bold text-white group-hover:text-primary transition-colors duration-500">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm font-mono text-primary/60 font-medium uppercase tracking-[0.3em]">
            {project.techLine}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
          {project.description}
        </p>

        {/* AI Insight Bubble (if available) */}
        {summary && (
          <div className="p-5 bg-primary/[0.03] border border-primary/10 rounded-2xl animate-in fade-in slide-in-from-top-4 max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3 h-3 text-primary/60" />
              <span className="text-[9px] font-mono uppercase tracking-widest text-primary/60">AI Summary</span>
            </div>
            <p className="text-[12px] md:text-sm italic text-primary/80 font-medium leading-relaxed">
              "{summary}"
            </p>
          </div>
        )}

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-xl h-12 px-8 font-bold text-xs uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] group/btn"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              View Live Demo
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>
          
          <Button 
            variant="outline"
            asChild
            className="border-white/10 hover:bg-white/5 hover:border-white/20 rounded-xl h-12 px-6 font-bold text-xs uppercase tracking-[0.2em] transition-all text-muted-foreground hover:text-white"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </Button>

          {!summary && (
            <Button 
              variant="ghost" 
              size="sm"
              className="text-primary/40 hover:text-primary hover:bg-transparent transition-colors font-mono text-[10px] uppercase tracking-widest gap-2 ml-auto"
              onClick={(e) => {
                e.stopPropagation();
                onSummarize();
              }}
              disabled={loading}
            >
              <Sparkles className={cn("w-3 h-3", loading && "animate-spin")} />
              {loading ? 'Analyzing...' : 'AI Summary'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
