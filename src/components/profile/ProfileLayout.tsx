import SettingsSideBar from '@/components/sidebar/SettingsSideBar'
import ProfileContent from './ProfileContent'

const ProfileLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <div className="flex flex-1 max-w-[1280px] w-full mx-auto p-4 sm:p-6 lg:p-8 gap-8">
        <SettingsSideBar />
        <ProfileContent />
      </div>
    </div>
  )
}

export default ProfileLayout
