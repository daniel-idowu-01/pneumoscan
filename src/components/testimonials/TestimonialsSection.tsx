import TestimonialCard from './TestimonialCard'
import { TestimonialsSectionProps } from '@/types/props'

const TestimonialsSection = ({
  title = 'Trusted by Leading Institutions',
  testimonials,
}: TestimonialsSectionProps) => {
  return (
    <div className="w-full flex justify-center py-20 px-4 md:px-10 lg:px-40">
      <div className="layout-content-container flex flex-col flex-1 md:px-10">
        <h2 className="text-white text-2xl font-bold leading-tight mb-8 text-center">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
