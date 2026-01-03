import { useState } from 'react'

interface UploadScanData {
  patientId: string
  patientName: string
  dateOfBirth?: string
  clinicalNotes?: string
  symptoms?: string[]
  imageData: string
  imageFileName: string
  imageMimeType: string
}

interface PatientResponse {
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

interface ScanResponse {
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
  uploadedAt: string
  updatedAt: string
}

interface UploadResponse {
  message: string
  patient: PatientResponse
  scan: ScanResponse
}

export function useUploadScan() {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [uploadedScan, setUploadedScan] = useState<ScanResponse | null>(null)
  const [uploadedPatient, setUploadedPatient] = useState<PatientResponse | null>(null)

  const uploadScan = async (data: UploadScanData): Promise<boolean> => {
    setIsUploading(true)
    setError(null)

    try {
      const response = await fetch('/api/scans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to upload scan')
      }

      setUploadedScan(result.scan)
      setUploadedPatient(result.patient)
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      return false
    } finally {
      setIsUploading(false)
    }
  }

  const reset = () => {
    setError(null)
    setUploadedScan(null)
    setUploadedPatient(null)
  }

  return {
    uploadScan,
    isUploading,
    error,
    uploadedScan,
    uploadedPatient,
    reset,
  }
}

export function useScans() {
  const [scans, setScans] = useState<ScanResponse[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [total, setTotal] = useState(0)

  const fetchScans = async (patientId?: string, limit = 50, skip = 0) => {
    setIsLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams({
        limit: limit.toString(),
        skip: skip.toString(),
      })

      if (patientId) {
        params.append('patientId', patientId)
      }

      const response = await fetch(`/api/scans?${params}`)
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch scans')
      }

      setScans(result.scans)
      setTotal(result.total)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    scans,
    total,
    isLoading,
    error,
    fetchScans,
  }
}