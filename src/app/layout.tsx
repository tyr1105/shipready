import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShipReady – Ship Your SaaS in a Weekend",
  description:
    "A production-ready Next.js boilerplate with auth, payments, dashboard, blog, and more. Ship your SaaS in a weekend, not months.",
  keywords: [
    "Next.js boilerplate",
    "SaaS starter",
    "SaaS template",
    "Next.js starter",
    "ship fast",
    "SaaS boilerplate",
    "production-ready",
    "auth",
    "payments",
    "Stripe",
    "dashboard",
    "blog",
    "landing page",
    "ShipReady",
    "indie hacker",
    "startup",
  ],
  authors: [{ name: "tyr1105" }],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://tyr1105.github.io/shipready/",
  },
  openGraph: {
    type: "website",
    title: "ShipReady – Ship Your SaaS in a Weekend",
    description:
      "Production-ready Next.js boilerplate with auth, payments, dashboard, blog, and more. Launch your SaaS in a weekend, not months.",
    url: "https://tyr1105.github.io/shipready/",
    siteName: "ShipReady",
    locale: "en_US",
    images: [
      {
        url: "https://tyr1105.github.io/shipready/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShipReady – Ship Your SaaS in a Weekend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipReady – Ship Your SaaS in a Weekend",
    description:
      "Production-ready Next.js boilerplate. Auth, payments, dashboard, blog — everything you need to launch fast.",
    images: ["https://tyr1105.github.io/shipready/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
