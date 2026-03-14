"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const About: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
        <span className="text-secondary">01.</span> About Me
        <div className="h-px bg-white/10 flex-1" />
      </h2>
      
      <div className="glass-card rounded-3xl p-8 md:p-12 transition-all hover:border-secondary/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-primary/20 z-10 group-hover:opacity-0 transition-opacity" />
            <Image
              src={profile?.imageUrl || ''}
              alt="Swathi P V"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              data-ai-hint="tech developer profile"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-semibold text-glow-primary">
              Generative AI Enthusiast & Python Specialist
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I specialize in Generative AI, Python development, and building intelligent applications. My journey is driven by the desire to merge creativity with machine intelligence to build impactful digital experiences.
            </p>
            
            <div className="space-y-4">
              <p className="font-medium text-foreground">My core interests include:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  'Generative AI',
                  'Prompt Engineering',
                  'AI-powered Content Creation',
                  'Creative Digital Technologies',
                  'LLM Fine-tuning',
                  'Python Automation'
                ].map((interest) => (
                  <li key={interest} className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_5px_hsla(var(--secondary),0.8)]" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
