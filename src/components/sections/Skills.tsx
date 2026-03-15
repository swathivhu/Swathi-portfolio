"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  { name: "Python", icon: "devicon-python-plain", bgColor: "#3776AB" },
  { name: "JavaScript", icon: "devicon-javascript-plain", bgColor: "#F7DF1E", dark: true },
  { name: "React", icon: "devicon-react-original", bgColor: "#61DAFB", dark: true },
  { name: "Next.js", icon: "devicon-nextjs-plain", bgColor: "#000000" },
  { name: "FastAPI", icon: "devicon-fastapi-plain", bgColor: "#05998B" },
  { name: "LangChain", icon: "devicon-python-plain", bgColor: "#1C3C3C" },
  { name: "PyTorch", icon: "devicon-pytorch-original", bgColor: "#EE4C2C" },
  { name: "Docker", icon: "devicon-docker-plain", bgColor: "#2496ED" },
  { name: "Firebase", icon: "devicon-firebase-plain", bgColor: "#FFCA28", dark: true },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original", bgColor: "#06B6D4" },
  { name: "Git", icon: "devicon-git-plain", bgColor: "#F05032" },
  { name: "Figma", icon: "devicon-figma-plain", bgColor: "#F24E1E" }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-4 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Dominant Section Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-4xl font-headline font-bold tracking-[0.15em] text-white uppercase">
            Technical <span className="text-primary">Stack</span>
          </h2>
          {/* Radiating Decorative Line */}
          <div className="relative h-1 w-32 mx-auto mt-4 overflow-hidden rounded-full bg-primary/20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-dot-move" />
          </div>
        </div>

        {/* Compact Skills Grid (4 columns x 3 rows) */}
        <TooltipProvider delayDuration={100}>
          <div className="grid grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <div 
                    className={cn(
                      "w-14 h-14 md:w-20 md:h-20 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-default group relative overflow-hidden",
                      "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-white/5"
                    )}
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    {/* Brand Icon */}
                    <i
                      className={cn(
                        skill.icon,
                        "text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110",
                        skill.dark ? "text-black" : "text-white"
                      )}
                    />
                    
                    {/* Subtle Overlay Glow on Hover */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  side="bottom" 
                  className="bg-zinc-900 border-white/10 text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1.5"
                >
                  {skill.name}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};
