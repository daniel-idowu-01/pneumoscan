const UploadFilters = () => {
  return (
    <div className="bg-surface-dark rounded-xl p-5 border border-border-dark flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <label className="flex flex-col w-full md:flex-[2]">
          <span className="text-white text-sm font-medium pb-2">Search Patient ID</span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">
              search
            </span>
            <input
              className="w-full rounded-lg border border-border-dark bg-[#192433] focus:border-primary focus:ring-1 focus:ring-primary text-white pl-11 pr-4 h-12 text-sm placeholder:text-text-secondary transition-all"
              placeholder="Enter ID (e.g., PID-1234)"
            />
          </div>
        </label>
        <label className="flex flex-col w-full md:flex-1">
          <span className="text-white text-sm font-medium pb-2">Date Range</span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">
              date_range
            </span>
            <input
              className="w-full rounded-lg border border-border-dark bg-[#192433] focus:border-primary focus:ring-1 focus:ring-primary text-white pl-11 pr-4 h-12 text-sm placeholder:text-text-secondary transition-all"
              placeholder="Select dates"
            />
          </div>
        </label>
        <button className="h-12 px-6 rounded-lg bg-[#324867] hover:bg-[#3e5677] text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 w-full md:w-auto mt-4 md:mt-0">
          <span className="material-symbols-outlined text-[20px]">download</span>
          Export CSV
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-3 border-t border-border-dark pt-4">
        <span className="text-text-secondary text-sm font-medium mr-2 flex items-center gap-1">
          <span className="material-symbols-outlined text-[18px]">filter_list</span> Filters:
        </span>
        <button className="group flex h-8 items-center gap-2 rounded-full bg-primary text-white pl-3 pr-2 text-xs font-semibold transition-all">
          Status: All
          <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
        </button>
        <button className="group flex h-8 items-center gap-2 rounded-full bg-[#192433] border border-border-dark hover:border-text-secondary text-text-secondary hover:text-white pl-3 pr-2 text-xs font-medium transition-all">
          Risk Level
          <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
        </button>
        <button className="group flex h-8 items-center gap-2 rounded-full bg-[#192433] border border-border-dark hover:border-text-secondary text-text-secondary hover:text-white pl-3 pr-2 text-xs font-medium transition-all">
          Modality: CXR
          <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
        </button>
        <button className="ml-auto text-primary text-xs font-bold hover:underline">
          Clear All
        </button>
      </div>
    </div>
  )
}

export default UploadFilters
