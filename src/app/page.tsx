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
import { Contact } from '@/components/sections/Contact';
import { GlassCard } from '@/components/GlassCard';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <CustomCursor />
      <BackgroundParticles />
      <FloatingNav />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row relative min-h-screen">
        
        {/* Sidebar Column */}
        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
          <Sidebar />
        </div>
        
        {/* Main Content Column */}
        <div className="flex-1 w-full lg:pl-16 xl:pl-24 lg:pr-24 xl:pr-32 relative z-10 py-12 md:py-16">
          <Hero />
          
          <div className="mt-4 space-y-4">
            <GlassCard id="about">
              <About />
            </GlassCard>

            <GlassCard id="skills" className="p-6 md:p-8 mb-8">
              <Skills />
            </GlassCard>

            {/* Projects section handles its own grid of interactive cards */}
            <section id="projects">
              <Projects />
            </section>

            <GlassCard id="experience">
              <Experience />
            </GlassCard>

            <GlassCard id="education">
              <Education />
            </GlassCard>

            <GlassCard id="contact">
              <Contact />
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  );
}
