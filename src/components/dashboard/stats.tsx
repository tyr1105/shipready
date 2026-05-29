import {
  DollarSign,
  Users,
  TrendingUp,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ElementType
}

function StatCard({ title, value, change, trend, icon: Icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex size-8 items-center justify-center rounded-lg bg-muted">
          <Icon className="size-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="mt-1 flex items-center gap-1 text-xs">
          {trend === "up" ? (
            <ArrowUpRight className="size-3 text-emerald-600" />
          ) : (
            <ArrowDownRight className="size-3 text-red-500" />
          )}
          <span className={trend === "up" ? "text-emerald-600" : "text-red-500"}>
            {change}
          </span>
          <span className="text-muted-foreground">from last month</span>
        </div>
      </CardContent>
    </Card>
  )
}

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up" as const,
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180",
    trend: "up" as const,
    icon: Users,
  },
  {
    title: "Conversion Rate",
    value: "12.5%",
    change: "-2.1%",
    trend: "down" as const,
    icon: TrendingUp,
  },
  {
    title: "Monthly Recurring Revenue",
    value: "$8,450.00",
    change: "+10.5%",
    trend: "up" as const,
    icon: BarChart3,
  },
]

export function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  )
}
