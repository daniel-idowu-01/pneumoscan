import CoreValueCard from './CoreValueCard'

const CoreValuesSection = () => {
  return (
    <div className="w-full flex justify-center py-12 px-4 md:px-10 lg:px-40">
      <div className="layout-content-container flex flex-col flex-1">
        <div className="flex flex-col gap-10 md:px-10">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
              Our Core Values
            </h2>

            <h1 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-[720px]">
              Why We Exist
            </h1>

            <p className="text-slate-400 text-base leading-relaxed max-w-[600px]">
              We are dedicated to supporting medical professionals with tools that enhance accuracy
              and efficiency, removing the noise so experts can focus on the signal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CoreValueCard
              icon="target"
              title="Unmatched Accuracy"
              description="Our models are trained on over 1 million verified datasets to ensure precision that rivals top specialists."
            />

            <CoreValueCard
              icon="bolt"
              title="Instant Analysis"
              description="Get results in seconds, allowing for faster triage and decision making in critical care environments."
            />

            <CoreValueCard
              icon="verified_user"
              title="Patient Privacy"
              description="Built with HIPAA compliance at the core to ensure patient data is never compromised or mishandled."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoreValuesSection
