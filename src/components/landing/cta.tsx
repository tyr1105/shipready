import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-purple-600/10 dark:from-blue-600/20 dark:via-violet-600/20 dark:to-purple-600/20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_80%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to ship?
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Join hundreds of founders who have already launched their SaaS products with ShipReady. 
            Your next project is one weekend away.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" render={<Link href="/signup" />} className="w-full sm:w-auto">
              Get Started
              <ArrowRightIcon />
            </Button>
            <Button variant="outline" size="lg" render={<Link href="/dashboard" />} className="w-full sm:w-auto">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
