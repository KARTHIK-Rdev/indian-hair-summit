import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Networking() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl text-center">
        <p
          className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Networking
        </p>
        <h2
          className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Connections That Count
        </h2>
        <p
          className={`mt-8 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          The Summit is designed for meaningful interaction. Structured networking sessions, curated meetups, and collaborative environments ensure that every attendee leaves with valuable professional connections — from potential business partners and mentors to brand collaborators and peers.
        </p>
        <p
          className={`mt-6 text-muted-foreground leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Whether you're a salon owner looking to connect with product innovators, or a brand seeking to understand the needs of stylists — this is where those conversations happen.
        </p>
      </div>
    </section>
  );
}
