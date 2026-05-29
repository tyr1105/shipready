import {
  ShieldCheckIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  FileTextIcon,
  SearchIcon,
  MoonIcon,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Authentication",
    description:
      "Secure auth powered by Supabase. Email, OAuth, and magic links out of the box with row-level security.",
  },
  {
    icon: CreditCardIcon,
    title: "Payments",
    description:
      "Stripe integration with subscriptions, one-time payments, webhooks, and customer portal ready to go.",
  },
  {
    icon: LayoutDashboardIcon,
    title: "Dashboard",
    description:
      "Beautiful admin dashboard with user settings, analytics, and a clean layout your users will love.",
  },
  {
    icon: FileTextIcon,
    title: "Blog & CMS",
    description:
      "MDX-powered blog with syntax highlighting, draft mode, and SEO-friendly slug-based routing.",
  },
  {
    icon: SearchIcon,
    title: "SEO Optimized",
    description:
      "Perfect Lighthouse scores. Metadata API, sitemap, robots.txt, and Open Graph images configured.",
  },
  {
    icon: MoonIcon,
    title: "Dark Mode",
    description:
      "System-aware dark mode with smooth transitions. Built with next-themes and CSS variables.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-muted-foreground">Everything you need</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Packed with features
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            ShipReady includes everything you need to launch your SaaS. No more stitching together tutorials.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
