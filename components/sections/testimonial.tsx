import { Container } from "../container"

export function TestimonialSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
      <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <span className="text-5xl text-primary">&quot;</span>
          </div>
          
          <blockquote className="mb-8">
            <p className="text-balance text-xl font-medium leading-relaxed text-foreground md:text-3xl lg:text-4xl">
              When I lost my job, I didn&apos;t know how I would feed my children. HopeFoundation provided not just meals, but hope. They helped me get back on my feet, and today I have a stable job and a bright future.
            </p>
          </blockquote>
          
          <div className="flex flex-col items-center gap-4">
            <div className="size-16 rounded-full bg-muted" aria-label="Testimonial author photo" />
            <div>
              <p className="font-semibold text-foreground">Maria Santos</p>
              <p className="text-sm text-muted-foreground">Program Beneficiary, New York</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
