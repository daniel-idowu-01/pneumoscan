import HeroContent from './HeroContent'
import HeroVisual from './HeroVisual'

const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
      <div className="@container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
