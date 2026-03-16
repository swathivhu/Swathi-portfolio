
"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export const Contact: React.FC = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill out all fields before sending.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const messagesRef = collection(db, 'messages');
      const payload = {
        ...formData,
        createdAt: serverTimestamp(),
      };

      // Non-blocking write following guidelines
      addDoc(messagesRef, payload)
        .then(() => {
          toast({
            title: "Success!",
            description: "Message sent successfully! I'll get back to you soon.",
          });
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        })
        .catch(async (serverError) => {
          const permissionError = new FirestorePermissionError({
            path: messagesRef.path,
            operation: 'create',
            requestResourceData: payload,
          });
          errorEmitter.emit('permission-error', permissionError);
          setIsSubmitting(false);
          toast({
            variant: "destructive",
            title: "Submission Error",
            description: "Something went wrong. Please try again later.",
          });
        });

    } catch (error) {
      setIsSubmitting(false);
      console.error("Form error:", error);
    }
  };

  return (
    <div className="space-y-12">
      <h2 className="section-heading flex items-center gap-4 mb-10">
        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.8)] flex-shrink-0" />
        Contact
        <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-1" />
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/60 ml-1">Name</label>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="bg-white/[0.03] border-white/10 rounded-xl h-11 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/20" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/60 ml-1">Email</label>
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  className="bg-white/[0.03] border-white/10 rounded-xl h-11 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/20" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/60 ml-1">Message</label>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help?" 
                className="bg-white/[0.03] border-white/10 rounded-xl min-h-[120px] p-4 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/20" 
              />
            </div>
            <Button 
              type="submit"
              disabled={isSubmitting}
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14 font-bold uppercase tracking-[0.2em] shadow-lg shadow-primary/20 group disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Initiate Contact"}
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
