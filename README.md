<div align="center">

# ⚡ ShipReady

### Ship your SaaS in a weekend, not months.

A production-ready **Next.js SaaS starter kit** with authentication, Stripe payments, dashboard, and a stunning landing page. Stop reinventing the wheel.

[![Buy on Gumroad](https://img.shields.io/badge/Buy%20on-Gumroad-pink?style=for-the-badge)](https://zeoland.gumroad.com/l/shipready)
[![GitHub stars](https://img.shields.io/github/stars/tyr1105/shipready?style=for-the-badge)](https://github.com/tyr1105/shipready)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge)](https://typescriptlang.org)

</div>

---

## 🚀 What You Get

ShipReady is everything you need to launch a SaaS product — **auth, payments, dashboard, landing page** — wired up and ready to customize.

### Landing Page
A conversion-optimized marketing site with Hero, Features, Pricing, Testimonials, FAQ, and CTA sections. Just swap the copy and ship.

### Authentication
Supabase-powered auth with email/password, Google, GitHub OAuth, and password reset. Route protection via middleware — no unauthenticated dashboard access.

### Payments
Stripe integration with checkout sessions, webhook handling, customer portal, and subscription management. Your billing page, done.

### Dashboard
Stats overview, activity feed, settings, and billing management. Protected routes, clean layout, ready for your data.

### Dark Mode
System preference detection + manual toggle. Every component looks great in both themes.

---

## ✨ Features

| Feature | Implementation |
|---|---|
| **Landing Page** | Hero, Features, Pricing, Testimonials, FAQ, CTA |
| **Auth** | Supabase: email/password, Google, GitHub, password reset |
| **Payments** | Stripe: checkout, webhooks, customer portal, subscriptions |
| **Dashboard** | Stats, activity, settings, billing management |
| **Dark Mode** | next-themes, system + manual toggle |
| **Responsive** | Mobile-first Tailwind CSS |
| **SEO** | Next.js Metadata, Open Graph |
| **Route Protection** | Middleware-based auth guard |
| **TypeScript** | Full type safety throughout |

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | App Router, SSR, API routes |
| **Tailwind CSS 4** | Utility-first styling |
| **shadcn/ui** | Beautiful, accessible components |
| **Supabase** | Authentication & user management |
| **Stripe** | Payments & subscriptions |
| **TypeScript** | Type safety |

---

## ⚡ Quick Start

### 1. Clone and install

```bash
git clone https://github.com/tyr1105/shipready.git
cd shipready
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

### 3. Set up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Run the SQL below in the SQL Editor
3. Enable Google/GitHub OAuth in **Auth > Providers**

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

### 4. Set up Stripe

1. Create products in [Stripe Dashboard](https://dashboard.stripe.com)
2. Add price IDs to `.env.local`
3. Create a webhook endpoint for `/api/stripe/webhook`

### 5. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start customizing.

---

## 📁 Project Structure

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

---

## 🎨 Customization

- **Branding:** Edit `constants.ts` and `layout.tsx`
- **Pricing plans:** Update `constants.ts` pricing array
- **Landing page copy:** Edit components in `components/landing/`
- **Dashboard layout:** Modify `components/dashboard/`
- **Colors & theme:** Tailwind CSS config + CSS variables

---

## 💰 Pricing & License

Get ShipReady on Gumroad for a one-time payment. Use it for unlimited personal projects.

[**Get ShipReady →**](https://zeoland.gumroad.com/l/shipready)

---

<div align="center">

**Ship faster. Ship smarter. ShipReady.**

Also check out: [TailDash](https://github.com/tyr1105/taildash) — Tailwind CSS Dashboard UI Kit

</div>
