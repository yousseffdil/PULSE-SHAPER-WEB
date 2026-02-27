const specs = [
  { label: "Format", value: "VST3" },
  { label: "Platforms", value: "Windows" },
  { label: "Latency", value: "Zero Latency" },
  { label: "CPU", value: "Ultra Low" },
  { label: "Sample Rates", value: "Up to 192kHz" },
  { label: "Resizable UI", value: "No" },
]

export function SpecsSection() {
  return (
    <section id="specs" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Technical Specs
            </p>
            <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Built for the modern producer
            </h2>
            <p className="mb-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Pulse Shaper is designed from the ground up for compatibility and
              performance. Runs natively on all major DAWs and platforms.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Ableton Live</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">FL Studio</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-8 py-5 ${i !== specs.length - 1 ? "border-b border-border" : ""
                  }`}
              >
                <span className="text-sm text-muted-foreground">{spec.label}</span>
                <span className="font-mono text-sm font-semibold text-foreground">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
