"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Maximize2, Sparkles } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const creations = [
  {
    id: 1,
    title: 'Neural Latent Space 01',
    type: 'GAN Architecture',
    image: PlaceHolderImages.find(img => img.id === 'ai-creation-1')?.imageUrl
  },
  {
    id: 2,
    title: 'Cyber-Synthetic Echo',
    type: 'Stable Diffusion XL',
    image: PlaceHolderImages.find(img => img.id === 'ai-creation-2')?.imageUrl
  },
  {
    id: 3,
    title: 'Hyper-Parametric Flow',
    type: 'Temporal Consistency',
    image: PlaceHolderImages.find(img => img.id === 'ai-creation-3')?.imageUrl
  }
];

export const AICreations: React.FC = () => {
  const [seeds, setSeeds] = useState<Record<number, number>>({});

  useEffect(() => {
    const generatedSeeds: Record<number, number> = {};
    creations.forEach((item) => {
      generatedSeeds[item.id] = Math.floor(Math.random() * 999999);
    });
    setSeeds(generatedSeeds);
  }, []);

  return (
    <section id="ai-creations" className="py-32">
      <h2 className="section-heading">
        <span className="section-number">06.</span> Synthetic Media
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {creations.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden glass-card border-white/5 mb-6">
              <Image
                src={item.image || ''}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                data-ai-hint="ai generated artwork"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-6 p-8">
                <div className="flex gap-4">
                  <div className="p-4 rounded-2xl bg-secondary/20 backdrop-blur-md text-secondary border border-secondary/30 hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-secondary" />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:scale-110 transition-transform">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-xs font-mono text-secondary uppercase tracking-[0.2em]">{item.type}</p>
                  <p className="text-sm text-muted-foreground italic">
                    Latent seed: {seeds[item.id] !== undefined ? seeds[item.id] : '...'}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-4 space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-primary" />
                <h3 className="text-lg font-headline font-bold group-hover:text-glow-primary transition-colors">{item.title}</h3>
              </div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
