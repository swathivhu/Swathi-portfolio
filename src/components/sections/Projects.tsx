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
    description: 'Automated video synthesis engine orchestrating Suno AI, NotebookLM, and ElevenLabs. Transforms raw concepts into production-quality educational media.',
    longDescription: 'This project leverages a multi-agent AI system to orchestrate various generative models. It uses NotebookLM for structured research, ElevenLabs for high-fidelity voice cloning, and Suno AI for background score generation.',
    tags: ['Python', 'GenAI', 'MoviePy', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: PlaceHolderImages.find(img => img.id === 'project-ai-video')?.imageUrl
  },
  {
    id: 'p2',
    title: 'Cognitive Content Hub',
    description: 'Autonomous dashboard managing multi-modal AI workflows. Intelligent prompt chaining ensures consistent brand voice across fragmented channels.',
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
    <section id="projects" className="py-32">
      <h2 className="section-heading">
        <span className="section-number">03.</span> Featured Systems
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="space-y-32">
        {projects.map((project) => (
          <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#111827]">
              <Image
                src={project.image || ''}
                alt={project.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                data-ai-hint="ai project dashboard"
              />
            </div>
            
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/5 text-primary border border-primary/10">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">Module {project.id === 'p1' ? '01' : '02'}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white leading-tight">
                {project.title}
              </h3>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {summaries[project.id] && (
                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl">
                  <p className="text-sm italic text-primary font-medium">"{summaries[project.id]}"</p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono font-bold px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-muted-foreground uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="px-0 h-auto hover:bg-transparent text-primary hover:text-primary/80 font-bold tracking-wide transition-colors"
                  onClick={() => handleGenerateSummary(project.id, project.longDescription)}
                  disabled={loading[project.id]}
                >
                  <Sparkles className={`w-3.5 h-3.5 mr-2 ${loading[project.id] ? 'animate-spin' : ''}`} />
                  {loading[project.id] ? "Processing..." : "AI Insights"}
                </Button>
                
                <div className="flex items-center gap-6 ml-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};