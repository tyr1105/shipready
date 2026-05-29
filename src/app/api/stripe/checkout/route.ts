import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { createCheckoutSession } from "@/lib/stripe"

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { priceId } = await request.json()

    if (!priceId) {
      return NextResponse.json(
        { error: "priceId is required" },
        { status: 400 }
      )
    }

    // Get existing Stripe customer ID if available
    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single()

    const session = await createCheckoutSession({
      customerId: profile?.stripe_customer_id || undefined,
      priceId,
      userId: user.id,
      email: user.email,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Checkout session error:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
