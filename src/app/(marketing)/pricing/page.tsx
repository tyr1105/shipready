import type { Metadata } from "next"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { CTA } from "@/components/landing/cta"

export const metadata: Metadata = {
  title: "Pricing – ShipReady",
  description:
    "Simple, one-time pricing. Get lifetime access to ShipReady and ship your SaaS faster.",
}

export default function PricingPage() {
  return (
    <>
      <div className="py-12">
        <Pricing />
      </div>
      <FAQ />
      <CTA />
    </>
  )
}
