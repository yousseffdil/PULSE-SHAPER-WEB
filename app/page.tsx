import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ThemesSection } from "@/components/themes-section"
import { SpecsSection } from "@/components/specs-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-border" />
      </div>
      <FeaturesSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-border" />
      </div>
      <ThemesSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-border" />
      </div>
      <SpecsSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-border" />
      </div>
      <DownloadSection />
      <Footer />
    </main>
  )
}
