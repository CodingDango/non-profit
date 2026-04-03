import { Button } from "@/components/ui/button";
import { Container } from "../container";
import { Menu } from 'lucide-react';
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background h-full min-h-144 lg:min-h-192">
      <Image
        fill
        src={"/hero-image.jpg"}
        alt="Hero image"
        className="absolute object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_0%,_rgba(0,0,0,0.4)_70%,_rgba(0,0,0,0.9)_100%)]" />

      <Container className="relative flex items-center h-full min-h-144 lg:min-h-192">
        <div className="text-center sm:text-start flex flex-col gap-8 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Together, We Can Change Lives
            </h1>
            <p className="text-pretty text-lg text-primary-foreground md:text-xl">
              Join us in our mission to bring hope and support to communities in
              need. Every contribution makes a lasting impact.
            </p>
          </div>
          <div className="flex gap-4 justify-center sm:justify-start">
            <Button size={"xl"} className="rounded-lg">
              Donate Now
            </Button>
            <Button size={"xl"} variant="outline" className="rounded-lg">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
