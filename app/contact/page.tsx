'use client';

import { useState } from 'react';
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Mail, MapPin, Send, Heart, Users } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqItems = [
    {
      question: 'How can I volunteer with HopeFoundation?',
      answer: 'We welcome passionate volunteers! Visit our volunteer page to learn about current opportunities, fill out an application, and join our community of changemakers.',
    },
    {
      question: 'How are donations used?',
      answer: '100% of donations go directly to our programs. We maintain transparency in all our operations and provide detailed annual reports on how funds are utilized.',
    },
    {
      question: 'Can I sponsor a program?',
      answer: 'Yes! We offer program sponsorship opportunities for individuals and businesses. Contact us to discuss customized sponsorship packages.',
    },
    {
      question: 'What is your nonprofit status?',
      answer: 'HopeFoundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible.',
    },
    {
      question: 'How do I stay updated with your work?',
      answer: 'Subscribe to our newsletter on this page to receive monthly updates about our programs, impact stories, and upcoming events.',
    },
  ];

  return (
    <main className="bg-background">
      {/* Contact Section: Title + Paragraph + Form */}
      <section className="bg-background">
        <Container>
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-balance text-5xl md:text-6xl font-bold tracking-tight text-primary">
                Get In Touch
              </h1>
              <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
                Have questions or want to partner with us? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-3xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-3xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="rounded-3xl"
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
                  className="w-full px-6 py-4 bg-secondary text-foreground placeholder-muted-foreground border border-input rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary min-h-32"
                />
              </div>

              <Button type="submit" className="w-full rounded-3xl py-6 text-base font-semibold">
                <Send className="mr-2 size-5" />
                Send Message
              </Button>
            </form>

            {/* Quick Contact Info */}
            <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-border">
              <div className="flex gap-4 items-start">
                <Mail className="size-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@hopefoundation.org</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="size-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">123 Hope Street, Community City, ST 12345</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/50">
        <Container>
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-secondary-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Can&apos;t find the answer you&apos;re looking for? Feel free to contact us directly.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="hover:text-primary py-4 font-semibold text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>
    </main>
  );
}
