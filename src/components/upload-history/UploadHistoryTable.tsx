import UploadTableHeader from './UploadTableHeader'
import UploadTableRow from './UploadTableRow'
import UploadTablePagination from './UploadTablePagination'

const UploadHistoryTable = () => {
  return (
    <div className="rounded-xl border border-border-dark overflow-hidden bg-surface-dark shadow-xl shadow-black/20">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full border-collapse">
          <UploadTableHeader />
          <tbody className="divide-y divide-border-dark">
            <UploadTableRow />
          </tbody>
        </table>
      </div>

      <UploadTablePagination />
    </div>
  )
}

export default UploadHistoryTable
