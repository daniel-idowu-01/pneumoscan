import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export async function GET(request: NextRequest) {
  try {
    const accessToken =
      request.cookies.get('accessToken')?.value ||
      request.headers.get('authorization')?.replace('Bearer ', '')

    if (!accessToken) {
      return NextResponse.json(
        { success: false, authenticated: false },
        { status: 401 }
      )
    }

    const decoded = jwt.verify(accessToken, JWT_SECRET, {
      issuer: 'pneumoscan-api',
      audience: 'pneumoscan-client',
    }) as any

    return NextResponse.json(
      {
        success: true,
        authenticated: true,
        user: {
          userId: decoded.userId,
          email: decoded.email,
          role: decoded.role,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return NextResponse.json(
        { success: false, authenticated: false, error: 'Invalid or expired token' },
        { status: 401 }
      )
    }

    console.error('Verification error:', error)
    return NextResponse.json(
      { success: false, authenticated: false, error: 'An error occurred during verification' },
      { status: 500 }
    )
  }
}