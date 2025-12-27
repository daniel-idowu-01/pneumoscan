const ContactSidebar = () => {
  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-5 flex items-start gap-4 hover:border-primary/50 transition-colors group cursor-pointer">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <div>
            <p className="text-slate-900 dark:text-white font-bold text-sm">Email Support</p>
            <p className="text-slate-500 dark:text-text-secondary text-sm mt-1 mb-2">
              Typically replies within 2 hours.
            </p>
            <span className="text-primary font-medium text-sm">support@pneumoscan.com</span>
          </div>
        </div>
        <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-5 flex items-start gap-4 hover:border-primary/50 transition-colors group cursor-pointer">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
            <span className="material-symbols-outlined">call</span>
          </div>
          <div>
            <p className="text-slate-900 dark:text-white font-bold text-sm">Technical Hotline</p>
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
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Common Questions</h3>
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
              We support DICOM (.dcm), JPEG, and PNG formats. For best diagnostic results, we
              recommend high-resolution DICOM files directly from your imaging equipment.
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
              Yes. Our pre-processing pipeline automatically scrubs PII (Personally Identifiable
              Information) from metadata before any analysis begins, ensuring full HIPAA compliance.
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
              Typical processing time for a standard chest X-ray is under 30 seconds. Batch uploads
              may take longer depending on server load and file size.
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
  )
}

export default ContactSidebar
