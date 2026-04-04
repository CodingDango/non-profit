interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  location?: string
}

export function TestimonialCard({ quote, name, role, location }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border shadow-sm bg-card p-6">
      <div className="flex items-start gap-4">
        <span className="text-4xl font-serif leading-none text-primary">&ldquo;</span>
        <blockquote>
          <p className="text-lg leading-relaxed text-pretty text-card-foreground">
            {quote}
          </p>
        </blockquote>
      </div>
      <div className="flex items-center gap-4">
        <div 
          className="size-12 shrink-0 rounded-full bg-muted" 
          aria-label={`Photo of ${name}`} 
        />
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
