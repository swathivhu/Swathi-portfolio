"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40">
      <h2 className="section-heading">
        <span className="section-number">07.</span> Get In Touch
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-40 items-start">
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-8">
            <h3 className="text-6xl md:text-7xl font-headline font-bold text-glow-primary leading-tight">
              Ready to <br /> CollaboratAI?
            </h3>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              I'm always looking for ambitious projects that push the boundaries of what's possible with generative intelligence.
            </p>
          </div>
          
          <div className="space-y-8">
            <p className="text-sm font-mono uppercase tracking-[0.4em] text-secondary">Neural Channels</p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: Github, label: 'Source Forge', detail: '@swathi-pv', href: 'https://github.com' },
                { icon: Linkedin, label: 'Professional Link', detail: 'Swathi P V', href: 'https://linkedin.com' },
                { icon: Mail, label: 'Direct Relay', detail: 'swathi@example.com', href: 'mailto:swathi@example.com' },
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="flex items-center gap-6 p-8 rounded-[2.5rem] glass-card border-white/5 hover:border-secondary/30 transition-all group"
                >
                  <div className="p-4 rounded-2xl bg-white/5 text-muted-foreground group-hover:text-secondary transition-colors">
                    <social.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{social.label}</p>
                    <p className="text-lg font-bold text-white group-hover:text-glow-secondary">{social.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7 glass-card p-12 md:p-16 rounded-[4rem] border-white/10">
          <form className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground ml-2">Protocol Identifier (Name)</label>
                <Input placeholder="Human Name" className="bg-white/5 border-white/10 rounded-3xl py-8 px-6 text-lg focus:border-secondary/50 focus:ring-0 transition-all" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground ml-2">Direct Address (Email)</label>
                <Input type="email" placeholder="email@address.xyz" className="bg-white/5 border-white/10 rounded-3xl py-8 px-6 text-lg focus:border-secondary/50 focus:ring-0 transition-all" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground ml-2">Input Sequence (Message)</label>
              <Textarea placeholder="How can we build the future together?" className="bg-white/5 border-white/10 rounded-3xl min-h-[220px] p-6 text-lg focus:border-secondary/50 focus:ring-0 transition-all" />
            </div>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-[2rem] py-10 text-2xl font-bold bg-glow-primary active:scale-[0.98] transition-all">
              Initiate Contact
              <Send className="ml-4 w-8 h-8" />
            </Button>
          </form>
        </div>
      </div>
      
      <footer className="mt-48 pt-16 border-t border-white/5 text-center flex flex-col items-center gap-10">
        <div className="flex gap-6">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse [animation-delay:200ms]" />
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse [animation-delay:400ms]" />
        </div>
        <p className="text-muted-foreground text-sm font-mono uppercase tracking-[0.4em]">
          © {new Date().getFullYear()} Swathi P V • Designed for the Synthetic Age
        </p>
      </footer>
    </section>
  );
};
