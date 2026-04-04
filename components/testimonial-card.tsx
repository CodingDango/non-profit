import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  profile: string
  location?: string
}

export function TestimonialCard({ quote, name, role, location, profile}: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border shadow-sm bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4">
        <span className="text-4xl font-serif leading-none text-primary">&ldquo;</span>
        <blockquote>
          <p className="text-lg leading-relaxed text-pretty text-card-foreground">
            {quote}
          </p>
        </blockquote>
      </div>
      <div className="flex items-center gap-4">
        <div className='relative w-12 h-12 shrink-0 rounded-full overflow-hidden'>
          <Image 
            fill
            sizes="48px"
            className="object-cover"
            alt={`Photo of ${name}`} 
            src={profile}
          />
        </div>
        <div>
          <p className="font-semibold text-card-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">
            {role}{location && `, ${location}`}
          </p>
        </div>
      </div>
    </div>
  )
}
