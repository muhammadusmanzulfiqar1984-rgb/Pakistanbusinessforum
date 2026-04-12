import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, rtlLocales } from '@/i18n'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Chatbot from '@/components/Chatbot'
import GlobalAnimations from '@/components/GlobalAnimations'
import '../globals.css'
import '../enhancements.css'
import '../mobile-fixes.css'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isRtl = rtlLocales.includes(locale)
  return {
    title: {
      template: '%s | Pakistan Business Forum®',
      default: 'Pakistan Business Forum® – Strategic Policy & Research Function'
    },
    description: 'Pakistan Business Forum® research and policy analysis function focused on governance, institutions, and economic policy.',
    keywords: ['Pakistan Business Forum', 'Policy', 'Research', 'Think Tank', 'Economic Policy', 'Governance'],
    authors: [{ name: 'Pakistan Business Forum' }],
    openGraph: {
      type: 'website',
      locale: locale,
      siteName: 'Pakistan Business Forum®',
      title: 'Pakistan Business Forum® – Strategic Policy & Research Function',
      description: 'Pakistan Business Forum® research and policy analysis function focused on governance, institutions, and economic policy.',
      images: [
        {
          url: '/images/Pakistan%20business%20forum%201.png',
          width: 800,
          height: 600,
          alt: 'Pakistan Business Forum Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Pakistan Business Forum®',
      description: 'Pakistan Business Forum® research and policy analysis function focused on governance, institutions, and economic policy.',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as (typeof locales)[number])) notFound()

  const messages = await getMessages()
  const isRtl = rtlLocales.includes(locale)

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'rtl' : 'ltr'}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppFloat />
          <Chatbot />
          <GlobalAnimations />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
