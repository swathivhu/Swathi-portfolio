"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { generateProjectSummary } from '@/ai/flows/generate-project-summary-flow';

const projects = [
  {
    id: 'p1',
    title: 'Neural Vision Pipeline',
    description: 'Automated video synthesis engine orchestrating Suno AI, NotebookLM, and ElevenLabs.',
    longDescription: 'This project leverages a multi-agent AI system to orchestrate various generative models. It uses NotebookLM for structured research, ElevenLabs for high-fidelity voice cloning, and Suno AI for background score generation.',
    tags: ['Python', 'GenAI', 'MoviePy', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: PlaceHolderImages.find(img => img.id === 'project-ai-video')?.imageUrl
  },
  {
    id: 'p2',
    title: 'Cognitive Content Hub',
    description: 'Autonomous dashboard managing multi-modal AI workflows with intelligent prompt chaining.',
    longDescription: 'Built with Next.js and Firebase, this tool manages complex prompts for different LLMs, ensuring consistency across generated content assets.',
    tags: ['Next.js', 'LangChain', 'OpenAI', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://picsum.photos/seed/ai-orch/600/400'
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
      <h2 className="section-heading">
        <span className="section-number">03.</span> Featured Systems
      </h2>
      
      <div className="space-y-20">
        {projects.map((project) => (
          <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group/project">
            <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
              <Image
                src={project.image || ''}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover/project:grayscale-0 group-hover/project:scale-105 transition-all duration-700"
                data-ai-hint="ai project dashboard"
              />
            </div>
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-primary opacity-60" />
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">System {project.id === 'p1' ? '01' : '02'}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white group-hover/project:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {summaries[project.id] && (
                <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl">
                  <p className="text-xs italic text-primary font-medium">"{summaries[project.id]}"</p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 py-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono font-bold px-2 py-1 rounded-lg bg-white/5 border border-white/5 text-muted-foreground/60 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-6 pt-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="px-0 h-auto hover:bg-transparent text-primary hover:text-primary/80 font-bold text-xs uppercase tracking-widest transition-colors"
                  onClick={() => handleGenerateSummary(project.id, project.longDescription)}
                  disabled={loading[project.id]}
                >
                  <Sparkles className={`w-3.5 h-3.5 mr-2 ${loading[project.id] ? 'animate-spin' : ''}`} />
                  {loading[project.id] ? "Thinking..." : "AI Insight"}
                </Button>
                
                <div className="flex items-center gap-4 ml-auto">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
                  <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};