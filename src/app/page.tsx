import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { FloatingNav } from '@/components/FloatingNav';
import { CustomCursor } from '@/components/CustomCursor';
import { BackgroundParticles } from '@/components/BackgroundParticles';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { AICreations } from '@/components/sections/AICreations';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <BackgroundParticles />
      <FloatingNav />
      
      <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row">
        {/* Fixed Left Sidebar */}
        <Sidebar />
        
        {/* Scrollable Right Content Area */}
        <div className="w-full lg:ml-80 lg:pl-12 relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <AICreations />
          <Contact />
        </div>
      </div>
    </main>
  );
}
