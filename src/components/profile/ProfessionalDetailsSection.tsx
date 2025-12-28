const ProfessionalDetailsSection = () => {
  return (
    <section>
      <h2 className="text-white text-xl font-bold mb-4">Professional Details</h2>
      <div className="bg-[#192433] border border-[#233348] rounded-xl p-6 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium">
                      Affiliated Hospital / Clinic
                    </span>
                    <input
                      className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent placeholder-[#64748b]"
                      type="text"
                      defaultValue="St. Mary's General Hospital"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium">Department</span>
                    <div className="relative">
                      <select className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white pl-4 pr-10 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent appearance-none">
                        <option>Radiology</option>
                        <option>Cardiology</option>
                        <option>Pulmonology</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#92a9c9] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </label>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-sm font-medium">
                    Medical License / Certification
                  </span>
                  <div className="border-2 border-dashed border-[#324867] hover:border-primary/50 transition-colors rounded-xl bg-[#111822] p-8 flex flex-col items-center justify-center text-center cursor-pointer group">
                    <div className="size-12 rounded-full bg-[#233348] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-white text-[24px]">
                        cloud_upload
                      </span>
                    </div>
                    <p className="text-white font-medium text-base">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-[#64748b] text-sm mt-1">PDF, JPG or PNG (max. 5MB)</p>
                  </div>
                  <div className="flex items-center gap-3 mt-2 bg-[#233348]/50 p-3 rounded-lg border border-[#324867]">
                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">
                      description
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">
                        Medical_License_2024.pdf
                      </p>
                      <p className="text-[#64748b] text-xs">2.4 MB • Uploaded 2 days ago</p>
                    </div>
                    <button className="text-[#92a9c9] hover:text-white">
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>
    </section>
  )
}

export default ProfessionalDetailsSection
