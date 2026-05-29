import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="text-xl font-bold">ShipReady</span>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="text-muted-foreground max-w-md">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Button render={<Link href="/" />}>Go home</Button>
        <Button variant="outline" render={<Link href="/dashboard" />}>
          Dashboard
        </Button>
      </div>
    </div>
  )
}
