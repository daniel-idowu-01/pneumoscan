import { DashboardStatsCardProps } from "@/utils/types"

const StatCard = ({
  title,
  value,
  delta,
  icon,
  spinning,
  deltaColor = 'text-green-400',
}: DashboardStatsCardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-dark border border-border-dark">
      <div className="flex justify-between">
        <p className="text-[#92a9c9] text-sm">{title}</p>
        <span
          className={`material-symbols-outlined ${spinning ? 'animate-spin' : ''}`}
        >
          {icon}
        </span>
      </div>

      <div className="flex items-end gap-2">
        <p className="text-white text-2xl font-bold">{value}</p>
        {delta && <p className={`${deltaColor} text-xs font-bold`}>{delta}</p>}
      </div>
    </div>
  )
}

export default StatCard
