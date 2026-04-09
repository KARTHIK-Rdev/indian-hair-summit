import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl text-center">
        <p
          className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          About the Summit
        </p>
        <h2
          className={`font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Redefining India's Professional Hair Industry
        </h2>
        <p
          className={`mt-8 text-muted-foreground leading-relaxed text-base md:text-lg transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          The Indian Hair Economy Summit is a first-of-its-kind industry platform designed to bring together the most influential voices in India's professional hair industry. From independent salon owners and growing chains to skilled technicians, educators, product innovators, and service providers — the Summit creates a focused environment for learning, collaboration, and business growth.
        </p>
        <p
          className={`mt-6 text-muted-foreground leading-relaxed text-base md:text-lg transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Through expert-led workshops, professional certifications, and meaningful networking, the Summit equips attendees with the knowledge, tools, and connections needed to thrive in an evolving market. It is not just an event — it is the beginning of an organized, empowered hair economy in India.
        </p>
      </div>
    </section>
  );
}
