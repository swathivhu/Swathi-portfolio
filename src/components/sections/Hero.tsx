"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot } from 'lucide-react';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  
  const fullTitleText = "Full-Stack Development with Generative AI";
  
  useEffect(() => {
    let i = 0;
    const titleInterval = setInterval(() => {
      setDisplayText(fullTitleText.substring(0, i));
      i++;
      if (i > fullTitleText.length) clearInterval(titleInterval);
    }, 40);

    return () => clearInterval(titleInterval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="flex flex-col justify-center py-16 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold">FULL-STACK & AI DEVELOPMENT</span>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight tracking-tight text-white">
              Building Intelligent <br />
              <span className="text-primary">Digital Systems</span>
            </h1>
            
            <div className="h-8 flex items-center justify-center lg:justify-start">
              <p className="text-lg font-medium text-muted-foreground tracking-tight">
                Crafting <span className="text-white font-mono">{displayText}</span>
                <span className="inline-block w-0.5 h-5 ml-2 bg-primary animate-pulse"></span>
              </p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I build scalable full-stack applications integrated with Generative AI, 
            bridging powerful backends with intuitive, intelligent user experiences.
          </p>
          
          <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full">
            <Button 
              size="lg" 
              onClick={() => scrollTo('projects')}
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 h-12 font-bold tracking-wider transition-all shadow-lg shadow-primary/5 whitespace-nowrap"
            >
              View Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollTo('contact')}
              className="border-white/10 hover:bg-white/5 hover:border-white/20 rounded-xl px-8 h-12 font-bold text-muted-foreground hover:text-white transition-all whitespace-nowrap"
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:flex justify-center">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 border border-white/5 rounded-full" />
            <div className="absolute inset-6 border border-white/5 rounded-full" />
            <div className="w-28 h-28 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/10">
              <Bot className="w-10 h-10 text-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
