import { HeroSectionProps } from "@/types/props"

const HeroSection = ({ title, subtitle, imageUrl }: HeroSectionProps) => {
  return (
    <div className="w-full flex justify-center py-5 px-4 md:px-10 lg:px-40">
      <div className="layout-content-container flex flex-col flex-1">
        <div className="@container">
          <div className="flex flex-col gap-6 py-10 @[480px]:gap-8 @[864px]:flex-row items-center md:px-10">
            {/* Text side */}
            <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center flex-1">
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                  {title}
                </h1>
                <h2 className="text-slate-400 text-lg font-normal leading-relaxed">{subtitle}</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="flex min-w-[84px] items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold tracking-[0.015em]">
                  Our Mission
                </button>

                <button className="flex min-w-[84px] items-center justify-center rounded-lg h-12 px-6 bg-border-dark hover:bg-slate-700 transition-colors text-white text-base font-bold tracking-[0.015em]">
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Image side */}
            <div
              className="w-full aspect-video bg-cover bg-center rounded-xl overflow-hidden shadow-2xl border border-border-light flex-1 relative group"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
