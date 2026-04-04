"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Container } from "../container";
import CountUp from "react-countup";

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Meals Served",
    description: "Hot meals delivered to families in need",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Lives Changed",
    description: "Individuals supported in our programs",
  },
  {
    value: 150,
    suffix: "+",
    label: "Communities",
    description: "Local communities reached worldwide",
  },
  {
    isFormat: true,
    value: 2_000_000,
    prefix: "$",  
    label: "Funds Raised",
    description: "Donations channeled to impactful causes",
  },
];

export function ImpactSection() {
  return (
    <section className="bg-secondary">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Every donation creates ripples of change. See how your support has
            made a difference.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {stats.map((stat) => (
            <Card key={stat.label} className="shadow-md text-center">
              <CardContent className="flex flex-col gap-2 p-4 sm:p-6">
                <CountUp
                  start={0}
                  end={stat.value}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  duration={3} 
                  formattingFn={(num) => {
                    let formatted = ''

                    if (num >= 1_000_000) {
                      const millions = num / 1_000_000;
                      formatted = millions.toFixed(1) + `${num > 1_000_000 ? 'M+' : ''}`
                    } else {
                      formatted = Math.floor(num).toLocaleString();
                    }

                    return `${stat?.prefix ?? ''}${formatted}${stat?.suffix ?? ''}`;
                  }}
                >
                  {({ countUpRef }) => (
                    <span
                      className="text-3xl font-bold text-primary md:text-4xl"
                      ref={countUpRef}
                    />
                  )}
                </CountUp>
                <span className="text-lg font-semibold text-foreground">
                  {stat.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.description}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
