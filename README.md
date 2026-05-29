# ShipReady - SaaS Starter Kit

**Ship your SaaS in a weekend, not months.**

A production-ready Next.js SaaS boilerplate with auth, payments, dashboard, and a stunning landing page.

## Features

- Landing Page (Hero, Features, Pricing, Testimonials, FAQ, CTA)
- Authentication (Supabase: email/password, Google, GitHub, password reset)
- Payments (Stripe: checkout, webhooks, customer portal, subscriptions)
- Dashboard (stats, activity, settings, billing management)
- Dark Mode (next-themes, system + manual toggle)
- Fully Responsive (mobile-first Tailwind CSS)
- SEO Optimized (Next.js Metadata, Open Graph)
- Route Protection (middleware-based auth guard)
- Full TypeScript

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS 4 + shadcn/ui
- Supabase Auth
- Stripe
- TypeScript

## Quick Start

1. Clone and install:
   ```bash
   npm install
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Set up Supabase:
   - Create project at supabase.com
   - Run the SQL in the Setup Guide below
   - Enable Google/GitHub OAuth in Auth > Providers

4. Set up Stripe:
   - Create products in Stripe Dashboard
   - Add price IDs to .env.local
   - Create webhook for /api/stripe/webhook

5. Run:
   ```bash
   npm run dev
   ```

## Supabase Setup SQL

```sql
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  name text,
  email text unique not null,
  stripe_customer_id text,
  stripe_subscription_id text,
  plan text default 'starter',
  subscription_status text default 'inactive',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table profiles enable row level security;

create policy "Users can view own profile" on profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles
  for update using (auth.uid() = id);
```

## Project Structure

```
src/
  app/
    (marketing)/     Landing pages
    (auth)/          Login, Signup, Forgot Password
    (dashboard)/     Protected dashboard, settings, billing
    api/stripe/      Checkout, webhook, portal
  components/
    ui/              shadcn/ui base components
    landing/         Hero, Features, Pricing, etc.
    dashboard/       Sidebar, Header, Stats
    shared/          Navbar, Footer, ThemeToggle
  lib/
    supabase/        Client + server helpers
    stripe.ts        Payment helpers
    constants.ts     App config and pricing
  middleware.ts      Auth guard
```

## Customization

- Branding: Edit constants.ts and layout.tsx
- Pricing: Edit constants.ts and pricing.tsx, then match in Stripe
- Colors: Edit globals.css CSS variables (oklch)
- New pages: Add route groups under app/

## License

Commercial template. Purchase a license to use in your projects.
