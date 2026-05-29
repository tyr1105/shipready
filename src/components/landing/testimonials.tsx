import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder of MetricsHub",
    initials: "SC",
    quote:
      "ShipReady saved me at least two months of development time. I launched my SaaS in under a week with auth and payments already wired up.",
  },
  {
    name: "Marcus Johnson",
    role: "Indie Hacker",
    initials: "MJ",
    quote:
      "The code quality is outstanding. Everything is well-structured and easy to customize. It's the best boilerplate I've purchased.",
  },
  {
    name: "Emily Park",
    role: "CTO at LaunchPad",
    initials: "EP",
    quote:
      "We evaluated several Next.js starters and ShipReady was the clear winner. The Supabase and Stripe integrations just work out of the box.",
  },
]

export function Testimonials() {
  return (
    <section className="border-y border-border/50 bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-muted-foreground">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by builders
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
