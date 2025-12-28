import ImageUploadNavBar from '@/components/headers/ImageUploadNavBar'
import UploadHistoryHeader from '@/components/upload-history/UploadHistoryHeader'
import UploadFilters from '@/components/upload-history/UploadFilters'
import UploadHistoryTable from '@/components/upload-history/UploadHistoryTable'

const UploadHistory = () => {
  return (
    <>
      <ImageUploadNavBar />

      <main className="flex-1 flex flex-col items-center py-6 px-4 md:px-10">
        <div className="w-full max-w-[1200px] flex flex-col gap-6">
          <UploadHistoryHeader />
          <UploadFilters />
          <UploadHistoryTable />
        </div>
      </main>
    </>
  )
}

export default UploadHistory
