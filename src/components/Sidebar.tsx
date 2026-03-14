"use client"

import React from 'react';
import Image from 'next/image';
import { Download, Plane, Code, Bot, Clapperboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * Karnataka Flag Component (Yellow & Red horizontal stripes)
 */
const KarnatakaFlag = () => (
  <div className="flex flex-col w-4 h-2.5 border-[0.5px] border-white/20 rounded-[1px] overflow-hidden">
    <div className="h-1/2 bg-[#FFD700]" />
    <div className="h-1/2 bg-[#ED1C14]" />
  </div>
);

/**
 * Custom Brand Icons for GitHub, LinkedIn, and Gmail
 */
const GithubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="#0077B5" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GmailIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="#EA4335" className="w-5 h-5">
    <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.39l-9 6.49-9-6.49V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.42.17-.8.45-1.06l.11-.09c.28-.21.62-.35.94-.35h.1l10.4 7.5 10.4-7.5h.1c.32 0 .66.14.94.35l.11.09c.28.26.45.64.45 1.06z" />
  </svg>
);

export const Sidebar: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 p-6 z-40 flex flex-col items-center">
      <div className="w-full h-full bg-black backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 pb-6 flex flex-col items-center shadow-2xl overflow-hidden relative">
        
        {/* Profile Avatar Section - Visual Anchor (Top of card) */}
        <div className="relative w-[100px] h-[100px] group flex-shrink-0">
          {/* Subtle Accent Ring Focal Point */}
          <div className="absolute inset-0 rounded-full border border-primary/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]" />
          
          {/* Circular Image Container */}
          <div className="relative w-full h-full rounded-full p-1 bg-black/40 border border-white/5 overflow-hidden">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-muted border border-white/10">
              <Image
                src={profile?.imageUrl || ''}
                alt="Swathi P V"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint="tech developer portrait"
              />
            </div>
          </div>
        </div>
        
        {/* Name Section (24px from image) */}
        <div className="mt-6 flex flex-col items-center">
          <h1 className="text-3xl xl:text-4xl font-headline font-bold tracking-tight text-white text-center">
            Swathi P V
          </h1>
          {/* Title (12px from name) */}
          <p className="mt-3 text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
            AI System Architect
          </p>
        </div>

        {/* Location Card (20px from title) - Boarding Pass Style */}
        <div className="w-full max-w-[240px] mt-5">
          <div className="bg-primary rounded-[1.2rem] p-3 text-white shadow-lg shadow-primary/20 relative overflow-hidden group">
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

            <div className="w-full h-px bg-white/20 mb-2 border-dashed border-b-[0.5px]" />

            <div className="flex justify-center items-center">
              <div className="text-center">
                <div className="text-[6px] font-bold uppercase tracking-[0.2em] opacity-70 mb-0.5">CURRENT STATUS</div>
                <div className="text-[8px] font-black uppercase tracking-wider leading-tight">IN BENGALURU, KARNATAKA, INDIA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Roles Pill (20px from location) - Radiant Emerald Container */}
        <div className="w-full px-2 mt-5">
          <div className="py-4 px-6 rounded-2xl bg-[#080808] border border-primary/40 shadow-[0_0_25px_-5px_rgba(16,185,129,0.15)]">
            <div className="flex flex-col gap-1.5 text-[10px] font-bold tracking-wider leading-relaxed text-primary drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] uppercase text-center">
              <div className="flex items-center justify-center gap-2">
                <Code className="w-3 h-3 text-[#3776AB]" /> Python Full Stack
              </div>
              <div className="flex items-center justify-center gap-2">
                <Bot className="w-3 h-3 text-[#9333EA]" /> Gen AI
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clapperboard className="w-3 h-3 text-[#EA580C]" /> Content Creator
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons (24px from role card) - Brand Original Colors + Download Icon */}
        <div className="flex flex-row justify-center gap-4 mt-6">
          {[
            { icon: GithubIcon, href: 'https://github.com', hoverColor: 'hover:border-white/50' },
            { icon: LinkedinIcon, href: 'https://linkedin.com', hoverColor: 'hover:border-[#0077B5]/50' },
            { icon: GmailIcon, href: 'mailto:swathi@example.com', hoverColor: 'hover:border-[#EA4335]/50' },
            { icon: () => <Download className="w-5 h-5 text-primary" />, href: '#', hoverColor: 'hover:border-primary/50' },
          ].map((social, i) => (
            <a 
              key={i}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/10 ${social.hoverColor} hover:scale-110 hover:-translate-y-1 transition-all duration-300 group`}
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Action Button Section (28px from social icons) - Final prominent action */}
        <div className="w-full mt-7">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-5 text-[10px] font-bold tracking-[0.2em] transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-1 active:translate-y-0">
            <Download className="w-3.5 h-3.5 mr-2" />
            DOWNLOAD CV
          </Button>
          
          {/* Bottom Padding handled by container pb-6 (24px) */}
          <div className="mt-4 text-[8px] font-mono text-muted-foreground/20 uppercase text-center tracking-[0.4em]">
            © {new Date().getFullYear()} Professional Portfolio
          </div>
        </div>

      </div>
    </aside>
  );
};