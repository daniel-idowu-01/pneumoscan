import AboutStats from '@/components/about/AboutStats'
import CoreValuesSection from '@/components/core-value/CoreValueSection'
import Footer from '@/components/Footer'
import NavBar from '@/components/headers/NavBar'
import HeroSection from '@/components/about/HeroSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import { teamMembers, testimonials } from '@/utils/data'
import Link from 'next/link'

const About = () => {
  return (
    <>
      <NavBar />

      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <HeroSection
            title="Empowering Radiologists with Precision AI"
            subtitle="Bridging the gap between cutting-edge deep learning and clinical excellence to improve patient outcomes worldwide."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCxQcmjf_vr7jtOQkCPQ71FiRwGR_lM68u3EyDb2fXrWQ7E127ED1Y6rioSZMWpnpaKzTaFZx7x6cuA4AGMq0H4wIkNuyzG48khZyUbixwFa5t1PaiOnjtQb6mhUhlttTJuVWWzUSsBIysCq2JrJLzuM3hj6vfEOtf1AASuE3wR5AX6Wecjd3VzKAm9omKEj14VS_FqhjXpqK-unVrJCT_ksEBezXnHLRvwspPrMz1F4KP69iILbN2Pld02XKiRlYerek4RhmAfCM9F"
          />

          <AboutStats />

          <CoreValuesSection />

          <TeamSection
            title="Meet the Experts"
            subtitle="The medical and technical minds behind MedScan AI."
            members={teamMembers}
          />

          <TestimonialsSection testimonials={testimonials} />

          <div className="w-full flex justify-center py-20 px-4 md:px-10 lg:px-40 bg-linear-to-b from-surface-dark to-background-dark border-t border-border-dark">
            <div className="layout-content-container flex flex-col items-center max-w-[600px] flex-1 text-center gap-6">
              <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">
                Ready to modernize your diagnostics?
              </h2>
              <p className="text-slate-400 text-lg">
                Join 200+ hospitals already using MedScan AI to improve patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
                <Link href="/signup">
                  <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Start Free Trial</span>
                  </button>
                </Link>

                <Link href="/contact-us">
                  <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent border border-border-light hover:bg-surface-dark transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Contact Sales</span>
                  </button>
                </Link>
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

          <Footer />
        </div>
      </div>
    </>
  )
}

export default About
