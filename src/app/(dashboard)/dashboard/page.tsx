import { Plus, ArrowRight, FileText, UserPlus, CreditCard, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stats } from "@/components/dashboard/stats"

const recentActivity = [
  {
    id: "1",
    user: "Olivia Martin",
    email: "olivia@example.com",
    action: "Purchased Pro Plan",
    amount: "+$29.00",
    date: "2 min ago",
    status: "completed",
  },
  {
    id: "2",
    user: "Jackson Lee",
    email: "jackson@example.com",
    action: "New signup",
    amount: "—",
    date: "5 min ago",
    status: "new",
  },
  {
    id: "3",
    user: "Isabella Nguyen",
    email: "isabella@example.com",
    action: "Upgraded to Enterprise",
    amount: "+$99.00",
    date: "12 min ago",
    status: "completed",
  },
  {
    id: "4",
    user: "William Kim",
    email: "will@example.com",
    action: "Canceled subscription",
    amount: "-$29.00",
    date: "1 hour ago",
    status: "canceled",
  },
  {
    id: "5",
    user: "Sofia Davis",
    email: "sofia@example.com",
    action: "Purchased Pro Plan",
    amount: "+$29.00",
    date: "3 hours ago",
    status: "completed",
  },
]

const quickActions = [
  {
    label: "New Project",
    href: "/dashboard",
    icon: Plus,
    description: "Create a new project",
  },
  {
    label: "View Reports",
    href: "/dashboard",
    icon: FileText,
    description: "Generate analytics reports",
  },
  {
    label: "Invite Team",
    href: "/settings",
    icon: UserPlus,
    description: "Invite team members",
  },
  {
    label: "Upgrade Plan",
    href: "/billing",
    icon: CreditCard,
    description: "Manage your subscription",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s an overview of your account.
        </p>
      </div>

      {/* Stats */}
      <Stats />

      {/* Quick Actions */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <Card key={action.label}>
              <CardContent className="flex items-center gap-4 pt-0">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <action.icon className="size-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{action.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {action.description}
                  </p>
                </div>
                <Link href={action.href}>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest events and transactions on your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-3 pr-4 font-medium">User</th>
                  <th className="pb-3 pr-4 font-medium hidden sm:table-cell">Action</th>
                  <th className="pb-3 pr-4 font-medium text-right">Amount</th>
                  <th className="pb-3 pr-4 font-medium hidden md:table-cell">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((item) => (
                  <tr key={item.id} className="border-b last:border-0">
                    <td className="py-3 pr-4">
                      <div>
                        <p className="font-medium">{item.user}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.email}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 pr-4 hidden sm:table-cell text-muted-foreground">
                      {item.action}
                    </td>
                    <td className="py-3 pr-4 text-right font-medium">
                      {item.amount}
                    </td>
                    <td className="py-3 pr-4 hidden md:table-cell text-muted-foreground">
                      {item.date}
                    </td>
                    <td className="py-3">
                      <Badge
                        variant={
                          item.status === "completed"
                            ? "default"
                            : item.status === "new"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {item.status}
                      </Badge>
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
