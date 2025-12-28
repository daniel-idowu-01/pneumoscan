import PageTitle from './PageTitle.'
import StatsCards from './StatCards'

const UploadHistoryHeader = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-end">
      <PageTitle />
      <StatsCards />
    </div>
  )
}

export default UploadHistoryHeader
