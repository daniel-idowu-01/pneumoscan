import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import { AuthenticatedRequest, authMiddleware } from '@/lib/auth-middleware'
import { createScanSchema } from '@/lib/validation/scan-validation'
import { 
  generatePatientId, 
  generateScanId, 
  getBase64Size, 
  validateImageSize,
  sanitizePatientId 
} from '@/lib/utils/scan-utils'
import { Patient, patientToResponse } from '@/models/Patient'
import { Scan, scanToResponse } from '@/models/Scan'
import { ObjectId } from 'mongodb'

async function createScan(request: AuthenticatedRequest) {
  try {
    const userId = request.user?.userId

    if (!userId) {
        return NextResponse.json(
          { success: false, error: 'User not authenticated' },
          { status: 401 }
        )
      }

    const body = await request.json()
    const validationResult = createScanSchema.safeParse(body)

    if (!validationResult.success) {
        const formattedErrors = validationResult.error.issues.map(issue => ({
          field: issue.path.join('.'),
          message: issue.message,
        }))
      
        return NextResponse.json(
          { error: 'Validation failed', details: formattedErrors },
          { status: 400 }
        )
      }
      

    const {
      patientId: inputPatientId,
      patientName,
      dateOfBirth,
      clinicalNotes,
      symptoms,
      imageData,
      imageFileName,
      imageMimeType,
    } = validationResult.data

    const imageSize = getBase64Size(imageData)
    if (!validateImageSize(imageSize)) {
      return NextResponse.json(
        { error: 'Image size exceeds 10MB limit' },
        { status: 400 }
      )
    }

    const db = await getDatabase()
    const patientsCollection = db.collection('patients')
    const scansCollection = db.collection('scans')
    const usersCollection = db.collection('users')

    const doctor = await usersCollection.findOne({ _id: new ObjectId(userId) })
    if (!doctor) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      )
    }

    const doctorName = `${doctor.firstName} ${doctor.lastName}`

    const sanitizedPatientId = sanitizePatientId(inputPatientId)

    let patient = await patientsCollection.findOne({
      patientId: sanitizedPatientId,
      doctorId: new ObjectId(userId),
    })

    const now = new Date()

    if (!patient) {
      const newPatient: Patient = {
        patientId: sanitizedPatientId,
        fullName: patientName.trim(),
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
        clinicalNotes: clinicalNotes?.trim(),
        doctorId: new ObjectId(userId),
        doctorEmail: doctor.email,
        createdAt: now,
        updatedAt: now,
      }

      const patientResult = await patientsCollection.insertOne(newPatient)
      patient = { ...newPatient, _id: patientResult.insertedId }
    } else {
      const updateData: any = {
        updatedAt: now,
      }

      if (patientName) updateData.fullName = patientName.trim()
      if (dateOfBirth) updateData.dateOfBirth = new Date(dateOfBirth)
      if (clinicalNotes) updateData.clinicalNotes = clinicalNotes.trim()

      await patientsCollection.updateOne(
        { _id: patient._id },
        { $set: updateData }
      )

      patient = await patientsCollection.findOne({ _id: patient._id })
    }

    const scanId = generateScanId()

    const newScan: Scan = {
      scanId,
      patientId: sanitizedPatientId,
      patientName: patientName.trim(),
      doctorId: new ObjectId(userId),
      doctorName,
      doctorEmail: doctor.email,
      imageUrl: imageData,
      imageFileName,
      imageSize,
      imageMimeType,
      clinicalNotes: clinicalNotes?.trim(),
      symptoms: symptoms || [],
      analysisStatus: 'pending',
      uploadedAt: now,
      updatedAt: now,
    }

    const scanResult = await scansCollection.insertOne(newScan)
    const createdScan = { ...newScan, _id: scanResult.insertedId }

    return NextResponse.json(
      {
        message: 'Scan uploaded successfully',
        patient: patientToResponse(patient as Patient),
        scan: scanToResponse(createdScan),
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error uploading scan:', error)
    return NextResponse.json(
      { error: 'Failed to upload scan' },
      { status: 500 }
    )
  }
}

async function getAllScans(request: AuthenticatedRequest) {
  try {
    const userId = request.user?.userId

    const { searchParams } = new URL(request.url)
    const patientId = searchParams.get('patientId')
    const limit = parseInt(searchParams.get('limit') || '50')
    const skip = parseInt(searchParams.get('skip') || '0')

    const db = await getDatabase()
    const scansCollection = db.collection('scans')

    const query: any = { doctorId: new ObjectId(userId) }
    if (patientId) {
      query.patientId = patientId
    }

    const scans = await scansCollection
      .find(query)
      .sort({ uploadedAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray()

    const total = await scansCollection.countDocuments(query)

    return NextResponse.json({
      scans: scans.map((scan) => scanToResponse(scan as Scan)),
      total,
      limit,
      skip,
    })
  } catch (error) {
    console.error('Error fetching scans:', error)
    return NextResponse.json(
      { error: 'Failed to fetch scans' },
      { status: 500 }
    )
  }
}


export async function GET(request: NextRequest) {
    return authMiddleware(request as AuthenticatedRequest, getAllScans)
  }
  
  export async function POST(request: NextRequest) {
    return authMiddleware(request as AuthenticatedRequest, createScan)
  }