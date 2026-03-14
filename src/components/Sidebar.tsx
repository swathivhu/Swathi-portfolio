"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Sidebar: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <aside className="w-full lg:w-80 h-auto lg:h-screen lg:fixed left-0 top-0 p-6 z-40">
      <div className="glass-card h-full rounded-3xl p-8 flex flex-col items-center justify-between text-center overflow-y-auto">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-4 border-secondary/30 bg-glow-secondary">
            <Image
              src={profile?.imageUrl || ''}
              alt="Swathi P V"
              fill
              className="object-cover"
              data-ai-hint="tech developer portrait"
            />
          </div>
          
          <h1 className="text-2xl font-headline font-bold mb-2 text-glow-primary">Swathi P V</h1>
          <p className="text-secondary font-medium mb-4 text-sm uppercase tracking-wider">
            Generative AI Developer | Python Developer
          </p>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Building intelligent applications using Generative AI and creative technologies.
          </p>
          
          <div className="flex gap-4 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 glass-card rounded-lg hover:text-secondary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 glass-card rounded-lg hover:text-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:swathi@example.com" className="p-2 glass-card rounded-lg hover:text-secondary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/80 text-white rounded-xl py-6 bg-glow-primary group transition-all">
          <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
          Download Resume
        </Button>
      </div>
    </aside>
  );
};
