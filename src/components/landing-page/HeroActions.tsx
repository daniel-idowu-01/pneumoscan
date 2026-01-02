'use client'

import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

const HeroActions = () => {
  const { isAuthenticated, isLoading } = useAuth()

  return (
    <div className="flex flex-wrap gap-4 pt-2">
      {isLoading ? (
        <button 
          disabled 
          className="h-12 rounded-lg bg-primary px-6 font-bold text-white shadow-lg shadow-primary/25 opacity-70 cursor-not-allowed"
        >
          Loading...
        </button>
      ) : isAuthenticated ? (
        <Link href="/dashboard">
          <button className="h-12 rounded-lg bg-primary px-6 font-bold text-white shadow-lg shadow-primary/25 hover:bg-blue-600 hover:scale-[1.02] transition-all cursor-pointer">
            Go to Dashboard
          </button>
        </Link>
      ) : (
        <Link href="/signup">
          <button className="h-12 rounded-lg bg-primary px-6 font-bold text-white shadow-lg shadow-primary/25 hover:bg-blue-600 hover:scale-[1.02] transition-all cursor-pointer">
            Create Account
          </button>
        </Link>
      )}

      <Link href="/about">
        <button className="h-12 rounded-lg border border-slate-200 bg-white px-6 font-bold text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors cursor-pointer">
          Learn More
        </button>
      </Link>
    </div>
  )
}

export default HeroActions