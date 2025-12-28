import Link from 'next/link'

const LoginForm = () => {
  return (
    <div className="w-full md:w-1/2 p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-white dark:bg-surface-dark relative">
      <div className="max-w-100 mx-auto w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Welcome Back, Doctor
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Please log in to access your dashboard.
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Email Address
            </label>
            <div className="relative group/input">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary text-[20px]">
                mail
              </span>
              <input
                type="email"
                placeholder="dr.smith@hospital.com"
                className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-input-bg border border-gray-200 dark:border-input-border text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Password
              </label>
              <a
                href="#"
                className="text-xs font-semibold text-primary hover:text-blue-400"
              >
                Forgot Password?
              </a>
            </div>

            <div className="relative group/input">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary text-[20px]">
                lock
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-12 pl-10 pr-10 rounded-lg bg-gray-50 dark:bg-input-bg border border-gray-200 dark:border-input-border text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <span className="material-symbols-outlined text-[20px]">
                  visibility_off
                </span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-primary"
            />
            <label
              htmlFor="remember"
              className="text-sm text-slate-600 dark:text-slate-400 select-none"
            >
              Keep me logged in for 30 days
            </label>
          </div>

          <button
            type="button"
            className="mt-2 w-full h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2"
          >
            Log In
            <span className="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Don&apos;t have an account?
            <Link
              href="/signup"
              className="ml-1 font-bold text-primary hover:text-blue-400"
            >
              Create Account
            </Link>
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-[#233348] flex justify-center gap-4 text-xs text-slate-400 dark:text-slate-500">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            256-bit Encryption
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              privacy_tip
            </span>
            Privacy Protected
          </span>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
