'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useProfile } from '@/hooks/useProfile'
import { useState } from 'react'

const ImageUploadNavBar = () => {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const { profile } = useProfile()
  const [showDropdown, setShowDropdown] = useState(false)

  const getDisplayName = () => {
    if (profile?.firstName && profile?.lastName) {
      return `Dr. ${profile.firstName} ${profile.lastName}`
    }
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`
    }
    return 'User'
  }

  const getUserInitials = () => {
    if (profile?.firstName && profile?.lastName) {
      return `${profile.firstName[0]}${profile.lastName[0]}`
    }
    if (user?.firstName && user?.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`
    }
    return 'U'
  }

  const displayName = getDisplayName()
  const displayRole = profile?.role || user?.role || 'radiologist'
  const userInitials = getUserInitials()
  const displayEmail = user?.email || profile?.email || ''

  const handleLogout = async () => {
    await logout()
    setShowDropdown(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const getLinkClasses = (path: string) => {
    const baseClasses = "text-sm font-medium transition-colors"
    if (isActive(path)) {
      return `${baseClasses} text-blue-600 dark:text-blue-400`
    }
    return `${baseClasses} text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400`
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-10 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-8 rounded bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500">
            <span className="material-symbols-outlined text-2xl">radiology</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">
            <Link href="/">PneumoScan</Link>
          </h2>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-6">
            <Link
              className={getLinkClasses('/dashboard')}
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className={getLinkClasses('/image-upload')}
              href="/image-upload"
            >
              New Scan
            </Link>
            <Link
              className={getLinkClasses('/upload-history')}
              href="/upload-history"
            >
              History
            </Link>
            <Link
              className={getLinkClasses('/profile')}
              href="/profile"
            >
              Profile
            </Link>
          </div>
          
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
          
          <div className="flex items-center gap-3">

            <div className="text-right hidden lg:block">
              <p className="text-xs font-semibold text-slate-900 dark:text-white">{displayName}</p>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 capitalize">
                {displayRole}
              </p>
            </div>
            
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-center size-10 rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white font-bold text-sm border-2 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all"
              >
                {userInitials}
              </button>

              {showDropdown && (
                <>
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setShowDropdown(false)}
                  />
                  
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 z-50">
                    <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                        {displayName}
                      </p>
                      {displayEmail && (
                        <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                          {displayEmail}
                        </p>
                      )}
                    </div>

                    <Link 
                      href="/profile"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">person</span>
                      View Profile
                    </Link>

                    <Link 
                      href="/dashboard"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">dashboard</span>
                      Dashboard
                    </Link>

                    <Link 
                      href="/patient-list"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">group</span>
                      Patient List
                    </Link>

                    <div className="h-px bg-slate-200 dark:bg-slate-700 my-2"></div>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full text-left"
                    >
                      <span className="material-symbols-outlined text-[20px]">logout</span>
                      Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
        
        <button className="md:hidden p-2 text-slate-600 dark:text-slate-400">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  )
}

export default ImageUploadNavBar