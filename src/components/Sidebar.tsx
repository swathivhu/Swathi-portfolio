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
      <div className="w-full h-full bg-[#111827] border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-between text-center shadow-2xl overflow-hidden relative">
        
        {/* Top: Identity Section */}
        <div className="w-full flex flex-col items-center gap-7">
          {/* Profile Image with subtle animated ring */}
          <div className="relative w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center group">
            <div className="absolute inset-[-4px] rounded-full border border-primary/20 animate-[spin_8s_linear_infinite]" />
            <div className="absolute inset-[-8px] rounded-full border border-primary/10 animate-[spin_12s_linear_infinite_reverse]" />
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 p-1 bg-[#0F172A] z-10 shadow-inner">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={profile?.imageUrl || ''}
                  alt="Swathi P V"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  data-ai-hint="tech developer portrait"
                />
              </div>
            </div>
          </div>
          
          {/* Name and Professional Title */}
          <div className="space-y-2">
            <h1 className="text-3xl xl:text-4xl font-headline font-extrabold tracking-tight text-white leading-tight">
              Swathi P V
            </h1>
            <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">
              AI System Architect
            </p>
          </div>

          {/* Location Marker Style */}
          <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 w-fit transition-colors hover:border-primary/20">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Bengaluru, India</span>
          </div>
        </div>

        {/* Middle: Roles / Tagline Badges */}
        <div className="w-full py-2">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Python Full Stack',
              'Gen AI Enthusiast',
              'Content Creator'
            ].map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest bg-white/[0.02] border border-white/10 text-muted-foreground/80 transition-all hover:text-primary hover:border-primary/30 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom: Actions & Socials */}
        <div className="w-full flex flex-col items-center gap-7">
          {/* Social Icons Row */}
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
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all group"
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Subtle Divider Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />

          {/* Main Action Button */}
          <div className="w-full space-y-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 text-[10px] font-bold tracking-[0.2em] transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5">
              <Download className="w-3.5 h-3.5 mr-2" />
              DOWNLOAD CV
            </Button>
            
            <div className="text-[8px] font-mono text-muted-foreground/30 uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} Professional Portfolio
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};