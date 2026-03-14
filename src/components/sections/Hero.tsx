"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Bot, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [aiMessage, setAiMessage] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  
  const fullTitleText = "Generative AI Systems";
  const fullAiGreeting = "Hello! Let me introduce you to Swathi P V — a Generative AI developer passionate about building intelligent digital experiences.";
  
  useEffect(() => {
    setIsMounted(true);
    
    // Title typing animation
    let i = 0;
    const titleInterval = setInterval(() => {
      setDisplayText(fullTitleText.substring(0, i));
      i++;
      if (i > fullTitleText.length) clearInterval(titleInterval);
    }, 80);

    // AI Greeting typing animation
    let j = 0;
    const greetingTimeout = setTimeout(() => {
      const greetingInterval = setInterval(() => {
        setAiMessage(fullAiGreeting.substring(0, j));
        j++;
        if (j > fullAiGreeting.length) clearInterval(greetingInterval);
      }, 30);
      return () => clearInterval(greetingInterval);
    }, 1000);

    return () => {
      clearInterval(titleInterval);
      clearTimeout(greetingTimeout);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-start pt-12 lg:pt-32 pb-24 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute -left-20 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-start relative z-10">
        {/* Left Content Column */}
        <div className="xl:col-span-7 space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border-white/10 bg-white/[0.02]">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-secondary/90">Innovation & Intelligence</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-headline font-bold leading-[0.95] tracking-tighter">
              Architecting <br />
              <span className="text-glow-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">Digital Souls</span>
            </h1>
            
            <div className="h-12 flex items-center">
              <p className="text-xl md:text-2xl font-medium text-muted-foreground/70 tracking-tight">
                Crafting <span className="text-secondary font-mono">{displayText}</span>
                <span className="animate-pulse inline-block w-1.5 h-6 ml-2 bg-secondary rounded-full"></span>
              </p>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-xl">
            I bridge the gap between human creativity and machine intelligence, building production-grade AI solutions that transform complex data into meaningful experiences.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-4">
            <Button 
              size="lg" 
              onClick={() => scrollTo('projects')}
              className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-8 py-7 text-lg font-bold bg-glow-primary hover:scale-[1.02] transition-all"
            >
              Explore Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollTo('contact')}
              className="border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-secondary/50 rounded-2xl px-8 py-7 text-lg font-bold hover:scale-[1.02] transition-all"
            >
              Connect
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right AI Assistant Column */}
        <div className="xl:col-span-5 flex flex-col items-center justify-start relative pt-8">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center animate-float">
            <div className="absolute inset-0 border border-primary/10 rounded-full animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-4 border border-secondary/10 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
            <div className="absolute inset-10 border-t border-primary/30 rounded-full animate-[spin_9s_linear_infinite]" />
            
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-primary/30 p-[1px] shadow-[0_0_40px_hsla(var(--primary),0.2)] overflow-hidden">
              <div className="absolute inset-0 bg-background/90 backdrop-blur-xl rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-secondary/10 rounded-full flex items-center justify-center animate-pulse">
                  <Bot className="w-8 h-8 md:w-12 md:h-12 text-secondary/80" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-0.5 w-full animate-[translate-y_4s_linear_infinite]" />
            </div>
          </div>

          {isMounted && (
            <div className="mt-8 relative w-full max-w-sm px-4">
              <div className="glass-card p-6 rounded-[2rem] border-primary/10 bg-white/[0.01] shadow-[0_0_20px_rgba(var(--primary),0.05)] relative">
                <div className="absolute -top-3 -left-3 p-2 bg-primary rounded-xl shadow-lg shadow-primary/20">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                
                <p className="text-sm md:text-base font-medium leading-relaxed text-muted-foreground italic">
                  "{aiMessage}"
                  <span className="inline-block w-2 h-4 ml-1 bg-primary/40 animate-pulse" />
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-secondary/60" />
                    <div className="w-1 h-1 rounded-full bg-secondary/40" />
                    <div className="w-1 h-1 rounded-full bg-secondary/20" />
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">Neural Link Active</span>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-8 w-px bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
