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

/**
 * A minimal, modern section divider with a subtle purple-to-cyan gradient.
 * Increased padding to create significant breathing room between sections.
 */
const SectionDivider = () => (
  <div className="w-full py-24 flex justify-center items-center opacity-10">
    <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-primary via-secondary to-transparent" />
  </div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <BackgroundParticles />
      <FloatingNav />
      
      <div className="container mx-auto px-8 lg:px-12 flex flex-col lg:flex-row">
        {/* Fixed Left Sidebar */}
        <Sidebar />
        
        {/* Scrollable Right Content Area with increased horizontal padding */}
        <div className="w-full lg:ml-80 lg:pl-20 relative z-10">
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Education />
          <SectionDivider />
          <AICreations />
          <SectionDivider />
          <Contact />
        </div>
      </div>
    </main>
  );
}
