import { FeaturesProps } from "@/utils/types"

const FeatureCard = ({ icon, title, description }: FeaturesProps) => {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all dark:border-slate-700 dark:bg-[#1a2636]">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard
