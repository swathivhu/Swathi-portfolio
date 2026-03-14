"use client"

import React from 'react';
import Image from 'next/image';
import { Download, Play, Code, Bot, Clapperboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      <div className="w-full h-full bg-black backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 pb-6 flex flex-col items-center shadow-2xl overflow-hidden relative">
        
        {/* Profile Avatar Section - Solid Radial Line style from reference */}
        <div className="relative w-[124px] h-[124px] group flex-shrink-0">
          
          {/* Solid Green Radial Line */}
          <div className="absolute inset-0 rounded-full border-2 border-primary shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-500" />
          
          {/* Image container */}
          <div className="relative w-full h-full rounded-full p-2 bg-black overflow-hidden">
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

          {/* Action Button Overlap - Play style icon from reference */}
          <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-primary border-4 border-black flex items-center justify-center z-10 shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <Play className="w-4 h-4 text-black fill-current" />
          </div>
        </div>

        {/* Name & Accent Line */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <h1 className="text-3xl xl:text-4xl font-headline font-bold tracking-tight text-white text-center">
            Swathi P V
          </h1>
          {/* Short Horizontal Accent Bar */}
          <div className="w-10 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        </div>

        {/* Role Identity Card - Box style from reference */}
        <div className="w-full flex items-center justify-center gap-4 mt-8 px-2">
          {/* Hollow Circle Indicator */}
          <div className="w-4 h-4 rounded-full border-2 border-primary flex-shrink-0" />
          
          {/* Roles Container */}
          <div className="flex-1 py-4 px-6 rounded-3xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-bold uppercase text-primary text-center tracking-tight leading-relaxed">
              Python Full-Stack | Gen AI | Content Creator
            </div>
          </div>
        </div>

        {/* Social Icons - Circular brand style */}
        <div className="flex flex-row justify-center gap-4 mt-8">
          {[
            { icon: GithubIcon, href: 'https://github.com/swathivhu', hoverColor: 'hover:border-white/40' },
            { icon: LinkedinIcon, href: 'https://linkedin.com/in/swathi-p-v-1ba07733a', hoverColor: 'hover:border-[#0077B5]/50' },
            { icon: GmailIcon, href: 'mailto:swathipv.2501@gmail.com', hoverColor: 'hover:border-[#EA4335]/50' },
            { icon: () => <Download className="w-5 h-5 text-primary" />, href: '/Swathi-Resume.pdf', hoverColor: 'hover:border-primary/50' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/10 ${social.hoverColor} hover:scale-110 hover:-translate-y-1 transition-all duration-300`}
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Action Button & Footer */}
        <div className="w-full mt-auto pt-8">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 text-[10px] font-bold tracking-[0.2em] shadow-lg shadow-primary/20">
            <Download className="w-3.5 h-3.5 mr-2" />
            DOWNLOAD CV
          </Button>
          <div className="mt-6 text-[8px] font-mono text-muted-foreground/30 uppercase text-center tracking-[0.3em] flex items-center justify-center gap-2">
            Made with <span className="text-primary">❤️</span> by Swathi P V • {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </aside>
  );
};