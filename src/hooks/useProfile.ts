'use client'

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api-client'

export interface ProfileData {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
  licenseId?: string
  hospital?: string
  department?: string
  phoneNumber?: string
  emailNotifications?: boolean
  highSensitivityMode?: boolean
  marketingCommunications?: boolean
  scansThisMonth?: number
  totalScans?: number
  createdAt?: string
  updatedAt?: string
}

interface UpdateProfileData {
  firstName?: string
  lastName?: string
  licenseId?: string
  hospital?: string
  department?: string
  phoneNumber?: string
  preferences?: {
    emailNotifications?: boolean
    highSensitivityMode?: boolean
    marketingCommunications?: boolean
  }
}

interface UseProfileReturn {
  profile: ProfileData | null
  isLoading: boolean
  error: string | null
  updateProfile: (data: UpdateProfileData) => Promise<boolean>
  refreshProfile: () => Promise<void>
}

export function useProfile(): UseProfileReturn {
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProfile = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const { data, error: apiError } = await apiClient.get<{ user: ProfileData }>(
        '/api/profile'
      )

      if (apiError) {
        setError(apiError)
        return
      }

      if (data && data.user) {
        setProfile(data.user)
      }
    } catch (err) {
      console.error('Failed to fetch profile:', err)
      setError('Failed to load profile')
    } finally {
      setIsLoading(false)
    }
  }

  const updateProfile = async (updates: UpdateProfileData): Promise<boolean> => {
    try {
      setError(null)

      const { data, error: apiError } = await apiClient.patch<{ user: ProfileData }>(
        '/api/profile',
        updates
      )

      if (apiError) {
        setError(apiError)
        return false
      }

      if (data && data.user) {
        setProfile(data.user)
        return true
      }

      return false
    } catch (err) {
      console.error('Failed to update profile:', err)
      setError('Failed to update profile')
      return false
    }
  }

  const refreshProfile = async () => {
    await fetchProfile()
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return {
    profile,
    isLoading,
    error,
    updateProfile,
    refreshProfile,
  }
}