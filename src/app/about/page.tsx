import NavBar from "@/components/headers/NavBar"

const About = () => {
    return(<>
    <NavBar />
    
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="w-full flex justify-center py-5 px-4 md:px-10 lg:px-40">
<div className="layout-content-container flex flex-col flex-1">
<div className="@container">
<div className="flex flex-col gap-6 py-10 @[480px]:gap-8 @[864px]:flex-row items-center px-10">
<div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center flex-1">
<div className="flex flex-col gap-2 text-left">
<h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                                        Empowering Radiologists with Precision AI
                                    </h1>
<h2 className="text-slate-400 text-lg font-normal leading-relaxed">
                                        Bridging the gap between cutting-edge deep learning and clinical excellence to improve patient outcomes worldwide.
                                    </h2>
</div>
<div className="flex-wrap gap-3 flex">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Our Mission</span>
</button>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-border-dark hover:bg-slate-700 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]">
<span className="truncate">View Case Studies</span>
</button>
</div>
</div>
<div className="w-full aspect-video bg-cover bg-center rounded-xl overflow-hidden shadow-2xl border border-border-light flex-1 relative group" data-alt="Abstract visualization of a glowing blue neural network overlaying a human chest x-ray" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxQcmjf_vr7jtOQkCPQ71FiRwGR_lM68u3EyDb2fXrWQ7E127ED1Y6rioSZMWpnpaKzTaFZx7x6cuA4AGMq0H4wIkNuyzG48khZyUbixwFa5t1PaiOnjtQb6mhUhlttTJuVWWzUSsBIysCq2JrJLzuM3hj6vfEOtf1AASuE3wR5AX6Wecjd3VzKAm9omKEj14VS_FqhjXpqK-unVrJCT_ksEBezXnHLRvwspPrMz1F4KP69iILbN2Pld02XKiRlYerek4RhmAfCM9F')"}}>
<div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full flex justify-center py-5 bg-surface-dark border-y border-border-dark">
<div className="layout-content-container flex flex-col flex-1 px-4 md:px-10 lg:px-40">
<div className="flex flex-wrap gap-4 py-8 justify-between">
<div className="flex min-w-[158px] flex-1 flex-col gap-2 items-center text-center">
<span className="material-symbols-outlined text-primary text-4xl mb-2">check_circle</span>
<p className="text-white tracking-light text-3xl font-bold leading-tight">99.8%</p>
<p className="text-slate-400 text-sm font-medium leading-normal">Diagnostic Accuracy</p>
</div>
<div className="w-px bg-border-light hidden md:block"></div>
<div className="flex min-w-[158px] flex-1 flex-col gap-2 items-center text-center">
<span className="material-symbols-outlined text-primary text-4xl mb-2">imagesmode</span>
<p className="text-white tracking-light text-3xl font-bold leading-tight">50k+</p>
<p className="text-slate-400 text-sm font-medium leading-normal">Scans Processed</p>
</div>
<div className="w-px bg-border-light hidden md:block"></div>
<div className="flex min-w-[158px] flex-1 flex-col gap-2 items-center text-center">
<span className="material-symbols-outlined text-primary text-4xl mb-2">apartment</span>
<p className="text-white tracking-light text-3xl font-bold leading-tight">200+</p>
<p className="text-slate-400 text-sm font-medium leading-normal">Partner Hospitals</p>
</div>
</div>
</div>
</div>
<div className="w-full flex justify-center py-12 px-4 md:px-10 lg:px-40">
<div className="layout-content-container flex flex-col flex-1">
<div className="flex flex-col gap-10">
<div className="flex flex-col gap-4 text-center items-center">
<h2 className="text-primary text-sm font-bold tracking-widest uppercase">Our Core Values</h2>
<h1 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-[720px]">
                                Why We Exist
                            </h1>
<p className="text-slate-400 text-base font-normal leading-relaxed max-w-[600px]">
                                We are dedicated to supporting medical professionals with tools that enhance accuracy and efficiency, removing the noise so experts can focus on the signal.
                            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-1 gap-4 rounded-xl border border-border-light bg-surface-dark p-6 flex-col hover:border-primary/50 transition-colors group">
<div className="size-12 rounded-lg bg-background-dark flex items-center justify-center border border-border-light group-hover:border-primary/30 transition-colors">
<span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">target</span>
</div>
<div className="flex flex-col gap-2">
<h2 className="text-white text-lg font-bold leading-tight">Unmatched Accuracy</h2>
<p className="text-text-muted text-sm font-normal leading-relaxed">Our models are trained on over 1 million verified datasets to ensure precision that rivals top specialists.</p>
</div>
</div>
<div className="flex flex-1 gap-4 rounded-xl border border-border-light bg-surface-dark p-6 flex-col hover:border-primary/50 transition-colors group">
<div className="size-12 rounded-lg bg-background-dark flex items-center justify-center border border-border-light group-hover:border-primary/30 transition-colors">
<span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">bolt</span>
</div>
<div className="flex flex-col gap-2">
<h2 className="text-white text-lg font-bold leading-tight">Instant Analysis</h2>
<p className="text-text-muted text-sm font-normal leading-relaxed">Get results in seconds, allowing for faster triage and decision making in critical care environments.</p>
</div>
</div>
<div className="flex flex-1 gap-4 rounded-xl border border-border-light bg-surface-dark p-6 flex-col hover:border-primary/50 transition-colors group">
<div className="size-12 rounded-lg bg-background-dark flex items-center justify-center border border-border-light group-hover:border-primary/30 transition-colors">
<span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">verified_user</span>
</div>
<div className="flex flex-col gap-2">
<h2 className="text-white text-lg font-bold leading-tight">Patient Privacy</h2>
<p className="text-text-muted text-sm font-normal leading-relaxed">Built with HIPAA compliance at the core to ensure patient data is never compromised or mishandled.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full flex justify-center py-16 px-4 md:px-10 lg:px-40 bg-surface-dark border-t border-border-dark">
<div className="layout-content-container flex flex-col flex-1">
<div className="flex flex-col gap-10">
<div className="flex flex-row justify-between items-end">
<div className="flex flex-col gap-2">
<h2 className="text-white text-3xl font-bold leading-tight">Meet the Experts</h2>
<p className="text-slate-400">The medical and technical minds behind MedScan AI.</p>
</div>
<button className="hidden md:flex text-primary font-bold text-sm items-center gap-1 hover:text-white transition-colors">
                                View all team <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex flex-col gap-3 group">
<div className="w-full aspect-[4/5] rounded-xl bg-cover bg-center overflow-hidden border border-border-light grayscale group-hover:grayscale-0 transition-all duration-300" data-alt="Portrait of Dr. Sarah Chen, Chief Medical Officer, wearing a white coat" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXhaHQ3nh2oQokdeaCElVqpBwoTVvuUQHoJ8Wp2CvCdhz6kUwN-RuW3OnEfC-fiLD8JIW2X47PIUuQLvqqRpb3kPWx5y5fXJMv-IATxVQrGvAkPhsT66qYFELwq_zxQzj-VNbES8VOzIsUGXA-SXQg5dcr3l2_DZtnlPqV3KqLFmSZnBKF1nIm9ehDxwxtgBRaSIH3I9Rr1WXNvpnY5kJrS0yrYKKgykmyKO2rlIIp15jDyH9H9dygEjO36GVnBcDuY4agPLCV_2uo')"}}>
</div>
<div>
<h3 className="text-white font-bold text-lg">Dr. Sarah Chen</h3>
<p className="text-primary text-sm font-medium">Chief Medical Officer</p>
</div>
</div>
<div className="flex flex-col gap-3 group">
<div className="w-full aspect-[4/5] rounded-xl bg-cover bg-center overflow-hidden border border-border-light grayscale group-hover:grayscale-0 transition-all duration-300" data-alt="Portrait of James Wilson, PhD, Lead AI Researcher, wearing glasses" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDI83Dj14Wzztyh9pq6Ax8sjqu4Y1-tdQ-ZgjricFbGGKoUQCeWNXYWqVy-YwsCDm31hc6rD_62oSMzeUA3MHZVlw_oPuzcfq3CmxFvlCLFlVpjdbPqDgg80pOPTPVKsvLlkspjjOop1R9qxIj5SAvAOkwkLsW9TSPRtqfjMb8QMKzHT-uJ4ufZHIjQxKcuJNfMGRbNjobKAO6X14wRByduuohjvxay-lSyS6XLlGmXKbxQrxRedgxlMZnJRsu2N726IRNFbgqnst9p')"}}>
</div>
<div>
<h3 className="text-white font-bold text-lg">James Wilson, PhD</h3>
<p className="text-primary text-sm font-medium">Head of AI Research</p>
</div>
</div>
<div className="flex flex-col gap-3 group">
<div className="w-full aspect-[4/5] rounded-xl bg-cover bg-center overflow-hidden border border-border-light grayscale group-hover:grayscale-0 transition-all duration-300" data-alt="Portrait of Dr. Emily Rodriguez, Clinical Director, smiling" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1oJEsJOrF7yyMgjPRq_L4Nop3rE4SWqK4GxmIfkWA192bMtsIQ4fxxhlunb6s9DiKb3te7MuHExzTuhon6GSE0OtYEY8z4ajzVV4_Ug3-NDJHltR75ziD5adOCLI_omlJ_sKqgbu5UIBujoOXYUWoRpyPvFclSBJy1Q2DTJ_VPCqtgiWLB3OD5VhwEh1_0etLJgyBzFfO3x8SpxNCEO9XErcsQ5hLcHvxbA61KhLqepj01ETnM0SZBEQfVbVRxayu6mIif6KkG3vw')"}}>
</div>
<div>
<h3 className="text-white font-bold text-lg">Dr. Emily Rodriguez</h3>
<p className="text-primary text-sm font-medium">Clinical Director</p>
</div>
</div>
<div className="flex flex-col gap-3 group">
<div className="w-full aspect-[4/5] rounded-xl bg-cover bg-center overflow-hidden border border-border-light grayscale group-hover:grayscale-0 transition-all duration-300" data-alt="Portrait of Michael Chang, CTO, in a modern office setting" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4v2W_6w4tEIWsA-JKILCSuqz-GCS-PGEY2lXPfk4EmbVtexlMbzEOdLCP-M0q6UZzY-o7EPUq2YYZV1AcN5MC3UydcakLxf5WyukVdcWdL3imti1OQ9q1qQzH0_7kokoN54P-6gCK2ASYVIkgjed9chSJVdjhYt87M_n3jX7Ozh3y6oOLuxR7-AhaHIlFyPtXJZimhIVGgV2086S6HKoz6yIwlKEXc_g-pAvEB7w-HCTw0DHOtvfHg1ix1BUNCEmORbora9CwUzbn')"}}>
</div>
<div>
<h3 className="text-white font-bold text-lg">Michael Chang</h3>
<p className="text-primary text-sm font-medium">CTO</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full flex justify-center py-20 px-4 md:px-10 lg:px-40">
<div className="layout-content-container flex flex-col flex-1">
<h2 className="text-white text-2xl font-bold leading-tight mb-8 text-center">Trusted by Leading Institutions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-surface-dark border border-border-light p-8 rounded-xl relative">
<span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-4">format_quote</span>
<p className="text-slate-300 text-lg leading-relaxed mb-6 italic relative z-10">
                                "MedScan AI has become an indispensable second pair of eyes in our clinic. The speed at which we can now triage critical cases has improved our patient outcomes significantly."
                            </p>
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-cover bg-center" data-alt="Portrait of Dr. A. Smith" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB62mkZqDE4fMmntbHYiZHDpQ4ClPvJVDr5ra2WL31ESsKRD5zKTICvIbQ_FngmKgdOIhMygSWobytYlT53ulx8_sNMZRMKunKXAZoKL-54gx013VzbjtzqyRneuMd84-RaOtB6eYIb-WAiZVIPorAdMgNFBWgnebBcQvMcRb3yCb8YtcCNYQVhDy_0BoLqCPDxqaV8OyiEMJcZEdcp5v0_4Fbi8kS7mscp4KUGWlp3RxU8_eKMIyEGWT8TFgoFiFsnwWUYgNFWI4Uv')"}}></div>
<div>
<p className="text-white font-bold">Dr. Anthony Smith</p>
<p className="text-slate-500 text-sm">Head of Radiology, Metro General</p>
</div>
</div>
</div>
<div className="bg-surface-dark border border-border-light p-8 rounded-xl relative">
<span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-4">format_quote</span>
<p className="text-slate-300 text-lg leading-relaxed mb-6 italic relative z-10">
                                "The integration was seamless. Unlike other tools that disrupt our workflow, MedScan fits right into our PACS system and provides value from day one."
                            </p>
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-cover bg-center" data-alt="Portrait of Dr. L. Ray" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDN6eFa1I0ljPt_TA9ETg_Lwmtnfur1Wv-CYa956xHc-K0xIHimyiE03TWpcH2Y_WiRdYxNVGrc5BZAHQ9R1IhBEl7T9cfRjWIWwwrtPsXHxmMxaXnRy1Nnf42PDDJjVkR2CYfSLYeZE6ohzKm4rIcfpRMlITW59vXmOP9-19x2BQKZ75RfmG5YFwvFPcbdQQP2JW5PrwulbUGxY6O9nuuJvSF059udyPL23D13SeQZ0VewFNJaEl4RUW7IWQp9o8eufWthwikxBfve')"}}></div>
<div>
<p className="text-white font-bold">Dr. Lisa Ray</p>
<p className="text-slate-500 text-sm">Chief of Staff, St. Mary's Hospital</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full flex justify-center py-20 px-4 md:px-10 lg:px-40 bg-gradient-to-b from-surface-dark to-background-dark border-t border-border-dark">
<div className="layout-content-container flex flex-col items-center max-w-[600px] flex-1 text-center gap-6">
<h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">Ready to modernize your diagnostics?</h2>
<p className="text-slate-400 text-lg">Join 200+ hospitals already using MedScan AI to improve patient care.</p>
<div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
<button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Start Free Trial</span>
</button>
<button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent border border-border-light hover:bg-surface-dark transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]">
<span className="truncate">Contact Sales</span>
</button>
</div>
<div className="flex gap-6 mt-8 opacity-50 grayscale">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">security</span>
<span className="text-xs font-bold text-white">HIPAA COMPLIANT</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">lock</span>
<span className="text-xs font-bold text-white">SOC2 CERTIFIED</span>
</div>
</div>
</div>
</div>
<footer className="w-full border-t border-border-dark py-8 bg-background-dark">
<div className="flex flex-col md:flex-row justify-center items-center gap-8 text-slate-500 text-sm">
<span>© 2024 MedScan AI Inc.</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
</div>
</footer>
</div>
</div>
    </>)
}

export default About