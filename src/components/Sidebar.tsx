"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Sidebar: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <aside className="w-full lg:w-80 h-auto lg:h-screen lg:fixed left-0 top-0 p-6 z-40">
      <div className="glass-card h-full rounded-[2.5rem] p-8 flex flex-col items-center justify-between text-center overflow-y-auto border-white/10 glow-border">
        <div className="flex flex-col items-center w-full">
          <div className="relative w-32 h-32 md:w-44 md:h-44 mb-8 rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src={profile?.imageUrl || ''}
              alt="Swathi P V"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              data-ai-hint="tech developer portrait"
            />
          </div>
          
          <h1 className="text-3xl font-headline font-bold mb-2 tracking-tight">Swathi P V</h1>
          <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <p className="text-primary font-mono text-[10px] uppercase tracking-[0.2em]">
              AI System Architect
            </p>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-[220px]">
            Engineering the future through <span className="text-foreground">generative intelligence</span> and neural architectures.
          </p>
          
          <div className="grid grid-cols-3 gap-3 w-full mb-10">
            {[
              { icon: Github, href: 'https://github.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Mail, href: 'mailto:swathi@example.com' },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center aspect-square glass-card rounded-2xl hover:bg-white/5 hover:border-secondary/50 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full space-y-3">
          <Button className="w-full bg-primary hover:bg-primary/80 text-white rounded-2xl py-7 font-semibold tracking-wide bg-glow-primary group transition-all">
            <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
            Resume.pdf
          </Button>
          <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Available for Hire
          </div>
        </div>
      </div>
    </aside>
  );
};
