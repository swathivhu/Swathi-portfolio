"use client"

import React from 'react';
import Image from 'next/image';
import { Github, Plane, Code, Bot, Clapperboard, Download } from 'lucide-react';

/**
 * High-Fidelity Branded Icons & Flags
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

const IndiaFlag = () => (
  <div className="w-5 h-3.5 flex flex-col overflow-hidden rounded-[1px] shadow-sm border border-white/10">
    <div className="h-1/3 bg-[#FF9933]" />
    <div className="h-1/3 bg-white" />
    <div className="h-1/3 bg-[#128807]" />
  </div>
);

const KarnatakaFlag = () => (
  <div className="w-5 h-3.5 flex flex-col overflow-hidden rounded-[1px] shadow-sm border border-white/10">
    <div className="h-1/2 bg-[#FFFF00]" />
    <div className="h-1/2 bg-[#FF0000]" />
  </div>
);

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-80 xl:w-[420px] lg:fixed h-screen left-auto top-0 p-4 z-40 flex flex-col items-center justify-center">
      
      {/* Main Identity Card */}
      <div className="w-full bg-black border border-white/5 rounded-[3.5rem] py-10 px-8 flex flex-col items-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        {/* 1. Avatar Section */}
        <div className="relative w-[110px] h-[110px] mb-8">
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
          
          {/* Main Avatar Wrapper */}
          <div className="relative w-full h-full rounded-full border-2 border-primary/40 p-1 bg-black z-10 overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)]">
             <div className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-500 hover:scale-110">
              <Image
                src="/profile-portfolio.jpeg"
                alt="Swathi P V"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Floating Accent Dot */}
          <div className="absolute -right-1 top-4 w-3 h-3 bg-primary rounded-full z-20 border-2 border-black animate-bounce shadow-lg shadow-primary/50" />
        </div>

        {/* 2. Identity Header */}
        <div className="flex flex-col items-center gap-1 mb-8 text-center relative">
          <h1 className="text-4xl font-headline font-bold text-white tracking-tight">
            Swathi P V
          </h1>
          {/* Glowing line under name */}
          <div className="w-12 h-0.5 bg-primary rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] mt-1 mb-4" />
          
          <div className="text-[10px] font-mono font-bold uppercase text-primary tracking-[0.4em]">
            AI SYSTEM ARCHITECT
          </div>
        </div>

        {/* 3. Boarding Pass Location Card */}
        <div className="w-full bg-primary rounded-[2.5rem] p-6 text-white shadow-[0_15px_35px_rgba(16,185,129,0.25)] mb-8 transition-transform hover:scale-[1.02] duration-300">
          <div className="flex justify-between items-start">
            {/* Left: India */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5">
                <IndiaFlag />
                <span className="text-2xl font-bold tracking-tight">IND</span>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest opacity-80 pl-6.5">INDIA</span>
            </div>
            
            {/* Center: Transit Icon */}
            <div className="flex-1 flex justify-center pt-2 opacity-50">
              <Plane className="w-5 h-5 rotate-45" />
            </div>
            
            {/* Right: Bengaluru */}
            <div className="flex flex-col items-end gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold tracking-tight">BLR</span>
                <KarnatakaFlag />
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest opacity-80 pr-6.5 text-right">BENGALURU</span>
            </div>
          </div>
          
          {/* Dashed Divider */}
          <div className="mt-4 pt-4 border-t border-white/30 border-dashed text-center space-y-1">
            <div className="text-[7px] font-mono uppercase tracking-[0.3em] opacity-80">CURRENT STATUS</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white leading-tight">
              IN BENGALURU, KARNATAKA, INDIA
            </div>
          </div>
        </div>

        {/* 4. Modular Expertise Roles Card */}
        <div className="w-full bg-white/[0.02] border border-primary/20 rounded-[2.5rem] py-6 px-4 flex flex-col items-center gap-4 mb-8 relative group shadow-inner">
          {/* Pulsing online indicator */}
          <div className="absolute -right-1 top-1/2 -translate-y-1/2">
             <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(16,185,129,1)]" />
          </div>
          
          <div className="flex items-center gap-3 text-primary group-hover:translate-x-1 transition-transform">
            <Code className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Python Full Stack</span>
          </div>
          
          <div className="flex items-center gap-3 text-purple-500 group-hover:translate-x-1 transition-transform">
            <Bot className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Gen AI</span>
          </div>
          
          <div className="flex items-center gap-3 text-orange-500 group-hover:translate-x-1 transition-transform">
            <Clapperboard className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Content Creator</span>
          </div>
        </div>

        {/* 5. Social Action Bar */}
        <div className="flex flex-row justify-center gap-4 w-full">
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
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 hover:border-primary/50 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};