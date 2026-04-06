"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Mail, MapPin, MessageCircle, Share2, Briefcase } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Header Section */}
      {/* Contact Form & Info Section */}
      <section className="bg-background">
        <Container>
          <div className="space-y-4">
            <h1 className="text-balance text-4xl md:text-5xl font-bold tracking-tight">
              Get In Touch
            </h1>
            <p className="text-pretty text-lg md:text-xl text-muted-foreground max-w-2xl">
              Have questions or want to learn more about HopeFoundation?
              We&apos;d love to hear from you. Reach out anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-[2fr_1.2fr] gap-12 py-12 md:py-24">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Socials */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <Card className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Contact Info
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Mail className="size-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a
                        href="mailto:hello@hopefoundation.org"
                        className="text-muted-foreground hover:text-primary"
                      >
                        hello@hopefoundation.org
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <MapPin className="size-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        123 Hope Street
                        <br />
                        Compassion City, CC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <MessageCircle className="size-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-primary"
                      >
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    aria-label="Share on Twitter"
                    className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Share2 className="size-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    aria-label="Our Instagram"
                    className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <MessageCircle className="size-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    aria-label="Our LinkedIn"
                    className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Briefcase className="size-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="bg-background">
        <Container>
          <div className="max-w-3xl mx-auto py-12 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about HopeFoundation
              </p>
            </div>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  How can I donate to HopeFoundation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  You can donate on our website through our secure donation
                  portal. We accept all major credit cards, bank transfers, and
                  recurring donations. Every contribution helps us continue our
                  mission.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Can I volunteer with HopeFoundation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely! We welcome volunteers of all skill levels. Whether
                  you&apos;re interested in hands-on community work or
                  professional services, there&apos;s a role for you. Contact us
                  to learn about current opportunities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Is HopeFoundation a registered nonprofit?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, HopeFoundation is a 501(c)(3) registered nonprofit
                  organization. We maintain full transparency with our
                  financials and impact reports available upon request.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  How is my donation used?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We believe in efficient resource allocation. Approximately 85%
                  of donations go directly to programs, while 15% covers
                  administrative and operational costs. Detailed breakdowns are
                  available in our annual impact report.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">
                  What communities does HopeFoundation serve?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We serve multiple communities including low-income
                  neighborhoods, homeless populations, families in crisis, and
                  at-risk youth. Our programs are designed to meet the diverse
                  needs of the people we support.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>
    </>
  );
}
