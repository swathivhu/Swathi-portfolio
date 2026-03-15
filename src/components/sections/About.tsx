"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const About: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <div className="space-y-12">
      <h2 className="section-heading">
        <span className="section-number">01.</span> About Me
      </h2>
      
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
        <div className="xl:col-span-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-primary/10 z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
            <Image
              src={profile?.imageUrl || ''}
              alt="Swathi P V"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              data-ai-hint="tech developer profile"
            />
          </div>
        </div>
        
        <div className="xl:col-span-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-white">
              AI Architect & <span className="text-primary">Python Specialist</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I specialize in bridging the gap between advanced machine learning and creative digital execution. My focus lies in building intelligent systems that augment human potential through robust, production-ready code.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-6">
            {[
              'Generative Systems',
              'Prompt Engineering',
              'Multi-modal AI',
              'Content Automation',
              'LLM Integration',
              'Python Ecosystem'
            ].map((interest) => (
              <div key={interest} className="flex items-center gap-3 group/item">
                <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />
                <span className="text-sm md:text-base text-muted-foreground group-hover/item:text-white transition-colors">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};