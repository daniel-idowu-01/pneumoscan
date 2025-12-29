import { TeamSectionProps } from "@/types/props"

const TeamSection = ({ title, subtitle, members }: TeamSectionProps) => {
  return (
    <div className="w-full flex justify-center py-16 px-4 md:px-10 lg:px-40 bg-surface-dark border-t border-border-dark">
      <div className="layout-content-container flex flex-col flex-1">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-row justify-between items-end md:px-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-3xl font-bold leading-tight">{title}</h2>
              <p className="text-slate-400">{subtitle}</p>
            </div>

            <button className="hidden md:flex text-primary font-bold text-sm items-center gap-1 hover:text-white transition-colors">
              View all team
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:px-10">
            {members.map(member => (
              <div key={member.name} className="flex flex-col gap-3 group">
                <div
                  className="w-full aspect-[4/5] rounded-xl bg-cover bg-center overflow-hidden border border-border-light grayscale group-hover:grayscale-0 transition-all duration-300"
                  style={{ backgroundImage: `url('${member.imageUrl}')` }}
                  aria-label={member.alt}
                />

                <div>
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
