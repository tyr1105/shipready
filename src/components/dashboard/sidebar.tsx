"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Settings,
  CreditCard,
  Rocket,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Billing",
    href: "/billing",
    icon: CreditCard,
  },
]

interface SidebarContentProps {
  user?: {
    name?: string | null
    email?: string | null
    avatar_url?: string | null
  } | null
}

function getInitials(name?: string | null) {
  if (!name) return "U"
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

function NavItems() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1 px-3">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <item.icon className="size-4 shrink-0" />
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

function UserSection({ user }: SidebarContentProps) {
  const initials = getInitials(user?.name)

  return (
    <div className="p-4">
      <div className="flex items-center gap-3">
        <Avatar size="default">
          <AvatarImage src={user?.avatar_url || undefined} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">
            {user?.name || "User"}
          </span>
          <span className="text-xs text-muted-foreground truncate max-w-[140px]">
            {user?.email || ""}
          </span>
        </div>
      </div>
    </div>
  )
}

export function SidebarContent({ user }: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-14 items-center gap-2 px-4 border-b border-sidebar-border">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <Rocket className="size-4" />
        </div>
        <span className="font-heading text-base font-semibold">ShipReady</span>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <NavItems />
      </div>
      <Separator />
      <UserSection user={user} />
    </div>
  )
}

// Desktop-only sidebar
export function Sidebar({ user }: SidebarContentProps) {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:border-r border-sidebar-border bg-sidebar h-svh sticky top-0">
      <SidebarContent user={user} />
    </aside>
  )
}
