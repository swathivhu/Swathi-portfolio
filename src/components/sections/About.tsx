
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * High-Fidelity Branded Tech Logos
 */
const OpenAILogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5153-4.9066 6.0462 6.0462 0 0 0-4.7471-3.1243 5.9867 5.9867 0 0 0-5.4927 1.2214L11.0534 3.3254a.376.376 0 0 1-.3545.0423.376.376 0 0 1-.2299-.2823L10.3131 1.0772a5.9863 5.9863 0 0 0-4.9066-.5153A6.0462 6.0462 0 0 0 2.2822 5.309a5.9867 5.9867 0 0 0 1.2214 5.4927L3.8169 11.275a.376.376 0 0 1 .0423.3545.376.376 0 0 1-.2823.2299l-2.0082.1559a5.9863 5.9863 0 0 0-.5153 4.9066 6.0462 6.0462 0 0 0 4.7471 3.1243 5.9867 5.9867 0 0 0 5.4927-1.2214l.4734-.3134a.376.376 0 0 1 .3545-.0423.376.376 0 0 1 .2299.2823l.1559 2.0082a5.9863 5.9863 0 0 0 4.9066.5153 6.0462 6.0462 0 0 0 3.1243-4.7471 5.9867 5.9867 0 0 0-1.2214-5.4927l-.3134-.4734a.376.376 0 0 1-.0423-.3545.376.376 0 0 1 .2823-.2299l2.0082-.1559z" />
  </svg>
);

const LangChainLogo = () => (
  <span className="text-xl">🦜</span>
);

const AnthropicLogo = () => (
  <svg viewBox="0 0 24 24" fill="#D97757" className="w-5 h-5">
    <path d="M12 2L2 22h4.5l2-4.5h7l2 4.5H22L12 2zm-2.5 13.5l2.5-5.5 2.5 5.5h-5z" />
  </svg>
);

const ZapierLogo = () => (
  <svg viewBox="0 0 24 24" fill="#FF4F00" className="w-5 h-5">
    <path d="M21 11h-7l4-9-11 11h7l-4 9z" />
  </svg>
);

const GeminiLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#gemini_grad)" />
    <defs>
      <linearGradient id="gemini_grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4E8DFA" />
        <stop offset="1" stopColor="#D964E8" />
      </linearGradient>
    </defs>
  </svg>
);

const PythonLogo = () => (
  <i className="devicon-python-plain colored text-xl" />
);

const interests = [
  { label: 'Generative AI', icon: OpenAILogo },
  { label: 'Prompt Engineering', icon: AnthropicLogo },
  { label: 'Multi-modal AI', icon: GeminiLogo },
  { label: 'Content Automation', icon: ZapierLogo },
  { label: 'LLM Integration', icon: LangChainLogo },
  { label: 'Python Development', icon: PythonLogo },
];

export const About: React.FC = () => {
  const profile = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <div className="space-y-12">
      <h2 className="section-heading flex items-center gap-4">
        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.8)] flex-shrink-0" />
        About Me
        <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
        <div className="xl:col-span-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-primary/10 z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
            {profile?.imageUrl ? (
              <Image
                src={profile.imageUrl}
                alt="Swathi P V"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                data-ai-hint="tech developer profile"
              />
            ) : (
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <span className="text-white/20 text-xs font-mono">IMAGE N/A</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="xl:col-span-8 space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-white leading-tight">
              AI Architect & <span className="text-primary">Python Specialist</span>
            </h3>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium">
              I specialize in bridging the gap between advanced machine learning and creative digital execution. My focus lies in building intelligent systems that augment human potential through robust, production-ready code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 pt-6 border-t border-white/5">
            {interests.map((item) => (
              <div key={item.label} className="flex items-center gap-4 group/item transition-all duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover/item:border-white/20 group-hover/item:bg-white/[0.05] group-hover/item:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  <div className="transition-transform duration-500 group-hover/item:scale-115">
                    <item.icon />
                  </div>
                </div>
                <span className="text-sm md:text-base text-zinc-400 font-medium group-hover/item:text-white transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
