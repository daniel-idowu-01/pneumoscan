import Link from 'next/link'

const HeroActions = () => {
  return (
    <div className="flex flex-wrap gap-4 pt-2">
      <Link href="/signup">
        <button className="h-12 rounded-lg bg-primary px-6 font-bold text-white shadow-lg shadow-primary/25 hover:bg-blue-600 hover:scale-[1.02] transition-all">
          Create Account
        </button>
      </Link>

      <Link href="/about">
        <button className="h-12 rounded-lg border border-slate-200 bg-white px-6 font-bold text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors">
          Learn More
        </button>
      </Link>
    </div>
  )
}

export default HeroActions
