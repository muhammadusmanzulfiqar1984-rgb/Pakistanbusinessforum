import React from 'react'

interface CardGridProps {
  children: React.ReactNode
}

export function CardGrid({ children }: CardGridProps) {
  return <div className="card-grid">{children}</div>
}

interface CardProps {
  title: string
  description: string
  action?: React.ReactNode
}

export function Card({ title, description, action }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {action ? <div className="small-text">{action}</div> : null}
    </div>
  )
}
