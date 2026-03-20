import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null

export function urlFor(source: object) {
  if (!sanityClient || !projectId) return null
  return imageUrlBuilder({ projectId, dataset }).image(source)
}

// --- Types ---

export interface SanityEvent {
  _id: string
  title: string
  date: string
  location: string
  description: string
  type: string
  category: 'upcoming' | 'past' | 'upcomingDelegation' | 'pastDelegation'
}

export interface SanityGalleryItem {
  _id: string
  title: string
  location: string
  date: string
  type: string
  imageUrl: string | null
  description: string
}

export interface SanityMediaItem {
  _id: string
  title: string
  publishedAt: string
  author: string
  category: 'publication' | 'briefing' | 'knowledge-output'
  excerpt: string
  fileUrl: string | null
  externalUrl: string | null
}

// --- GROQ Queries ---

export async function getEvents(): Promise<SanityEvent[] | null> {
  if (!sanityClient) return null
  try {
    return await sanityClient.fetch(
      `*[_type == "event"] | order(date asc) { _id, title, date, location, description, type, category }`
    )
  } catch {
    return null
  }
}

export async function getGalleryItems(): Promise<SanityGalleryItem[] | null> {
  if (!sanityClient) return null
  try {
    return await sanityClient.fetch(
      `*[_type == "galleryItem"] | order(date desc) { _id, title, location, date, type, description, "imageUrl": image.asset->url }`
    )
  } catch {
    return null
  }
}

export async function getTickerItems(): Promise<string[] | null> {
  if (!sanityClient) return null
  try {
    const result = await sanityClient.fetch(`*[_type == "ticker"][0].items`)
    return Array.isArray(result) && result.length > 0 ? result : null
  } catch {
    return null
  }
}

export async function getMediaItems(): Promise<SanityMediaItem[] | null> {
  if (!sanityClient) return null
  try {
    return await sanityClient.fetch(
      `*[_type == "mediaItem"] | order(publishedAt desc) { _id, title, publishedAt, author, category, excerpt, "fileUrl": file.asset->url, externalUrl }`
    )
  } catch {
    return null
  }
}
