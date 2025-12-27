import ImageUploadNavBar from "@/components/headers/ImageUploadNavBar"

const PatientList = () => {
    return (
    <>
        <ImageUploadNavBar />
    <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 lg:p-8 flex flex-col gap-6">
<section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex flex-col gap-1">
<h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Patient Registry</h2>
<p className="text-slate-500 dark:text-[#92a9c9] text-base">Manage your caseload and monitor AI analysis status.</p>
</div>
<button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-95">
<span className="material-symbols-outlined text-[20px]">add</span>
<span className="font-semibold text-sm">Add New Patient</span>
</button>
</section>
<section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-[#233348] p-4 flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center shadow-sm">
<div className="w-full lg:w-96">
<label className="relative flex items-center w-full">
  <span className="absolute left-3 text-slate-400 dark:text-[#92a9c9] flex items-center h-full">
    <span className="material-symbols-outlined text-[20px]">search</span>
  </span>
  <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-[#233348] border-none rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#6b7c93] focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-[#1a2430] transition-all text-sm font-medium" placeholder="Search by Name, MRN, or ID..." type="text"/>
</label>
</div>
<div className="flex flex-wrap items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1 text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider">Filters:</div>
<button className="group flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-[#233348] hover:bg-slate-100 dark:hover:bg-[#2d4059] rounded-lg border border-slate-200 dark:border-transparent transition-colors">
<span className="text-sm font-medium text-slate-700 dark:text-slate-200">Status: All</span>
<span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-slate-600 dark:group-hover:text-white transition-colors">expand_more</span>
</button>
<button className="group flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-[#233348] hover:bg-slate-100 dark:hover:bg-[#2d4059] rounded-lg border border-slate-200 dark:border-transparent transition-colors">
<span className="text-sm font-medium text-slate-700 dark:text-slate-200">Sort by: Date</span>
<span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-slate-600 dark:group-hover:text-white transition-colors">expand_more</span>
</button>
<button className="group flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-[#233348] hover:bg-slate-100 dark:hover:bg-[#2d4059] rounded-lg border border-slate-200 dark:border-transparent transition-colors">
<span className="text-sm font-medium text-slate-700 dark:text-slate-200">Date Range</span>
<span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-slate-600 dark:group-hover:text-white transition-colors">calendar_today</span>
</button>
</div>
</section>
<section className="flex-1 bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-[#233348] overflow-hidden shadow-sm flex flex-col">
<div className="overflow-x-auto flex-1">
<table className="w-full min-w-[1000px] border-collapse">
<thead className="bg-slate-50 dark:bg-[#111822] border-b border-slate-200 dark:border-[#233348]">
<tr>
<th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[22%]">Patient Name</th>
<th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[15%]">MRN</th>
<th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[15%]">DOB / Age</th>
<th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[18%]">Last Exam</th>
<th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[15%]">AI Status</th>
<th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-[#92a9c9] uppercase tracking-wider w-[15%]">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-[#233348]">
<tr className="group hover:bg-slate-50 dark:hover:bg-[#1e2a3b] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary text-xs font-bold">JD</div>
<div className="flex flex-col">
<a className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors" href="#">John Doe</a>
<span className="text-xs text-slate-500 dark:text-slate-400">Male</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-medium">MRN-12345</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Jan 15, 1980 (43)</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
<span className="size-1.5 rounded-full bg-emerald-500"></span>
                                    Ready
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="View Details">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Upload Scan">
<span className="material-symbols-outlined text-[20px]">upload_file</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="More Actions">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-[#1e2a3b] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xs font-bold">JS</div>
<div className="flex flex-col">
<a className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors" href="#">Jane Smith</a>
<span className="text-xs text-slate-500 dark:text-slate-400">Female</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-medium">MRN-67890</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Mar 22, 1992 (31)</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Oct 23, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
<span className="size-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                    Processing
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="View Details">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Upload Scan">
<span className="material-symbols-outlined text-[20px]">upload_file</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="More Actions">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-[#1e2a3b] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 text-xs font-bold">RB</div>
<div className="flex flex-col">
<a className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors" href="#">Robert Brown</a>
<span className="text-xs text-slate-500 dark:text-slate-400">Male</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-medium">MRN-11223</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Nov 05, 1975 (47)</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Oct 22, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20">
<span className="material-symbols-outlined text-[14px]">flag</span>
                                    Flagged
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="View Details">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Upload Scan">
<span className="material-symbols-outlined text-[20px]">upload_file</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="More Actions">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-[#1e2a3b] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 text-xs font-bold">ED</div>
<div className="flex flex-col">
<a className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors" href="#">Emily Davis</a>
<span className="text-xs text-slate-500 dark:text-slate-400">Female</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-medium">MRN-44556</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Jul 12, 1988 (35)</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Oct 20, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
<span className="size-1.5 rounded-full bg-emerald-500"></span>
                                    Ready
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="View Details">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Upload Scan">
<span className="material-symbols-outlined text-[20px]">upload_file</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="More Actions">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-[#1e2a3b] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 text-xs font-bold">MW</div>
<div className="flex flex-col">
<a className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors" href="#">Michael Wilson</a>
<span className="text-xs text-slate-500 dark:text-slate-400">Male</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-medium">MRN-99887</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Feb 28, 1965 (58)</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Oct 19, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 border border-red-200 dark:border-red-500/20">
<span className="material-symbols-outlined text-[14px]">error</span>
                                    Error
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="View Details">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Upload Scan">
<span className="material-symbols-outlined text-[20px]">upload_file</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="More Actions">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-[#1e2a3b] transition-colors border-none">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xs font-bold">SL</div>
<div className="flex flex-col">
<a className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors" href="#">Sarah Lee</a>
<span className="text-xs text-slate-500 dark:text-slate-400">Female</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-medium">MRN-22134</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Sep 14, 1995 (28)</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Oct 18, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
<span className="size-1.5 rounded-full bg-emerald-500"></span>
                                    Ready
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="View Details">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Upload Scan">
<span className="material-symbols-outlined text-[20px]">upload_file</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="More Actions">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-slate-200 dark:border-[#233348] bg-slate-50 dark:bg-[#111822] flex flex-col sm:flex-row items-center justify-between gap-4">
<span className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-medium text-slate-700 dark:text-white">1</span> to <span className="font-medium text-slate-700 dark:text-white">6</span> of <span className="font-medium text-slate-700 dark:text-white">24</span> results</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-[#233348] border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-[#2d4059] disabled:opacity-50 disabled:cursor-not-allowed transition-colors" disabled={false}>Previous</button>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-primary border border-primary rounded-md hover:bg-primary-hover transition-colors">1</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-[#233348] border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-[#2d4059] transition-colors">2</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-[#233348] border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-[#2d4059] transition-colors">3</button>
<span className="text-slate-400">...</span>
<button className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-[#233348] border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-[#2d4059] transition-colors">Next</button>
</div>
</div>
</section>
</main>
</>)
}

export default PatientList