"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Sidebar: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 p-4 lg:p-6 z-40 flex flex-col">
      <div className="flex-1 bg-[#0D0D0E] border border-white/5 shadow-2xl rounded-[2.5rem] p-6 xl:p-8 flex flex-col items-center justify-between text-center transition-all duration-500 hover:border-white/10 hover:shadow-black/40 group/card">
        
        {/* Top Section: Identity */}
        <div className="flex flex-col items-center w-full space-y-4">
          {/* Profile Image */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 transition-transform duration-500 group-hover/card:scale-[1.02]">
            <Image
              src={profile?.imageUrl || ''}
              alt="Swathi P V"
              fill
              className="object-cover"
              data-ai-hint="tech developer portrait"
            />
          </div>
          
          <div className="space-y-1">
            <h1 className="text-xl xl:text-2xl font-headline font-bold tracking-tight text-white">Swathi P V</h1>
            <p className="text-secondary font-mono text-[9px] xl:text-[10px] uppercase tracking-[0.3em] opacity-90">
              AI System Architect
            </p>
            
            {/* Location Indicator */}
            <div className="flex items-center justify-center gap-1.5 py-1 text-muted-foreground/60 transition-colors duration-300">
              <MapPin className="w-3 h-3 text-secondary/50" />
              <span className="text-sm font-medium tracking-tight">Bangalore, India</span>
            </div>
          </div>
          
          <p className="text-muted-foreground text-[11px] xl:text-xs leading-relaxed max-w-[200px]">
            Engineering the future through generative intelligence.
          </p>
          
          {/* Social Links - Horizontal Row */}
          <div className="flex flex-row justify-center gap-2.5 w-full pt-1">
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
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all group/icon"
              >
                <social.icon className="w-3.5 h-3.5 text-muted-foreground group-hover/icon:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section: Minimal Divider */}
        <div className="w-full py-2">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 via-secondary/20 to-transparent relative" />
        </div>

        {/* Bottom Section: Actions & Footer */}
        <div className="w-full space-y-3.5">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-4 text-[10px] xl:text-xs font-semibold tracking-wide shadow-xl shadow-primary/10 transition-all active:scale-[0.98]">
            <Download className="w-3 h-3 mr-2" />
            Download CV
          </Button>
          <div className="flex items-center justify-center gap-2 text-[8px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            Open for Collaboration
          </div>
        </div>

      </div>
    </aside>
  );
};
