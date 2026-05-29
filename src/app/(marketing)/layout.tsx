import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
