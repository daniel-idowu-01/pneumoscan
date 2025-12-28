import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="w-full px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-700 bg-linear-to-br from-[#1a2636] to-background-dark relative">
        <div className="relative flex flex-col items-center gap-6 p-10 text-center md:p-20">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to transform your diagnostic workflow?
          </h2>

          <p className="max-w-xl text-lg text-slate-300">
            Join thousands of radiologists using PneumoScan Analyze.
          </p>

          <Link href="/signup">
            <button className="h-12 rounded-lg bg-primary px-8 font-bold text-white hover:bg-blue-600 hover:scale-105 transition-all">
              Start Your Free Trial
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
