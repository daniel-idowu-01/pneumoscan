import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { rateLimit } from '@/lib/rate-limit'
import { sanitizeInput } from '@/lib/security'
import { getDatabase } from '@/lib/mongodb'
import { User, userToResponse } from '@/models/User'
import { ObjectId } from 'mongodb'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

// Password validation regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/

// Validation schema
const signupSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      passwordRegex,
      'Password must contain uppercase, lowercase, number, and special character'
    ),
})

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
})

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    const rateLimitResult = await limiter.check(ip, 3) // 3 signups per minute

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many signup attempts. Please try again later.',
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = signupSchema.parse(body)

    // Sanitize inputs
    const email = sanitizeInput(validatedData.email.toLowerCase())
    const firstName = sanitizeInput(validatedData.firstName)
    const lastName = sanitizeInput(validatedData.lastName)

    // Connect to database
    const db = await getDatabase()
    const usersCollection = db.collection<User>('users')

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email })

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error: 'An account with this email already exists',
        },
        { status: 409 }
      )
    }

    // Hash password
    const saltRounds = 12
    const hashedPassword = await bcrypt.hash(validatedData.password, saltRounds)

    // Create user
    const newUser: User = {
      email,
      firstName,
      lastName,
      password: hashedPassword,
      role: 'radiologist',
      licenseId: `RAD-${Date.now()}`,
      refreshTokens: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await usersCollection.insertOne(newUser)
    newUser._id = result.insertedId

    // Generate tokens
    const accessToken = jwt.sign(
      {
        userId: newUser._id.toString(),
        email: newUser.email,
        role: newUser.role,
      },
      JWT_SECRET,
      {
        expiresIn: '1h',
        issuer: 'pneumoscan-api',
        audience: 'pneumoscan-client',
      }
    )

    // Prepare user data
    const userData = userToResponse(newUser)

    // Create response
    const response = NextResponse.json(
      {
        success: true,
        data: {
          user: userData,
          accessToken,
        },
        message: 'Account created successfully',
      },
      { status: 201 }
    )

    // Set HTTP-only cookie
    response.cookies.set({
      name: 'accessToken',
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    })

    return response
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          /* details: error.errors, */
        },
        { status: 400 }
      )
    }

    console.error('Signup error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'An error occurred during signup',
      },
      { status: 500 }
    )
  }
}