'use client'

import { useTranslations } from 'next-intl'
import Footer from './Footer'

export default function FooterWithTranslations() {
  const t = useTranslations('footer')
  return <Footer t={t} />
}
