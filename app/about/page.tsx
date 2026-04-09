import { AboutHero } from "@/components/sections/about/about-hero";
import { WhyAndWho } from "@/components/sections/about/why-and-who";
import { HowWeWork } from "@/components/sections/about/how-we-work";
import CoreValues from "@/components/sections/about/core-values";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HowWeWork />
      <WhyAndWho />
      <CoreValues />
    </>
  );
}
