"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, MapPin, Globe, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Sidebar: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 p-4 lg:p-6 z-40 flex flex-col">
      <div className="flex-1 bg-[#0D0D0E]/80 backdrop-blur-xl border border-white/5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] rounded-[3rem] p-8 flex flex-col items-center justify-between text-center transition-all duration-500 hover:border-white/10 group/card overflow-hidden">
        
        {/* Top Section: Profile Image & Identity */}
        <div className="w-full space-y-6">
          <div className="relative mx-auto w-20 h-20 xl:w-24 xl:h-24 rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 p-1 group-hover/card:scale-105 transition-transform duration-700 shadow-2xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={profile?.imageUrl || ''}
                alt="Swathi P V"
                fill
                className="object-cover"
                data-ai-hint="tech developer portrait"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl xl:text-4xl font-headline font-extrabold tracking-tighter text-white text-glow-primary leading-none">
              Swathi P V
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
              <Bot className="w-3 h-3 text-primary" />
              <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                AI System Architect
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section: Location & Role Badges */}
        <div className="w-full space-y-7">
          {/* Location Badges */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-muted-foreground/80 hover:border-secondary/30 hover:bg-secondary/5 transition-all group/loc">
              <MapPin className="w-3.5 h-3.5 text-secondary group-hover/loc:animate-bounce" />
              <span className="text-[10px] font-bold tracking-tight uppercase">Bangalore</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-muted-foreground/80 hover:border-secondary/30 hover:bg-secondary/5 transition-all group/loc">
              <Globe className="w-3.5 h-3.5 text-secondary group-hover/loc:animate-pulse" />
              <span className="text-[10px] font-bold tracking-tight uppercase">India</span>
            </div>
          </div>
          
          {/* Creative Role Badges */}
          <div className="flex flex-wrap justify-center gap-2.5 px-2">
            {[
              'Python Full Stack',
              'Gen AI Enthusiast',
              'Content Creator'
            ].map((tag, i) => (
              <span 
                key={i}
                className="px-3.5 py-1.5 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider bg-secondary/5 border border-secondary/20 text-secondary shadow-[0_0_15px_hsla(var(--secondary),0.1)] hover:bg-secondary/10 hover:border-secondary/40 hover:shadow-[0_0_20px_hsla(var(--secondary),0.2)] transition-all duration-500 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section: Socials & Action */}
        <div className="w-full space-y-8">
          {/* Enhanced Social Icons */}
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
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/10 hover:border-secondary/50 hover:bg-secondary/10 hover:scale-110 hover:shadow-[0_0_20px_hsla(var(--secondary),0.3)] transition-all duration-500 group/icon"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover/icon:text-white transition-colors" />
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-7 text-xs font-bold tracking-[0.2em] bg-glow-primary shadow-2xl transition-all active:scale-[0.98] group/btn">
              <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
              DOWNLOAD CV
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-[8px] font-mono text-muted-foreground uppercase tracking-[0.3em] opacity-40">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
              Neural Link Established
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};