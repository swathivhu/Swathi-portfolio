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

    // AI Greeting typing animation (starts slightly after)
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
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute -left-20 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-10">
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

        {/* Right AI Assistant Column */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Holographic Assistant Visual */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center animate-float">
            {/* Outer Rings */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 border-t-2 border-primary/40 rounded-full animate-[spin_8s_linear_infinite]" />
            
            {/* The Central Orb */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/40 via-secondary/40 to-primary/40 p-[2px] shadow-[0_0_50px_hsla(var(--primary),0.4)] overflow-hidden">
              <div className="absolute inset-0 bg-background/80 backdrop-blur-xl rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse">
                  <Bot className="w-8 h-8 text-secondary" />
                </div>
              </div>
              {/* Dynamic Light Scan Line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent h-1 w-full animate-[translate-y_3s_linear_infinite]" />
            </div>
          </div>

          {/* AI Message Bubble */}
          {isMounted && (
            <div className="mt-8 relative max-w-sm">
              <div className="glass-card p-6 rounded-3xl border-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.1)] relative">
                {/* Message Icon */}
                <div className="absolute -top-3 -left-3 p-2 bg-primary rounded-xl shadow-lg shadow-primary/20">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                
                <p className="text-sm md:text-base font-medium leading-relaxed text-foreground italic">
                  "{aiMessage}"
                  <span className="inline-block w-2 h-4 ml-1 bg-primary/50 animate-pulse" />
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-secondary" />
                    <div className="w-1 h-1 rounded-full bg-secondary/60" />
                    <div className="w-1 h-1 rounded-full bg-secondary/30" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Neural Link Active</span>
                </div>
              </div>
              
              {/* Decorative holographic stand line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-8 w-px bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
