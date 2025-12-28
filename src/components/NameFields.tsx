const NameFields = () => {
  return (
    <section className="flex gap-2">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          First Name
        </label>
        <div className="relative group/input">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary text-[20px]">
            person
          </span>
          <input
            type="text"
            placeholder="John"
            className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-input-bg border border-gray-200 dark:border-input-border text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Last Name
        </label>
        <div className="relative group/input">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary text-[20px]">
            person_outline
          </span>
          <input
            type="text"
            placeholder="Doe"
            className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-input-bg border border-gray-200 dark:border-input-border text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
          />
        </div>
      </div>
    </section>
  )
}

export default NameFields
