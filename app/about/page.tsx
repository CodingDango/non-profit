import { Container } from "@/components/container";
import { Header } from "@/components/sections/about/header";
import { WhyAndWho } from "@/components/sections/about/why-and-who";
import { HowWeWork } from "@/components/sections/about/how-we-work";

export default function AboutPage() {
  return (
    <>
      <Header />
      <WhyAndWho />
      <HowWeWork />
    </>
  );
}
