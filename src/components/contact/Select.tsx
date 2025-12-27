const Select = () => {
  return (
    <label className="flex flex-col flex-1">
      <span className="text-slate-900 dark:text-white text-sm font-medium pb-2">Topic</span>
      <div className="relative">
        <select
          className="form-select h-12 px-4 pr-10 rounded-lg w-full appearance-none
          border bg-slate-50 dark:bg-[#111822] border-slate-300 dark:border-slate-700
          text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        >
          <option>Select a topic</option>
          <option value="technical">Technical Issue</option>
          <option value="billing">Billing & Subscription</option>
          <option value="accuracy">Model Accuracy Feedback</option>
          <option value="api">API Integration</option>
        </select>

        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined">
          expand_more
        </span>
      </div>
    </label>
  )
}

export default Select
