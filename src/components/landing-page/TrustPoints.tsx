const HeroTrustPoints = () => {
  return (
    <div className="flex items-center gap-6 pt-4 text-sm text-slate-500">
      <TrustItem label="End-to-End Encryption" />
      <TrustItem label="99.9% Uptime" />
    </div>
  )
}

const TrustItem = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-green-500">check</span>
    {label}
  </div>
)

export default HeroTrustPoints
