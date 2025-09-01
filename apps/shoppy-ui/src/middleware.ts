import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This array contains the paths that don't require authentication
const publicPaths = ['/auth/login', '/auth/signup']

// Helper function to check if the path is public
function isPublicPath(path: string) {
  return publicPaths.some(
    (publicPath) => path.startsWith(publicPath)
  )
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  console.log('Middleware executing for path:', pathname)

  const authCookie = request.cookies.get('Authentication')
  console.log('Authentication cookie present:', !!authCookie)

  // Allow access to public paths
  if (isPublicPath(pathname)) {
    console.log('Public path detected, allowing access')
    return NextResponse.next()
  }

  // Check for authentication
  if (!authCookie) {
    console.log('No authentication cookie found, redirecting to login')
    const loginUrl = new URL('/auth/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  console.log('User authenticated, allowing access')
  return NextResponse.next()
}

// Configure the paths that trigger the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
