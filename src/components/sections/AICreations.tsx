"use client"

import React from 'react';
import Image from 'next/image';
import { Play, Maximize2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const creations = [
  {
    id: 1,
    title: 'Neural Dreams',
    type: 'AI Artwork',
    image: PlaceHolderImages.find(img => img.id === 'ai-creation-1')?.imageUrl
  },
  {
    id: 2,
    title: 'Cyberpunk Echos',
    type: 'AI Artwork',
    image: PlaceHolderImages.find(img => img.id === 'ai-creation-2')?.imageUrl
  },
  {
    id: 3,
    title: 'Synth Landscape',
    type: 'AI Video Preview',
    image: PlaceHolderImages.find(img => img.id === 'ai-creation-3')?.imageUrl
  }
];

export const AICreations: React.FC = () => {
  return (
    <section id="ai-creations" className="py-20">
      <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
        <span className="text-secondary">06.</span> AI Creations
        <div className="h-px bg-white/10 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {creations.map((item) => (
          <div key={item.id} className="glass-card rounded-2xl overflow-hidden group cursor-pointer border-transparent hover:border-secondary/30 transition-all">
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image || ''}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <div className="p-3 rounded-full bg-secondary/20 backdrop-blur-md text-secondary border border-secondary/30">
                  <Play className="w-5 h-5 fill-secondary" />
                </div>
                <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-headline font-bold group-hover:text-secondary transition-colors">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
