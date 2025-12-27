import DashboardSideBar from "@/components/sidebar/DashboardSideBar"

const Dashboard = () => {
    return (
        <section className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white h-screen overflow-hidden flex">
            <DashboardSideBar />

<main className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark relative">

<div className="relative w-full min-h-[220px] bg-cover bg-center flex flex-col justify-end" data-alt="Abstract blue technology data pattern background" style={{backgroundImage: 'linear-gradient(0deg, rgba(16, 24, 34, 1) 0%, rgba(16, 24, 34, 0.6) 50%, rgba(16, 24, 34, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCETE8FlXPOlg7jPWWS1yexgFjqVMFQQXaEz2ncUdK-nCr2PNZvbdmoqYh10WYmhmIIvrAS3VdmTCWHW_cWHIkUNw7ZqNxsaCdtiF3GTeDwINiBVfh-JC0RP-aGTJ9ODo0AHGmXca75S2lE9yiXq1lzO-1td01YUCcufOFL-g0P2x8hg7MlTshWgsrRLj7gahsjSlxbVtH6aq0w7WdX-GTM5d-_wnJiW2D5WuyoJaxXW1LTxq6w_cYGmKudnR-ENK5-VLaleQf5xaHL")'}}>
<div className="p-8 pb-6">
<div className="max-w-[1200px] mx-auto w-full">
<p className="text-blue-300 font-medium text-sm mb-1 uppercase tracking-wider">Radiology Portal</p>
<h2 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">Welcome back, Dr. Smith</h2>
<p className="text-slate-300 mt-2 max-w-2xl">You have 3 scans currently processing and 12 completed analyses ready for review.</p>
</div>
</div>
</div>
<div className="flex-1 p-6 md:p-8 w-full max-w-[1200px] mx-auto flex flex-col gap-8">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-dark border border-border-dark shadow-sm">
<div className="flex justify-between items-start">
<p className="text-[#92a9c9] text-sm font-medium leading-normal">Total Uploads</p>
<span className="material-symbols-outlined text-[#92a9c9]" style={{fontSize: "20px"}}>folder_open</span>
</div>
<div className="flex items-end gap-2 mt-1">
<p className="text-white tracking-tight text-2xl font-bold leading-tight">1,240</p>
<p className="text-[#0bda5e] text-xs font-bold mb-1">+5%</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-dark border border-border-dark shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-primary text-6xl">hourglass_top</span>
</div>
<div className="flex justify-between items-start z-10">
<p className="text-[#92a9c9] text-sm font-medium leading-normal">Processing</p>
<span className="material-symbols-outlined text-primary animate-spin" style={{fontSize: "20px"}}>progress_activity</span>
</div>
<div className="flex items-end gap-2 mt-1 z-10">
<p className="text-white tracking-tight text-2xl font-bold leading-tight">3</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-dark border border-border-dark shadow-sm">
<div className="flex justify-between items-start">
<p className="text-[#92a9c9] text-sm font-medium leading-normal">Completed Today</p>
<span className="material-symbols-outlined text-[#0bda5e]" style={{fontSize: "20px"}}>check_circle</span>
</div>
<div className="flex items-end gap-2 mt-1">
<p className="text-white tracking-tight text-2xl font-bold leading-tight">28</p>
<p className="text-[#0bda5e] text-xs font-bold mb-1">+12%</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-dark border border-border-dark shadow-sm">
<div className="flex justify-between items-start">
<p className="text-[#92a9c9] text-sm font-medium leading-normal">Flagged Risk</p>
<span className="material-symbols-outlined text-red-400" style={{fontSize: "20px"}}>warning</span>
</div>
<div className="flex items-end gap-2 mt-1">
<p className="text-white tracking-tight text-2xl font-bold leading-tight">2</p>
<p className="text-red-400 text-xs font-bold mb-1">Attention</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="xl:col-span-2 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Recent Analyses</h2>
<button className="text-primary text-sm font-medium hover:text-blue-400">View All</button>
</div>
<div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-border-dark bg-[#111822]">
<th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9]">Patient ID</th>
<th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9]">Scan Type</th>
<th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9]">Date</th>
<th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9]">Status</th>
<th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9]">Risk Score</th>
<th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9] text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-border-dark">
<tr className="group hover:bg-[#233348] transition-colors">
<td className="py-4 px-6 font-medium text-white">#PT-8942</td>
<td className="py-4 px-6 text-gray-300">Chest X-Ray (PA)</td>
<td className="py-4 px-6 text-gray-400">Oct 24, 10:42 AM</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
<span className="size-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                                Processing
                                            </span>
