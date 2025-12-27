import { CoreValueCardProps } from '@/utils/types'

const CoreValueCard = ({ icon, title, description }: CoreValueCardProps) => {
  return (
    <div className="flex gap-4 rounded-xl border border-border-light bg-surface-dark p-6 flex-col hover:border-primary/50 transition-colors group">
      <div className="size-12 rounded-lg bg-background-dark flex items-center justify-center border border-border-light group-hover:border-primary/30 transition-colors">
        <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">
          {icon}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-white text-lg font-bold leading-tight">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default CoreValueCard
