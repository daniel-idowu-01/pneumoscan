const PatientTableHeader = () => {
  return (
    <thead className="bg-slate-50 dark:bg-[#111822] border-b border-slate-200 dark:border-[#233348]">
      <tr>
        {[
          'Patient Name',
          'MRN',
          'DOB / Age',
          'Last Exam',
          'AI Status',
          'Actions',
        ].map((label) => (
          <th
            key={label}
            className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#92a9c9]"
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default PatientTableHeader
