import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'RIPU 2026',
  description: 'Join RIPU 2026 in Sousse, Tunisia. An international conference on research and innovation in pedagogy and universities.',
  generator: 'v0.app',
  openGraph: {
    title: 'RIPU 2026',
    description: 'Join RIPU 2026 in Sousse, Tunisia. An international conference on research and innovation in pedagogy and universities.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    // Shortcut/fallback for older browsers and tools that look for /favicon.ico
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body suppressHydrationWarning={true} className="font-sans antialiased bg-white text-black">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
