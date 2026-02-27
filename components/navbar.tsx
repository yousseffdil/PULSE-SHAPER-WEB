"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import dynamic from "next/dynamic"

const NavbarTorus = dynamic(
  () => import("@/components/navbar-torus").then((mod) => mod.NavbarTorus),
  { ssr: false, loading: () => <div className="h-8 w-8" /> }
)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-sm font-bold uppercase tracking-widest text-foreground">
            Pulse
          </span>
          <NavbarTorus />
          <span className="text-sm font-bold uppercase tracking-widest text-foreground">
            Shaper
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#themes"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Themes
          </Link>
          <Link
            href="#specs"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Specs
          </Link>
          <Link
            href="/vst/PULSE-SHAPER.vst3"
            download
            className="rounded-sm bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Download Free
          </Link>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#themes"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Themes
            </Link>
            <Link
              href="#specs"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Specs
            </Link>
            <Link
              href="/vst/PULSE-SHAPER.vst3"
              download
              className="rounded-sm bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Download Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
