"use client"

const themes = [
  {
    name: "Acid",
    bg: "rgb(0, 0, 0)",
    panel: "rgb(10, 10, 10)",
    surface: "rgb(25, 25, 25)",
    accent: "rgb(229, 255, 0)",
    textPrimary: "rgb(255, 255, 255)",
    textSecondary: "rgb(180, 180, 180)",
  },
  {
    name: "Dark",
    bg: "rgb(18, 18, 20)",
    panel: "rgb(18, 18, 20)",
    surface: "rgb(25, 25, 30)",
    accent: "rgb(0, 200, 255)",
    textPrimary: "rgb(220, 220, 220)",
    textSecondary: "rgb(140, 140, 140)",
  },
  {
    name: "Light",
    bg: "rgb(245, 245, 245)",
    panel: "rgb(240, 240, 240)",
    surface: "rgb(255, 255, 255)",
    accent: "rgb(0, 120, 215)",
    textPrimary: "rgb(40, 40, 40)",
    textSecondary: "rgb(100, 100, 100)",
  },
  {
    name: "Oak",
    bg: "rgb(60, 45, 35)",
    panel: "rgb(75, 55, 45)",
    surface: "rgb(90, 70, 55)",
    accent: "rgb(255, 160, 60)",
    textPrimary: "rgb(240, 230, 210)",
    textSecondary: "rgb(180, 160, 140)",
  },
]

function MiniCurve({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 80" className="w-full" fill="none">
      <path
        d="M0 75 C30 75, 40 10, 100 10 C160 10, 170 75, 200 75"
        stroke={accent}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M0 75 C30 75, 40 10, 100 10 C160 10, 170 75, 200 75 L200 80 L0 80 Z"
        fill={accent}
        opacity="0.08"
      />
    </svg>
  )
}

export function ThemesSection() {
  return (
    <section id="themes" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Themes
          </p>
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Match your vibe
          </h2>
          <p className="mx-auto max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Four carefully crafted themes to fit your workflow and aesthetic
            preferences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {themes.map((theme) => (
            <div
              key={theme.name}
              className="group overflow-hidden rounded-lg border border-border transition-all hover:border-muted-foreground"
              style={{ backgroundColor: theme.bg }}
            >
              <div className="p-6">
                <div
                  className="mb-4 flex items-center justify-between"
                  style={{ color: theme.textPrimary }}
                >
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Pulse Shaper
                  </span>
                  <span className="text-[10px] font-mono" style={{ color: theme.textSecondary }}>
                    v0.0.1
                  </span>
                </div>

                <div
                  className="mb-4 overflow-hidden rounded-md p-3"
                  style={{ backgroundColor: theme.surface }}
                >
                  <MiniCurve accent={theme.accent} />
                </div>

                <div className="flex items-center gap-3">
                  {["Mix", "Tension", "Smooth"].map((knob) => (
                    <div
                      key={knob}
                      className="flex flex-1 flex-col items-center gap-1 rounded-md py-2"
                      style={{ backgroundColor: theme.surface }}
                    >
                      <div
                        className="h-5 w-5 rounded-full border-2"
                        style={{ borderColor: theme.accent }}
                      />
                      <span
                        className="text-[9px] uppercase tracking-wider"
                        style={{ color: theme.textSecondary }}
                      >
                        {knob}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="border-t px-6 py-3"
                style={{
                  borderColor: theme.surface,
                  backgroundColor: theme.panel,
                }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: theme.accent }}
                >
                  {theme.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
