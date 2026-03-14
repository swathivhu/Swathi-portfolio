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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-32 pb-24 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute -left-20 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-24 items-center relative z-10">
        {/* Left Content Column */}
        <div className="xl:col-span-7 space-y-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border-white/10">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-secondary/80">Innovation & Intelligence</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl xl:text-[7.5rem] font-headline font-bold leading-[0.85] tracking-tighter">
              Architecting <br />
              <span className="text-glow-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">Digital Souls</span>
            </h1>
            
            <div className="h-16 flex items-center">
              <p className="text-2xl md:text-4xl font-medium text-muted-foreground/80 tracking-tight">
                Crafting <span className="text-secondary font-mono">{displayText}</span>
                <span className="animate-pulse inline-block w-2 h-10 ml-3 bg-secondary rounded-full"></span>
              </p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            I bridge the gap between human creativity and machine intelligence, building production-grade AI solutions that transform complex data into meaningful experiences.
          </p>
          
          <div className="flex flex-wrap gap-8 pt-6">
            <Button 
              size="lg" 
              onClick={() => scrollTo('projects')}
              className="bg-primary hover:bg-primary/90 rounded-2xl px-12 py-9 text-xl font-bold bg-glow-primary hover:scale-[1.02] transition-all"
            >
              Explore Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollTo('contact')}
              className="border-white/10 glass-card hover:border-secondary/50 rounded-2xl px-12 py-9 text-xl font-bold hover:scale-[1.02] transition-all"
            >
              Connect
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Right AI Assistant Column */}
        <div className="xl:col-span-5 flex flex-col items-center justify-center relative py-12">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center animate-float">
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-6 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-12 border-t-2 border-primary/40 rounded-full animate-[spin_8s_linear_infinite]" />
            
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/40 via-secondary/40 to-primary/40 p-[2px] shadow-[0_0_60px_hsla(var(--primary),0.4)] overflow-hidden">
              <div className="absolute inset-0 bg-background/80 backdrop-blur-xl rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse">
                  <Bot className="w-10 h-10 md:w-14 md:h-14 text-secondary" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent h-1 w-full animate-[translate-y_3s_linear_infinite]" />
            </div>
          </div>

          {isMounted && (
            <div className="mt-12 relative w-full max-w-sm">
              <div className="glass-card p-8 rounded-[2.5rem] border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.1)] relative">
                <div className="absolute -top-4 -left-4 p-3 bg-primary rounded-2xl shadow-lg shadow-primary/20">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                
                <p className="text-base md:text-lg font-medium leading-relaxed text-foreground italic">
                  "{aiMessage}"
                  <span className="inline-block w-2.5 h-5 ml-1 bg-primary/50 animate-pulse" />
                </p>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/30" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.25em]">Neural Link Active</span>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-12 w-px bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
