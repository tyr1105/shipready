"use client"

import * as React from "react"
import Link from "next/link"
import { CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

const tiers = [
  {
    name: "Starter",
    description: "Perfect for side projects and MVPs.",
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      "Next.js 16 boilerplate",
      "Supabase authentication",
      "Tailwind CSS & shadcn/ui",
      "Dark mode support",
      "Basic SEO setup",
      "6 months of updates",
    ],
    cta: "Get Starter",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Everything you need to launch a SaaS.",
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      "Everything in Starter",
      "Stripe payments & subscriptions",
      "Admin dashboard",
      "Blog with MDX",
      "Email templates",
      "Lifetime updates",
      "Priority support",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Ultimate",
    description: "For teams who want it all.",
    monthlyPrice: 149,
    annualPrice: 119,
    features: [
      "Everything in Pro",
      "Multi-tenancy support",
      "Team management",
      "API with rate limiting",
      "Custom integrations",
      "Lifetime updates",
      "Dedicated support",
      "Source code access",
    ],
    cta: "Get Ultimate",
    highlighted: false,
  },
]

export function Pricing() {
  const [annual, setAnnual] = React.useState(false)

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-muted-foreground">Simple pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            One-time purchase, forever yours
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            No subscriptions. Pay once and get lifetime access to ShipReady.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-muted/50 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !annual
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                annual
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual <span className="text-xs text-emerald-500">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice

            return (
              <Card
                key={tier.name}
                className={`relative flex flex-col ${
                  tier.highlighted
                    ? "border-primary shadow-lg ring-1 ring-primary/20"
                    : ""
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-bold tracking-tight">
                      ${price}
                    </span>
                    {annual && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${tier.monthlyPrice}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="flex flex-col gap-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                    render={<Link href="/signup" />}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
