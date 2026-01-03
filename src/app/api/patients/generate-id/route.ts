import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import { authMiddleware } from '@/lib/auth-middleware'
import { generatePatientId } from '@/lib/utils/scan-utils'
import { AuthenticatedRequest } from '@/lib/auth-middleware'

async function generatePatientID(request: AuthenticatedRequest) {
  try {

    const userId = request.user?.userId

    const db = await getDatabase()
    const patientsCollection = db.collection('patients')

    let patientId = generatePatientId()
    let isUnique = false
    let attempts = 0
    const maxAttempts = 10

    while (!isUnique && attempts < maxAttempts) {
      const existing = await patientsCollection.findOne({
        patientId,
        doctorId: userId,
      })

      if (!existing) {
        isUnique = true
      } else {
        patientId = generatePatientId()
        attempts++
      }
    }

    if (!isUnique) {
      return NextResponse.json(
        { error: 'Failed to generate unique patient ID. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      patientId,
      generated: true,
    })
  } catch (error) {
    console.error('Error generating patient ID:', error)
    return NextResponse.json(
      { error: 'Failed to generate patient ID' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
    return authMiddleware(request as AuthenticatedRequest, generatePatientID)
}