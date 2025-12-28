import ProfileHeader from './ProfileHeader'
import ProfileStats from './ProfileStats'
import PersonalInfoSection from './PersonalInfoSection'
import ProfessionalDetailsSection from './ProfessionalDetailsSection'
import PreferencesSection from './PreferencesSection'
import ProfileActions from './ProfileActions'

const ProfileContent = () => {
  return (
    <main className="flex-1 min-w-0 flex flex-col gap-8 pb-12">
      <ProfileHeader />
      <ProfileStats />
      <PersonalInfoSection />
      <ProfessionalDetailsSection />
      <PreferencesSection />
      <ProfileActions />
    </main>
  )
}

export default ProfileContent
