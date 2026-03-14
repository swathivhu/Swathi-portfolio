"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { generateProjectSummary } from '@/ai/flows/generate-project-summary-flow';

const projects = [
  {
    id: 'p1',
    title: 'AI Educational Video Generator',
    description: 'A revolutionary platform that creates comprehensive educational videos using Generative AI tools like Suno AI, NotebookLM, and ElevenLabs. It automates scripting, voiceover, and visual generation.',
    longDescription: 'This project leverages a multi-agent AI system to orchestrate various generative models. It uses NotebookLM for structured research, ElevenLabs for high-fidelity voice cloning, and Suno AI for background score generation, all stitched together with a Python backend for automated video composition.',
    tags: ['Python', 'Generative AI', 'MoviePy', 'ElevenLabs'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: PlaceHolderImages.find(img => img.id === 'project-ai-video')?.imageUrl
  },
  {
    id: 'p2',
    title: 'Smart AI Content Orchestrator',
    description: 'An intelligent dashboard for managing multiple AI content generation tasks simultaneously, utilizing prompt engineering and automated workflows.',
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
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
        <span className="text-secondary">03.</span> Featured Projects
        <div className="h-px bg-white/10 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="glass-card rounded-3xl overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
              <div className="lg:col-span-2 relative h-64 lg:h-full overflow-hidden">
                <Image
                  src={project.image || ''}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-headline font-bold group-hover:text-glow-primary transition-all">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <a href={project.github} className="hover:text-secondary transition-colors"><Github className="w-5 h-5" /></a>
                      <a href={project.demo} className="hover:text-secondary transition-colors"><ExternalLink className="w-5 h-5" /></a>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {summaries[project.id] && (
                    <div className="mb-6 p-4 bg-secondary/10 border border-secondary/20 rounded-xl animate-in fade-in slide-in-from-top-4">
                      <p className="text-sm font-medium text-secondary mb-1 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" /> AI Summary:
                      </p>
                      <p className="text-sm italic">{summaries[project.id]}</p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10 rounded-lg"
                    onClick={() => handleGenerateSummary(project.id, project.longDescription)}
                    disabled={loading[project.id]}
                  >
                    {loading[project.id] ? "Generating..." : "Generate AI Insight"}
                    <Sparkles className="ml-2 w-4 h-4" />
                  </Button>
                  <Button size="sm" className="bg-secondary text-background hover:bg-secondary/90 rounded-lg">
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
