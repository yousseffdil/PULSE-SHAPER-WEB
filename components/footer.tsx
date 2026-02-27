import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary">
            <span className="text-[10px] font-bold text-primary-foreground">P</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-foreground">
            Pulse Shaper
          </span>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="#features"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#themes"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Themes
          </Link>
          <Link
            href="#specs"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Specs
          </Link>
          <Link
            href="/vst/PULSE-SHAPER.vst3"
            download
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Download
          </Link>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          {'© 2026 Pulse Shaper'}
        </p>
      </div>
    </footer>
  )
}
