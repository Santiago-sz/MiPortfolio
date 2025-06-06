import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Santiago Suarez | Cybersecurity",
  description: "Portfolio profesional de Santiago Suarez, especialista en pentesting y ciberseguridad",
  icons: [
    {
      rel: 'icon',
      url: '/favicon.png',
      type: 'image/png',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.png',
      type: 'image/png',
    }
  ],
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
