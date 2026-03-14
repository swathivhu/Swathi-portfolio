"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Generative AI Developer";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-20 pb-10">
      <div className="space-y-6 max-w-2xl">
        <h2 className="text-lg md:text-xl font-medium text-secondary tracking-widest uppercase">
          Welcome to my portfolio
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
          Hi, I'm <span className="text-glow-primary">Swathi P V</span>
        </h1>
        
        <div className="h-10 md:h-12 flex items-center">
          <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
            A <span className="text-secondary">{displayText}</span>
            <span className="animate-pulse inline-block w-1 h-8 ml-1 bg-secondary"></span>
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          I'm passionate about building intelligent and creative digital solutions using cutting-edge Generative AI.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-6">
          <Button 
            size="lg" 
            onClick={() => scrollTo('projects')}
            className="bg-primary hover:bg-primary/90 rounded-xl px-8 py-7 text-lg bg-glow-primary"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollTo('contact')}
            className="border-white/10 glass-card hover:border-secondary/50 rounded-xl px-8 py-7 text-lg"
          >
            Contact Me
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
