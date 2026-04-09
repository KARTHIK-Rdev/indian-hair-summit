import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Vision() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="vision" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl text-center">
        <p
          className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Our Vision
        </p>
        <h2
          className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Building the Future of India's Hair Industry
        </h2>
        <p
          className={`mt-8 text-muted-foreground leading-relaxed text-base md:text-lg transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          India's hair and beauty industry is one of the fastest-growing in the world — yet it remains largely unorganized. The Indian Hair Economy Summit envisions a future where professionals are empowered with world-class education, businesses are built on strong foundations, and the industry is recognized for its true economic and cultural significance.
        </p>
        <p
          className={`mt-6 text-muted-foreground leading-relaxed text-base md:text-lg transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          We are building more than a summit — we are building a movement. One that brings credibility, structure, and growth to every professional and business in the Indian hair economy.
        </p>
      </div>
    </section>
  );
}
