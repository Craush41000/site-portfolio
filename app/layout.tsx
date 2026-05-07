import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Анатолий Пиманов — UX/UI/AI Designer",
  description:
    "Разрабатываю сайты с современным дизайном и максимальной пользой для вашего дела. Дизайн в Figma, сайты под ключ, AI-контент.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon.png",
    shortcut: "/favicon.svg",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
