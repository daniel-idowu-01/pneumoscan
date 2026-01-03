import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import { AuthenticatedRequest, authMiddleware } from '@/lib/auth-middleware'
import { Patient, patientToResponse } from '@/models/Patient'
import { ObjectId } from 'mongodb'

async function searchPatients(request: AuthenticatedRequest) {
  try {

    const userId = request.user?.userId

    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const limit = parseInt(searchParams.get('limit') || '10')

    if (!query || query.trim().length < 2) {
      return NextResponse.json(
        { error: 'Search query must be at least 2 characters' },
        { status: 400 }
      )
    }

    const db = await getDatabase()
    const patientsCollection = db.collection('patients')

    const searchRegex = new RegExp(query.trim(), 'i')
    
    const patients = await patientsCollection
      .find({
        doctorId: new ObjectId(userId),
        $or: [
          { patientId: searchRegex },
          { fullName: searchRegex },
        ],
      })
      .sort({ updatedAt: -1 })
      .limit(limit)
      .toArray()

    return NextResponse.json({
      patients: patients.map((patient) => patientToResponse(patient as Patient)),
      total: patients.length,
    })
  } catch (error) {
    console.error('Error searching patients:', error)
    return NextResponse.json(
      { error: 'Failed to search patients' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
    return authMiddleware(request as AuthenticatedRequest, searchPatients)
}