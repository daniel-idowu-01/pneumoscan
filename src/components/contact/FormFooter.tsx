const FormFooter = () => {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <span className="material-symbols-outlined text-green-500">lock</span>
        Secure 256-bit SSL encrypted transmission. HIPAA Compliant.
      </div>

      <button className="h-12 px-8 rounded-lg bg-primary text-white font-bold hover:bg-blue-600">
        Send Message
      </button>
    </div>
  )
}

export default FormFooter
