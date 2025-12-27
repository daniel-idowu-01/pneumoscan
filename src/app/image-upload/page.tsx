'use client'
import ImageUploadHeader from "@/components/headers/ImageUploadNavBar"

const ImageUpload = () => {

    const handleUpload = () => {
        // document.getElementById('file-upload').click()
        return
    }

    return (
        <section className="flex flex-col overflow-x-hidden transition-colors duration-200">
            <ImageUploadHeader />
<main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
<div className="w-full max-w-7xl flex flex-col gap-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border-light dark:border-border-dark pb-6">
<div>
<h1 className="text-3xl font-bold tracking-tight mb-2">New X-Ray Analysis</h1>
<p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl">Upload a chest X-ray image (DICOM or PNG) and provide patient details for AI-assisted diagnostic processing.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">help</span>
<span>Help Guide</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
<div className="lg:col-span-7 flex flex-col gap-6">
<div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden flex flex-col flex-1 min-h-[500px]">
<div className="p-5 border-b border-border-light dark:border-border-dark flex justify-between items-center">
<h3 className="font-bold text-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">upload_file</span>
                                Scan Upload
                            </h3>
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20">DICOM / PNG / JPEG</span>
</div>
<div className="flex-1 p-6 flex flex-col">
<label className="group relative flex flex-col items-center justify-center w-full h-full min-h-[400px] rounded-lg border-2 border-dashed border-border-light dark:border-[#324867] hover:border-primary dark:hover:border-primary hover:bg-primary/5 transition-all cursor-pointer" htmlFor="file-upload">
<div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
<div className="mb-4 p-4 rounded-full bg-background-light dark:bg-[#111822] group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-4xl text-text-secondary-light dark:text-[#92a9c9] group-hover:text-primary transition-colors">cloud_upload</span>
</div>
<p className="mb-2 text-lg font-semibold text-text-light dark:text-white">Click to upload or drag and drop</p>
<p className="mb-4 text-sm text-text-secondary-light dark:text-[#92a9c9] max-w-sm mx-auto">Supported formats: DICOM, PNG, JPEG. High resolution recommended for best results.</p>
<p className="text-xs text-text-secondary-light dark:text-[#586a84]">Maximum file size: 50MB</p>
</div>
<input accept=".png, .jpg, .jpeg, .dcm" className="hidden" id="file-upload" type="file"/>
<button className="mt-4 px-6 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white font-medium text-sm transition-colors shadow-lg shadow-primary/20" onClick={handleUpload} type="button">
                                    Browse Files
                                </button>
</label>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50">
<span className="material-symbols-outlined text-primary mt-0.5">privacy_tip</span>
<div>
<h4 className="text-sm font-semibold text-primary mb-1">HIPAA Compliance Notice</h4>
<p className="text-xs text-text-secondary-light dark:text-blue-200/70">All uploaded images are processed securely. Patient identifiers in DICOM metadata will be automatically anonymized before AI processing unless specified otherwise.</p>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col h-full">
<div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm flex flex-col h-full">
<div className="p-5 border-b border-border-light dark:border-border-dark">
<h3 className="font-bold text-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">person_add</span>
                                Patient Details
                            </h3>
</div>
<div className="p-6 flex-1 flex flex-col gap-6">
<div className="relative">
<label className="block text-sm font-medium mb-2 text-text-secondary-light dark:text-[#92a9c9]">Link Existing Patient (Optional)</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-secondary-light dark:text-[#586a84] text-[20px]">search</span>
<input className="w-full pl-10 h-11 bg-background-light dark:bg-[#111822] border border-border-light dark:border-[#324867] rounded-lg text-sm text-text-light dark:text-white placeholder:text-text-secondary-light dark:placeholder:text-[#586a84] focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all" placeholder="Search by name or ID..." type="text"/>
</div>
</div>
<div className="h-px bg-border-light dark:bg-[#233348] w-full"></div>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-sm font-medium mb-1.5 text-text-light dark:text-white">Full Name <span className="text-red-500">*</span></label>
<input className="w-full h-11 bg-background-light dark:bg-[#111822] border border-border-light dark:border-[#324867] rounded-lg px-4 text-sm text-text-light dark:text-white placeholder:text-text-secondary-light dark:placeholder:text-[#586a84] focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all" placeholder="Ex: John Doe" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-sm font-medium mb-1.5 text-text-light dark:text-white">Patient ID <span className="text-red-500">*</span></label>
<input className="w-full h-11 bg-background-light dark:bg-[#111822] border border-border-light dark:border-[#324867] rounded-lg px-4 text-sm text-text-light dark:text-white placeholder:text-text-secondary-light dark:placeholder:text-[#586a84] focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all" placeholder="PT-XXXX" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-sm font-medium mb-1.5 text-text-light dark:text-white">Date of Birth</label>
<input className="w-full h-11 bg-background-light dark:bg-[#111822] border border-border-light dark:border-[#324867] rounded-lg px-4 text-sm text-text-light dark:text-white placeholder:text-text-secondary-light dark:placeholder:text-[#586a84] focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all [color-scheme:light] dark:[color-scheme:dark]" type="date"/>
</div>
<div className="col-span-2">
<label className="block text-sm font-medium mb-1.5 text-text-light dark:text-white">Clinical Notes</label>
<textarea className="w-full min-h-[120px] bg-background-light dark:bg-[#111822] border border-border-light dark:border-[#324867] rounded-lg p-4 text-sm text-text-light dark:text-white placeholder:text-text-secondary-light dark:placeholder:text-[#586a84] focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all resize-none" placeholder="Enter symptoms, history, or specific areas to focus on..."></textarea>
</div>
</div>
<div className="flex flex-col gap-3 mt-auto pt-4">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-border-light dark:border-[#324867] bg-background-light dark:bg-[#111822] peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-all">
<span className="material-symbols-outlined text-white text-[16px] opacity-0 peer-checked:opacity-100">check</span>
</div>
<span className="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-light dark:group-hover:text-white transition-colors">High Priority Case</span>
</label>
</div>
</div>
<div className="p-5 border-t border-border-light dark:border-border-dark bg-background-light/50 dark:bg-[#111822]/50 rounded-b-xl flex gap-3">
<button className="flex-1 h-11 rounded-lg border border-border-light dark:border-[#324867] bg-transparent hover:bg-background-light dark:hover:bg-[#233348] text-text-light dark:text-white text-sm font-semibold transition-colors">
                                Cancel
                            </button>
<button className="flex-[2] h-11 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 group">
<span>Analyze Scan</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="w-full border-t border-border-light dark:border-[#233348] py-6 mt-10">
<div className="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary-light dark:text-[#586a84]">
<p>© 2024 MedScan AI. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
<a className="hover:text-primary transition-colors" href="#">Support</a>
</div>
</div>
</footer>
        </section>
    )
}

export default ImageUpload


