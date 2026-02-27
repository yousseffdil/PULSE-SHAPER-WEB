import { Download } from "lucide-react"

export function DownloadSection() {
  return (
    <section id="download" className="relative px-6 py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Get Started
        </p>
        <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Ready to shape your sound?
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          Pulse Shaper is completely free. Download now and start creating
          better sidechain effects in seconds.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-sm bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90 animate-pulse-glow"
          >
            <Download size={18} />
            Download for Windows
          </a>
        </div>

        <p className="mt-6 font-mono text-xs text-muted-foreground">
          v0.0.1 — VST3
        </p>
      </div>
    </section>
  )
}
