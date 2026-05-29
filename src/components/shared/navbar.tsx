"use client"

import * as React from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/shared/theme-toggle"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight">
          <span className="inline-flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold">
            SR
          </span>
          ShipReady
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button variant="ghost" size="sm" render={<Link href="/login" />}>
            Log in
          </Button>
          <Button size="sm" render={<Link href="/signup" />}>
            Sign up
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>ShipReady</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4 pt-2">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-2 p-4">
                <SheetClose
                  render={<Button variant="outline" className="w-full" render={<Link href="/login" />} />}
                >
                  Log in
                </SheetClose>
                <SheetClose
                  render={<Button className="w-full" render={<Link href="/signup" />} />}
                >
                  Sign up
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
