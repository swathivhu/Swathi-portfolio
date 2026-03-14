"use client"

import React from 'react';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'SQL', 'C++']
  },
  {
    title: 'AI Tools',
    skills: ['Generative AI', 'Prompt Engineering', 'NotebookLM', 'Suno AI', 'ElevenLabs', 'LangChain']
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Firebase', 'Tailwind CSS', 'Node.js']
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
        <span className="text-secondary">02.</span> Skills & Expertise
        <div className="h-px bg-white/10 flex-1" />
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-6">
            <h3 className="text-xl font-headline font-semibold text-primary">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div 
                  key={skill}
                  className="glass-card px-4 py-2 rounded-xl text-sm font-medium hover:border-secondary/50 hover:bg-secondary/5 transition-all cursor-default group"
                >
                  <span className="group-hover:text-glow-secondary">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
