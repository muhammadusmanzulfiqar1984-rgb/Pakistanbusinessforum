import React from 'react'

interface SectionProps {
  title: string | React.ReactNode
  description?: string
  children: React.ReactNode
  id?: string
}

export default function Section({ title, description, children, id }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-text">{description}</p> : null}
        <div className="section-content">{children}</div>
      </div>
    </section>
  )
}
