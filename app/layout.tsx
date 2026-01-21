import type { Metadata } from 'next'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Chatbot from '@/components/Chatbot'
import './globals.css'
import './enhancements.css'

export const metadata: Metadata = {
  title: 'Pakistan Business Forum® – Strategic Policy & Research Function',
  description: 'Pakistan Business Forum® research and policy analysis function focused on governance, institutions, and economic policy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body>
        {children}
        <WhatsAppFloat />
        <Chatbot />
      </body>
    </html>
  )
}

