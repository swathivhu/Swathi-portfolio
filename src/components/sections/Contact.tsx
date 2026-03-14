"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32">
      <h2 className="section-heading">
        <span className="section-number">07.</span> Contact
        <div className="h-px bg-white/5 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-white leading-tight">
            Let's build the <br /> <span className="text-primary">Next Intelligence.</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm currently available for freelance projects and full-time opportunities. If you have a project that needs a touch of intelligence, let's talk.
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl border-white/5">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                <Input placeholder="Your Name" className="bg-white/5 border-white/10 rounded-lg h-12 focus:border-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                <Input type="email" placeholder="Email Address" className="bg-white/5 border-white/10 rounded-lg h-12 focus:border-primary transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground ml-1">Message</label>
              <Textarea placeholder="How can I help?" className="bg-white/5 border-white/10 rounded-lg min-h-[160px] p-4 focus:border-primary transition-all" />
            </div>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-7 font-bold">
              Send Message
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
      
      <footer className="mt-32 pt-12 border-t border-white/5 text-center">
        <p className="text-muted-foreground text-[10px] font-mono uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} Swathi P V • Professional AI Architect
        </p>
      </footer>
    </section>
  );
};
