import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "What is The Indian Hair Economy Summit?",
    a: "It is a premier industry platform that brings together salon owners, technicians, educators, brands, and service providers for workshops, certifications, and networking focused on India's professional hair industry.",
  },
  {
    q: "Who should attend the Summit?",
    a: "Salon owners, salon chain operators, hair technicians, educators, product brands, distributors, equipment providers, investors, franchise developers, and industry media.",
  },
  {
    q: "Where will the Summit be held?",
    a: "The Summit will be held across three major cities — Bangalore, Delhi, and Mumbai — in September 2026.",
  },
  {
    q: "What is included in the ticket?",
    a: "Depending on the pass you select, you'll get access to keynotes, panels, workshops, certifications, networking sessions, meals, and exclusive experiences.",
  },
  {
    q: "How can I become a sponsor or partner?",
    a: "You can register your interest through the form on this page or contact us directly at summit@emiliobeaufort.com. Our team will share the sponsorship deck and available categories.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. Professional and VIP pass holders will receive industry-recognized certifications upon completing designated workshops and programs.",
  },
  {
    q: "Is there a group discount?",
    a: "Yes, group discounts are available for teams of 5 or more. Please reach out to us for customized pricing.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <p
            className={`text-sm uppercase tracking-[0.4em] font-bold text-accent mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            FAQ
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className={`border border-border rounded-sm bg-background px-6 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms" }}
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
