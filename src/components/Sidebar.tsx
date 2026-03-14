"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Sidebar: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 p-6 z-40 flex flex-col">
      <div className="flex-1 bg-card/30 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 flex flex-col items-center justify-between text-center transition-all duration-300 overflow-hidden">
        
        {/* Top Section: Profile Image & Identity */}
        <div className="w-full space-y-5">
          <div className="relative mx-auto w-20 h-20 xl:w-24 xl:h-24">
            {/* Minimal Pulse Ring */}
            <div className="absolute -inset-1 rounded-full border border-primary/20 animate-pulse-ring" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 p-1 bg-background shadow-lg z-10">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={profile?.imageUrl || ''}
                  alt="Swathi P V"
                  fill
                  className="object-cover"
                  data-ai-hint="tech developer portrait"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-1">
            <h1 className="text-3xl font-headline font-bold tracking-tight text-white leading-tight">
              Swathi P V
            </h1>
            <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.1em]">
              AI System Architect
            </p>
          </div>

          {/* Location Badge */}
          <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 w-fit mx-auto">
            <MapPin className="w-3 h-3 text-primary/70" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase">Bangalore, India</span>
          </div>
        </div>

        {/* Middle Section: Tagline Badges */}
        <div className="w-full py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Python Full Stack',
              'Gen AI',
              'Content Creator'
            ].map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-primary/5 border border-primary/20 text-primary transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section: Socials & Action */}
        <div className="w-full space-y-6">
          {/* Social Icons */}
          <div className="flex flex-row justify-center gap-4">
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
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="w-full h-px bg-white/5" />

          <div className="space-y-3">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 text-xs font-bold tracking-widest transition-all">
              <Download className="w-3 h-3 mr-2" />
              DOWNLOAD CV
            </Button>
            
            <div className="text-[8px] font-mono text-muted-foreground/40 uppercase tracking-[0.2em]">
              Available for Collaboration
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};
