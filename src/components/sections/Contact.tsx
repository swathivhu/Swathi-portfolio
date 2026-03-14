"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
        <span className="text-secondary">07.</span> Get In Touch
        <div className="h-px bg-white/10 flex-1" />
      </h2>
      
      <div className="glass-card rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-headline font-bold text-glow-primary">Let's Collaborate</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                If you're interested in collaborating or discussing AI projects, feel free to reach out. I'm always open to new opportunities and creative challenges.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="font-medium">Connect with me on:</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://github.com' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: Mail, label: 'Email', href: 'mailto:swathi@example.com' },
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className="flex items-center gap-3 glass-card px-4 py-3 rounded-xl hover:border-secondary transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-secondary" />
                    <span className="text-sm font-medium group-hover:text-glow-secondary">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                <Input placeholder="Your Name" className="bg-white/5 border-white/10 rounded-xl py-6 focus:border-secondary/50 focus:ring-0" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                <Input type="email" placeholder="Your Email" className="bg-white/5 border-white/10 rounded-xl py-6 focus:border-secondary/50 focus:ring-0" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Message</label>
              <Textarea placeholder="Tell me about your project" className="bg-white/5 border-white/10 rounded-xl min-h-[150px] focus:border-secondary/50 focus:ring-0" />
            </div>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-7 text-lg bg-glow-primary">
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
      
      <footer className="mt-20 pt-8 border-t border-white/5 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Swathi P V. Built with SynthFolio Architecture.</p>
      </footer>
    </section>
  );
};
