"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

const faqs = [
  {
    question: "What's included in ShipReady?",
    answer:
      "ShipReady includes a complete Next.js 16 boilerplate with Supabase authentication, Stripe payments, an admin dashboard, MDX blog, SEO configuration, dark mode, and responsive design. You also get lifetime access to updates.",
  },
  {
    question: "What tech stack does ShipReady use?",
    answer:
      "ShipReady is built with Next.js 16 (App Router), React 19, Tailwind CSS 4, shadcn/ui, Supabase for auth and database, and Stripe for payments. Everything is TypeScript and uses the latest best practices.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes! Pro and Ultimate plans include priority support via email and Discord. Starter plan includes community support. We're happy to help with any questions about setup or customization.",
  },
  {
    question: "Do I get free updates?",
    answer:
      "Absolutely. Starter plan includes 6 months of updates, while Pro and Ultimate plans include lifetime updates. We regularly update dependencies and add new features.",
  },
  {
    question: "What's the refund policy?",
    answer:
      "We offer a 14-day money-back guarantee. If you're not satisfied with ShipReady for any reason, just send us an email and we'll process a full refund — no questions asked.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-muted-foreground">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Everything you need to know about ShipReady.
          </p>
        </div>

        {/* FAQ items */}
        <div className="mx-auto mt-14 max-w-2xl divide-y divide-border">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm font-medium sm:text-base">{question}</span>
        <ChevronDownIcon
          className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-3 text-sm leading-relaxed text-muted-foreground">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
