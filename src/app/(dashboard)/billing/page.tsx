"use client"

import * as React from "react"
import {
  Check,
  CreditCard,
  Download,
  ExternalLink,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PLANS } from "@/lib/stripe"

const billingHistory = [
  {
    id: "INV-001",
    date: "May 1, 2026",
    description: "Pro Plan — Monthly",
    amount: "$29.00",
    status: "paid",
  },
  {
    id: "INV-002",
    date: "Apr 1, 2026",
    description: "Pro Plan — Monthly",
    amount: "$29.00",
    status: "paid",
  },
  {
    id: "INV-003",
    date: "Mar 1, 2026",
    description: "Pro Plan — Monthly",
    amount: "$29.00",
    status: "paid",
  },
  {
    id: "INV-004",
    date: "Feb 1, 2026",
    description: "Starter Plan — Monthly",
    amount: "$0.00",
    status: "paid",
  },
  {
    id: "INV-005",
    date: "Jan 1, 2026",
    description: "Starter Plan — Monthly",
    amount: "$0.00",
    status: "paid",
  },
]

const usageStats = [
  { label: "Projects", used: 3, limit: "Unlimited" },
  { label: "API Calls", used: 12450, limit: "50,000" },
  { label: "Storage", used: "2.4 GB", limit: "10 GB" },
  { label: "Team Members", used: 2, limit: 10 },
]

export default function BillingPage() {
  const [loading, setLoading] = React.useState<string | null>(null)

  async function handleCheckout(priceId: string, planKey: string) {
    setLoading(planKey)
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Checkout error:", error)
    } finally {
      setLoading(null)
    }
  }

  async function handlePortal() {
    setLoading("portal")
    try {
      const res = await fetch("/api/stripe/portal", {
        method: "POST",
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Portal error:", error)
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">
          Manage your subscription and billing information.
        </p>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>
                You are currently on the Pro plan.
              </CardDescription>
            </div>
            <Badge variant="default" className="gap-1">
              <Check className="size-3" />
              Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold">$29</span>
            <span className="text-muted-foreground">/month</span>
          </div>

          {/* Usage Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {usageStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border p-3 space-y-1"
              >
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-lg font-semibold">
                  {typeof stat.used === "number"
                    ? stat.used.toLocaleString()
                    : stat.used}
                </p>
                <p className="text-xs text-muted-foreground">
                  of {stat.limit} used
                </p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() =>
              handleCheckout(PLANS.enterprise.priceId, "enterprise")
            }
            disabled={loading === "enterprise"}
          >
            <Zap className="mr-2 size-4" />
            Upgrade to Enterprise
          </Button>
          <Button
            variant="outline"
            onClick={() => handleCheckout(PLANS.starter.priceId, "downgrade")}
            disabled={loading === "downgrade"}
          >
            Downgrade to Starter
          </Button>
          <Button
            variant="ghost"
            onClick={handlePortal}
            disabled={loading === "portal"}
          >
            <ExternalLink className="mr-2 size-4" />
            Manage Subscription
          </Button>
        </CardFooter>
      </Card>

      {/* Plan Comparison */}
      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(PLANS).map(([key, plan]) => {
          const isCurrentPlan = key === "pro"
          return (
            <Card
              key={key}
              className={isCurrentPlan ? "ring-2 ring-primary" : ""}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {plan.name}
                  {isCurrentPlan && <Badge>Current</Badge>}
                </CardTitle>
                <CardDescription>
                  <span className="text-2xl font-bold">
                    ${plan.price}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isCurrentPlan && plan.priceId && (
                  <Button
                    className="w-full"
                    variant={key === "enterprise" ? "default" : "outline"}
                    onClick={() => handleCheckout(plan.priceId, key)}
                    disabled={loading === key}
                  >
                    {plan.price > 0
                      ? `Upgrade to ${plan.name}`
                      : "Downgrade"}
                  </Button>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Separator />

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>
            Your recent invoices and transactions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-3 pr-4 font-medium">Invoice</th>
                  <th className="pb-3 pr-4 font-medium hidden sm:table-cell">
                    Description
                  </th>
                  <th className="pb-3 pr-4 font-medium">Date</th>
                  <th className="pb-3 pr-4 font-medium text-right">Amount</th>
                  <th className="pb-3 pr-4 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((invoice) => (
                  <tr key={invoice.id} className="border-b last:border-0">
                    <td className="py-3 pr-4 font-medium">{invoice.id}</td>
                    <td className="py-3 pr-4 hidden sm:table-cell text-muted-foreground">
                      {invoice.description}
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground">
                      {invoice.date}
                    </td>
                    <td className="py-3 pr-4 text-right font-medium">
                      {invoice.amount}
                    </td>
                    <td className="py-3 pr-4">
                      <Badge variant="secondary">{invoice.status}</Badge>
                    </td>
                    <td className="py-3 text-right">
                      <Button variant="ghost" size="icon-sm">
                        <Download className="size-3.5" />
                        <span className="sr-only">Download receipt</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
