const PatientTableHeader = () => {
  return (
    <thead className="bg-slate-50 dark:bg-[#111822] border-b border-slate-200 dark:border-[#233348]">
      <tr>
        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[22%]">
          Patient Name
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[15%]">
          MRN
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[15%]">
          DOB / Age
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[18%]">
          Last Exam
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[15%]">
          AI Status
        </th>
        <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[15%]">
          Actions
        </th>
      </tr>
    </thead>
  )
}

export default PatientTableHeader
