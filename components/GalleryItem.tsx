'use client'

import Image from 'next/image'
import { useState } from 'react'

export interface GalleryEventItem {
  title: string
  location: string
  date: string
  type: string
  image: string
  description: string
}

export default function GalleryItem({ event }: { event: GalleryEventItem }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="gallery-item">
      <div className="gallery-image-container">
        <div className="event-badge">{event.type}</div>
        {!imageError && event.image ? (
          <Image
            src={event.image}
            alt={`${event.title} - ${event.location}`}
            width={400}
            height={300}
            className="gallery-image"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="gallery-image-placeholder">
            <div className="image-placeholder-content">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#0f2463" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <p className="location-text">{event.location}</p>
            </div>
          </div>
        )}
      </div>
      <div className="gallery-item-info">
        <h3>{event.title}</h3>
        <p className="gallery-date">{event.date}</p>
        <p className="gallery-description">{event.description}</p>
      </div>
    </div>
  )
}
