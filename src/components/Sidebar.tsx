
"use client"

import React from 'react';
import Image from 'next/image';
import { Download, Github, Linkedin, Mail, Plane, Code, Bot, Clapperboard } from 'lucide-react';

/**
 * Custom Brand Icons for LinkedIn and Gmail to match the reference style
 */
const LinkedinIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="#0077B5" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const GmailIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="#EA4335" className="w-5 h-5">
    <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.39l-9 6.49-9-6.49V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.42.17-.8.45-1.06l.11-.09c.28-.21.62-.35.94-.35h.1l10.4 7.5 10.4-7.5h.1c.32 0 .66.14.94.35l.11.09c.28.26.45.64.45 1.06z" />
  </svg>
);

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 p-6 z-40 flex flex-col items-center">
      <div className="w-full h-full bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center shadow-2xl overflow-y-auto no-scrollbar">
        
        {/* Profile Avatar Section */}
        <div className="relative w-[110px] h-[110px] flex-shrink-0">
          <div className="absolute inset-0 rounded-full border border-primary/40 shadow-[0_0_20px_rgba(16,185,129,0.15)]" />
          <div className="relative w-full h-full rounded-full p-[4px] overflow-hidden">
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
              <Image
                src="/profile-portfolio.jpeg"
                alt="Swathi P V"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Identity Details */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-white text-center">
            Swathi P V
          </h1>
          <div className="text-[10px] font-mono font-bold uppercase text-primary tracking-[0.3em] text-center">
            AI SYSTEM ARCHITECT
          </div>
        </div>

        {/* Flight-Style Location Card */}
        <div className="mt-8 w-full bg-primary rounded-[2rem] p-6 text-white shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter">IND <span className="text-[10px] opacity-80 ml-1">IN</span></span>
              <span className="text-[8px] font-mono uppercase tracking-widest opacity-80">INDIA</span>
            </div>
            
            <Plane className="w-6 h-6 rotate-90 opacity-80" />
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1.5">
                <span className="text-xs">🇮🇳</span>
                <span className="text-2xl font-bold tracking-tighter">BLR</span>
              </div>
              <span className="text-[8px] font-mono uppercase tracking-widest opacity-80">BENGALURU</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-white/20 text-center">
            <span className="text-[9px] font-bold uppercase tracking-widest">IN BENGALURU, KARNATAKA, INDIA</span>
          </div>
        </div>

        {/* Roles/Skills Card */}
        <div className="mt-6 w-full bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">PYTHON FULL STACK</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Bot className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">GEN AI</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Clapperboard className="w-4 h-4 text-orange-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400">CONTENT CREATOR</span>
          </div>
        </div>

        {/* Social Action Row */}
        <div className="flex flex-row justify-center gap-4 mt-8">
          {[
            { icon: () => <Github className="w-5 h-5 text-white" />, href: 'https://github.com/swathivhu' },
            { icon: LinkedinIcon, href: 'https://linkedin.com/in/swathi-p-v-1ba07733a' },
            { icon: GmailIcon, href: 'mailto:swathipv.2501@gmail.com' },
            { icon: () => <Download className="w-5 h-5 text-primary" />, href: '/Swathi-Resume.pdf' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300"
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 text-[8px] font-mono text-muted-foreground/30 uppercase text-center tracking-[0.3em]">
          Professional AI Architect • {new Date().getFullYear()}
        </div>
      </div>
    </aside>
  );
};
