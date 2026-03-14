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
      <div className="bg-[#0D0D0E] border border-white/5 shadow-2xl h-full rounded-[2rem] p-8 flex flex-col items-center justify-between text-center transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:shadow-black/40 group/card">
        <div className="flex flex-col items-center w-full">
          {/* Profile Image Container */}
          <div className="relative w-36 h-36 md:w-40 md:h-40 mb-8 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 transition-transform duration-500 group-hover/card:scale-[1.02]">
            <Image
              src={profile?.imageUrl || ''}
              alt="Swathi P V"
              fill
              className="object-cover"
              data-ai-hint="tech developer portrait"
            />
          </div>
          
          <div className="space-y-2 mb-6">
            <h1 className="text-2xl font-headline font-bold tracking-tight text-white">Swathi P V</h1>
            <p className="text-secondary font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">
              AI System Architect
            </p>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-[200px]">
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
                className="flex items-center justify-center aspect-square rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Visual Divider */}
        <div className="w-full py-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent blur-sm" />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="w-full space-y-4">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 font-medium tracking-wide shadow-lg shadow-primary/10 transition-all active:scale-[0.98]">
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <div className="flex items-center justify-center gap-2 text-[9px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open for Collaboration
          </div>
        </div>
      </div>
    </aside>
  );
};
