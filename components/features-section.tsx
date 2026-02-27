import { Waves, Clock, Sliders, Cpu, Palette, Zap } from "lucide-react"

const features = [
  {
    icon: Waves,
    title: "Envelope Shaping",
    description:
      "Visually design your sidechain curve with an intuitive envelope editor. See exactly how your signal will be shaped in real-time.",
  },
  {
    icon: Clock,
    title: "Flexible Sync Modes",
    description:
      "Lock to your DAW tempo with multiple sync divisions — Free, 1 Bar, 1/2, 1/4, 1/8, and 1/16 — or run completely free.",
  },
  {
    icon: Sliders,
    title: "Mix, Tension & Smooth",
    description:
      "Fine-tune your sidechain with dedicated controls. Adjust mix amount, curve tension, and smoothing for the perfect duck.",
  },
  {
    icon: Palette,
    title: "Multiple Themes",
    description:
      "Choose from Acid, Dark, Light, and Oak themes to match your workflow. Each theme is carefully designed for long studio sessions.",
  },
  {
    icon: Cpu,
    title: "Ultra Low Latency",
    description:
      "Built with performance in mind. Zero-latency processing ensures your sidechain responds instantly with no compromise on CPU.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "No external sidechain input needed. Pulse Shaper generates its own envelope, giving you instant pumping effects on any track.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Features
          </p>
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Pulse Shaper gives you surgical control over your sidechain dynamics
            with a clean, focused interface.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-secondary/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
