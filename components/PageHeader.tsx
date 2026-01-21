import React from 'react'

interface PageHeaderProps {
  title: string | React.ReactNode
  lead: string | React.ReactNode
  eyebrow?: string
}

export default function PageHeader({ title, lead, eyebrow }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1 className="page-title">{title}</h1>
        <p className="page-intro">{lead}</p>
      </div>
    </section>
  )
}
