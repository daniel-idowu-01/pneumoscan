const Textarea = () => {
  return (
    <label className="flex flex-col">
      <span className="text-slate-900 dark:text-white text-sm font-medium pb-2">Message</span>
      <textarea
        className="min-h-[160px] p-4 rounded-lg border bg-slate-50 dark:bg-[#111822]
          border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white
          placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary resize-y outline-none"
        placeholder="Describe your issue or question regarding x-ray processing..."
      />
    </label>
  )
}

export default Textarea
