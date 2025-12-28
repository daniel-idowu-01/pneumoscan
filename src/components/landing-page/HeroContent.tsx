import Link from 'next/link'
import Badge from './Badge'
import HeroActions from './HeroActions'
import HeroTrustPoints from './TrustPoints'

const HeroContent = () => {
  return (
    <div className="flex flex-1 flex-col gap-6 lg:max-w-xl">
      <Badge />

      <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
        Precision Diagnostics at the <span className="text-primary">Speed of AI</span>
      </h1>

      <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        Securely upload and analyze chest X-rays in seconds. Supporting radiologists
        with deep learning models for faster preliminary findings.
      </p>

      <HeroActions />
      <HeroTrustPoints />
    </div>
  )
}

export default HeroContent
