import { useState, useEffect, useCallback } from 'react'

interface PatientSearchResult {
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

export function usePatientSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<PatientSearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (searchQuery.length < 2) {
      setResults([])
      return
    }

    const timeoutId = setTimeout(async () => {
      await searchPatients(searchQuery)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  const searchPatients = async (query: string) => {
    if (query.length < 2) return

    setIsSearching(true)
    setError(null)

    try {
      const response = await fetch(`/api/patients/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to search patients')
      }

      setResults(data.patients || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const clearSearch = useCallback(() => {
    setSearchQuery('')
    setResults([])
    setError(null)
  }, [])

  return {
    searchQuery,
    setSearchQuery,
    results,
    isSearching,
    error,
    clearSearch,
  }
}