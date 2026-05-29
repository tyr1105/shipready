export const APP_NAME = "ShipReady"

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

export interface PricingPlan {
  id: string
  name: string
  price: number
  interval: "month" | "year"
  features: string[]
  stripePriceId: string
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 0,
    interval: "month",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Email support",
      "Community access",
    ],
    stripePriceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 29,
    interval: "month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom domain",
      "API access",
      "Team collaboration",
    ],
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || "",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 99,
    interval: "month",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "SSO / SAML",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "Audit logs",
    ],
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID || "",
  },
]
