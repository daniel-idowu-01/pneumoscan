const PatientTableRow = () => {
  return (
    <tr className="group hover:bg-slate-50 dark:hover:bg-[#1e2a3b] transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary text-xs font-bold">
            JD
          </div>
          <div className="flex flex-col">
            <a
              className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors"
              href="#"
            >
              John Doe
            </a>
            <span className="text-xs text-slate-500 dark:text-slate-400">Male</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-medium">
        MRN-12345
      </td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Jan 15, 1980 (43)</td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Oct 24, 2023</td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
          <span className="size-1.5 rounded-full bg-emerald-500"></span>
          Ready
        </span>
      </td>
      <td className="px-6 py-4 text-left">
        <div className="flex items-center justify-end gap-2">
          <button
            className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
            title="View Details"
          >
            <span className="material-symbols-outlined text-[20px]">visibility</span>
          </button>
          <button
            className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
            title="Upload Scan"
          >
            <span className="material-symbols-outlined text-[20px]">upload_file</span>
          </button>
          <button
            className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
            title="More Actions"
          >
            <span className="material-symbols-outlined text-[20px]">more_vert</span>
          </button>
        </div>
      </td>
    </tr>
  )
}

export default PatientTableRow
