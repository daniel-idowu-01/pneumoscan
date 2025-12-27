export type StatItem = {
  icon: string
  value: string
  label: string
}

export type HeroSectionProps = {
  title: string
  subtitle: string
  imageUrl: string
}

export type CoreValueCardProps = {
  icon: string
  title: string
  description: string
}

export type TeamMember = {
  name: string
  role: string
  imageUrl: string
  alt: string
}

export type TeamSectionProps = {
  title: string
  subtitle: string
  members: TeamMember[]
}

export type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  avatarUrl: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  avatarUrl: string
}

export type TestimonialsSectionProps = {
  title?: string
  testimonials: Testimonial[]
}

export type ContactInputProps = {
  label: string
  placeholder: string
  type?: string
  optional?: boolean
}
