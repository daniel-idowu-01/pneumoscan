import FeatureCard from './FeatureCard'
import { FEATURES } from '@/lib/utils/data'
import SectionHeader from './SectionHeader'

const FeaturesSection = () => {
  return (
    <section className="w-full bg-slate-50 py-16 dark:bg-[#151f2e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          title="Why Leading Hospitals Choose PneumoScan"
          subtitle="Built for speed, accuracy, and rigorous security standards in clinical environments."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
