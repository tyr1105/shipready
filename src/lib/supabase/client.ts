"use client"

import { createBrowserClient as createSupabaseBrowserClient } from "@supabase/ssr"

export function createBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    // Return a mock client during static generation
    return {
      auth: {
        signInWithPassword: async () => ({ error: { message: "Supabase not configured" } }),
        signUp: async () => ({ error: { message: "Supabase not configured" } }),
        signInWithOAuth: async () => ({ error: { message: "Supabase not configured" } }),
        resetPasswordForEmail: async () => ({ error: { message: "Supabase not configured" } }),
        getSession: async () => ({ data: { session: null } }),
        signOut: async () => ({}),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      },
    } as any
  }

  return createSupabaseBrowserClient(url, key)
}
