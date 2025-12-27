
const ImageUploadNavBar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border-light dark:border-[#233348] bg-surface-light/95 dark:bg-[#111822]/95 backdrop-blur supports-[backdrop-filter]:bg-surface-light/60 dark:supports-[backdrop-filter]:bg-[#111822]/60 px-4 sm:px-10 py-3">
<div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center size-8 rounded bg-primary/10 dark:bg-primary/20 text-primary">
<span className="material-symbols-outlined text-2xl">radiology</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">PneumoScan</h2>
</div>
<nav className="hidden md:flex flex-1 justify-end items-center gap-8">
<div className="flex items-center gap-6">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
<a className="text-sm font-medium hover:text-primary transition-colors text-primary" href="#">New Scan</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">History</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Settings</a>
</div>
<div className="h-6 w-px bg-border-light dark:bg-[#233348]"></div>
<div className="flex items-center gap-3">
<div className="text-right hidden lg:block">
<p className="text-xs font-semibold">Dr. Sarah Jenning</p>
<p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark">Radiologist</p>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-border-light dark:border-[#233348]" data-alt="Profile picture of a female doctor" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQr7JmseAodCy8d993rwoYiWN2XaAK6Ckhp-dZVlwxbmC6h07Q68ILVgMG7TzEB7vslTTOm4IufBv1wYTAdL3zki5JdFSEg2hhYJZVBzfhFvM8O_58hLSP_sVFdUtVS1vlq134PBtQaq1Pv2fbuUpfdftbeQKVCqXwchwvChqI-m8KE527PR3f9LiyMZrFcz0ym2wY3SiE8Qnt5eRz-pcScISbyvvcGQ3aYYOQy70vwcYQ6xcEo2xToXXkOdz5prIoAbxrjnt7J3yC")'}}></div>
</div>
</nav>
<button className="md:hidden p-2 text-text-secondary-light dark:text-text-secondary-dark">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</header>
    )
}

export default ImageUploadNavBar