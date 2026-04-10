// Root layout — next-intl middleware handles locale detection and redirects.
// The real layout lives in app/[locale]/layout.tsx.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}

