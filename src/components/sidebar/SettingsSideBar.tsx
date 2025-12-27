const SettingsSideBar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-72 flex-shrink-0">
      <div className="flex flex-col gap-6 sticky top-24">
        <div className="flex flex-col px-2">
          <h1 className="text-white text-xl font-bold leading-normal">Settings</h1>
          <p className="text-[#92a9c9] text-sm font-normal mt-1">
            Manage your account &amp; credentials
          </p>
        </div>
        <nav className="flex flex-col gap-1">
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white shadow-lg shadow-primary/20 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
            <p className="text-sm font-medium leading-normal">Personal Info</p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92a9c9] hover:bg-[#192433] hover:text-white transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:text-white">
              badge
            </span>
            <p className="text-sm font-medium leading-normal">Professional Credentials</p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92a9c9] hover:bg-[#192433] hover:text-white transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:text-white">
              shield_lock
            </span>
            <p className="text-sm font-medium leading-normal">Security</p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92a9c9] hover:bg-[#192433] hover:text-white transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:text-white">
              monitoring
            </span>
            <p className="text-sm font-medium leading-normal">Account Activity</p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92a9c9] hover:bg-[#192433] hover:text-white transition-all group mt-4 border-t border-[#233348]"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:text-white">
              logout
            </span>
            <p className="text-sm font-medium leading-normal">Sign Out</p>
          </a>
        </nav>
      </div>
    </aside>
  )
}

export default SettingsSideBar
