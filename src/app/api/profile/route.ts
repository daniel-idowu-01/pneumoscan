import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { authMiddleware, AuthenticatedRequest } from '@/lib/auth-middleware'
import { getDatabase } from '@/lib/mongodb'
import { sanitizeInput } from '@/lib/security'
import { User, userToResponse } from '@/models/User'
import { ObjectId } from 'mongodb'

const updateProfileSchema = z.object({
  firstName: z.string().min(2).max(50).optional(),
  lastName: z.string().min(2).max(50).optional(),
  licenseId: z.string().max(50).optional(),
  hospital: z.string().max(100).optional(),
  department: z.string().max(100).optional(),
  phoneNumber: z.string().max(20).optional(),
})

const updatePreferencesSchema = z.object({
  emailNotifications: z.boolean().optional(),
  highSensitivityMode: z.boolean().optional(),
  marketingCommunications: z.boolean().optional(),
})

async function getUserProfile(request: AuthenticatedRequest) {
  try {
    const userId = request.user?.userId

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User not authenticated' },
        { status: 401 }
      )
    }

    const db = await getDatabase()
    const usersCollection = db.collection<User>('users')

    const user = await usersCollection.findOne({ _id: new ObjectId(userId) })

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      )
    }

    const userData = userToResponse(user)

    return NextResponse.json(
      {
        success: true,
        data: { user: userData },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Get profile error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch profile' },
      { status: 500 }
    )
  }
}

async function updateUserProfile(request: AuthenticatedRequest) {
  try {
    const userId = request.user?.userId

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User not authenticated' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { preferences, ...profileData } = body

    const validatedProfile = updateProfileSchema.parse(profileData)
    
    let validatedPreferences = {}
    if (preferences) {
      validatedPreferences = updatePreferencesSchema.parse(preferences)
    }

    const updates: Partial<User> = {}
    
    if (validatedProfile.firstName) {
      updates.firstName = sanitizeInput(validatedProfile.firstName)
    }
    if (validatedProfile.lastName) {
      updates.lastName = sanitizeInput(validatedProfile.lastName)
    }
    if (validatedProfile.licenseId !== undefined) {
      updates.licenseId = validatedProfile.licenseId ? sanitizeInput(validatedProfile.licenseId) : undefined
    }
    if (validatedProfile.hospital !== undefined) {
      updates.hospital = validatedProfile.hospital ? sanitizeInput(validatedProfile.hospital) : undefined
    }
    if (validatedProfile.department !== undefined) {
      updates.department = validatedProfile.department ? sanitizeInput(validatedProfile.department) : undefined
    }
    if (validatedProfile.phoneNumber !== undefined) {
      updates.phoneNumber = validatedProfile.phoneNumber ? sanitizeInput(validatedProfile.phoneNumber) : undefined
    }

    Object.assign(updates, validatedPreferences)

    updates.updatedAt = new Date()

    const db = await getDatabase()
    const usersCollection = db.collection<User>('users')

    const result = await usersCollection.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { $set: updates },
      { returnDocument: 'after' }
    )

    if (!result) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      )
    }

    const userData = userToResponse(result)

    return NextResponse.json(
      {
        success: true,
        data: { user: userData },
        message: 'Profile updated successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Update profile error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update profile' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  return authMiddleware(request as AuthenticatedRequest, getUserProfile)
}

export async function PATCH(request: NextRequest) {
  return authMiddleware(request as AuthenticatedRequest, updateUserProfile)
}