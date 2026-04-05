import { Container } from "@/components/container";

export function WhyAndWho() {
  return (
    <section className="bg-secondary">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Who We Serve */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground">
              Who We Serve
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-lg shrink-0">•</span>
                <span className="text-secondary-foreground">Families struggling with food insecurity and basic needs</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-lg shrink-0">•</span>
                <span className="text-secondary-foreground">Individuals facing homelessness and lack of shelter</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-lg shrink-0">•</span>
                <span className="text-secondary-foreground">Children and youth in underfunded communities</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-lg shrink-0">•</span>
                <span className="text-secondary-foreground">Elderly and vulnerable populations without adequate support</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-lg shrink-0">•</span>
                <span className="text-secondary-foreground">Communities affected by natural disasters and crises</span>
              </li>
            </ul>
          </div>

          {/* Why We Do It */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground">
              Why We Do It
            </h2>
            <p className="text-lg text-secondary-foreground leading-relaxed">
              We believe that hope is contagious, and compassion is transformative. Every day, thousands of people in our communities face overwhelming challenges—from not knowing where their next meal will come from to living without a safe place to sleep. These aren&apos;t statistics to us; they&apos;re our neighbors, friends, and family members. We do this work because we refuse to accept a world where hardship defines a person&apos;s entire story. Through dedicated support and sustainable programs, we&apos;re building a future where everyone has the opportunity to rebuild, grow, and thrive. Your involvement in HopeFoundation isn&apos;t just about giving; it&apos;s about being part of a movement that restores dignity and creates lasting change.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
