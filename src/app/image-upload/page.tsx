'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUploadScan } from '@/hooks/useUploadScan'
import { usePatientSearch } from '@/hooks/usePatientSearch'
import ImageUploadNavBar from '@/components/headers/ImageUploadNavBar'
import { generatePatientId } from '@/lib/utils/scan-utils'

export default function ImageUploadPage() {
  const router = useRouter()
  const { uploadScan, isUploading, error } = useUploadScan()
  const { searchQuery, setSearchQuery, results, isSearching, clearSearch } = usePatientSearch()
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Form state
  const [patientId, setPatientId] = useState('')
  const [isGeneratingId, setIsGeneratingId] = useState(false)
  const [patientName, setPatientName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [clinicalNotes, setClinicalNotes] = useState('')
  const [symptoms, setSymptoms] = useState<string[]>([])
  const [customSymptom, setCustomSymptom] = useState('')

  // Image state
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageFileName, setImageFileName] = useState('')
  const [imageMimeType, setImageMimeType] = useState('')

  // UI state
  const [showSuccess, setShowSuccess] = useState(false)
  const [showSearchDropdown, setShowSearchDropdown] = useState(false)
  const [isNewPatient, setIsNewPatient] = useState(true)

  const commonSymptoms = [
    'Cough',
    'Fever',
    'Shortness of breath',
    'Chest pain',
    'Fatigue',
    'Difficulty breathing',
    'Rapid breathing',
  ]

  // Auto-generate patient ID on mount for new patients
  useEffect(() => {
    if (isNewPatient) {
      generatePatientIdAPI()
    }
  }, [isNewPatient])

  // Show/hide search dropdown based on results
  useEffect(() => {
    setShowSearchDropdown(results.length > 0 && searchQuery.length >= 2)
  }, [results, searchQuery])

  const generatePatientIdAPI = async () => {
    setIsGeneratingId(true)
    try {
      const response = await fetch('/api/patients/generate-id')
      const data = await response.json()

      if (response.ok && data.patientId) {
        setPatientId(data.patientId)
      } else {
        console.error('Failed to generate patient ID:', data.error)
        const patientId = generatePatientId()
        setPatientId(patientId)
      }
    } catch (err) {
      console.error('Error generating patient ID:', err)
      const patientId =  generatePatientId()
      setPatientId(patientId)
    } finally {
      setIsGeneratingId(false)
    }
  }

  const handlePatientModeToggle = (newPatient: boolean) => {
    setIsNewPatient(newPatient)
    if (newPatient) {
      setPatientId('')
      setPatientName('')
      setDateOfBirth('')
      setClinicalNotes('')
      setSearchQuery('')
      clearSearch()
      generatePatientId()
    } else {
      setPatientId('')
      setPatientName('')
      setDateOfBirth('')
      setClinicalNotes('')
    }
  }

  const handleSelectPatient = (patient: any) => {
    setPatientId(patient.patientId)
    setPatientName(patient.fullName)
    setDateOfBirth(patient.dateOfBirth ? patient.dateOfBirth.split('T')[0] : '')
    setClinicalNotes(patient.clinicalNotes || '')
    setSearchQuery('')
    setShowSearchDropdown(false)
    clearSearch()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
      alert('Please select a JPEG or PNG image')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('Image size must be less than 10MB')
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setSelectedImage(reader.result as string)
      setImageFileName(file.name)
      setImageMimeType(file.type)
    }
    reader.readAsDataURL(file)
  }

  const handleSymptomToggle = (symptom: string) => {
    setSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    )
  }

  const handleAddCustomSymptom = () => {
    if (customSymptom.trim() && !symptoms.includes(customSymptom.trim())) {
      setSymptoms((prev) => [...prev, customSymptom.trim()])
      setCustomSymptom('')
    }
  }

  const handleRemoveSymptom = (symptom: string) => {
    setSymptoms((prev) => prev.filter((s) => s !== symptom))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!patientName.trim()) {
      alert('Please enter patient name')
      return
    }

    if (!selectedImage) {
      alert('Please select a chest X-ray image')
      return
    }

    const success = await uploadScan({
      patientId: patientId.trim(),
      patientName: patientName.trim(),
      dateOfBirth: dateOfBirth || undefined,
      clinicalNotes: clinicalNotes.trim() || undefined,
      symptoms: symptoms.length > 0 ? symptoms : undefined,
      imageData: selectedImage,
      imageFileName,
      imageMimeType,
    })

    if (success) {
      setShowSuccess(true)
      setTimeout(() => {
        router.push('/upload-history')
      }, 2000)
    }
  }

  const handleReset = () => {
    setPatientName('')
    setDateOfBirth('')
    setClinicalNotes('')
    setSymptoms([])
    setSelectedImage(null)
    setImageFileName('')
    setImageMimeType('')
    setSearchQuery('')
    clearSearch()
    if (isNewPatient) {
      generatePatientId()
    } else {
      setPatientId('')
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <ImageUploadNavBar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            New Chest X-Ray Scan
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Upload a chest X-ray image and register patient information for AI analysis
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-green-600 dark:text-green-400">
                check_circle
              </span>
              <div>
                <p className="font-semibold text-green-900 dark:text-green-100">
                  Scan uploaded successfully!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Redirecting to scan history...
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400">
                error
              </span>
              <p className="text-red-900 dark:text-red-100">{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Mode Toggle */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Patient Selection
            </h2>

            <div className="flex gap-2 mb-4">
              <button
                type="button"
                onClick={() => handlePatientModeToggle(true)}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                  isNewPatient
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">person_add</span>
                  New Patient
                </span>
              </button>

              <button
                type="button"
                onClick={() => handlePatientModeToggle(false)}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                  !isNewPatient
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                  Existing Patient
                </span>
              </button>
            </div>

            {/* Existing Patient Search */}
            {!isNewPatient && (
              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by patient ID or name..."
                    className="w-full px-4 py-3 pl-12 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    search
                  </span>
                  {isSearching && (
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 animate-spin">
                      progress_activity
                    </span>
                  )}
                </div>

                {/* Search Results Dropdown */}
                {showSearchDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-10"
                      onClick={() => setShowSearchDropdown(false)}
                    />
                    <div className="absolute z-20 w-full mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                      {results.map((patient) => (
                        <button
                          key={patient.id}
                          type="button"
                          onClick={() => handleSelectPatient(patient)}
                          className="w-full px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-b-0"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <p className="font-semibold text-slate-900 dark:text-white">
                                {patient.fullName}
                              </p>
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                ID: {patient.patientId}
                              </p>
                              {patient.dateOfBirth && (
                                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                                  DOB: {new Date(patient.dateOfBirth).toLocaleDateString()}
                                </p>
                              )}
                            </div>
                            <span className="material-symbols-outlined text-slate-400 dark:text-slate-500">
                              arrow_forward
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {searchQuery.length >= 2 && results.length === 0 && !isSearching && (
                  <div className="mt-2 p-4 text-center text-slate-600 dark:text-slate-400 text-sm">
                    No patients found. Try a different search term.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Image Upload Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Chest X-Ray Image
            </h2>

            <div className="space-y-4">
              {!selectedImage ? (
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                      <span className="material-symbols-outlined text-4xl text-blue-600 dark:text-blue-400">
                        cloud_upload
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                        Upload Chest X-Ray
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        JPEG or PNG format, max 10MB
                      </p>
                    </div>
                    <label className="cursor-pointer">
                      <span className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors inline-block">
                        Select Image
                      </span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/jpg,image/png"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                    <img
                      src={selectedImage}
                      alt="Chest X-Ray Preview"
                      className="w-full h-auto max-h-96 object-contain bg-slate-100 dark:bg-slate-900"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400">
                        check_circle
                      </span>
                      <span className="text-slate-700 dark:text-slate-300">
                        {imageFileName}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedImage(null)
                        setImageFileName('')
                        setImageMimeType('')
                        if (fileInputRef.current) {
                          fileInputRef.current.value = ''
                        }
                      }}
                      className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Patient Information Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Patient Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isNewPatient ? (
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Patient ID (Auto-generated)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={patientId}
                      onChange={(e) => setPatientId(e.target.value)}
                      placeholder="Generating..."
                      className="flex-1 px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={isGeneratingId}
                    />
                    <button
                      type="button"
                      onClick={generatePatientId}
                      disabled={isGeneratingId}
                      className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      title="Generate new Patient ID"
                    >
                      {isGeneratingId ? (
                        <span className="material-symbols-outlined animate-spin text-[20px]">
                          progress_activity
                        </span>
                      ) : (
                        <span className="material-symbols-outlined text-[20px]">
                          refresh
                        </span>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Unique identifier for this patient
                  </p>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Patient ID
                  </label>
                  <input
                    type="text"
                    value={patientId}
                    readOnly
                    placeholder="Select a patient above"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g., John Doe"
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Symptoms Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Symptoms
            </h2>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {commonSymptoms.map((symptom) => (
                  <button
                    key={symptom}
                    type="button"
                    onClick={() => handleSymptomToggle(symptom)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      symptoms.includes(symptom)
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {symptom}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={customSymptom}
                  onChange={(e) => setCustomSymptom(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      handleAddCustomSymptom()
                    }
                  }}
                  placeholder="Add custom symptom..."
                  className="flex-1 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={handleAddCustomSymptom}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Add
                </button>
              </div>

              {symptoms.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Selected Symptoms:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {symptoms.map((symptom) => (
                      <span
                        key={symptom}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {symptom}
                        <button
                          type="button"
                          onClick={() => handleRemoveSymptom(symptom)}
                          className="hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-full p-0.5"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            close
                          </span>
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Clinical Notes Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Clinical Notes
            </h2>

            <textarea
              value={clinicalNotes}
              onChange={(e) => setClinicalNotes(e.target.value)}
              placeholder="Enter any additional clinical notes or observations..."
              rows={4}
              className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleReset}
              disabled={isUploading}
              className="px-6 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reset Form
            </button>

            <button
              type="submit"
              disabled={isUploading || !selectedImage || !patientName || (!isNewPatient && !patientId)}
              className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isUploading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">
                    progress_activity
                  </span>
                  Uploading...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">upload</span>
                  Upload Scan
                </>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}