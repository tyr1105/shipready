import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  // Fetch profile data
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  const userData = {
    name: profile?.full_name || user.user_metadata?.full_name || user.email,
    email: user.email,
    avatar_url:
      profile?.avatar_url || user.user_metadata?.avatar_url || null,
  }

  return (
    <div className="flex min-h-svh">
      <Sidebar user={userData} />
      <div className="flex flex-1 flex-col min-w-0">
        <Header user={userData} />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
