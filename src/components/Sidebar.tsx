"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Plane, Code, Bot, Clapperboard, Download } from 'lucide-react';

/**
 * High-Fidelity Branded Icons
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

const KarnatakaFlag = () => (
  <div className="w-4 h-2.5 flex flex-col overflow-hidden rounded-[1px] border border-white/20 shadow-sm">
    <div className="h-1/2 bg-[#FFFF00]" />
    <div className="h-1/2 bg-[#FF0000]" />
  </div>
);

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-[350px] lg:fixed h-screen left-auto top-0 p-4 z-40 flex flex-col items-center justify-center">
      
      {/* Sidebar Container */}
      <div className="w-full bg-[#050505] border border-white/5 rounded-[3.5rem] py-10 px-6 flex flex-col items-center shadow-[0_0_50px_rgba(16,185,129,0.1)] relative overflow-hidden">
        
        {/* 1. Avatar Section (Size: 110px) */}
        <div className="relative w-[110px] h-[110px] flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
          <div className="relative w-full h-full rounded-full border border-primary/40 p-1 bg-black z-10 overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)]">
             <div className="relative w-full h-full rounded-full overflow-hidden">
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

        {/* 2. Name Section (mt-6 = 24px) */}
        <div className="mt-6 flex flex-col items-center">
          <h1 className="text-[36px] font-headline font-bold text-white tracking-tight text-center leading-none">
            Swathi P V
          </h1>
          {/* Glowing Emerald Underline */}
          <div className="w-12 h-[2px] bg-primary mt-2 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        </div>

        {/* 3. Title Section (mt-2 = 8px) */}
        <div className="mt-2 flex flex-col items-center">
          <div className="text-[10px] font-mono font-bold uppercase text-primary tracking-[0.4em]">
            AI SYSTEM ARCHITECT
          </div>
        </div>

        {/* 4. Location Card (mt-6 = 24px) - Exact Boarding Pass Style - Enlarged Width */}
        <div className="mt-6 w-[95%] bg-[#10b981] rounded-2xl py-3 px-8 text-white shadow-xl flex flex-col items-center transition-transform hover:scale-[1.02] duration-300">
          <div className="w-full flex justify-between items-center pb-1">
            {/* Left Section: IND IN INDIA */}
            <div className="flex flex-col items-start leading-none">
              <div className="flex items-start gap-1">
                <span className="text-xl font-bold leading-none">IND</span>
                <span className="text-[9px] font-normal leading-none mt-0.5 opacity-90">IN</span>
              </div>
              <span className="text-[8px] font-normal uppercase tracking-widest mt-0.5">INDIA</span>
            </div>
            
            {/* Center Section: Airplane */}
            <div className="opacity-90">
              <Plane className="w-4 h-4 rotate-45" />
            </div>
            
            {/* Right Section: KarnatakaFlag BLR BENGALURU */}
            <div className="flex flex-col items-end leading-none">
              <div className="flex items-center">
                <KarnatakaFlag />
                <span className="text-xl font-bold leading-none ml-1.5">BLR</span>
              </div>
              <span className="text-[8px] font-normal uppercase tracking-widest mt-0.5">BENGALURU</span>
            </div>
          </div>
          
          {/* Thin Solid Divider */}
          <div className="w-full h-[0.5px] bg-white/30 my-2" />
          
          {/* Status Line */}
          <div className="text-center w-full">
            <div className="text-[9px] font-normal uppercase tracking-tight text-white leading-none">
              IN BENGALURU, KARNATAKA, INDIA
            </div>
          </div>
        </div>

        {/* 5. Roles Card (mt-5 = 20px) - Enlarged Width */}
        <div className="mt-5 w-[95%] bg-[#0a0a0a] border border-primary/20 rounded-2xl py-4 px-6 flex flex-col items-center gap-3 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
          <div className="flex items-center gap-3 text-primary">
            <Code className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">PYTHON FULL STACK</span>
          </div>
          
          <div className="flex items-center gap-3 text-purple-500">
            <Bot className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">GEN AI</span>
          </div>
          
          <div className="flex items-center gap-3 text-orange-500">
            <Clapperboard className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">CONTENT CREATOR</span>
          </div>
        </div>

        {/* 6. Social Icon Row (mt-6 = 24px) */}
        <div className="mt-6 flex flex-row justify-center gap-4 w-full">
          {[
            { icon: () => <Github className="w-5 h-5 text-white" />, href: 'https://github.com/swathivhu', label: 'GitHub' },
            { icon: LinkedInIcon, href: 'https://linkedin.com/in/swathi-p-v-1ba07733a', label: 'LinkedIn' },
            { icon: GmailIcon, href: 'mailto:swathipv.2501@gmail.com', label: 'Gmail' },
            { icon: () => <Download className="w-5 h-5 text-primary" />, href: '/Swathi-Resume.pdf', label: 'Resume' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 hover:border-primary/50 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                <social.icon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
