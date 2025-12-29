import AuthHeader from '@/components/headers/AuthNavBar'
import AuthSideComp from '@/components/AuthSideComp'
import LoginForm from './forms/LoginForm'

const LoginLayout = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <AuthHeader />

      <main className="flex-1 flex items-center justify-center p-4 md:p-8 relative">
        <section className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-125 h-125 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 bg-primary/10 rounded-full blur-[100px]" />
        </section>

        <section className="w-full max-w-5xl min-h-150 overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-xl border border-gray-200 dark:border-input-border flex flex-col md:flex-row">
          <AuthSideComp />
          <LoginForm />
        </section>
      </main>

      <footer className="py-6 text-center text-xs text-slate-500 dark:text-slate-600">
        © 2023 PneumoScan Inc. All rights reserved.
      </footer>
    </div>
  )
}

export default LoginLayout
