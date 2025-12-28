import DashboardSideBar from '@/components/sidebar/DashboardSideBar'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import StatsGrid from '@/components/dashboard/StatsGrid'
import RecentAnalysis from '@/components/dashboard/RecentAnalysis'
import QuickUpload from '@/components/dashboard/QuickUpload'

const Dashboard = () => {
  return (
    <section className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white h-screen overflow-hidden flex">
      <DashboardSideBar />

      <main className="flex-1 flex flex-col h-full overflow-y-auto relative">
        <DashboardHeader />

        <div className="flex-1 p-6 md:p-8 w-full max-w-[1200px] mx-auto flex flex-col gap-8">
          <StatsGrid />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <RecentAnalysis />
            <div className="flex flex-col gap-4">
              <QuickUpload />
            </div>
          </div>

          <div className="h-10" />
        </div>
      </main>
    </section>
  )
}

export default Dashboard
