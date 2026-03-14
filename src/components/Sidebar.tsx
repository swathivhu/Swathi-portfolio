"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Download, Plane, Code, Bot, Clapperboard, Play } from 'lucide-react';

/**
 * Custom High-Fidelity Brand Icons
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
    <aside className="w-full lg:w-80 xl:w-96 lg:fixed h-screen left-auto top-0 p-6 z-40 flex flex-col items-center">
      {/* Main Identity Card Container */}
      <div className="w-full h-full bg-black border border-white/5 rounded-[3.5rem] p-8 flex flex-col items-center shadow-2xl overflow-y-auto no-scrollbar relative">
        
        {/* Profile Avatar Section - Exact Alignment */}
        <div className="relative w-[140px] h-[140px] mb-7 flex-shrink-0 group">
          <div className="absolute inset-0 rounded-full border-2 border-primary shadow-[0_0_20px_rgba(16,185,129,0.2)]" />
          <div className="relative w-full h-full rounded-full p-1.5 overflow-hidden">
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-black">
              <Image
                src="/profile-portfolio.jpeg"
                alt="Swathi P V"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Online Status Indicator - Bottom Right Anchor */}
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary rounded-full border-2 border-black shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
        </div>

        {/* Identity Details - Centered Hierarchy */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <h1 className="text-5xl font-headline font-bold tracking-tighter text-white text-center">
            Swathi P V
          </h1>
          <div className="text-[10px] font-mono font-bold uppercase text-primary/80 tracking-[0.4em] text-center">
            AI SYSTEM ARCHITECT
          </div>
        </div>

        {/* Boarding Pass Style Location Card */}
        <div className="w-full bg-primary rounded-[2.5rem] p-8 text-white shadow-[0_15px_35px_rgba(16,185,129,0.25)] mb-5">
          <div className="flex justify-between items-center mb-6 px-1">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tighter">IND</span>
                <span className="text-[10px] font-bold opacity-70">IN</span>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest opacity-70 mt-1">INDIA</span>
            </div>
            
            <Plane className="w-6 h-6 opacity-70 rotate-45" />
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2">
                <div className="w-5 h-3 flex flex-col">
                  <div className="h-1 bg-[#FF9933]" />
                  <div className="h-1 bg-white" />
                  <div className="h-1 bg-[#128807]" />
                </div>
                <span className="text-3xl font-bold tracking-tighter">BLR</span>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest opacity-70 mt-1">BENGALURU</span>
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/20 text-center">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-80">
              KARNATAKA, INDIA
            </span>
          </div>
        </div>

        {/* Expertise Modular Stack */}
        <div className="w-full bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center gap-5 mb-5">
          <div className="flex items-center gap-3">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary/90">PYTHON FULL STACK</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Bot className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-400/90">GEN AI EXPERT</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Clapperboard className="w-4 h-4 text-orange-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-orange-400/90">CONTENT CREATOR</span>
          </div>
        </div>

        {/* Social Actions Row */}
        <div className="flex flex-row justify-center gap-5 mt-auto pb-2">
          {[
            { icon: () => <Github className="w-5.5 h-5.5 text-white" />, href: 'https://github.com/swathivhu', color: 'border-white/10' },
            { icon: LinkedInIcon, href: 'https://linkedin.com/in/swathi-p-v-1ba07733a', color: 'border-[#0077B5]/30' },
            { icon: GmailIcon, href: 'mailto:swathipv.2501@gmail.com', color: 'border-[#EA4335]/30' },
            { icon: () => <Download className="w-5.5 h-5.5 text-primary" />, href: '/Swathi-Resume.pdf', color: 'border-primary/30' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-13 h-13 flex items-center justify-center rounded-full bg-white/[0.02] border ${social.color} hover:scale-110 hover:bg-white/[0.05] transition-all duration-300 shadow-xl`}
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};