import { TestimonialCard } from "@/components/testimonial-card";
import { Container } from "../container";

const testimonials = [
  {
    quote:
      "When I lost my job, I didn't know how I would feed my children. HopeFoundation provided not just meals, but hope. They helped me get back on my feet and gave me the support I needed during my darkest days.",
    name: "Maria Santos",
    role: "Program Beneficiary",
    location: "New York",
  },
  {
    quote:
      "The scholarship program changed my life. I was able to finish my degree and now I'm giving back to my community.",
    name: "James Wilson",
    role: "Scholarship Recipient",
    location: "Chicago",
  },
  {
    quote:
      "After the flood destroyed our home, HopeFoundation was there within hours. Their emergency response team helped us rebuild not just our house, but our lives.",
    name: "Linda Chen",
    role: "Disaster Relief Recipient",
    location: "Houston",
  },
];

export function TestimonialSection() {
  return (
    <section className="bg-background">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-32">
          {/* Sticky headline */}
          <div className="lg:sticky lg:top-24 lg:h-fit lg:w-96 lg:shrink-0 text-center sm:text-start">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Stories of Impact
            </h2>
            <p className="text-muted-foreground">
              Real stories from real people whose lives have been transformed
              through your generosity.
            </p>
          </div>

          {/* Vertical stack of testimonials */}
          <div className="flex-1 flex flex-col gap-8 justify-end">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
