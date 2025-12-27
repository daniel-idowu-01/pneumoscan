import ImageUploadHeader from "@/components/headers/ImageUploadHeader"

const Results = () => {
    return (
        <section>
            <ImageUploadHeader />
        <main className="flex-1 flex overflow-hidden">
<section className="flex-1 flex flex-col min-w-0 bg-black relative group/viewer">
<div className="absolute top-0 left-0 right-0 p-4 z-10 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-start pointer-events-none">
<div className="pointer-events-auto flex flex-col gap-1">
<div className="flex flex-wrap gap-2 items-center bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 w-fit">
<a className="text-text-secondary text-xs font-medium hover:text-white" href="#">Patients</a>
<span className="text-text-secondary text-xs">/</span>
<a className="text-text-secondary text-xs font-medium hover:text-white" href="#">John Doe</a>
<span className="text-text-secondary text-xs">/</span>
<span className="text-white text-xs font-medium">Scan #492</span>
</div>
</div>
<div className="pointer-events-auto flex items-center gap-2">
<div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
<span className="text-xs font-medium text-white">AI Overlay</span>
<button aria-checked="true" className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch">
<span className="translate-x-4 inline-block size-3 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
</button>
</div>
</div>
</div>
<div className="flex-1 flex items-center justify-center overflow-hidden relative bg-[#050505]">
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px); background-size: 50px 50px"}}></div>
<img alt="Chest X-Ray scan showing lungs and ribcage with slight opacity in the lower left lung" className="max-w-full max-h-full object-contain opacity-90 transition-transform duration-200 scale-100" data-alt="Chest X-Ray scan showing lungs and ribcage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgPBxqCWv5Y2yUEifeDr_aGdJ5eEVZxSTZi_rl5-5nzuRRB-kqGNaXYaijLkwy-b4zgYyeKYCmiLcfawxeO8nJgym-BMAomBxJHOObTyDIVbTrdIgt6L010iOPjI4r5jQ8kMW3lgXs-lWd_KTmf3AgLOndrtsoqZ1TcZZoUBW4k_3xMzNMXqsA4tQA5dEbYxoz41F5CP-HbCU4MUx7Ctn90_EC6HdE9P3GIjp_nR_mPYYaqx-ERFVyNSb2aNu8eZ5bDj1o-S50_XxE"/>
<div className="absolute top-[45%] left-[55%] w-32 h-32 bg-primary/30 rounded-full blur-2xl mix-blend-screen pointer-events-none animate-pulse"></div>
<div className="absolute top-[45%] left-[55%] w-24 h-24 border-2 border-primary/50 border-dashed rounded-full pointer-events-none flex items-center justify-center">
<span className="bg-primary text-white text-[10px] font-bold px-1 rounded absolute -top-3">94%</span>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
<div className="flex items-center gap-1 p-1 bg-surface-dark/90 backdrop-blur-md border border-border-dark rounded-xl shadow-2xl">
<button className="p-2 text-text-secondary hover:text-white hover:bg-white/10 rounded-lg transition-colors tooltip" title="Zoom Out">
<span className="material-symbols-outlined text-[20px]">remove</span>
</button>
<span className="text-xs font-mono text-white min-w-[3ch] text-center">85%</span>
<button className="p-2 text-text-secondary hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Zoom In">
<span className="material-symbols-outlined text-[20px]">add</span>
</button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="p-2 text-text-secondary hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Pan">
<span className="material-symbols-outlined text-[20px]">pan_tool</span>
</button>
<button className="p-2 text-primary bg-primary/10 rounded-lg transition-colors border border-primary/20" title="Contrast">
<span className="material-symbols-outlined text-[20px]">contrast</span>
</button>
<button className="p-2 text-text-secondary hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Invert">
<span className="material-symbols-outlined text-[20px]">invert_colors</span>
</button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="p-2 text-text-secondary hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Reset">
<span className="material-symbols-outlined text-[20px]">restart_alt</span>
</button>
</div>
</div>
</section>
<aside className="w-[400px] flex-none bg-white dark:bg-background-dark border-l border-slate-200 dark:border-border-dark flex flex-col overflow-hidden">
<div className="p-6 border-b border-slate-200 dark:border-border-dark flex flex-col gap-4">
<div className="flex justify-between items-start">
<h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight">Analysis Results</h1>
<div className="flex gap-2">
<button className="flex items-center justify-center size-8 rounded hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-text-secondary">
<span className="material-symbols-outlined">print</span>
</button>
<button className="flex items-center justify-center size-8 rounded hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-text-secondary">
<span className="material-symbols-outlined">share</span>
</button>
</div>
</div>
<button className="flex w-full items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-900/20 transition-all">
<span className="material-symbols-outlined text-[18px]">file_download</span>
<span>Export Full Report</span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-8">
<div className="space-y-4">
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-text-secondary">Patient Information</h3>
<div className="bg-slate-50 dark:bg-surface-dark rounded-xl p-4 border border-slate-200 dark:border-border-dark">
<div className="flex justify-between py-2 border-b border-slate-200 dark:border-white/5">
<span className="text-slate-500 dark:text-text-secondary text-sm">Name</span>
<span className="text-slate-900 dark:text-white text-sm font-medium">John Doe</span>
</div>
<div className="flex justify-between py-2 border-b border-slate-200 dark:border-white/5">
<span className="text-slate-500 dark:text-text-secondary text-sm">Patient ID</span>
<span className="text-slate-900 dark:text-white text-sm font-medium font-mono">MRN-8821</span>
</div>
<div className="flex justify-between py-2 border-b border-slate-200 dark:border-white/5">
<span className="text-slate-500 dark:text-text-secondary text-sm">Scan Date</span>
<span className="text-slate-900 dark:text-white text-sm font-medium">Oct 24, 2023</span>
</div>
<div className="flex justify-between py-2 pt-2">
<span className="text-slate-500 dark:text-text-secondary text-sm">Modality</span>
<span className="text-slate-900 dark:text-white text-sm font-medium">CXR PA/Lateral</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-text-secondary">AI Diagnosis Model v2.4</h3>
<span className="flex items-center gap-1 text-[10px] text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full font-medium">
<span className="material-symbols-outlined text-[12px]">check_circle</span> Processed
                        </span>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1.5 items-end">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-sm font-bold text-slate-900 dark:text-white">Pneumonia</span>
</div>
<span className="text-sm font-bold text-primary">94%</span>
</div>
<div className="w-full bg-slate-200 dark:bg-surface-dark rounded-full h-2">
<div className="bg-gradient-to-r from-blue-600 to-primary h-2 rounded-full shadow-[0_0_10px_rgba(19,109,236,0.5)]" style={{width: "94%"}}></div>
</div>
<p className="text-xs text-slate-500 dark:text-text-secondary mt-1.5">
                                High opacity detected in left lower lobe consistent with consolidation.
                            </p>
</div>
<div>
<div className="flex justify-between mb-1.5 items-end">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-orange-400"></span>
<span className="text-sm font-medium text-slate-900 dark:text-white">Infiltration</span>
</div>
<span className="text-sm font-medium text-orange-400">45%</span>
</div>
<div className="w-full bg-slate-200 dark:bg-surface-dark rounded-full h-2">
<div className="bg-orange-400 h-2 rounded-full opacity-80" style={{width: "45%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1.5 items-end">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-slate-400"></span>
<span className="text-sm font-medium text-slate-900 dark:text-white">Cardiomegaly</span>
</div>
<span className="text-sm font-medium text-slate-500 dark:text-text-secondary">12%</span>
</div>
<div className="w-full bg-slate-200 dark:bg-surface-dark rounded-full h-2">
<div className="bg-slate-500 h-2 rounded-full opacity-40" style={{width: "12%"}}></div>
</div>
</div>
</div>
</div>
<div className="space-y-3">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-text-secondary" htmlFor="notes">Radiologist Notes</label>
<textarea className="w-full bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none h-32 placeholder-slate-400 dark:placeholder-white/20" id="notes" placeholder="Add clinical observations or corrections..."></textarea>
</div>
</div>
<div className="p-6 border-t border-slate-200 dark:border-border-dark bg-slate-50/50 dark:bg-background-dark/50 backdrop-blur-sm space-y-3">
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 h-11 rounded-lg border border-slate-300 dark:border-border-dark hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-white text-sm font-medium transition-colors">
<span className="material-symbols-outlined text-[18px]">flag</span>
                        Flag for Review
                    </button>
<button className="flex items-center justify-center gap-2 h-11 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-bold shadow-lg shadow-green-900/20 transition-colors">
<span className="material-symbols-outlined text-[18px]">check</span>
                        Approve
                    </button>
</div>
</div>
</aside>
</main>
        </section>
    )
}

export default Results