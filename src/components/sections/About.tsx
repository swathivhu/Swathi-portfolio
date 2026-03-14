"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const About: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <section id="about" className="py-32">
      <h2 className="section-heading">
        <span className="section-number">01.</span> About Me
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 relative aspect-square rounded-[2rem] overflow-hidden group border border-white/5">
          <div className="absolute inset-0 bg-primary/10 z-10 group-hover:opacity-0 transition-opacity duration-700" />
          <Image
            src={profile?.imageUrl || ''}
            alt="Swathi P V"
            fill
            className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            data-ai-hint="tech developer profile"
          />
        </div>
        
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-headline font-bold text-glow-primary">
              Generative AI Architect & Python Specialist
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I specialize in bridging the gap between advanced machine learning and creative digital execution. My focus lies in building intelligent systems that augment human potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-white/5">
            {[
              'Generative Systems',
              'Prompt Engineering',
              'Multi-modal AI',
              'Content Automation',
              'LLM Integration',
              'Python Ecosystem'
            ].map((interest) => (
              <div key={interest} className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_hsla(var(--secondary),0.6)] group-hover:scale-150 transition-transform" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
