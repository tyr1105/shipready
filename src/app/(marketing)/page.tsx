import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Pricing } from "@/components/landing/pricing"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { CTA } from "@/components/landing/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
