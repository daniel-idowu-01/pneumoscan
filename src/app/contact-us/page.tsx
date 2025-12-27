import NavBar from '@/components/headers/NavBar'
import Footer from '@/components/Footer'

const ContactUs = () => {
  return (
    <>
      <NavBar />

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col items-center py-10 px-4 md:px-10 lg:px-20">
          <div className="w-full max-w-7xl">
            <div className="flex flex-col gap-3 mb-12">
              <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Contact Support
              </h1>
              <p className="text-slate-500 dark:text-text-secondary text-lg font-normal leading-normal max-w-2xl">
                Our medical support team is available 24/7 to assist with imaging processing, API
                integrations, and technical inquiries.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 md:p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    Send us a message
                  </h3>
                  <form className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <label className="flex flex-col flex-1">
                        <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                          Full Name
                        </span>
                        <input
                          className="form-input w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#111822] h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                          placeholder="Dr. Jane Doe"
                          type="text"
                        />
                      </label>
                      <label className="flex flex-col flex-1">
                        <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                          Medical License ID{' '}
                          <span className="text-slate-400 font-normal">(Optional)</span>
                        </span>
                        <input
                          className="form-input w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#111822] h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                          placeholder="MD-12345-XY"
                          type="text"
                        />
                      </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                      <label className="flex flex-col flex-1">
                        <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                          Work Email
                        </span>
                        <input
                          className="form-input w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#111822] h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                          placeholder="jane.doe@hospital.org"
                          type="email"
                        />
                      </label>
                      <label className="flex flex-col flex-1">
                        <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                          Topic
                        </span>
                        <div className="relative">
                          <select className="form-select w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#111822] h-12 px-4 pr-10 appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none">
                            <option disabled={false} selected={true} value="">
                              Select a topic
                            </option>
                            <option value="technical">Technical Issue</option>
                            <option value="billing">Billing &amp; Subscription</option>
                            <option value="accuracy">Model Accuracy Feedback</option>
                            <option value="api">API Integration</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                          </div>
                        </div>
                      </label>
                    </div>
                    <label className="flex flex-col flex-1">
                      <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                        Message
                      </span>
                      <textarea
                        className="form-textarea w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#111822] min-h-[160px] p-4 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y outline-none"
                        placeholder="Describe your issue or question regarding x-ray processing..."
                      ></textarea>
                    </label>
                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                        <span className="material-symbols-outlined text-base text-green-500">
                          lock
                        </span>
                        <span>Secure 256-bit SSL encrypted transmission. HIPAA Compliant.</span>
                      </div>
                      <button
                        className="flex items-center justify-center rounded-lg bg-primary hover:bg-blue-600 text-white font-bold h-12 px-8 transition-colors"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-5 flex items-start gap-4 hover:border-primary/50 transition-colors group cursor-pointer">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-white font-bold text-sm">
                        Email Support
                      </p>
                      <p className="text-slate-500 dark:text-text-secondary text-sm mt-1 mb-2">
                        Typically replies within 2 hours.
                      </p>
                      <span className="text-primary font-medium text-sm">
                        support@pneumoscan.com
                      </span>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-5 flex items-start gap-4 hover:border-primary/50 transition-colors group cursor-pointer">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-white font-bold text-sm">
                        Technical Hotline
                      </p>
                      <p className="text-slate-500 dark:text-text-secondary text-sm mt-1 mb-2">
                        Mon-Fri, 9am - 6pm EST.
                      </p>
                      <span className="text-primary font-medium text-sm">+1 (555) 012-3456</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 overflow-hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary">help</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Common Questions
                    </h3>
                  </div>
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    <details className="group py-4">
                      <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900 dark:text-white">
                        <span>Supported file formats?</span>
                        <span className="transition group-open:rotate-180">
                          <span className="material-symbols-outlined">expand_more</span>
                        </span>
                      </summary>
                      <p className="mt-2 text-sm text-slate-500 dark:text-text-secondary leading-relaxed">
                        We support DICOM (.dcm), JPEG, and PNG formats. For best diagnostic results,
                        we recommend high-resolution DICOM files directly from your imaging
                        equipment.
                      </p>
                    </details>
                    <details className="group py-4">
                      <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900 dark:text-white">
                        <span>Is patient data anonymized?</span>
                        <span className="transition group-open:rotate-180">
                          <span className="material-symbols-outlined">expand_more</span>
                        </span>
                      </summary>
                      <p className="mt-2 text-sm text-slate-500 dark:text-text-secondary leading-relaxed">
                        Yes. Our pre-processing pipeline automatically scrubs PII (Personally
                        Identifiable Information) from metadata before any analysis begins, ensuring
                        full HIPAA compliance.
                      </p>
                    </details>
                    <details className="group py-4">
                      <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900 dark:text-white">
                        <span>How fast is processing?</span>
                        <span className="transition group-open:rotate-180">
                          <span className="material-symbols-outlined">expand_more</span>
                        </span>
                      </summary>
                      <p className="mt-2 text-sm text-slate-500 dark:text-text-secondary leading-relaxed">
                        Typical processing time for a standard chest X-ray is under 30 seconds.
                        Batch uploads may take longer depending on server load and file size.
                      </p>
                    </details>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-500"
                      href="#"
                    >
                      View Full Knowledge Base
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </a>
                  </div>
                </div>
                <div className="relative w-full h-32 rounded-xl overflow-hidden bg-surface-dark border border-slate-200 dark:border-border-dark group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-600/80 z-10"></div>
                  <img
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                    data-alt="Abstract medical technology background with blue overlay"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNe3NVQp1cHI-FNPrygRErFwDeeaEpojRsLjZJ4OQ-jy6RiFobebLtKYdPgJfIdG6MLcOM53nc6nFA3T0aqDpp3WvAaw86wcSgA1i4nCy_zWBtTZsTe5WzB9F2LxNARTChLKgye_1qmoV60OyTb_k21WvJFihSwT-61YbMMuIFXYGlqsPu0pQ_3hBk4bttNypb9BY93_S8E5mr3203VkAl1PJ0FPFiBqGjPOz-T13qxgembg84dhO29EcjT9xY0oaPNPuOeg86K6Uy"
                  />
                  <div className="relative z-20 h-full flex flex-col justify-center px-6">
                    <h4 className="text-white font-bold text-lg">Headquarters</h4>
                    <p className="text-white/80 text-sm">123 Innovation Str, Ikeja, Lagos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default ContactUs
