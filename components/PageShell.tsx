import React from 'react'

interface PageShellProps {
  children: React.ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return <div className="page-shell">{children}</div>
}
