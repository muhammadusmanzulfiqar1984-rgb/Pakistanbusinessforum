import { getTickerItems } from '@/lib/sanity'
import { NextResponse } from 'next/server'

export const revalidate = 3600

export async function GET() {
  const items = await getTickerItems()
  return NextResponse.json({ items })
}
