import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'SPECTRA 2K26 — International Technical Symposium',
  description:
    'SPECTRA 2K26 — International Technical Symposium organized by the Department of Electronics and Communication Engineering, E.G.S. Pillay Engineering College.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
