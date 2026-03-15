"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Sparkles, Layers, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateProjectSummary } from '@/ai/flows/generate-project-summary-flow';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 'career-os',
    title: 'Career OS – AI Career Management',
    description: 'A unified career operating system integrating placement tracking, ATS resume scoring, and deployment verification.',
    longDescription: 'Career OS is a comprehensive platform designed to streamline the job search and career management process. It features an intelligent ATS scoring engine to optimize resumes, a robust tracking system for applications and placements, and automated verification tools to ensure deployment accuracy.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'AI'],
    github: 'https://github.com/swathivhu/career-os',
    demo: 'https://career-os-kappa.vercel.app',
    image: 'https://picsum.photos/seed/career-os/800/500'
  },
  {
    id: 'neural-vision',
    title: 'Neural Vision Pipeline',
    description: 'Automated video synthesis engine orchestrating Suno AI, NotebookLM, and ElevenLabs.',
    longDescription: 'This project leverages a multi-agent AI system to orchestrate various generative models. It uses NotebookLM for structured research, ElevenLabs for high-fidelity voice cloning, and Suno AI for background score generation.',
    tags: ['Python', 'GenAI', 'MoviePy', 'FastAPI'],
    github: 'https://github.com/swathivhu',
    demo: 'https://demo.com',
    image: 'https://picsum.photos/seed/neural/800/500'
  }
];

export const Projects: React.FC = () => {
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const handleGenerateSummary = async (projectId: string, description: string) => {
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
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="section-heading !mb-0">
          <span className="section-number">03.</span> Featured Systems
        </h2>
        <div className="h-px bg-white/5 flex-1 hidden md:block ml-8" />
      </div>
      
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:bg-white/[0.04] hover:border-primary/20 shadow-2xl"
          >
            {/* Subtle Radial Glow on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Section */}
              <div className="lg:col-span-5 relative aspect-video lg:aspect-auto overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  data-ai-hint="ai project screenshot"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>
              
              {/* Content Section */}
              <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center space-y-6 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <Code2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-[0.2em]">Deployment Verified</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* AI Insight Bubble */}
                {summaries[project.id] && (
                  <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl animate-in fade-in slide-in-from-left-4">
                    <p className="text-sm italic text-primary/90 font-medium leading-relaxed">
                      <Sparkles className="w-3.5 h-3.5 inline mr-2 mb-1" />
                      "{summaries[project.id]}"
                    </p>
                  </div>
                )}
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-zinc-400 uppercase tracking-wider group-hover:border-primary/30 group-hover:text-zinc-200 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <Button 
                      asChild
                      className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-white rounded-xl px-6 font-bold transition-all hover:scale-105 active:scale-95"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      asChild
                      className="flex-1 sm:flex-none border-white/10 hover:bg-white/5 rounded-xl px-6 font-bold text-muted-foreground hover:text-white transition-all"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                        <Github className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="ml-auto text-primary/60 hover:text-primary hover:bg-transparent font-bold text-xs uppercase tracking-widest transition-all group/btn"
                    onClick={() => handleGenerateSummary(project.id, project.longDescription)}
                    disabled={loading[project.id]}
                  >
                    <Sparkles className={cn("w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform", loading[project.id] && "animate-spin")} />
                    {loading[project.id] ? "Analyzing..." : "AI Summary"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
