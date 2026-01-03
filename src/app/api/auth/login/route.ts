import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { rateLimit } from '@/lib/rate-limit'
import { sanitizeInput } from '@/lib/security'
import { getDatabase } from '@/lib/mongodb'
import { User, userToResponse } from '@/models/User'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
})

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
})

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    const rateLimitResult = await limiter.check(ip, 5)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { success: false, error: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const validatedData = loginSchema.parse(body)
    const email = sanitizeInput(validatedData.email.toLowerCase())

    const db = await getDatabase()
    const usersCollection = db.collection<User>('users')
    const user = await usersCollection.findOne({ email })

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    const isValidPassword = await bcrypt.compare(validatedData.password, user.password)

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    const accessTokenExpiry = validatedData.rememberMe ? '30d' : '1h'
    const refreshTokenExpiry = validatedData.rememberMe ? '90d' : '7d'

    const accessToken = jwt.sign(
      { userId: user._id!.toString(), email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: accessTokenExpiry, issuer: 'pneumoscan-api', audience: 'pneumoscan-client' }
    )

    const refreshToken = jwt.sign(
      { userId: user._id!.toString(), type: 'refresh' },
      JWT_REFRESH_SECRET,
      { expiresIn: refreshTokenExpiry, issuer: 'pneumoscan-api', audience: 'pneumoscan-client' }
    )

    await usersCollection.updateOne(
      { _id: user._id },
      { $push: { refreshTokens: refreshToken }, $set: { updatedAt: new Date() } }
    )

    const userData = userToResponse(user)

    const response = NextResponse.json(
      { success: true, data: { user: userData, accessToken } },
      { status: 200 }
    )

    response.cookies.set({
      name: 'accessToken',
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: validatedData.rememberMe ? 30 * 24 * 60 * 60 : 60 * 60,
      path: '/',
    })

    response.cookies.set({
      name: 'refreshToken',
      value: refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: validatedData.rememberMe ? 90 * 24 * 60 * 60 : 7 * 24 * 60 * 60,
      path: '/',
    })

    return response
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, error: 'An error occurred during login' },
      { status: 500 }
    )
  }
}