import ProfileStatCard from "./ProfileStatCard"

const ProfileStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProfileStatCard
        label="Scans This Month"
        value="1,240"
        icon="analytics"
        footer="+12% from last month"
        footerClass="text-emerald-500"
      />
      <ProfileStatCard
        label="Current Plan"
        value="Pro"
        icon="diamond"
        iconClass="text-purple-400"
        footer="Renews on Oct 24, 2024"
      />
      <ProfileStatCard
        label="Model Accuracy"
        value="99.2%"
        icon="check_circle"
        iconClass="text-blue-400"
        footer="Based on validated reports"
      />
    </div>
  )
}

export default ProfileStats
