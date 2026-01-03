import { ObjectId } from 'mongodb'

export interface Scan {
  _id?: ObjectId
  scanId: string // ( "SCAN-12345-20250103")
  
  patientId: string // reference to Patient.patientId
  patientName: string
  
  doctorId: ObjectId 
  doctorName: string
  doctorEmail: string
  
  imageUrl: string // S3/Cloud storage URL or base64
  imageFileName: string
  imageSize: number // in bytes
  imageMimeType: string
  
  clinicalNotes?: string
  symptoms?: string[]
  
  analysisStatus: 'pending' | 'processing' | 'completed' | 'failed'
  aiPrediction?: {
    hasPneumonia: boolean
    confidence: number
    severity?: 'mild' | 'moderate' | 'severe'
    findings?: string[]
    timestamp?: Date
  }
  
  uploadedAt: Date
  analyzedAt?: Date
  updatedAt: Date
}

export interface ScanResponse {
  id: string
  scanId: string
  patientId: string
  patientName: string
  doctorId: string
  doctorName: string
  doctorEmail: string
  imageUrl: string
  imageFileName: string
  imageSize: number
  imageMimeType: string
  clinicalNotes?: string
  symptoms?: string[]
  analysisStatus: string
  aiPrediction?: {
    hasPneumonia: boolean
    confidence: number
    severity?: string
    findings?: string[]
    timestamp?: string
  }
  uploadedAt: string
  analyzedAt?: string
  updatedAt: string
}

export function scanToResponse(scan: Scan): ScanResponse {
  return {
    id: scan._id?.toString() || '',
    scanId: scan.scanId,
    patientId: scan.patientId,
    patientName: scan.patientName,
    doctorId: scan.doctorId.toString(),
    doctorName: scan.doctorName,
    doctorEmail: scan.doctorEmail,
    imageUrl: scan.imageUrl,
    imageFileName: scan.imageFileName,
    imageSize: scan.imageSize,
    imageMimeType: scan.imageMimeType,
    clinicalNotes: scan.clinicalNotes,
    symptoms: scan.symptoms,
    analysisStatus: scan.analysisStatus,
    aiPrediction: scan.aiPrediction ? {
      hasPneumonia: scan.aiPrediction.hasPneumonia,
      confidence: scan.aiPrediction.confidence,
      severity: scan.aiPrediction.severity,
      findings: scan.aiPrediction.findings,
      timestamp: scan.aiPrediction.timestamp?.toISOString(),
    } : undefined,
    uploadedAt: scan.uploadedAt.toISOString(),
    analyzedAt: scan.analyzedAt?.toISOString(),
    updatedAt: scan.updatedAt.toISOString(),
  }
}

export async function createScanIndexes(db: any) {
  const scans = db.collection('scans')
  await scans.createIndex({ scanId: 1 }, { unique: true })
  await scans.createIndex({ patientId: 1 })
  await scans.createIndex({ doctorId: 1 })
  await scans.createIndex({ uploadedAt: -1 })
  await scans.createIndex({ analysisStatus: 1 })
}