import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers"
import { getStripe } from "@/lib/stripe"
import { createClient } from "@/lib/supabase/server"

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get("stripe-signature")

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    )
  }

  let event: any

  try {
    event = getStripe().webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    )
  }

  const supabase = await createClient()

  try {
    switch (event.type as string) {
      case "checkout.session.completed": {
        const session = event.data.object as any
        const userId = session.client_reference_id
        const customerId = session.customer as string
        const subscriptionId = session.subscription as string

        if (userId) {
          await supabase
            .from("profiles")
            .update({
              stripe_customer_id: customerId,
              stripe_subscription_id: subscriptionId,
              subscription_status: "active",
              updated_at: new Date().toISOString(),
            })
            .eq("id", userId)
        }
        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as any
        const customerId = subscription.customer as string

        const { data: profile } = await supabase
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customerId)
          .single()

        if (profile) {
          await supabase
            .from("profiles")
            .update({
              subscription_status: subscription.status,
              updated_at: new Date().toISOString(),
            })
            .eq("id", profile.id)
        }
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as any
        const customerId = subscription.customer as string

        const { data: profile } = await supabase
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customerId)
          .single()

        if (profile) {
          await supabase
            .from("profiles")
            .update({
              subscription_status: "canceled",
              stripe_subscription_id: null,
              updated_at: new Date().toISOString(),
            })
            .eq("id", profile.id)
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type as string}`)
    }
  } catch (error) {
    console.error("Webhook handler error:", error)
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    )
  }

  return NextResponse.json({ received: true })
}
