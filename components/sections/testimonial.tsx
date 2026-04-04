const testimonials = [
  {
    quote: "When I lost my job, I didn't know how I would feed my children. HopeFoundation provided not just meals, but hope. They helped me get back on my feet and gave me the support I needed during my darkest days.",
    name: "Maria Santos",
    role: "Program Beneficiary",
    location: "New York"
  },
  {
    quote: "The scholarship program changed my life. I was able to finish my degree and now I'm giving back to my community.",
    name: "James Wilson",
    role: "Scholarship Recipient",
    location: "Chicago"
  },
  {
    quote: "After the flood destroyed our home, HopeFoundation was there within hours. Their emergency response team helped us rebuild not just our house, but our lives.",
    name: "Linda Chen",
    role: "Disaster Relief Recipient",
    location: "Houston"
  }
]

export function TestimonialSection() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Stories of Impact
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Real stories from real people whose lives have been transformed through your generosity.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
          {/* Featured testimonial - spans full height on left */}
          <div className="row-span-2 flex flex-col justify-between rounded-3xl bg-primary p-8 text-primary-foreground">
            <div>
              <span className="mb-6 block text-6xl font-serif leading-none opacity-50">&ldquo;</span>
              <blockquote className="mb-6">
                <p className="text-xl leading-relaxed text-pretty md:text-2xl">
                  {testimonials[0].quote}
                </p>
              </blockquote>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-14 shrink-0 rounded-full bg-primary-foreground/20" aria-label={`Photo of ${testimonials[0].name}`} />
              <div>
                <p className="text-lg font-semibold">{testimonials[0].name}</p>
                <p className="text-sm opacity-80">
                  {testimonials[0].role}, {testimonials[0].location}
                </p>
              </div>
            </div>
          </div>

          {/* Top right testimonial */}
          <div className="flex flex-col justify-between rounded-3xl border border-border bg-background p-6">
            <div>
              <span className="mb-3 block text-4xl font-serif leading-none text-primary">&ldquo;</span>
              <blockquote>
                <p className="leading-relaxed text-pretty text-foreground">
                  {testimonials[1].quote}
                </p>
              </blockquote>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="size-10 shrink-0 rounded-full bg-muted" aria-label={`Photo of ${testimonials[1].name}`} />
              <div>
                <p className="font-semibold text-foreground">{testimonials[1].name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[1].role}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom right testimonial */}
          <div className="flex flex-col justify-between rounded-3xl bg-secondary p-6">
            <div>
              <span className="mb-3 block text-4xl font-serif leading-none text-secondary-foreground/50">&ldquo;</span>
              <blockquote>
                <p className="leading-relaxed text-pretty text-secondary-foreground">
                  {testimonials[2].quote}
                </p>
              </blockquote>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="size-10 shrink-0 rounded-full bg-secondary-foreground/20" aria-label={`Photo of ${testimonials[2].name}`} />
              <div>
                <p className="font-semibold text-secondary-foreground">{testimonials[2].name}</p>
                <p className="text-sm text-secondary-foreground/70">
                  {testimonials[2].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
