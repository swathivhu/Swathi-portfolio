"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const About: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <section id="about" className="py-24">
      <h2 className="section-heading">
        <span className="section-number">01.</span> About Me
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-start">
        <div className="xl:col-span-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-primary/5 z-10" />
            <Image
              src={profile?.imageUrl || ''}
              alt="Swathi P V"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              data-ai-hint="tech developer profile"
            />
          </div>
        </div>
        
        <div className="xl:col-span-8 space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-headline font-bold text-white">
              AI Architect & Python Specialist
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in bridging the gap between advanced machine learning and creative digital execution. My focus lies in building intelligent systems that augment human potential through robust, production-ready code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/5">
            {[
              'Generative Systems',
              'Prompt Engineering',
              'Multi-modal AI',
              'Content Automation',
              'LLM Integration',
              'Python Ecosystem'
            ].map((interest) => (
              <div key={interest} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-base text-muted-foreground">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
