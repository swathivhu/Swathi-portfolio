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
    <section id="projects" className="py-40">
      <h2 className="section-heading">
        <span className="section-number">03.</span> Featured Systems
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 gap-40 xl:gap-56">
        {projects.map((project, idx) => (
          <div key={project.id} className="group relative">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-24 items-center">
              {/* Image side */}
              <div className={`xl:col-span-7 relative aspect-video rounded-[3rem] overflow-hidden glass-card border-white/10 glow-border ${idx % 2 !== 0 ? 'xl:order-last' : ''}`}>
                <Image
                  src={project.image || ''}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint="ai project dashboard"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              
              {/* Content side */}
              <div className="xl:col-span-5 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">Enterprise AI</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl xl:text-6xl font-headline font-bold text-glow-primary leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {summaries[project.id] && (
                  <div className="p-8 bg-primary/5 border border-primary/10 rounded-[2.5rem] animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80">LLM Analysis</span>
                    </div>
                    <p className="text-lg italic leading-relaxed text-muted-foreground">"{summaries[project.id]}"</p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono font-bold px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-muted-foreground/80 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-8 pt-10">
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="p-0 h-auto hover:bg-transparent text-secondary hover:text-secondary/80 text-lg font-bold group/btn"
                    onClick={() => handleGenerateSummary(project.id, project.longDescription)}
                    disabled={loading[project.id]}
                  >
                    <Sparkles className={`w-5 h-5 mr-3 ${loading[project.id] ? 'animate-spin' : ''}`} />
                    {loading[project.id] ? "Synthesizing..." : "AI INSIGHT"}
                    <div className="h-0.5 w-0 group-hover/btn:w-full bg-secondary transition-all duration-300 ml-3" />
                  </Button>
                  
                  <div className="flex items-center gap-5 ml-auto">
                    <a href={project.github} className="p-4 glass-card rounded-2xl hover:text-secondary hover:scale-110 transition-all"><Github className="w-6 h-6" /></a>
                    <a href={project.demo} className="p-4 glass-card rounded-2xl hover:text-secondary hover:scale-110 transition-all"><ExternalLink className="w-6 h-6" /></a>
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
