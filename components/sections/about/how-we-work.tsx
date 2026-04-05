import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Lightbulb, Home } from "lucide-react";

const programs = [
  {
    title: "Emergency Food Assistance",
    description: "Providing hot meals and nutritious food packages to families in immediate need, ensuring no one goes hungry.",
    icon: Heart,
  },
  {
    title: "Community Support Network",
    description: "Building strong community connections and peer support groups to help individuals feel less alone in their struggles.",
    icon: Users,
  },
  {
    title: "Skills & Education",
    description: "Offering job training, mentorship, and educational programs to help people build sustainable futures.",
    icon: Lightbulb,
  },
  {
    title: "Housing Solutions",
    description: "Working to provide safe shelter, housing assistance, and resources to help people rebuild stable living situations.",
    icon: Home,
  },
];

export function HowWeWork() {
  return (
    <section className="bg-background">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-primary md:text-5xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Our programs are designed to meet immediate needs while building pathways to long-term stability and hope.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Card key={program.title} className="shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="size-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
