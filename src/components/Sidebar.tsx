"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Plane, Code, Bot, Clapperboard, Download } from 'lucide-react';

/**
 * Custom High-Fidelity Icons to match the reference image exactly
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
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 p-4 z-40 flex flex-col items-center justify-center">
      
      {/* Main Identity Card Container */}
      <div className="w-full h-auto max-h-[95vh] bg-black border border-white/5 rounded-[3.5rem] py-10 px-8 flex flex-col items-center shadow-2xl overflow-hidden relative">
        
        {/* 1. Profile Avatar Section with Glow */}
        <div className="relative w-[130px] h-[130px] mb-8 group flex-shrink-0">
          <div className="absolute inset-[-4px] rounded-full bg-primary/20 blur-sm group-hover:bg-primary/40 transition-all duration-500" />
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 shadow-[0_0_20px_rgba(16,185,129,0.3)] z-10" />
          
          <div className="relative w-full h-full rounded-full p-1 overflow-hidden bg-black z-20">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/profile-portfolio.jpeg"
                alt="Swathi P V"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* 2. & 3. Identity Details (Name & Title) */}
        <div className="flex flex-col items-center gap-2 mb-10 flex-shrink-0">
          <h1 className="text-5xl font-headline font-bold tracking-tight text-white text-center">
            Swathi P V
          </h1>
          <div className="text-[10px] font-mono font-bold uppercase text-primary tracking-[0.4em] text-center">
            AI SYSTEM ARCHITECT
          </div>
        </div>

        {/* 4. Flight Style Location Card */}
        <div className="w-full bg-primary rounded-[2.5rem] p-5 text-white shadow-[0_15px_35px_rgba(16,185,129,0.25)] mb-8 flex-shrink-0">
          <div className="flex justify-between items-start mb-4 px-1">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold leading-none">IND</span>
                <span className="text-[10px] font-bold opacity-80 uppercase">IN</span>
              </div>
              <span className="text-[8px] font-mono uppercase tracking-widest opacity-80 mt-1">INDIA</span>
            </div>
            
            <div className="flex-1 flex justify-center pt-1">
              <Plane className="w-5 h-5 opacity-60 rotate-45" />
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1.5">
                <div className="w-4.5 h-3 flex flex-col overflow-hidden rounded-[2px] shadow-sm">
                  <div className="h-1/3 bg-[#FF9933]" />
                  <div className="h-1/3 bg-white" />
                  <div className="h-1/3 bg-[#128807]" />
                </div>
                <span className="text-2xl font-bold leading-none">BLR</span>
              </div>
              <span className="text-[8px] font-mono uppercase tracking-widest opacity-80 mt-1">BENGALURU</span>
            </div>
          </div>
          
          <div className="pt-3 border-t border-white/20 text-center">
            <span className="text-[8px] font-bold uppercase tracking-widest opacity-100">
              IN BENGALURU, KARNATAKA, INDIA
            </span>
          </div>
        </div>

        {/* 5. Expertise Modular Stack */}
        <div className="w-full bg-white/[0.04] border border-white/5 rounded-[2.5rem] p-7 flex flex-col items-center gap-5 mb-10 flex-shrink-0">
          <div className="flex items-center gap-3 text-primary">
            <Code className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">PYTHON FULL STACK</span>
          </div>
          
          <div className="flex items-center gap-3 text-[#A855F7]">
            <Bot className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">GEN AI</span>
          </div>
          
          <div className="flex items-center gap-3 text-[#F97316]">
            <Clapperboard className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">CONTENT CREATOR</span>
          </div>
        </div>

        {/* 6. Social Actions Row */}
        <div className="flex flex-row justify-center gap-4 w-full flex-shrink-0">
          {[
            { icon: () => <Github className="w-5.5 h-5.5 text-white" />, href: 'https://github.com/swathivhu' },
            { icon: LinkedInIcon, href: 'https://linkedin.com/in/swathi-p-v-1ba07733a' },
            { icon: GmailIcon, href: 'mailto:swathipv.2501@gmail.com' },
            { icon: () => <Download className="w-5.5 h-5.5 text-primary" />, href: '/Swathi-Resume.pdf' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 shadow-lg"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
