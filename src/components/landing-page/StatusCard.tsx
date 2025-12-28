const StatusCard = () => {
  return (
    <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-500">
          <span className="material-symbols-outlined">auto_awesome</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Analysis Complete</p>
          <p className="text-xs text-slate-300">Confidence Score: 98.4%</p>
        </div>
      </div>
    </div>
  )
}

export default StatusCard
