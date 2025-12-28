import BackgroundImage from './BackgroundImage'
import Overlay from './Overlay'
import StatusCard from './StatusCard'

const HeroVisual = () => {
  return (
    <div className="relative flex-1 w-full">
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800 shadow-2xl">
        <BackgroundImage />
        <Overlay />
        <StatusCard />
      </div>
    </div>
  )
}

export default HeroVisual
