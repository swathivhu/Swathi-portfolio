"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

import { ArrowRight, Bot } from "lucide-react"

export const Hero = () => {
  const [displayText, setDisplayText] = useState("")

  const fullTitleText = "Full-Stack Development with Generative AI"

  useEffect(() => {
    let i = 0
    const titleInterval = setInterval(() => {
      setDisplayText(fullTitleText.substring(0, i))
      i++
      if (i > fullTitleText.length) clearInterval(titleInterval)
    }, 35)

    return () => clearInterval(titleInterval)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="flex flex-col justify-center py-6 md:py-10 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-8 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-3 py-[5px] rounded-full bg-primary/5 border border-primary/10">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-primary font-bold">
              FULL-STACK & AI DEVELOPMENT
            </span>
          </div>

          {/* TITLE + TYPEWRITER */}
          <div className="space-y-3">

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-headline font-bold leading-[1.05] tracking-tight text-white">
              Building Intelligent
              <br className="hidden md:block" />
              <span className="text-primary">Digital Systems</span>
            </h1>

            {/* TYPEWRITER */}
            <div className="min-h-[28px] flex items-center justify-center lg:justify-start">
              <p className="text-sm md:text-base font-medium text-muted-foreground tracking-tight whitespace-nowrap">
                Crafting{" "}
                <span className="text-white font-mono">
                  {displayText}
                </span>
                <span className="inline-block w-[2px] h-[14px] ml-1 bg-primary animate-pulse align-middle"></span>
              </p>
            </div>

          </div>

          {/* DESCRIPTION */}
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
            I build scalable full-stack applications powered by modern web technologies and Generative AI, creating intelligent systems with powerful backends and seamless user experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 w-full">

            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 h-10 font-bold tracking-wide transition-all shadow-lg shadow-primary/5 whitespace-nowrap"
            >
              View Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("contact")}
              className="border-white/10 hover:bg-white/5 hover:border-white/20 rounded-xl px-6 h-10 font-bold text-muted-foreground hover:text-white transition-all whitespace-nowrap"
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="lg:col-span-4 hidden lg:flex justify-end">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute inset-0 border border-white/5 rounded-full" />
            <div className="absolute inset-3 border border-white/5 rounded-full" />
            <div className="w-16 h-16 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/10">
              <Bot className="w-6 h-6 text-primary/40" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}