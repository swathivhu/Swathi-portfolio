"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Download, Plane, Code, Bot, Clapperboard, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Custom High-Fidelity Brand Icons for the Social Row
 */
const LinkedInIcon = () => (
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
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 p-4 z-40 flex flex-col items-center">
      
      {/* Top Status Indicator Dot */}
      <div className="w-2 h-2 bg-primary rounded-full mb-3 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />

      {/* Main Identity Card Container */}
      <div className="w-full h-full bg-black border border-white/5 rounded-[3rem] p-6 flex flex-col items-center shadow-2xl overflow-hidden relative">
        
        {/* 1. Profile Avatar Section */}
        <div className="relative w-[110px] h-[110px] mb-4 group flex-shrink-0">
          <div className="absolute inset-[-4px] rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute inset-0 rounded-full bg-primary/15 blur-md group-hover:bg-primary/30 transition-all duration-500" />
          <div className="absolute inset-0 rounded-full border border-white/10 shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-all duration-500" />
          
          <div className="relative w-full h-full rounded-full p-1 overflow-hidden bg-black">
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5">
              <Image
                src="/profile-portfolio.jpeg"
                alt="Swathi P V"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
          
          {/* Online Status Indicator */}
          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-primary border-2 border-black rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)] z-20" />
        </div>

        {/* 2. & 3. Identity Details (Name & Title) */}
        <div className="flex flex-col items-center gap-1.5 mb-5 flex-shrink-0">
          <h1 className="text-3xl font-headline font-bold tracking-tight text-white text-center">
            Swathi P V
          </h1>
          <div className="text-[9px] font-mono font-bold uppercase text-primary tracking-[0.4em] text-center">
            AI SYSTEM ARCHITECT
          </div>
        </div>

        {/* 4. Boarding Pass Style Location Card */}
        <div className="w-full bg-primary rounded-[2rem] p-4 text-white shadow-[0_10px_25px_rgba(16,185,129,0.2)] mb-5 flex-shrink-0">
          <div className="flex justify-between items-center mb-2.5 px-1">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold leading-none">IND</span>
                <span className="text-[7px] font-bold opacity-70">IN</span>
              </div>
              <span className="text-[6px] font-mono uppercase tracking-widest opacity-70">INDIA</span>
            </div>
            
            <Plane className="w-3.5 h-3.5 opacity-70 rotate-45" />
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                <div className="w-3.5 h-2 flex flex-col overflow-hidden rounded-[1px]">
                  <div className="h-[0.66px] bg-[#FF9933]" />
                  <div className="h-[0.66px] bg-white" />
                  <div className="h-[0.66px] bg-[#128807]" />
                </div>
                <span className="text-lg font-bold leading-none">BLR</span>
              </div>
              <span className="text-[6px] font-mono uppercase tracking-widest opacity-70">BENGALURU</span>
            </div>
          </div>
          
          <div className="pt-2.5 border-t border-white/20 text-center">
            <span className="text-[7px] font-bold uppercase tracking-widest opacity-90">
              IN BENGALURU, KARNATAKA, INDIA
            </span>
          </div>
        </div>

        {/* 5. Expertise Modular Stack (Role Card) */}
        <div className="w-full bg-white/[0.03] border border-white/5 rounded-[2rem] p-3.5 flex flex-col items-center gap-3 mb-5 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Code className="w-3 h-3 text-primary" />
            <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-primary">PYTHON FULL STACK</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Bot className="w-3 h-3 text-purple-400" />
            <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-purple-400">GEN AI</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clapperboard className="w-3 h-3 text-orange-400" />
            <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-orange-400">CONTENT CREATOR</span>
          </div>
        </div>

        {/* 6. Social Actions Row */}
        <div className="flex flex-row justify-center gap-3 mb-6 flex-shrink-0">
          {[
            { icon: () => <Github className="w-4.5 h-4.5 text-white" />, href: 'https://github.com/swathivhu' },
            { icon: LinkedInIcon, href: 'https://linkedin.com/in/swathi-p-v-1ba07733a' },
            { icon: GmailIcon, href: 'mailto:swathipv.2501@gmail.com' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-300"
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* 7. Download Button */}
        <div className="w-full mt-auto flex-shrink-0">
          <Button 
            asChild
            className="w-full h-12 bg-white/[0.03] hover:bg-primary hover:text-white border border-white/10 hover:border-primary text-primary-foreground rounded-2xl font-bold tracking-[0.2em] text-[10px] transition-all duration-300 group"
          >
            <a href="/Swathi-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              DOWNLOAD CV
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
};