</td>
<td className="py-4 px-6 text-gray-400">-</td>
<td className="py-4 px-6 text-right">
<button className="text-gray-400 hover:text-white transition-colors">
<span className="material-symbols-outlined" style={{fontSize: "20px"}}>more_vert</span>
</button>
</td>
</tr>
<tr className="group hover:bg-[#233348] transition-colors">
<td className="py-4 px-6 font-medium text-white">#PT-8941</td>
<td className="py-4 px-6 text-gray-300">Chest X-Ray (Lat)</td>
<td className="py-4 px-6 text-gray-400">Oct 24, 09:15 AM</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                                Completed
                                            </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[15%]"></div>
</div>
<span className="text-xs text-green-400">Low (0.15)</span>
</div>
</td>
<td className="py-4 px-6 text-right">
<button className="text-primary hover:text-blue-300 font-medium text-xs">View Report</button>
</td>
</tr>
<tr className="group hover:bg-[#233348] transition-colors">
<td className="py-4 px-6 font-medium text-white">#PT-8938</td>
<td className="py-4 px-6 text-gray-300">Chest CT Scan</td>
<td className="py-4 px-6 text-gray-400">Oct 23, 04:30 PM</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                                                Flagged
                                            </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[85%]"></div>
</div>
<span className="text-xs text-red-400">High (0.85)</span>
</div>
</td>
<td className="py-4 px-6 text-right">
<button className="text-primary hover:text-blue-300 font-medium text-xs">Review Now</button>
</td>
</tr>
<tr className="group hover:bg-[#233348] transition-colors">
<td className="py-4 px-6 font-medium text-white">#PT-8935</td>
<td className="py-4 px-6 text-gray-300">Chest X-Ray (PA)</td>
<td className="py-4 px-6 text-gray-400">Oct 23, 02:12 PM</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                                Completed
                                            </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[8%]"></div>
</div>
<span className="text-xs text-green-400">Low (0.08)</span>
</div>
</td>
<td className="py-4 px-6 text-right">
<button className="text-primary hover:text-blue-300 font-medium text-xs">View Report</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-border-dark bg-[#111822] flex justify-center">
<button className="text-sm text-[#92a9c9] hover:text-white flex items-center gap-1">
                                Show more results
                                <span className="material-symbols-outlined" style={{fontSize: "16px;"}}>expand_more</span>
</button>
</div>
</div>
</div>

<div className="xl:col-span-1 flex flex-col gap-4">
<h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Quick Upload</h2>
<div className="flex flex-col rounded-xl border border-border-dark bg-surface-dark overflow-hidden">
<div className="flex flex-col items-center gap-6 px-6 py-10 border-2 border-dashed border-[#324867] m-4 rounded-lg bg-[#151f2b] group hover:border-primary/50 transition-colors">
<div className="bg-[#233348] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-white" style={{fontSize: "32px"}}>cloud_upload</span>
</div>
<div className="flex max-w-[480px] flex-col items-center gap-2">
<p className="text-white text-base font-bold leading-tight text-center">Drag &amp; drop files</p>
<p className="text-[#92a9c9] text-sm font-normal leading-normal text-center">DICOM, JPEG, or PNG supported</p>
</div>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
<span className="truncate">Browse Files</span>
</button>
</div>
<div className="px-6 pb-6 pt-2">
<h3 className="text-white text-sm font-semibold mb-3">Recent Uploads</h3>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 p-2 rounded hover:bg-[#233348] cursor-pointer transition-colors">
<div className="bg-[#233348] rounded h-10 w-10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[#92a9c9]" style={{fontSize: "20px"}}>image</span>
</div>
<div className="flex flex-col flex-1 overflow-hidden">
<p className="text-white text-sm font-medium truncate">chest_xray_pt8942.dcm</p>
<p className="text-[#92a9c9] text-xs">15.4 MB • Uploading...</p>
</div>
<span className="material-symbols-outlined text-primary animate-spin" style={{fontSize: "18px"}}>progress_activity</span>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-[#233348] cursor-pointer transition-colors">
<div className="bg-[#233348] rounded h-10 w-10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-green-500" style={{fontSize: "20px"}}>check</span>
</div>
<div className="flex flex-col flex-1 overflow-hidden">
<p className="text-white text-sm font-medium truncate">scan_v2_batch04.zip</p>
<p className="text-[#92a9c9] text-xs">128 MB • Completed</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-dark border border-border-dark rounded-xl p-4 flex items-center justify-between mt-2">
<div className="flex items-center gap-3">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</div>
<div>
<p className="text-white text-sm font-medium">Model Status</p>
<p className="text-[#92a9c9] text-xs">Online • v2.4.1</p>
</div>
</div>
<span className="material-symbols-outlined text-[#92a9c9]" style={{fontSize: "20px"}}>dns</span>
</div>
</div>
</div>
<div className="h-10"></div>
</div>
</main>
        </section>
    )
}

export default Dashboard