import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

// Routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/patient-list',
  '/upload-history',
  '/image-upload',
]

// Routes that should redirect to dashboard if already authenticated
const authRoutes = ['/login', '/signup']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const accessToken = request.cookies.get('accessToken')?.value

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))

  // If it's a protected route and no token, redirect to login
  if (isProtectedRoute && !accessToken) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Verify token for protected routes
  if (isProtectedRoute && accessToken) {
    try {
      jwt.verify(accessToken, JWT_SECRET, {
        issuer: 'pneumoscan-api',
        audience: 'pneumoscan-client',
      })
    } catch (error) {
      // Token is invalid or expired
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      loginUrl.searchParams.set('error', 'session-expired')
      
      const response = NextResponse.redirect(loginUrl)
      
      // Clear invalid cookies
      response.cookies.delete('accessToken')
      response.cookies.delete('refreshToken')
      
      return response
    }
  }

  // If authenticated and trying to access auth pages, redirect to dashboard
  if (isAuthRoute && accessToken) {
    try {
      jwt.verify(accessToken, JWT_SECRET, {
        issuer: 'pneumoscan-api',
        audience: 'pneumoscan-client',
      })
      return NextResponse.redirect(new URL('/dashboard', request.url))
    } catch (error) {
      // Invalid token, let them through to login/signup
    }
  }

  // Add security headers
  const response = NextResponse.next()

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // Strict-Transport-Security (HSTS) - only in production
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  }

  // Content Security Policy
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://lh3.googleusercontent.com;
    font-src 'self' https://fonts.gstatic.com data:;
    connect-src 'self' https://api.anthropic.com;
    frame-ancestors 'none';
  `.replace(/\s{2,}/g, ' ').trim()
  
  response.headers.set('Content-Security-Policy', cspHeader)

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}