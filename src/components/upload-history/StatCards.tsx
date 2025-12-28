import StatsCard from "./StatCard"

const StatsCards = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full xl:w-auto">
      <StatsCard label="Total Scans" value="1,248" icon="folder_open" />
      <StatsCard label="Pending" value="12" icon="hourglass_top" iconClass="text-yellow-500" />
      <StatsCard label="Critical" value="5" icon="warning" iconClass="text-red-500" />
    </div>
  )
}

export default StatsCards
