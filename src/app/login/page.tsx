const Login = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden dark">
        <header className="flex items-center justify-between border-b border-gray-200 dark:border-[#233348] px-6 py-4 md:px-10 bg-white dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-[24px]">
                radiology
              </span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
              MedAI X-Ray
            </h2>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">help</span>
            <span className="hidden sm:block">Need Help?</span>
          </button>
        </header>

        <main className="flex-1 flex items-center justify-center p-4 md:p-8 relative">
          <section className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-125 h-125 bg-primary/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 bg-primary/10 rounded-full blur-[100px]"></div>
          </section>

          <section className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-xl border border-gray-200 dark:border-[#233348] flex flex-col md:flex-row min-h-150">
            <div className="relative hidden md:flex md:w-1/2 bg-slate-900 flex-col justify-end p-8 lg:p-12 overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-alt="Digital blue x-ray scan of human lungs on a screen"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmb1sqsT5kW5GnehY6Tir3L0sQAOcHQRqph3CQ81MVp0vhfCd_rUdovEFDBA_vzTCIhKsKfhNn3Dn3rZc3WQEjoomf79I1ozUJyAlPr7IVRL7OemPMvL1j2_QhTRbXhjg76T5EWrtvKWWb7aEw1ObmbIg-t2AmcLT-CwzrbB2MomvcPaUvWBsbQmNTSin41eq0cvHhzmrulnpAPTyuCBLTZADQU41IgWwm3Xm8_Qj1EPkyxml_-Xi38PRPoLvpYummXoqF-ty8CDEc");',
                }}
              ></div>
              <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/80 to-transparent opacity-90"></div>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/30 mb-2">
                  <span className="material-symbols-outlined text-white text-[28px]">
                    vital_signs
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-white leading-tight">
                  Advanced AI Diagnostics
                </h1>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                  Join over 5,000 medical professionals using our secure
                  platform to process chest X-rays with 99.8% accuracy. Instant
                  analysis, securely encrypted.
                </p>
                <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-primary uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">
                    verified_user
                  </span>
                  HIPAA Compliant &amp; Secure
                </div>
              </div>
            </div>
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
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400 group-focus-within/input:text-primary transition-colors text-[20px]">
                          mail
                        </span>
                      </div>
                      <input
                        className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-input-bg border border-gray-200 dark:border-input-border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                        placeholder="dr.smith@hospital.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Password
                      </label>
                      <a
                        className="text-xs font-semibold text-primary hover:text-blue-400 transition-colors"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400 group-focus-within/input:text-primary transition-colors text-[20px]">
                          lock
                        </span>
                      </div>
                      <input
                        className="w-full h-12 pl-10 pr-10 rounded-lg bg-gray-50 dark:bg-input-bg border border-gray-200 dark:border-input-border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                        placeholder="••••••••"
                        type="password"
                      />
                      <button
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 cursor-pointer"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          visibility_off
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary bg-gray-50 dark:bg-input-bg"
                      id="remember"
                      type="checkbox"
                    />
                    <label
                      className="text-sm text-slate-600 dark:text-slate-400 select-none"
                      htmlFor="remember"
                    >
                      Keep me logged in for 30 days
                    </label>
                  </div>
                  <button
                    className="mt-2 w-full h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                    type="button"
                  >
                    <span>Log In</span>
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>
                  </button>
                </form>
                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Don't have an account?
                    <a
                      className="font-bold text-primary hover:text-blue-400 transition-colors ml-1"
                      href="#"
                    >
                      Create Account
                    </a>
                  </p>
                </div>
                <div className="mt-10 pt-6 border-t border-gray-100 dark:border-[#233348] flex items-center justify-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      lock
                    </span>
                    256-bit Encryption
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      privacy_tip
                    </span>
                    Privacy Protected
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="py-6 text-center text-xs text-slate-500 dark:text-slate-600">
          <p>© 2023 MedAI Inc. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Login;
