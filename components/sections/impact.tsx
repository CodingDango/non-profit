import { ImpactCard } from "@/components/ui/impact-card"

const stats = [
  {
    value: "10,000+",
    label: "Meals Provided",
    description: "Hot meals delivered to families in need",
    imageAlt: "Volunteer handing out food to community members"
  },
  {
    value: "5,000+",
    label: "Lives Changed",
    description: "Individuals supported through our programs",
    imageAlt: "People smiling after receiving support"
  },
  {
    value: "150+",
    label: "Communities Reached",
    description: "Local communities impacted worldwide",
    imageAlt: "Map showing community locations"
  },
  {
    value: "$2M+",
    label: "Funds Raised",
    description: "Donations channeled to impactful causes",
    imageAlt: "Donors contributing to the cause"
  }
]

export function ImpactSection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Every donation creates ripples of change. See how your support has made a difference.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {stats.map((stat) => (
            <ImpactCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              imageAlt={stat.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
