interface Props {
  label: string
  value: string
  icon: string
  iconClass?: string
}

const StatsCard = ({ label, value, icon, iconClass }: Props) => {
  return (
    <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 bg-surface-dark border border-border-dark shadow-sm">
      <div className="flex justify-between items-start">
        <p className="text-text-secondary text-xs uppercase tracking-wider">{label}</p>
        <span
          className={`material-symbols-outlined text-[20px] ${iconClass ?? 'text-text-secondary'}`}
        >
          {icon}
        </span>
      </div>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  )
}

export default StatsCard
