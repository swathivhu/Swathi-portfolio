"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Sidebar: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-auto lg:h-screen left-auto top-0 py-12 lg:pt-32 lg:pb-12 z-40 overflow-hidden">
      <div className="bg-[#0D0D0E] border border-white/5 shadow-2xl h-full rounded-[2.5rem] p-8 xl:p-10 flex flex-col items-center justify-between text-center transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:shadow-black/40 group/card">
        <div className="flex flex-col items-center w-full">
          {/* Profile Image Container */}
          <div className="relative w-36 h-36 md:w-40 md:h-40 xl:w-48 xl:h-48 mb-10 rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 transition-transform duration-500 group-hover/card:scale-[1.02]">
            <Image
              src={profile?.imageUrl || ''}
              alt="Swathi P V"
              fill
              className="object-cover"
              data-ai-hint="tech developer portrait"
            />
          </div>
          
          <div className="space-y-3 mb-8">
            <h1 className="text-3xl xl:text-4xl font-headline font-bold tracking-tight text-white">Swathi P V</h1>
            <p className="text-secondary font-mono text-[10px] xl:text-xs uppercase tracking-[0.3em] opacity-80">
              AI System Architect
            </p>
          </div>
          
          <p className="text-muted-foreground text-base leading-relaxed mb-12 max-w-[240px]">
            Engineering the future through generative intelligence.
          </p>
          
          {/* Minimal Social Links */}
          <div className="grid grid-cols-3 gap-5 w-full mb-2">
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
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Visual Divider */}
        <div className="w-full py-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent blur-sm" />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="w-full space-y-5">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-7 text-base font-semibold tracking-wide shadow-xl shadow-primary/10 transition-all active:scale-[0.98]">
            <Download className="w-5 h-5 mr-3" />
            Download CV
          </Button>
          <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-[0.25em]">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open for Collaboration
          </div>
        </div>
      </div>
    </aside>
  );
};
