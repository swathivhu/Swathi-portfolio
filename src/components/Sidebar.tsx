"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, Plane, Code, Bot, Clapperboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * Karnataka Flag Component (Yellow & Red horizontal stripes)
 */
const KarnatakaFlag = () => (
  <div className="flex flex-col w-4 h-2.5 border-[0.5px] border-white/20 rounded-[1px] overflow-hidden">
    <div className="h-1/2 bg-[#FFD700]" />
    <div className="h-1/2 bg-[#ED1C24]" />
  </div>
);

export const Sidebar: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 p-6 z-40 flex flex-col items-center">
      {/* Sidebar Card: Premium Glass-morphism Design */}
      <div className="w-full h-full bg-[#050505]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-between text-center shadow-2xl overflow-hidden relative">
        
        {/* Identity Section */}
        <div className="w-full flex flex-col items-center gap-6">
          {/* Profile Image */}
          <div className="relative w-28 h-28 xl:w-32 xl:h-32 group">
            <div className="absolute inset-0 rounded-full border border-primary/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-500" />
            <div className="relative w-full h-full rounded-full p-1 bg-black/40 border border-white/5 overflow-hidden">
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
            {/* Status Indicator */}
            <div className="absolute bottom-1 right-2 w-5 h-5 bg-primary rounded-full border-4 border-[#050505] shadow-lg" />
          </div>
          
          {/* Name & Title */}
          <div className="space-y-3 flex flex-col items-center">
            <h1 className="text-3xl xl:text-4xl font-headline font-bold tracking-tight text-white">
              Swathi P V
            </h1>
            <div className="w-8 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
            <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
              AI System Architect
            </p>
          </div>

          {/* Boarding Pass Style Location Card - Reduced Size */}
          <div className="w-full max-w-[240px] mt-2">
            <div className="bg-primary rounded-[1.2rem] p-3 text-white shadow-lg shadow-primary/20 relative overflow-hidden group">
              {/* Top Row: Origin -> Destination */}
              <div className="flex justify-between items-center mb-2">
                <div className="text-left">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="text-base font-black tracking-tighter">IND</span>
                    <span className="text-[10px]">🇮🇳</span>
                  </div>
                  <div className="text-[7px] font-bold uppercase tracking-widest opacity-80">INDIA</div>
                </div>

                <div className="flex-1 flex justify-center">
                  <Plane className="w-3.5 h-3.5 rotate-90 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end gap-1 mb-0.5">
                    <KarnatakaFlag />
                    <span className="text-base font-black tracking-tighter">BLR</span>
                  </div>
                  <div className="text-[7px] font-bold uppercase tracking-widest opacity-80">BENGALURU</div>
                </div>
              </div>

              {/* Separator Line */}
              <div className="w-full h-px bg-white/20 mb-2 border-dashed border-b-[0.5px]" />

              {/* Bottom Row: Status Only */}
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <div className="text-[6px] font-bold uppercase tracking-[0.2em] opacity-70 mb-0.5">CURRENT STATUS</div>
                  <div className="text-[9px] font-black uppercase tracking-wider">IN BENGALURU, KA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roles: Radiant Pill Style */}
        <div className="w-full px-2">
          <div className="py-4 px-6 rounded-2xl bg-[#080808] border border-primary/40 shadow-[0_0_25px_-5px_rgba(16,185,129,0.15)]">
            <div className="flex flex-col gap-1 text-[10px] font-bold tracking-wider leading-relaxed text-primary drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] uppercase">
              <div className="flex items-center justify-center gap-2">
                <Code className="w-3 h-3" /> Python Full Stack
              </div>
              <div className="flex items-center justify-center gap-2">
                <Bot className="w-3 h-3" /> Gen AI
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clapperboard className="w-3 h-3" /> Content Creator
              </div>
            </div>
          </div>
        </div>

        {/* Actions & Socials */}
        <div className="w-full flex flex-col items-center gap-6">
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
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/10 hover:border-primary/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Minimal Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Main Action Button */}
          <div className="w-full space-y-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 text-[10px] font-bold tracking-[0.2em] transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-1 active:translate-y-0">
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