import React from 'react'

interface MetaLabelProps {
  children: string
}

export default function MetaLabel({ children }: MetaLabelProps) {
  return <p className="meta-label">{children}</p>
}
