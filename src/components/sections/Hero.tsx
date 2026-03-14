"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  
  const fullTitleText = "Generative AI Systems";
  
  useEffect(() => {
    let i = 0;
    const titleInterval = setInterval(() => {
      setDisplayText(fullTitleText.substring(0, i));
      i++;
      if (i > fullTitleText.length) clearInterval(titleInterval);
    }, 60);

    return () => clearInterval(titleInterval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-24 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold">Innovation & Intelligence</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-white">
              Architecting <br />
              <span className="text-primary">Digital Systems</span>
            </h1>
            
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <p className="text-xl font-medium text-muted-foreground tracking-tight">
                Crafting <span className="text-white font-mono">{displayText}</span>
                <span className="inline-block w-1 h-6 ml-2 bg-primary"></span>
              </p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            I bridge the gap between human creativity and machine intelligence, building production-grade AI solutions that transform complex data into meaningful experiences.
          </p>
          
          <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 w-full">
            <Button 
              size="lg" 
              onClick={() => scrollTo('projects')}
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 h-14 font-bold tracking-wider transition-all shadow-lg shadow-primary/5 whitespace-nowrap"
            >
              View Work
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/20 hover:bg-primary/5 text-primary rounded-xl px-8 h-14 font-bold tracking-wider transition-all whitespace-nowrap"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollTo('contact')}
              className="border-white/10 hover:bg-white/5 hover:border-white/20 rounded-xl px-8 h-14 font-bold text-muted-foreground hover:text-white transition-all whitespace-nowrap"
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:flex justify-center">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 border border-white/5 rounded-full" />
            <div className="absolute inset-8 border border-white/5 rounded-full" />
            <div className="w-32 h-32 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/10">
              <Bot className="w-12 h-12 text-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};