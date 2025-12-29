import { TestimonialCardProps } from "@/types/props"

const TestimonialCard = ({ quote, name, role, avatarUrl }: TestimonialCardProps) => {
  return (
    <div className="bg-surface-dark border border-border-light p-8 rounded-xl relative">
      <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-4">
        format_quote
      </span>

      <p className="text-slate-300 text-lg leading-relaxed mb-6 italic relative z-10">“{quote}”</p>

      <div className="flex items-center gap-4">
        <div
          className="size-12 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('${avatarUrl}')` }}
        />
        <div>
          <p className="text-white font-bold">{name}</p>
          <p className="text-slate-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
