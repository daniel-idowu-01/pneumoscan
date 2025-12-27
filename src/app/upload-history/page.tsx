import ImageUploadNavBar from "@/components/headers/ImageUploadNavBar"

const UploadHistory = () => {
    return (
    <>
        <ImageUploadNavBar />

        <main className="flex-1 flex flex-col items-center py-6 px-4 md:px-10">
<div className="w-full max-w-[1200px] flex flex-col gap-6">
<div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-end">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-primary text-sm font-medium mb-1">
<span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Dashboard
                    </div>
<h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Upload History</h1>
<p className="text-text-secondary text-base font-normal leading-normal max-w-xl">
                        Track processing status, review analysis results, and manage patient X-ray records.
                    </p>
</div>
<div className="flex flex-wrap gap-4 w-full xl:w-auto">
<div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 bg-surface-dark border border-border-dark shadow-sm">
<div className="flex justify-between items-start">
<p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Total Scans</p>
<span className="material-symbols-outlined text-text-secondary text-[20px]">folder_open</span>
</div>
<p className="text-white text-2xl font-bold leading-tight">1,248</p>
</div>
<div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 bg-surface-dark border border-border-dark shadow-sm">
<div className="flex justify-between items-start">
<p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Pending</p>
<span className="material-symbols-outlined text-yellow-500 text-[20px]">hourglass_top</span>
</div>
<p className="text-white text-2xl font-bold leading-tight">12</p>
</div>
<div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 bg-surface-dark border border-border-dark shadow-sm">
<div className="flex justify-between items-start">
<p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Critical</p>
<span className="material-symbols-outlined text-red-500 text-[20px]">warning</span>
</div>
<p className="text-white text-2xl font-bold leading-tight">5</p>
</div>
</div>
</div>
<div className="bg-surface-dark rounded-xl p-5 border border-border-dark flex flex-col gap-5">
<div className="flex flex-col md:flex-row gap-4 items-end">
<label className="flex flex-col w-full md:flex-[2]">
<span className="text-white text-sm font-medium pb-2">Search Patient ID</span>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">search</span>
<input className="w-full rounded-lg border border-border-dark bg-[#192433] focus:border-primary focus:ring-1 focus:ring-primary text-white pl-11 pr-4 h-12 text-sm placeholder:text-text-secondary transition-all" placeholder="Enter ID (e.g., PID-1234)"/>
</div>
</label>
<label className="flex flex-col w-full md:flex-1">
<span className="text-white text-sm font-medium pb-2">Date Range</span>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">date_range</span>
<input className="w-full rounded-lg border border-border-dark bg-[#192433] focus:border-primary focus:ring-1 focus:ring-primary text-white pl-11 pr-4 h-12 text-sm placeholder:text-text-secondary transition-all" placeholder="Select dates"/>
</div>
</label>
<button className="h-12 px-6 rounded-lg bg-[#324867] hover:bg-[#3e5677] text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 w-full md:w-auto mt-4 md:mt-0">
<span className="material-symbols-outlined text-[20px]">download</span>
                        Export CSV
                    </button>
</div>
<div className="flex flex-wrap items-center gap-3 border-t border-border-dark pt-4">
<span className="text-text-secondary text-sm font-medium mr-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">filter_list</span> Filters:
                    </span>
<button className="group flex h-8 items-center gap-2 rounded-full bg-primary text-white pl-3 pr-2 text-xs font-semibold transition-all">
                        Status: All
                        <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
</button>
<button className="group flex h-8 items-center gap-2 rounded-full bg-[#192433] border border-border-dark hover:border-text-secondary text-text-secondary hover:text-white pl-3 pr-2 text-xs font-medium transition-all">
                        Risk Level
                        <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
</button>
<button className="group flex h-8 items-center gap-2 rounded-full bg-[#192433] border border-border-dark hover:border-text-secondary text-text-secondary hover:text-white pl-3 pr-2 text-xs font-medium transition-all">
                        Modality: CXR
                        <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
</button>
<button className="ml-auto text-primary text-xs font-bold hover:underline">Clear All</button>
</div>
</div>
<div className="rounded-xl border border-border-dark overflow-hidden bg-surface-dark shadow-xl shadow-black/20">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#192433] border-b border-border-dark">
<th className="p-5 text-xs font-semibold tracking-wider text-text-secondary uppercase w-[250px] cursor-pointer hover:text-white group">
<div className="flex items-center gap-1">
                                        Upload Date
                                        <span className="material-symbols-outlined text-[16px] text-primary opacity-100">arrow_downward</span>
</div>
</th>
<th className="p-5 text-xs font-semibold tracking-wider text-text-secondary uppercase w-[150px]">Patient ID</th>
<th className="p-5 text-xs font-semibold tracking-wider text-text-secondary uppercase">Preview</th>
<th className="p-5 text-xs font-semibold tracking-wider text-text-secondary uppercase">AI Analysis</th>
<th className="p-5 text-xs font-semibold tracking-wider text-text-secondary uppercase">Status</th>
<th className="p-5 text-xs font-semibold tracking-wider text-text-secondary uppercase text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-border-dark">
<tr className="group hover:bg-[#2a3c55] transition-colors">
<td className="p-5">
<div className="flex flex-col">
<span className="text-white text-sm font-medium">Oct 24, 2023</span>
<span className="text-text-secondary text-xs">10:45 AM</span>
</div>
</td>
<td className="p-5">
<span className="text-white font-mono text-sm bg-[#192433] px-2 py-1 rounded border border-border-dark">PID-99238</span>
</td>
<td className="p-5">
<div className="h-10 w-10 rounded bg-cover bg-center bg-no-repeat border border-border-dark group-hover:border-primary/50 transition-colors" data-alt="Small thumbnail preview of a chest X-ray scan showing lungs and ribs" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPbIMm4EJAp4CXqck0qb6VVO0GDJRoEGZag1_Tp1nhZ-wRk_rhndPnRXcAO8np99wGKQPXpGAYA-Vei5il1PgLLwbWvY7_sv0fhlY55fy1KIyy9GCfXDiqXIZYBn-4eTtnzmcgJzNkuQ9Vq_lMp0d92pnT4EjAQXThleZqo0bkcO62nsCTPVopnyKIi1r32mPmSRkwxu1949YlfjT2cSCdEqgksaUkRCTAlEOToDnrIoKw69xyRVQJysloPj6dGlI_31IDtKUbf5a_")'}}></div>
</td>
<td className="p-5">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-red-400 text-sm font-bold">High Risk</span>
<span className="text-text-secondary text-xs">(98.2%)</span>
</div>
<div className="w-24 h-1.5 bg-[#192433] rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[98%]"></div>
</div>
</div>
</td>
<td className="p-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                        Completed
                                    </span>
</td>
<td className="p-5 text-right">
<button className="text-primary hover:text-white text-sm font-semibold flex items-center justify-end gap-1 ml-auto transition-colors">
                                        View Report 
                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</td>
</tr>
<tr className="group hover:bg-[#2a3c55] transition-colors">
<td className="p-5">
<div className="flex flex-col">
<span className="text-white text-sm font-medium">Oct 24, 2023</span>
<span className="text-text-secondary text-xs">09:15 AM</span>
</div>
</td>
<td className="p-5">
<span className="text-white font-mono text-sm bg-[#192433] px-2 py-1 rounded border border-border-dark">PID-88124</span>
</td>
<td className="p-5">
<div className="h-10 w-10 rounded bg-cover bg-center bg-no-repeat border border-border-dark group-hover:border-primary/50 transition-colors" data-alt="Thumbnail of a chest X-ray scan, darker contrast" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlH_u-AmNd21sWXQfPzP2rxcqyQT0JjWnCQUdSfwVDryOevllxskBSi6_NcbhMRuGLkZMRtg1BtuYB6e7JxmgwDvBcAT8a_PHUtLYZIidVXf-odPTQQSYtmoeUHlm6y_R1yvK_79z5Oj5wvSrjbxr4-duML32Eu7nLnt2E0X34779ew89h4vYKeayvbvIU_Se0_WxFow_JKuZnYRnjmJDl_R9e31lldqcKzPCA0vNkN6WO-OEbxegvddKyW4PwGUGrHhu7M7OAOpj8")'}}></div>
</td>
<td className="p-5">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-green-400 text-sm font-bold">Normal</span>
<span className="text-text-secondary text-xs">(12.5%)</span>
</div>
<div className="w-24 h-1.5 bg-[#192433] rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[12%]"></div>
</div>
</div>
</td>
<td className="p-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                        Completed
                                    </span>
</td>
<td className="p-5 text-right">
<button className="text-primary hover:text-white text-sm font-semibold flex items-center justify-end gap-1 ml-auto transition-colors">
                                        View Report 
                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</td>
</tr>
<tr className="group hover:bg-[#2a3c55] transition-colors">
<td className="p-5">
<div className="flex flex-col">
<span className="text-white text-sm font-medium">Oct 23, 2023</span>
<span className="text-text-secondary text-xs">16:30 PM</span>
</div>
</td>
<td className="p-5">
<span className="text-white font-mono text-sm bg-[#192433] px-2 py-1 rounded border border-border-dark">PID-74221</span>
</td>
<td className="p-5">
<div className="flex items-center justify-center h-10 w-10 rounded bg-[#192433] border border-border-dark">
<span className="material-symbols-outlined text-text-secondary text-[20px]">image</span>
</div>
</td>
<td className="p-5">
<span className="text-text-secondary text-sm italic">Analyzing...</span>
</td>
<td className="p-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
<span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>
                                        Processing
                                    </span>
</td>
<td className="p-5 text-right">
<button className="text-text-secondary cursor-not-allowed text-sm font-semibold flex items-center justify-end gap-1 ml-auto">
                                        Processing...
                                    </button>
</td>
</tr>
<tr className="group hover:bg-[#2a3c55] transition-colors">
<td className="p-5">
<div className="flex flex-col">
<span className="text-white text-sm font-medium">Oct 23, 2023</span>
<span className="text-text-secondary text-xs">14:10 PM</span>
</div>
</td>
<td className="p-5">
<span className="text-white font-mono text-sm bg-[#192433] px-2 py-1 rounded border border-border-dark">PID-11029</span>
</td>
<td className="p-5">
<div className="flex items-center justify-center h-10 w-10 rounded bg-[#192433] border border-border-dark text-red-400">
<span className="material-symbols-outlined text-[20px]">broken_image</span>
</div>
</td>
<td className="p-5">
<span className="text-text-secondary text-sm">--</span>
</td>
<td className="p-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
<span className="material-symbols-outlined text-[14px]">error</span>
                                        Failed
                                    </span>
</td>
<td className="p-5 text-right">
<button className="text-white hover:text-red-400 text-sm font-semibold flex items-center justify-end gap-1 ml-auto transition-colors">
<span className="material-symbols-outlined text-[18px]">refresh</span>
                                        Retry
                                    </button>
</td>
</tr>
<tr className="group hover:bg-[#2a3c55] transition-colors">
<td className="p-5">
<div className="flex flex-col">
<span className="text-white text-sm font-medium">Oct 22, 2023</span>
<span className="text-text-secondary text-xs">11:05 AM</span>
</div>
</td>
<td className="p-5">
<span className="text-white font-mono text-sm bg-[#192433] px-2 py-1 rounded border border-border-dark">PID-55901</span>
</td>
<td className="p-5">
<div className="h-10 w-10 rounded bg-cover bg-center bg-no-repeat border border-border-dark group-hover:border-primary/50 transition-colors" data-alt="Thumbnail of X-ray showing chest cavity" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASuVlIuLq9oFvdEQGKmhllHlzilgOl8KtTA7CGRwmigIWfFNQKHyUjXJOHDTgN4_D0CCo8NiE_czXFamTK6Oxzn5tIPgwHQSTYHJ60KfZPH4jgjKQJt0A_fal4kQJMnCBJmxn9uG1hrUR_lw6neD7Nw16VFGbKOLuB4VkvT2l7HEDZ5v-vixQP3dLE0f9g4Rx39ybbsYCzOcb-K0W8w79tDR8935tOF_2aTG2ZnK_rmN4a4_aE1rF44_8300L1jv9TQZbq5cn41Uav")'}}></div>
</td>
<td className="p-5">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-orange-400 text-sm font-bold">Inconclusive</span>
<span className="text-text-secondary text-xs">(45.0%)</span>
</div>
<div className="w-24 h-1.5 bg-[#192433] rounded-full overflow-hidden">
<div className="h-full bg-orange-400 w-[45%]"></div>
</div>
</div>
</td>
<td className="p-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                        Completed
                                    </span>
</td>
<td className="p-5 text-right">
<button className="text-primary hover:text-white text-sm font-semibold flex items-center justify-end gap-1 ml-auto transition-colors">
                                        View Report 
                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-[#192433] p-4 border-t border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
<span className="text-text-secondary text-sm">Showing <span className="text-white font-medium">1-5</span> of <span className="text-white font-medium">1,248</span> results</span>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg border border-border-dark text-text-secondary hover:text-white hover:bg-surface-dark disabled:opacity-50 transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-border-dark text-text-secondary hover:text-white hover:bg-surface-dark text-sm font-medium transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-border-dark text-text-secondary hover:text-white hover:bg-surface-dark text-sm font-medium transition-colors">3</button>
<span className="text-text-secondary text-sm">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-border-dark text-text-secondary hover:text-white hover:bg-surface-dark text-sm font-medium transition-colors">25</button>
<button className="p-2 rounded-lg border border-border-dark text-text-secondary hover:text-white hover:bg-surface-dark transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>
    </>
)
}

export default UploadHistory

