'use client'

import { useEffect, useState } from 'react'
import ImageUploadNavBar from '@/components/headers/ImageUploadNavBar'
import SettingsSideBar from '@/components/sidebar/SettingsSideBar'
import { useProfile } from '@/hooks/useProfile'

const Profile = () => {
  const { profile, isLoading, error, updateProfile } = useProfile()
  const [isSaving, setIsSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  // Form state for Personal Info
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  })

  // Form state for Professional Details
  const [professionalInfo, setProfessionalInfo] = useState({
    hospital: '',
    department: '',
    licenseId: '',
  })

  // Form state for Preferences
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    highSensitivityMode: false,
    marketingCommunications: false,
  })

  // Update form data when profile loads
  useEffect(() => {
    if (profile) {
      setPersonalInfo({
        firstName: profile.firstName || '',
        lastName: profile.lastName || '',
        phoneNumber: profile.phoneNumber || '',
      })
      setProfessionalInfo({
        hospital: profile.hospital || '',
        department: profile.department || '',
        licenseId: profile.licenseId || '',
      })
      setPreferences({
        emailNotifications: profile.emailNotifications ?? true,
        highSensitivityMode: profile.highSensitivityMode ?? false,
        marketingCommunications: profile.marketingCommunications ?? false,
      })
    }
  }, [profile])

  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPersonalInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleProfessionalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setProfessionalInfo(prev => ({ ...prev, [name]: value }))
  }

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    setSuccessMessage('')

    const success = await updateProfile({
      ...personalInfo,
      ...professionalInfo,
      preferences,
    })

    if (success) {
      setSuccessMessage('Profile updated successfully!')
      setTimeout(() => setSuccessMessage(''), 3000)
    }

    setIsSaving(false)
  }

  const handleDiscard = () => {
    if (profile) {
      setPersonalInfo({
        firstName: profile.firstName || '',
        lastName: profile.lastName || '',
        phoneNumber: profile.phoneNumber || '',
      })
      setProfessionalInfo({
        hospital: profile.hospital || '',
        department: profile.department || '',
        licenseId: profile.licenseId || '',
      })
      setPreferences({
        emailNotifications: profile.emailNotifications ?? true,
        highSensitivityMode: profile.highSensitivityMode ?? false,
        marketingCommunications: profile.marketingCommunications ?? false,
      })
    }
  }

  if (isLoading) {
    return (
      <>
        <ImageUploadNavBar />
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-background-dark">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-primary mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400">Loading profile...</p>
          </div>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <ImageUploadNavBar />
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-background-dark">
          <div className="text-center bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-4xl mb-2">
              error
            </span>
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        </div>
      </>
    )
  }

  if (!profile) return null

  return (
    <>
      <ImageUploadNavBar />

      <div className="relative flex flex-col min-h-screen w-full bg-slate-50 dark:bg-background-dark">
        <div className="flex flex-1 max-w-[1280px] w-full mx-auto p-4 sm:p-6 lg:p-8 gap-8">
          <SettingsSideBar />
          
          <main className="flex-1 min-w-0 flex flex-col gap-8 pb-12">
            {/* Success Message */}
            {successMessage && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
                <p className="text-green-600 dark:text-green-400 font-medium">{successMessage}</p>
              </div>
            )}

            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between p-6 rounded-xl bg-white dark:bg-[#192433] border border-slate-200 dark:border-input-border shadow-sm">
              <div className="flex gap-5 items-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold border-2 border-slate-200 dark:border-input-border shadow-lg">
                  {profile.firstName[0]}{profile.lastName[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-slate-900 dark:text-white text-2xl font-bold">
                      Dr. {profile.firstName} {profile.lastName}
                    </h1>
                    <span className="material-symbols-outlined text-blue-600 dark:text-primary text-[20px]">verified</span>
                  </div>
                  <p className="text-slate-600 dark:text-[#92a9c9]">{profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}</p>
                  <p className="text-slate-500 dark:text-[#64748b] text-sm">ID: {profile.licenseId || 'Not set'}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-input-border hover:bg-slate-200 dark:hover:bg-[#2d4059] text-slate-900 dark:text-white rounded-lg text-sm font-bold transition-colors">
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                Change Photo
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-white dark:bg-[#192433] border border-slate-200 dark:border-input-border shadow-sm flex flex-col gap-1">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-slate-600 dark:text-[#92a9c9] text-sm font-medium">Scans This Month</p>
                  <span className="material-symbols-outlined text-blue-600 dark:text-primary">analytics</span>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold">{profile.scansThisMonth || 0}</p>
                <p className="text-emerald-500 text-xs font-medium flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  +12% from last month
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#192433] border border-slate-200 dark:border-input-border shadow-sm flex flex-col gap-1">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-slate-600 dark:text-[#92a9c9] text-sm font-medium">Total Scans</p>
                  <span className="material-symbols-outlined text-purple-600 dark:text-purple-400">folder_open</span>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold">{profile.totalScans || 0}</p>
                <p className="text-slate-500 dark:text-[#92a9c9] text-xs font-medium mt-1">All time</p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#192433] border border-slate-200 dark:border-input-border shadow-sm flex flex-col gap-1 sm:col-span-2 lg:col-span-1">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-slate-600 dark:text-[#92a9c9] text-sm font-medium">Member Since</p>
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400">calendar_today</span>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold">
                  {profile.createdAt ? new Date(profile.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'N/A'}
                </p>
              </div>
            </div>

            {/* Personal Information */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-slate-900 dark:text-white text-xl font-bold">Personal Information</h2>
                <span className="text-slate-500 dark:text-[#64748b] text-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  Secure
                </span>
              </div>

              <div className="bg-white dark:bg-[#192433] border border-slate-200 dark:border-input-border rounded-xl p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-white text-sm font-medium">First Name</span>
                    <input
                      name="firstName"
                      value={personalInfo.firstName}
                      onChange={handlePersonalChange}
                      className="w-full rounded-lg bg-slate-50 dark:bg-[#111822] border border-slate-300 dark:border-[#324867] text-slate-900 dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary focus:border-transparent placeholder-slate-400 dark:placeholder-[#64748b] transition-all"
                      type="text"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-white text-sm font-medium">Last Name</span>
                    <input
                      name="lastName"
                      value={personalInfo.lastName}
                      onChange={handlePersonalChange}
                      className="w-full rounded-lg bg-slate-50 dark:bg-[#111822] border border-slate-300 dark:border-[#324867] text-slate-900 dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary focus:border-transparent placeholder-slate-400 dark:placeholder-[#64748b] transition-all"
                      type="text"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-white text-sm font-medium">Email Address</span>
                    <input
                      value={profile.email}
                      disabled
                      className="w-full rounded-lg bg-slate-100 dark:bg-[#0a0f16] border border-slate-300 dark:border-[#324867] text-slate-500 dark:text-[#64748b] px-4 py-3 text-base cursor-not-allowed"
                      type="email"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-white text-sm font-medium">Phone Number</span>
                    <input
                      name="phoneNumber"
                      value={personalInfo.phoneNumber}
                      onChange={handlePersonalChange}
                      className="w-full rounded-lg bg-slate-50 dark:bg-[#111822] border border-slate-300 dark:border-[#324867] text-slate-900 dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary focus:border-transparent placeholder-slate-400 dark:placeholder-[#64748b] transition-all"
                      type="tel"
                      placeholder="+1 (555) 012-3456"
                    />
                  </label>
                </div>
              </div>
            </section>

            {/* Professional Details */}
            <section>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-4">Professional Details</h2>
              <div className="bg-white dark:bg-[#192433] border border-slate-200 dark:border-input-border rounded-xl p-6 shadow-sm flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-white text-sm font-medium">Affiliated Hospital / Clinic</span>
                    <input
                      name="hospital"
                      value={professionalInfo.hospital}
                      onChange={handleProfessionalChange}
                      className="w-full rounded-lg bg-slate-50 dark:bg-[#111822] border border-slate-300 dark:border-[#324867] text-slate-900 dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary focus:border-transparent placeholder-slate-400 dark:placeholder-[#64748b] transition-all"
                      type="text"
                      placeholder="St. Mary's General Hospital"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-white text-sm font-medium">Department</span>
                    <select
                      name="department"
                      value={professionalInfo.department}
                      onChange={handleProfessionalChange}
                      className="w-full rounded-lg bg-slate-50 dark:bg-[#111822] border border-slate-300 dark:border-[#324867] text-slate-900 dark:text-white pl-4 pr-10 py-3 text-base focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary focus:border-transparent appearance-none"
                    >
                      <option value="">Select department</option>
                      <option value="Radiology">Radiology</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Pulmonology">Pulmonology</option>
                      <option value="Emergency">Emergency</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label className="flex flex-col gap-2 md:col-span-2">
                    <span className="text-slate-900 dark:text-white text-sm font-medium">Medical License ID</span>
                    <input
                      name="licenseId"
                      value={professionalInfo.licenseId}
                      onChange={handleProfessionalChange}
                      className="w-full rounded-lg bg-slate-50 dark:bg-[#111822] border border-slate-300 dark:border-[#324867] text-slate-900 dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary focus:border-transparent placeholder-slate-400 dark:placeholder-[#64748b] transition-all"
                      type="text"
                      placeholder="RAD-12345-XY"
                    />
                  </label>
                </div>
              </div>
            </section>

            {/* Preferences */}
            <section>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-4">Preferences</h2>
              <div className="bg-white dark:bg-[#192433] border border-slate-200 dark:border-input-border rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-input-border">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-slate-900 dark:text-white font-medium">Email Notifications</p>
                    <p className="text-slate-600 dark:text-[#92a9c9] text-sm">Receive updates when AI processing is complete</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.emailNotifications}
                      onChange={() => handlePreferenceChange('emailNotifications')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 dark:bg-[#324867] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-600 dark:peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-input-border">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-slate-900 dark:text-white font-medium">High Sensitivity Mode</p>
                    <p className="text-slate-600 dark:text-[#92a9c9] text-sm">Lower threshold for flagging potential abnormalities</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.highSensitivityMode}
                      onChange={() => handlePreferenceChange('highSensitivityMode')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 dark:bg-[#324867] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-600 dark:peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-5">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-slate-900 dark:text-white font-medium">Marketing Communications</p>
                    <p className="text-slate-600 dark:text-[#92a9c9] text-sm">Receive news about new model features</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketingCommunications}
                      onChange={() => handlePreferenceChange('marketingCommunications')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 dark:bg-[#324867] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-600 dark:peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4 border-t border-slate-200 dark:border-input-border">
              <button
                onClick={handleDiscard}
                disabled={isSaving}
                className="px-6 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-input-border transition-colors w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Discard Changes
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20 dark:shadow-blue-500/20 transition-all w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                    Saving...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">save</span>
                    Save Profile
                  </>
                )}
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Profile