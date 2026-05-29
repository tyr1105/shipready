import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--border)_1px,transparent_1px)] bg-[length:24px_24px] opacity-60"
      />
      {/* Radial fade overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 sm:pt-32 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1 text-xs font-medium text-muted-foreground">
            🚀 Launch faster with ShipReady
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Ship Your SaaS{" "}
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-violet-400 dark:to-purple-400">
              in a Weekend
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg md:text-xl">
            A production-ready Next.js boilerplate with auth, payments, dashboard, blog, and more. 
            Stop building from scratch and start shipping.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" render={<Link href="/signup" />} className="w-full sm:w-auto">
              Get Started
              <ArrowRightIcon />
            </Button>
            <Button variant="outline" size="lg" render={<Link href="/dashboard" />} className="w-full sm:w-auto">
              View Demo
            </Button>
          </div>

          {/* Social proof hint */}
          <p className="mt-8 text-xs text-muted-foreground">
            No credit card required · One-time purchase · Lifetime updates
          </p>
        </div>
      </div>
    </section>
  )
}
