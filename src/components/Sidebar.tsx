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
      {/* Sidebar Card: Premium Glass-morphism Design */}
      <div className="w-full h-full bg-[#111827]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-between text-center shadow-2xl overflow-hidden relative">
        
        {/* Identity Section */}
        <div className="w-full flex flex-col items-center gap-6">
          {/* Profile Image with subtle precision border */}
          <div className="relative w-28 h-28 xl:w-32 xl:h-32 group">
            <div className="absolute inset-0 rounded-full border border-primary/20 shadow-xl" />
            <div className="relative w-full h-full rounded-full p-1 bg-[#0F172A]/40 border border-white/5 overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-muted">
                <Image
                  src={profile?.imageUrl || ''}
                  alt="Swathi P V"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="tech developer portrait"
                />
              </div>
            </div>
            {/* Status Indicator Style */}
            <div className="absolute bottom-1 right-2 w-5 h-5 bg-primary rounded-full border-4 border-[#111827] shadow-lg" />
          </div>
          
          {/* Name & Title */}
          <div className="space-y-3 flex flex-col items-center">
            <h1 className="text-3xl xl:text-4xl font-headline font-bold tracking-tight text-white">
              Swathi P V
            </h1>
            {/* Signature Underline Decor */}
            <div className="w-8 h-1 bg-primary rounded-full" />
            <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
              AI System Architect
            </p>
          </div>

          {/* Location Marker Style */}
          <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Bengaluru, India</span>
          </div>
        </div>

        {/* Roles: Single Radiant Pill (Reference Style) */}
        <div className="w-full px-2">
          <div className="py-3 px-6 rounded-2xl bg-[#0F172A] border border-primary/30 shadow-inner">
            <div className="text-[11px] font-bold tracking-wider leading-relaxed text-primary">
              Python Full Stack <span className="mx-2 text-white/20 font-light">|</span> 
              Gen AI <span className="mx-2 text-white/20 font-light">|</span> 
              Content Creator
            </div>
          </div>
        </div>

        {/* Actions & Socials */}
        <div className="w-full flex flex-col items-center gap-6">
          {/* Social Icons: Refined Circular Style with smooth hover lift */}
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
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/10 hover:border-primary/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group shadow-sm"
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Minimal Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Main Action Button with soft shadow and lift */}
          <div className="w-full space-y-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 text-[10px] font-bold tracking-[0.2em] transition-all shadow-lg shadow-black/20 hover:-translate-y-1 active:translate-y-0">
              <Download className="w-3.5 h-3.5 mr-2" />
              DOWNLOAD CV
            </Button>
            
            <div className="text-[8px] font-mono text-muted-foreground/20 uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} Professional Portfolio
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};
