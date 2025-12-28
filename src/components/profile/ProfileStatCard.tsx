import { ProfileStatCardProps } from "@/utils/types"

const ProfileStatCard = ({
  label,
  value,
  icon,
  footer,
  iconClass,
  footerClass,
}: ProfileStatCardProps) => {
  return (
    <div className="p-5 rounded-xl bg-[#192433] border border-[#233348] flex flex-col gap-1">
      <div className="flex justify-between items-start mb-2">
        <p className="text-[#92a9c9] text-sm font-medium">{label}</p>
        <span className={`material-symbols-outlined ${iconClass ?? 'text-primary'}`}>
          {icon}
        </span>
      </div>
      <p className="text-white text-3xl font-bold">{value}</p>
      <p className={`text-xs font-medium mt-1 ${footerClass ?? 'text-[#92a9c9]'}`}>
        {footer}
      </p>
    </div>
  )
}

export default ProfileStatCard
