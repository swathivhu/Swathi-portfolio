"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Sparkles, Code2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { generateProjectSummary } from '@/ai/flows/generate-project-summary-flow';

const projects = [
  {
    id: 'p1',
    title: 'Neural Vision Pipeline',
    description: 'Automated video synthesis engine orchestrating Suno AI, NotebookLM, and ElevenLabs. Transforms raw concepts into production-quality educational media.',
    longDescription: 'This project leverages a multi-agent AI system to orchestrate various generative models. It uses NotebookLM for structured research, ElevenLabs for high-fidelity voice cloning, and Suno AI for background score generation, all stitched together with a Python backend for automated video composition.',
    tags: ['Python', 'Generative AI', 'MoviePy', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: PlaceHolderImages.find(img => img.id === 'project-ai-video')?.imageUrl
  },
  {
    id: 'p2',
    title: 'Cognitive Content Hub',
    description: 'Autonomous dashboard managing multi-modal AI workflows. Intelligent prompt chaining ensures consistent brand voice across fragmented channels.',
    longDescription: 'Built with Next.js and Firebase, this tool manages complex prompts for different LLMs, ensuring consistency across generated blog posts, social media captions, and email campaigns. It uses LangChain for prompt chaining and Firebase for real-time task tracking.',
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
      
      <div className="grid grid-cols-1 gap-20">
        {projects.map((project, idx) => (
          <div key={project.id} className="group relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Image side */}
              <div className={`lg:col-span-7 relative aspect-video rounded-3xl overflow-hidden glass-card border-white/10 glow-border ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <Image
                  src={project.image || ''}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="ai project dashboard"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              {/* Content side */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Enterprise AI</span>
                </div>
                
                <h3 className="text-4xl font-headline font-bold text-glow-primary leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {summaries[project.id] && (
                  <div className="p-5 bg-primary/5 border border-primary/10 rounded-2xl animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest text-primary/80">LLM Analysis</span>
                    </div>
                    <p className="text-sm italic leading-relaxed text-muted-foreground">"{summaries[project.id]}"</p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 pt-6">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="p-0 h-auto hover:bg-transparent text-secondary hover:text-secondary/80 font-bold group/btn"
                    onClick={() => handleGenerateSummary(project.id, project.longDescription)}
                    disabled={loading[project.id]}
                  >
                    <Sparkles className={`w-4 h-4 mr-2 ${loading[project.id] ? 'animate-spin' : ''}`} />
                    {loading[project.id] ? "Synthesizing..." : "AI INSIGHT"}
                    <div className="h-0.5 w-0 group-hover/btn:w-full bg-secondary transition-all duration-300 ml-2" />
                  </Button>
                  
                  <div className="flex items-center gap-4 ml-auto">
                    <a href={project.github} className="p-3 glass-card rounded-xl hover:text-secondary transition-colors"><Github className="w-5 h-5" /></a>
                    <a href={project.demo} className="p-3 glass-card rounded-xl hover:text-secondary transition-colors"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
