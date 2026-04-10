import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // /en routes stay as /, /ur routes become /ur/...
  localeDetection: false,    // never auto-detect from browser Accept-Language header
})

export const config = {
  // Match all pathnames except api routes, _next internals, and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
