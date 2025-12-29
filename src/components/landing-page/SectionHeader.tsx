import { SectionHeaderProps } from "@/types/props"

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeader
