import Link from 'next/link'

const DashboardSideBar = () => {
  return (
    <aside className="w-72 bg-[#111822] border-r border-border-dark flex flex-col shrink-0 h-full overflow-y-auto">
      <div className="p-6 flex flex-col h-full justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-12 shrink-0 border-2 border-border-dark"
              data-alt="Doctor profile picture placeholder"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-YGgP6oLg8q5f5fQAHWtspHiYb30f6QDm7giPvm3WL-f6ZGvtBs5cSIn2_7AsRN_NHCcw2sNQZVYy_22LcXmvk2h7PnAuKqJUq0UZGkMZGaqRswjcTpTS-HAC8OBnE-JUFaVlLGwRHznbdGIg4YUt5FUeDLhusOO6ShuSIK5bm26NXdC3PMDTRs9w_Tl4rzbe9JyH4DYZ2s0YQoFDBcCscfEadMa5mdyghphSMgysjHG96XeqWBnMwWn6HZsS79Ehk0OSaQUN_lhr")',
              }}
            ></div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-white text-base font-bold leading-tight truncate">
                Dr. Sarah Smith
              </h1>
              <p className="text-[#92a9c9] text-xs font-medium leading-normal truncate">
                Radiology Dept.
              </p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <Link
              className="flex items-center gap-3 px-3 py-3 rounded-lg bg-input-border border border-border-dark/50 transition-colors group"
              href="/dashboard"
            >
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>
                dashboard
              </span>
              <p className="text-white text-sm font-medium leading-normal">Dashboard</p>
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#1a2636] transition-colors group text-[#92a9c9] hover:text-white"
              href="/patient-list"
            >
              <span
                className="material-symbols-outlined group-hover:text-white transition-colors"
                style={{ fontSize: '24px' }}
              >
                group
              </span>
              <p className="text-sm font-medium leading-normal">Patient List</p>
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#1a2636] transition-colors group text-[#92a9c9] hover:text-white"
              href="/upload-history"
            >
              <span
                className="material-symbols-outlined group-hover:text-white transition-colors"
                style={{ fontSize: '24px' }}
              >
                history
              </span>
              <p className="text-sm font-medium leading-normal">Upload History</p>
            </Link>
            {/* <a className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#1a2636] transition-colors group text-[#92a9c9] hover:text-white" href="#">
<span className="material-symbols-outlined group-hover:text-white transition-colors" style={{fontSize: "24px"}}>settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a> */}
            <Link
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#1a2636] transition-colors group text-[#92a9c9] hover:text-white"
              href="/profile"
            >
              <span
                className="material-symbols-outlined group-hover:text-white transition-colors"
                style={{ fontSize: '24px' }}
              >
                account_circle
              </span>
              <p className="text-sm font-medium leading-normal">Profile</p>
            </Link>
          </nav>
        </div>

        <Link href="/image-upload">
          <button className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-blue-900/20">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              upload_file
            </span>
            <span className="truncate">Upload New Scan</span>
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default DashboardSideBar
