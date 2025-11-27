import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { PropertyRegionsSection } from "@/components/property-regions-section"
import { SimulationFormSection } from "@/components/simulation-form-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen space-y-0">
      <Header />
      <HeroSection />
      <ProblemSection />
      <PropertyRegionsSection />
      <SimulationFormSection />
      <WhyChooseSection />
      <TestimonialsSection />
    </main>
  )
}
