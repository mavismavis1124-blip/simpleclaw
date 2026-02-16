import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClawBolt - Deploy Telegram Bots in Seconds',
  description: 'Lightning-fast bot deployment. One command, one bot, zero infrastructure headaches. Bring your API keys, we handle the runtime.',
  keywords: ['Telegram bot', 'AI bot', 'deployment', 'hosting', 'OpenClaw', 'automation'],
  authors: [{ name: 'ClawBolt' }],
  openGraph: {
    title: 'ClawBolt - Deploy Telegram Bots in Seconds',
    description: 'Lightning-fast bot deployment. One command, one bot, zero infrastructure.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className="min-h-screen bg-bg-void text-text-primary antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
