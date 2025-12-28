const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between p-6 rounded-xl bg-[#192433] border border-[#233348]">
      <div className="flex gap-5 items-center">
        <div
          className="h-24 w-24 rounded-full bg-cover bg-center border-2 border-[#233348] shadow-lg"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSakDJ8stPUQkEqjyIdlT6KjigeGyKNJApq5nVtCgf79jAhHoXfgSl-tRlZ-BGDunkfBxCFoguUCdNfNZGks8rgCNenCNOudbTIopHCuuf-cxUg__kDHk8i3ROKGKm_j4YV08ovSQGLtvXIx2nvxnn-nb9v834jhmfQ7YlMhexjQOlFM_cXPSqEv8pHkgZO24C2eE2qJXBehEywKLGPmjyX2opEybQgkDLiSHdjGt_KUHIirELw7yw5F4tN1FO9dtBW5briJY8jcsP")',
          }}
        />
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-white text-2xl font-bold">Dr. Sarah Mitchell</h1>
            <span className="material-symbols-outlined text-primary">verified</span>
          </div>
          <p className="text-[#92a9c9]">Senior Radiologist</p>
          <p className="text-[#64748b] text-sm">ID: RAD-8922-XRAY</p>
        </div>
      </div>

      <button className="flex items-center gap-2 px-4 py-2.5 bg-[#233348] hover:bg-[#2d4059] text-white rounded-lg text-sm font-bold">
        <span className="material-symbols-outlined text-[18px]">photo_camera</span>
        Change Photo
      </button>
    </div>
  )
}

export default ProfileHeader
