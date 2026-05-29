import Stripe from "stripe"

// Lazy-initialize Stripe to avoid build-time errors when env vars are missing
let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY is not set")
    }
    _stripe = new Stripe(key, {
      apiVersion: "2026-05-27.dahlia",
    })
  }
  return _stripe
}

export const PLANS = {
  starter: {
    name: "Starter",
    priceId: "",
    price: 0,
  },
  pro: {
    name: "Pro",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || "",
    price: 29,
  },
  enterprise: {
    name: "Enterprise",
    priceId: process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID || "",
    price: 99,
  },
} as const

export type PlanType = keyof typeof PLANS

export async function createCheckoutSession({
  customerId,
  priceId,
  userId,
  email,
}: {
  customerId?: string
  priceId: string
  userId: string
  email?: string
}) {
  const client = getStripe()
  const session = await client.checkout.sessions.create({
    customer: customerId || undefined,
    customer_email: customerId ? undefined : email,
    client_reference_id: userId,
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?upgraded=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing?canceled=true`,
  })

  return session
}

export async function createPortalSession({
  customerId,
}: {
  customerId: string
}) {
  const client = getStripe()
  const session = await client.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing`,
  })

  return session
}

export async function getSubscription(subscriptionId: string) {
  return getStripe().subscriptions.retrieve(subscriptionId)
}
