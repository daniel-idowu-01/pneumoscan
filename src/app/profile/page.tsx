import ImageUploadNavBar from "@/components/headers/ImageUploadNavBar"
import SettingsSideBar from "@/components/sidebar/SettingsSideBar"

const Profile = () => {
    return (<>
    <ImageUploadNavBar />

    <div className="relative flex flex-col min-h-screen w-full">

<div className="flex flex-1 max-w-[1280px] w-full mx-auto p-4 sm:p-6 lg:p-8 gap-8">
<SettingsSideBar />
<main className="flex-1 min-w-0 flex flex-col gap-8 pb-12">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between p-6 rounded-xl bg-[#192433] border border-[#233348]">
<div className="flex gap-5 items-center">
<div className="bg-center bg-no-repeat bg-cover rounded-full h-24 w-24 border-2 border-[#233348] shadow-lg" data-alt="Large profile photo of Dr. Sarah Mitchell" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSakDJ8stPUQkEqjyIdlT6KjigeGyKNJApq5nVtCgf79jAhHoXfgSl-tRlZ-BGDunkfBxCFoguUCdNfNZGks8rgCNenCNOudbTIopHCuuf-cxUg__kDHk8i3ROKGKm_j4YV08ovSQGLtvXIx2nvxnn-nb9v834jhmfQ7YlMhexjQOlFM_cXPSqEv8pHkgZO24C2eE2qJXBehEywKLGPmjyX2opEybQgkDLiSHdjGt_KUHIirELw7yw5F4tN1FO9dtBW5briJY8jcsP")'}}></div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<h1 className="text-white text-2xl font-bold tracking-tight">Dr. Sarah Mitchell</h1>
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5" title="Verified Account">verified</span>
</div>
<p className="text-[#92a9c9] text-base font-normal">Senior Radiologist</p>
<p className="text-[#64748b] text-sm mt-1">ID: RAD-8922-XRAY</p>
</div>
</div>
<button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#233348] hover:bg-[#2d4059] text-white rounded-lg text-sm font-bold transition-colors w-full md:w-auto">
<span className="material-symbols-outlined text-[18px]">photo_camera</span>
<span>Change Photo</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="p-5 rounded-xl bg-[#192433] border border-[#233348] flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<p className="text-[#92a9c9] text-sm font-medium">Scans This Month</p>
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
<p className="text-white text-3xl font-bold">1,240</p>
<p className="text-emerald-500 text-xs font-medium flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                            +12% from last month
                        </p>
</div>
<div className="p-5 rounded-xl bg-[#192433] border border-[#233348] flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<p className="text-[#92a9c9] text-sm font-medium">Current Plan</p>
<span className="material-symbols-outlined text-purple-400">diamond</span>
</div>
<p className="text-white text-3xl font-bold">Pro</p>
<p className="text-[#92a9c9] text-xs font-medium mt-1">Renews on Oct 24, 2024</p>
</div>
<div className="p-5 rounded-xl bg-[#192433] border border-[#233348] flex flex-col gap-1 sm:col-span-2 lg:col-span-1">
<div className="flex justify-between items-start mb-2">
<p className="text-[#92a9c9] text-sm font-medium">Model Accuracy</p>
<span className="material-symbols-outlined text-blue-400">check_circle</span>
</div>
<p className="text-white text-3xl font-bold">99.2%</p>
<p className="text-[#92a9c9] text-xs font-medium mt-1">Based on validated reports</p>
</div>
</div>
<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-white text-xl font-bold tracking-tight">Personal Information</h2>
<span className="text-[#64748b] text-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">lock</span>
                            Secure
                        </span>
</div>
<div className="bg-[#192433] border border-[#233348] rounded-xl p-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<label className="flex flex-col gap-2">
<span className="text-white text-sm font-medium">First Name</span>
<input className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent placeholder-[#64748b]" type="text" defaultValue="Sarah"/>
</label>
<label className="flex flex-col gap-2">
<span className="text-white text-sm font-medium">Last Name</span>
<input className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent placeholder-[#64748b]" type="text" defaultValue="Mitchell"/>
</label>
<label className="flex flex-col gap-2">
<span className="text-white text-sm font-medium">Email Address</span>
<input className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent placeholder-[#64748b]" type="email" defaultValue="s.mitchell@medcenter.org"/>
</label>
<label className="flex flex-col gap-2">
<span className="text-white text-sm font-medium">Phone Number</span>
<input className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent placeholder-[#64748b]" type="tel" defaultValue="+1 (555) 012-3456"/>
</label>
</div>
</div>
</section>
<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-white text-xl font-bold tracking-tight">Professional Details</h2>
</div>
<div className="bg-[#192433] border border-[#233348] rounded-xl p-6 flex flex-col gap-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<label className="flex flex-col gap-2">
<span className="text-white text-sm font-medium">Affiliated Hospital / Clinic</span>
<input className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent placeholder-[#64748b]" type="text" defaultValue="St. Mary's General Hospital"/>
</label>
<label className="flex flex-col gap-2">
<span className="text-white text-sm font-medium">Department</span>
<div className="relative">
<select className="w-full rounded-lg bg-[#111822] border border-[#324867] text-white pl-4 pr-10 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent appearance-none">
<option>Radiology</option>
<option>Cardiology</option>
<option>Pulmonology</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#92a9c9] pointer-events-none">expand_more</span>
</div>
</label>
</div>
<div className="flex flex-col gap-2">
<span className="text-white text-sm font-medium">Medical License / Certification</span>
<div className="border-2 border-dashed border-[#324867] hover:border-primary/50 transition-colors rounded-xl bg-[#111822] p-8 flex flex-col items-center justify-center text-center cursor-pointer group">
<div className="size-12 rounded-full bg-[#233348] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-white text-[24px]">cloud_upload</span>
</div>
<p className="text-white font-medium text-base">Click to upload or drag and drop</p>
<p className="text-[#64748b] text-sm mt-1">PDF, JPG or PNG (max. 5MB)</p>
</div>
<div className="flex items-center gap-3 mt-2 bg-[#233348]/50 p-3 rounded-lg border border-[#324867]">
<span className="material-symbols-outlined text-emerald-500 text-[20px]">description</span>
<div className="flex-1 min-w-0">
<p className="text-white text-sm font-medium truncate">Medical_License_2024.pdf</p>
<p className="text-[#64748b] text-xs">2.4 MB • Uploaded 2 days ago</p>
</div>
<button className="text-[#92a9c9] hover:text-white"><span className="material-symbols-outlined text-[20px]">delete</span></button>
</div>
</div>
</div>
</section>
<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-white text-xl font-bold tracking-tight">Preferences</h2>
</div>
<div className="bg-[#192433] border border-[#233348] rounded-xl overflow-hidden">
<div className="flex items-center justify-between p-5 border-b border-[#233348]">
<div className="flex flex-col gap-0.5">
<p className="text-white font-medium">Email Notifications</p>
<p className="text-[#92a9c9] text-sm">Receive updates when AI processing is complete</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue=""/>
<div className="w-11 h-6 bg-[#324867] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="flex items-center justify-between p-5 border-b border-[#233348]">
<div className="flex flex-col gap-0.5">
<p className="text-white font-medium">High Sensitivity Mode</p>
<p className="text-[#92a9c9] text-sm">Lower threshold for flagging potential abnormalities</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" defaultValue=""/>
<div className="w-11 h-6 bg-[#324867] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="flex items-center justify-between p-5">
<div className="flex flex-col gap-0.5">
<p className="text-white font-medium">Marketing Communications</p>
<p className="text-[#92a9c9] text-sm">Receive news about new model features</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" defaultValue=""/>
<div className="w-11 h-6 bg-[#324867] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</section>
<div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4 border-t border-[#233348]">
<button className="px-6 py-3 rounded-lg text-white font-medium hover:bg-[#233348] transition-colors w-full sm:w-auto">Discard Changes</button>
<button className="px-8 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">save</span>
                        Save Profile
                    </button>
</div>
</main>
</div>
</div>
    </>)
}

export default Profile

