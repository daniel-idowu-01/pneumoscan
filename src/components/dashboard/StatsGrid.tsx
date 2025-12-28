import StatCard from "./StatsCard"

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Uploads"
        value="1,240"
        delta="+5%"
        icon="folder_open"
      />

      <StatCard
        title="Processing"
        value="3"
        icon="progress_activity"
        spinning
      />

      <StatCard
        title="Completed Today"
        value="28"
        delta="+12%"
        icon="check_circle"
        deltaColor="text-green-400"
      />

      <StatCard
        title="Flagged Risk"
        value="2"
        delta="Attention"
        icon="warning"
        deltaColor="text-red-400"
      />
    </div>
  )
}

export default StatsGrid
