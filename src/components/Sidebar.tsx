"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Sidebar: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 p-6 z-40 flex flex-col items-center">
      <div className="w-full h-full bg-card/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-between text-center transition-all duration-300 overflow-hidden">
        
        {/* Top: Profile Identity */}
        <div className="w-full space-y-6">
          <div className="relative mx-auto w-24 h-24 xl:w-28 xl:h-28">
            {/* Minimal Mono-color Rotating Ring */}
            <div className="absolute -inset-1 rounded-full border border-primary/20 animate-spin-slow" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 p-1 bg-background z-10">
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
          
          <div className="space-y-2">
            <h1 className="text-4xl xl:text-5xl font-headline font-extrabold tracking-tight text-white leading-tight">
              Swathi P V
            </h1>
            <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
              AI System Architect
            </p>
          </div>

          {/* Location Badge: Minimal Style */}
          <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 w-fit mx-auto">
            <MapPin className="w-3.5 h-3.5 text-primary/70" />
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Bangalore, India</span>
          </div>
        </div>

        {/* Middle: Role Badges: Minimal Indigo Border */}
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Python Full Stack',
              'Gen AI',
              'Content Creator'
            ].map((tag, i) => (
              <span 
                key={i}
                className="px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-transparent border border-primary/30 text-primary transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom: Socials & Main Action */}
        <div className="w-full space-y-8">
          {/* Social Icons: Simple Circular Containers */}
          <div className="flex flex-row justify-center gap-5">
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
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <social.icon className="w-4.5 h-4.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="w-full h-px bg-white/5" />

          <div className="space-y-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-7 text-xs font-bold tracking-[0.15em] transition-all shadow-lg shadow-primary/10">
              <Download className="w-4 h-4 mr-2" />
              DOWNLOAD CV
            </Button>
            
            <div className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} Professional AI Portfolio
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};