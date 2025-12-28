const PatientFilters = () => {
  return (
    <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-[#233348] p-4 flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center shadow-sm">
      <div className="w-full lg:w-96">
        <label className="relative flex items-center w-full">
          <span className="absolute left-3 text-slate-400 dark:text-[#92a9c9]">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </span>
          <input
            type="text"
            placeholder="Search by Name, MRN, or ID..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-[#233348] rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary transition-all"
          />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#92a9c9]">
          Filters:
        </span>

        <FilterButton label="Status: All" />
        <FilterButton label="Sort by: Date" />
        <FilterButton label="Date Range" icon="calendar_today" />
      </div>
    </section>
  )
}

const FilterButton = ({
  label,
  icon = 'expand_more',
}: {
  label: string
  icon?: string
}) => {
  return (
    <button className="group flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-[#233348] rounded-lg border border-slate-200 dark:border-transparent hover:bg-slate-100 dark:hover:bg-[#2d4059] transition-colors">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
      </span>
      <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-slate-600 dark:group-hover:text-white">
        {icon}
      </span>
    </button>
  )
}

export default PatientFilters
