import { ObjectId } from 'mongodb'

export interface Patient {
  _id?: ObjectId
  patientId: string // ("PID-12345")
  fullName: string
  dateOfBirth?: Date
  clinicalNotes?: string
  
  // Link to doctor/radiologist
  doctorId: ObjectId
  doctorEmail: string
  
  createdAt: Date
  updatedAt: Date
}

export interface PatientResponse {
  id: string
  patientId: string
  fullName: string
  dateOfBirth?: string
  clinicalNotes?: string
  doctorId: string
  doctorEmail: string
  createdAt: string
  updatedAt: string
}

export function patientToResponse(patient: Patient): PatientResponse {
  return {
    id: patient._id?.toString() || '',
    patientId: patient.patientId,
    fullName: patient.fullName,
    dateOfBirth: patient.dateOfBirth?.toISOString(),
    clinicalNotes: patient.clinicalNotes,
    doctorId: patient.doctorId.toString(),
    doctorEmail: patient.doctorEmail,
    createdAt: patient.createdAt.toISOString(),
    updatedAt: patient.updatedAt.toISOString(),
  }
}

export async function createPatientIndexes(db: any) {
  const patients = db.collection('patients')
  await patients.createIndex({ patientId: 1 }, { unique: true })
  await patients.createIndex({ doctorId: 1 })
  await patients.createIndex({ createdAt: -1 })
}