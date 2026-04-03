import { Button } from "@/components/ui/button"
import { Container } from "../container"

export function CTASection() {
  return (
    <section className="bg-primary">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Ready to Make a Difference?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-primary-foreground/80">
            Your support can transform lives. Whether you donate, volunteer, or spread the word, every action counts toward building a better tomorrow.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-56! sm:w-auto rounded-lg px-8 py-6 text-base font-semibold"
            >
              Donate Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-56! sm:w-auto rounded-lg border-primary-foreground/30 bg-transparent px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
        </Container>
    </section>
  )
}
