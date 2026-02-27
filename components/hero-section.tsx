"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="animate-fade-in-up mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Sidechain Redefined
        </p>

        <h1 className="animate-fade-in-up animation-delay-200 mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Shape Your
          <br />
          <span className="text-primary">Sidechain</span>
        </h1>

        <p className="animate-fade-in-up animation-delay-400 mb-10 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Precision sidechain compression with intuitive envelope shaping.
          Sculpt your dynamics with total control.
        </p>

        <div className="animate-fade-in-up animation-delay-600 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/vst/PULSE-SHAPER.vst3"
            download
            className="rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90 animate-pulse-glow"
          >
            Download Free
          </a>
          <a
            href="#features"
            className="rounded-sm border border-border px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-muted-foreground"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Plugin Screenshot */}
      <div className="relative z-10 mx-auto mt-16 w-full max-w-3xl animate-fade-in-up animation-delay-600 px-4">
        <div className="animate-float rounded-lg border border-border/50 bg-card/50 p-2 shadow-2xl backdrop-blur-sm">
          <Image
            src="/images/pulse-shaper.png"
            alt="Pulse Shaper VST Plugin interface showing sidechain envelope curve with Mix, Tension, and Smooth controls"
            width={1200}
            height={750}
            className="rounded-md"
            priority
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#features"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
