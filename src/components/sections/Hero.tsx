"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Generative AI Systems";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-20 pb-10 relative overflow-hidden">
      <div className="absolute -left-20 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="space-y-10 max-w-3xl relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border-white/10">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-xs font-mono uppercase tracking-widest text-secondary/80">Innovation & Intelligence</span>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter">
            Architecting <br />
            <span className="text-glow-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">Digital Souls</span>
          </h1>
          
          <div className="h-12 flex items-center">
            <p className="text-2xl md:text-4xl font-medium text-muted-foreground/80 tracking-tight">
              Crafting <span className="text-secondary font-mono">{displayText}</span>
              <span className="animate-pulse inline-block w-1.5 h-8 ml-2 bg-secondary rounded-full"></span>
            </p>
          </div>
        </div>
        
        <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
          I bridge the gap between human creativity and machine intelligence, building production-grade AI solutions that transform complex data into meaningful experiences.
        </p>
        
        <div className="flex flex-wrap gap-6 pt-4">
          <Button 
            size="lg" 
            onClick={() => scrollTo('projects')}
            className="bg-primary hover:bg-primary/90 rounded-2xl px-10 py-8 text-lg font-bold bg-glow-primary hover:scale-[1.02] transition-all"
          >
            Explore Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollTo('contact')}
            className="border-white/10 glass-card hover:border-secondary/50 rounded-2xl px-10 py-8 text-lg font-bold hover:scale-[1.02] transition-all"
          >
            Connect
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
