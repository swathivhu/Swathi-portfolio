"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Sidebar: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 py-6 lg:pt-16 lg:pb-12 z-40 overflow-y-auto no-scrollbar">
      <div className="bg-[#0D0D0E] border border-white/5 shadow-2xl rounded-[2.5rem] p-8 xl:p-10 flex flex-col items-center justify-start text-center transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:shadow-black/40 group/card mx-4 lg:mx-0">
        <div className="flex flex-col items-center w-full">
          {/* Profile Image Container - Slightly reduced size */}
          <div className="relative w-32 h-32 md:w-36 md:h-36 xl:w-40 xl:h-40 mb-8 rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 transition-transform duration-500 group-hover/card:scale-[1.02]">
            <Image
              src={profile?.imageUrl || ''}
              alt="Swathi P V"
              fill
              className="object-cover"
              data-ai-hint="tech developer portrait"
            />
          </div>
          
          <div className="space-y-2 mb-6">
            <h1 className="text-2xl xl:text-3xl font-headline font-bold tracking-tight text-white">Swathi P V</h1>
            <p className="text-secondary font-mono text-[10px] xl:text-xs uppercase tracking-[0.3em] opacity-80">
              AI System Architect
            </p>
          </div>
          
          <p className="text-muted-foreground text-sm xl:text-base leading-relaxed mb-8 max-w-[240px]">
            Engineering the future through generative intelligence.
          </p>
          
          {/* Minimal Social Links */}
          <div className="grid grid-cols-3 gap-4 w-full mb-2">
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
                className="flex items-center justify-center aspect-square rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Visual Divider - Purple to Cyan Gradient */}
        <div className="w-full py-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 via-secondary/30 to-transparent relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 via-secondary/10 to-transparent blur-sm" />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="w-full space-y-4">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 text-sm font-semibold tracking-wide shadow-xl shadow-primary/10 transition-all active:scale-[0.98]">
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <div className="flex items-center justify-center gap-2 text-[9px] font-mono text-muted-foreground uppercase tracking-[0.25em]">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open for Collaboration
          </div>
        </div>
      </div>
    </aside>
  );
};
