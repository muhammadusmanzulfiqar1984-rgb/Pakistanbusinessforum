import { MetadataRoute } from 'next'
import { locales } from '../i18n'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.pakistanbusinessforum.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/practice-areas',
    '/media',
    '/events',
    '/contact'
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    for (const locale of locales) {
      const isDefault = locale === 'en'
      const path = isDefault ? route : `/${locale}${route}`
      
      sitemapEntries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    }
  }

  return sitemapEntries
}
