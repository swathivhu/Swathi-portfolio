"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="section-heading">
        <span className="section-number">07.</span> Contact
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h3 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight">
            Let's build the <br /> <span className="text-primary neon-text">Next Intelligence.</span>
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            I'm currently available for freelance projects and full-time opportunities. If you have a project that needs a touch of intelligence, let's talk.
          </p>
        </div>
        
        <div className="space-y-4">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/60 ml-1">Name</label>
                <Input placeholder="Your Name" className="bg-white/[0.03] border-white/10 rounded-xl h-11 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/20" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/60 ml-1">Email</label>
                <Input type="email" placeholder="Email Address" className="bg-white/[0.03] border-white/10 rounded-xl h-11 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/20" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/60 ml-1">Message</label>
              <Textarea placeholder="How can I help?" className="bg-white/[0.03] border-white/10 rounded-xl min-h-[120px] p-4 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/20" />
            </div>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14 font-bold uppercase tracking-[0.2em] shadow-lg shadow-primary/20 group">
              Initiate Contact
              <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
      
      <footer className="mt-12 pt-8 border-t border-white/5 text-center">
        <p className="text-muted-foreground/40 text-[9px] font-mono uppercase tracking-[0.4em]">
          © {new Date().getFullYear()} Swathi P V • Synthetic Intelligence Architect
        </p>
      </footer>
    </div>
  );
};