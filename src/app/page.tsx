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
 */
const SectionDivider = () => (
  <div className="w-full py-24 flex justify-center items-center opacity-10">
    <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-primary via-secondary to-transparent" />
  </div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <CustomCursor />
      <BackgroundParticles />
      <FloatingNav />
      
      {/* Root Layout Container: Centered with max-width for consistent alignment */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row relative min-h-screen">
        
        {/* Fixed Left Sidebar Column Spacer */}
        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 lg:relative">
          <Sidebar />
        </div>
        
        {/* Scrollable Right Content Column */}
        <div className="flex-1 w-full lg:pl-16 xl:pl-24 relative z-10 py-12 lg:py-0">
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
