import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { createPortalSession } from "@/lib/stripe"

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single()

    if (!profile?.stripe_customer_id) {
      return NextResponse.json(
        { error: "No Stripe customer found" },
        { status: 400 }
      )
    }

    const session = await createPortalSession({
      customerId: profile.stripe_customer_id,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Portal session error:", error)
    return NextResponse.json(
      { error: "Failed to create portal session" },
      { status: 500 }
    )
  }
}
