"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const About: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <section id="about" className="py-40">
      <h2 className="section-heading">
        <span className="section-number">01.</span> About Me
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-center">
        <div className="lg:col-span-5 relative aspect-square rounded-[3rem] overflow-hidden group border border-white/5">
          <div className="absolute inset-0 bg-primary/10 z-10 group-hover:opacity-0 transition-opacity duration-700" />
          <Image
            src={profile?.imageUrl || ''}
            alt="Swathi P V"
            fill
            className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            data-ai-hint="tech developer profile"
          />
        </div>
        
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-glow-primary leading-tight">
              Generative AI Architect & Python Specialist
            </h3>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              I specialize in bridging the gap between advanced machine learning and creative digital execution. My focus lies in building intelligent systems that augment human potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-10 border-t border-white/5">
            {[
              'Generative Systems',
              'Prompt Engineering',
              'Multi-modal AI',
              'Content Automation',
              'LLM Integration',
              'Python Ecosystem'
            ].map((interest) => (
              <div key={interest} className="flex items-center gap-4 group">
                <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_hsla(var(--secondary),0.6)] group-hover:scale-150 transition-transform" />
                <span className="text-lg font-medium text-muted-foreground group-hover:text-white transition-colors">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
