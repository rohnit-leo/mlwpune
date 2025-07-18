import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Master Leather Works - Premium Leather Goods & Custom Bags Since 1973 | Pune",
  description:
    "Master Leather Works - ISO certified manufacturer of premium leather goods, delivery bags, corporate merchandise, tool bags, wallets & custom solutions. Serving clients since 1973 in Pune, India.",
  keywords:
    "leather goods, delivery bags, corporate merchandise, tool bags, wallets, custom bags, leather accessories, Pune, India, ISO certified",
  authors: [{ name: "Master Leather Works" }],
  creator: "Master Leather Works",
  publisher: "Master Leather Works",
  icons: {
    icon: "/images/mlw-logo.png",
    shortcut: "/images/mlw-logo.png",
    apple: "/images/mlw-logo.png",
  },
  openGraph: {
    title: "Master Leather Works - Premium Leather Goods Since 1973",
    description:
      "ISO certified manufacturer of premium leather goods, delivery bags, corporate merchandise & custom solutions in Pune, India.",
    url: "https://masterleatherworks.com",
    siteName: "Master Leather Works",
    images: [
      {
        url: "/images/mlw-logo.png",
        width: 800,
        height: 600,
        alt: "Master Leather Works Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Leather Works - Premium Leather Goods Since 1973",
    description:
      "ISO certified manufacturer of premium leather goods, delivery bags, corporate merchandise & custom solutions in Pune, India.",
    images: ["/images/mlw-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
