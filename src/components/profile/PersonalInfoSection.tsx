const PersonalInfoSection = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl font-bold">Personal Information</h2>
        <span className="text-[#64748b] text-sm flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          Secure
        </span>
      </div>

      <div className="bg-[#192433] border border-[#233348] rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium">First Name</span>
                    <input
                      className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent placeholder-[#64748b]"
                      type="text"
                      defaultValue="Sarah"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium">Last Name</span>
                    <input
                      className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent placeholder-[#64748b]"
                      type="text"
                      defaultValue="Mitchell"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium">Email Address</span>
                    <input
                      className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent placeholder-[#64748b]"
                      type="email"
                      defaultValue="s.mitchell@medcenter.org"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium">Phone Number</span>
                    <input
                      className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent placeholder-[#64748b]"
                      type="tel"
                      defaultValue="+1 (555) 012-3456"
                    />
                  </label>
                </div>
              </div>
    </section>
  )
}

export default PersonalInfoSection
