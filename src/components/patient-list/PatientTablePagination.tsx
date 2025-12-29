const PatientTablePagination = () => {
  return (
    <div className="px-6 py-4 border-t border-slate-200 dark:border-input-border bg-slate-50 dark:bg-[#111822] flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm text-slate-500 dark:text-slate-400">
        Showing <strong>1</strong> to <strong>6</strong> of <strong>24</strong> results
      </span>

      <div className="flex items-center gap-2">
        <PaginationButton label="Previous" disabled />
        <PaginationButton label="1" active />
        <PaginationButton label="2" />
        <PaginationButton label="3" />
        <span className="text-slate-400">…</span>
        <PaginationButton label="Next" />
      </div>
    </div>
  )
}

const PaginationButton = ({
  label,
  active,
  disabled,
}: {
  label: string
  active?: boolean
  disabled?: boolean
}) => {
  return (
    <button
      disabled={disabled}
      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
        active
          ? 'bg-primary text-white'
          : 'bg-white dark:bg-input-border text-slate-700 dark:text-slate-300'
      }`}
    >
      {label}
    </button>
  )
}

export default PatientTablePagination
