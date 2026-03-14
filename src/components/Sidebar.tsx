"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Sidebar: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 p-4 lg:p-6 z-40 flex flex-col">
      <div className="flex-1 bg-[#0D0D0E] border border-white/5 shadow-2xl rounded-[2.5rem] p-6 xl:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-white/10 hover:shadow-black/40 group/card overflow-hidden">
        
        <div className="flex flex-col items-center w-full space-y-6 xl:space-y-7">
          
          <div className="relative w-16 h-16 xl:w-20 xl:h-20 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 transition-transform duration-500 group-hover/card:scale-[1.02] shadow-2xl">
            <Image
              src={profile?.imageUrl || ''}
              alt="Swathi P V"
              fill
              className="object-cover"
              data-ai-hint="tech developer portrait"
            />
          </div>
          
          <div className="space-y-1.5">
            <h1 className="text-2xl xl:text-3xl font-headline font-extrabold tracking-tighter text-white text-glow-primary">
              Swathi P V
            </h1>
            <p className="text-secondary font-mono text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.4em] opacity-90">
              AI System Architect
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-muted-foreground/70 shadow-inner hover:border-secondary/30 transition-colors">
              <MapPin className="w-3 h-3 text-secondary/60" />
              <span className="text-[8px] xl:text-[9px] font-bold tracking-tight uppercase">Bangalore</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-muted-foreground/70 shadow-inner hover:border-secondary/30 transition-colors">
              <Globe className="w-3 h-3 text-secondary/60" />
              <span className="text-[8px] xl:text-[9px] font-bold tracking-tight uppercase">India</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 max-w-[260px]">
            {[
              'Python Full Stack',
              'Gen AI Enthusiast',
              'Content Creator'
            ].map((tag, i) => (
              <span 
                key={i}
                className="px-2.5 py-1 rounded-lg text-[8px] xl:text-[9px] font-mono font-bold uppercase tracking-widest bg-white/[0.02] border border-white/10 text-secondary/70 shadow-[0_0_15px_rgba(0,255,255,0.02)] hover:bg-secondary/5 hover:border-secondary/40 hover:text-secondary hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-500 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-row justify-center gap-3 w-full">
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
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 hover:bg-secondary/10 hover:border-secondary/40 hover:scale-110 hover:shadow-[0_0_15px_hsla(var(--secondary),0.3)] transition-all duration-300 group/icon"
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover/icon:text-white transition-colors" />
              </a>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <div className="w-full space-y-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-5 xl:py-6 text-[10px] xl:text-xs font-bold tracking-widest shadow-xl shadow-primary/10 transition-all active:scale-[0.98]">
              <Download className="w-3.5 h-3.5 mr-2" />
              DOWNLOAD CV
            </Button>
            <div className="flex items-center justify-center gap-2 text-[7px] xl:text-[8px] font-mono text-muted-foreground uppercase tracking-[0.25em] opacity-60">
              <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              Neural Link Active
            </div>
          </div>

        </div>

      </div>
    </aside>
  );
};