import PatientTableRow from './PatientTableRow'
import PatientTableHeader from './PatientTableHeader'
import PatientTablePagination from './PatientTablePagination'

const PatientTable = () => {
  return (
    <section className="flex-1 bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-[#233348] overflow-hidden shadow-sm flex flex-col">
      <div className="overflow-x-auto flex-1">
        <table className="w-full min-w-[1000px] border-collapse">
          <PatientTableHeader />
          <tbody className="divide-y divide-slate-100 dark:divide-[#233348]">
            <PatientTableRow />
            <PatientTableRow />
            <PatientTableRow />
            <PatientTableRow />
            <PatientTableRow />
            <PatientTableRow />
          </tbody>
        </table>
      </div>

      <PatientTablePagination />
    </section>
  )
}

export default PatientTable
