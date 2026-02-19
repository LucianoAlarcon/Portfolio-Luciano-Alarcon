import type { Metadata } from 'next'
import '@/styles/globals.css'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  title: `${siteConfig.name} — Portfolio`,
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
