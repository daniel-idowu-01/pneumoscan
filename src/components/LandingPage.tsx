import NavBar from "./NavBar";
import Footer from "./Footer";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-1 flex-col items-center">
        <section className="w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
          <div className="@container">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex flex-1 flex-col gap-6 lg:max-w-xl">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <span className="material-symbols-outlined text-[16px]">
                    verified_user
                  </span>
                  <span>HIPAA Compliant Platform</span>
                </div>
                <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                  Precision Diagnostics at the{" "}
                  <span className="text-primary">Speed of AI</span>
                </h1>
                <p className="text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                  Securely upload and analyze chest X-rays in seconds.
                  Supporting radiologists with state-of-the-art deep learning
                  models for faster, more accurate preliminary findings.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button className="flex h-12 min-w-35 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-blue-600 hover:scale-[1.02] transition-all">
                    <Link href="/signup">Create Account</Link>
                  </button>
                  <button className="flex h-12 min-w-35 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-base font-bold text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors">
                    Learn More
                  </button>
                </div>
                <div className="flex items-center gap-6 pt-4 text-sm text-slate-500 dark:text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-green-500">
                      check
                    </span>
                    <span>End-to-End Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-green-500">
                      check
                    </span>
                    <span>99.9% Uptime</span>
                  </div>
                </div>
              </div>

              <div className="relative flex-1 w-full lg:h-auto">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800 shadow-2xl">
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    aria-label="Futuristic digital interface displaying chest x-ray analysis with blue data overlays"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBi65eva_rnXWJHh3189oHA8of-L_85Jh6whHT5FRHBzw2y1UzTijJMZ5AefocHfMy8FIjWwVz2KrP3G0SYgBQ0zJdus3W5qc-PBZLehfGZZBeXgB0gQR5X1vWompZOsHKvyEU5HNza0jGl5t9YV6OKwfzCXoi_MIQahDx63Zx-v_MNwWtUs6I9zEv-uYB0z6gMCBnHCC1GrmzNatUlhNc2Gll1vWVu4FcEMlimldCWUPVyW79J-XQY_f_KQCBjg01uq13MRd7gMiX')",
                    }}
                  />

                  <div className="absolute inset-0 bg-linear-to-tr from-background-dark/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                        <span className="material-symbols-outlined">
                          auto_awesome
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Analysis Complete
                        </p>
                        <p className="text-xs text-slate-300">
                          Confidence Score: 98.4%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-slate-50 py-16 dark:bg-[#151f2e]">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Why Leading Hospitals Choose MedAI
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                Built for speed, accuracy, and rigorous security standards in
                clinical environments.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="group relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all dark:border-slate-700 dark:bg-[#1a2636]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    lock_person
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    HIPAA Compliant Security
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Enterprise-grade AES-256 encryption and full regulatory
                    compliance ensure patient data remains protected at all
                    times.
                  </p>
                </div>
              </div>

              <div className="group relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all dark:border-slate-700 dark:bg-[#1a2636]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    bolt
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Instant Analysis
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Get preliminary findings in seconds. Our optimized inference
                    engine is designed for high-volume clinical workflows.
                  </p>
                </div>
              </div>

              <div className="group relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all dark:border-slate-700 dark:bg-[#1a2636]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    fact_check
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    High Accuracy Models
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Validated against extensive, diverse datasets to minimize
                    false positives and support better clinical decision making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-6 py-16 lg:px-10">
          <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-[#1a2636] to-background-dark border border-slate-700 relative">
            <div className="absolute top-0 right-0 p-20 opacity-20 bg-primary blur-[100px] rounded-full"></div>
            <div className="relative flex flex-col items-center justify-center gap-6 p-10 text-center md:p-20">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your diagnostic workflow?
              </h2>
              <p className="max-w-xl text-lg text-slate-300">
                Join thousands of radiologists using MedAI Analyze to enhance
                precision and speed.
              </p>
              <button className="mt-4 flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-blue-600 hover:scale-105 transition-all">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
