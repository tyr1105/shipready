"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, LogOut, Settings, Menu } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SidebarContent } from "@/components/dashboard/sidebar"

interface HeaderProps {
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

export function Header({ user }: HeaderProps) {
  const pathname = usePathname()
  const initials = getInitials(user?.name)

  const breadcrumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
    )

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 md:px-6">
      {/* Mobile sidebar trigger */}
      <Sheet>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon" className="md:hidden" />
          }
        >
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <SidebarContent user={user} />
        </SheetContent>
      </Sheet>

      {/* Breadcrumb */}
      <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
        <span>Home</span>
        {breadcrumbs.map((segment, i) => (
          <React.Fragment key={i}>
            <span className="mx-1">/</span>
            <span
              className={
                i === breadcrumbs.length - 1
                  ? "text-foreground font-medium"
                  : ""
              }
            >
              {segment}
            </span>
          </React.Fragment>
        ))}
      </nav>

      {/* Search */}
      <div className="ml-auto flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 pl-8"
            readOnly
          />
        </div>

        {/* User dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" className="relative h-8 w-8 rounded-full" />
            }
          >
            <Avatar size="sm">
              <AvatarImage src={user?.avatar_url || undefined} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{user?.name || "User"}</p>
                <p className="text-xs text-muted-foreground">
                  {user?.email || ""}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem render={<Link href="/settings" />}>
              <Settings className="mr-2 size-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <form
                action="/api/auth/signout"
                method="POST"
                className="flex w-full"
              >
                <button type="submit" className="flex w-full items-center gap-2">
                  <LogOut className="size-4" />
                  Log out
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
