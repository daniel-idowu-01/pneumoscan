const PatientListHeader = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          Patient Registry
        </h2>
        <p className="text-slate-500 dark:text-[#92a9c9]">
          Manage your caseload and monitor AI analysis status.
        </p>
      </div>

      <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg shadow-lg shadow-primary/20 active:scale-95 transition-all">
        <span className="material-symbols-outlined text-[20px]">add</span>
        <span className="font-semibold text-sm">Add New Patient</span>
      </button>
    </section>
  )
}

export default PatientListHeader
