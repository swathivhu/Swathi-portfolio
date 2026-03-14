"use client"

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const creations = [
  {
    id: 1,
    title: 'Neural Latent Space',
    type: 'GAN Architecture',
    image: PlaceHolderImages.find(img => img.id === 'ai-creation-1')?.imageUrl
  },
  {
    id: 2,
    title: 'Synthetic Echo',
    type: 'Stable Diffusion',
    image: PlaceHolderImages.find(img => img.id === 'ai-creation-2')?.imageUrl
  },
  {
    id: 3,
    title: 'Parametric Flow',
    type: 'Temporal Flow',
    image: PlaceHolderImages.find(img => img.id === 'ai-creation-3')?.imageUrl
  }
];

export const AICreations: React.FC = () => {
  return (
    <section id="ai-creations" className="py-24">
      <h2 className="section-heading">
        <span className="section-number">06.</span> Synthetic Media
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {creations.map((item) => (
          <div key={item.id} className="group">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 mb-4">
              <Image
                src={item.image || ''}
                alt={item.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                data-ai-hint="ai generated artwork"
              />
            </div>
            <div className="px-1 space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-primary" />
                <h3 className="text-base font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
