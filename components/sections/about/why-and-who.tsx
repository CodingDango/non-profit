import { Container } from "@/components/container";
import Image from "next/image";

export function WhyAndWho() {
  return (
    <section className="bg-background">
      <Container>
        <div className="flex flex-col gap-20">
          {/* Who We Serve */}
          <div className="grid md:grid-cols-2 lg:grid-cols-[450px_1fr] gap-8 sm:gap-12">
            <div className="w-full min-h-64 h-full bg-secondary rounded-3xl relative overflow-hidden shadow-md ">
              <Image fill className="object-cover" src={'/serving.jpg'} alt='some text' sizes="1080px"/>
            </div>
            <WhoTextComponent/>

          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-[450px_1fr] gap-8 sm:gap-12">
            <div className="w-full min-h-64 h-full bg-secondary rounded-3xl relative overflow-hidden shadow-md ">
              <Image fill className="object-cover" src={'/working.jpg'} alt='some text' sizes="1080px"/>
            </div>
            <WhyTextComponent/>
          </div>
          
        </div>
      </Container>
    </section>
  );
}

function WhoTextComponent() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground">
        Who We Serve
      </h2>
      <ul className="space-y-3">
        <li className="flex gap-4">
          <span className="text-primary font-bold text-lg shrink-0">•</span>
          <span className="text-secondary-foreground">
            Families struggling with food insecurity and basic needs
          </span>
        </li>
        <li className="flex gap-4">
          <span className="text-primary font-bold text-lg shrink-0">•</span>
          <span className="text-secondary-foreground">
            Individuals facing homelessness and lack of shelter
          </span>
        </li>
        <li className="flex gap-4">
          <span className="text-primary font-bold text-lg shrink-0">•</span>
          <span className="text-secondary-foreground">
            Children and youth in underfunded communities
          </span>
        </li>
        <li className="flex gap-4">
          <span className="text-primary font-bold text-lg shrink-0">•</span>
          <span className="text-secondary-foreground">
            Elderly and vulnerable populations without adequate support
          </span>
        </li>
        <li className="flex gap-4">
          <span className="text-primary font-bold text-lg shrink-0">•</span>
          <span className="text-secondary-foreground">
            Communities affected by natural disasters and crises
          </span>
        </li>
      </ul>
    </div>
  );
}

function WhyTextComponent() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground">
        Why We Do It
      </h2>
      <ul className="space-y-3">
        <li className="flex gap-3">
          <span className="text-primary font-bold text-lg shrink-0">✓</span>
          <span className="text-secondary-foreground">
            <span className="font-bold">Restore Dignity</span>: Every person deserves to be
            treated with respect
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold text-lg shrink-0">✓</span>
          <span className="text-secondary-foreground">
            <span className="font-bold">Build Community</span>: Real change happens when we stand
            together
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold text-lg shrink-0">✓</span>
          <span className="text-secondary-foreground">
            <span className="font-bold">Create Lasting Change</span>: Sustainable solutions that
            transform lives
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold text-lg shrink-0">✓</span>
          <span className="text-secondary-foreground">
            <span className="font-bold">Empower Lives</span>: Equip individuals with resources
            and opportunities
          </span>
        </li>
      </ul>
    </div>
  );
}