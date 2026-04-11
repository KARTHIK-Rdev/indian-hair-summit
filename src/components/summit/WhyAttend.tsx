import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  "Stronger education from top industry professionals",
  "Certification credibility that elevates careers",
  "Business growth strategies for salons and brands",
  "Industry access to key decision-makers and innovators",
];

export default function WhyAttend() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <p
            className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Why Attend
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Why the Summit Matters
          </h2>
        </div>

        <div className="space-y-4 max-w-xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <span className="text-accent text-xs mt-1">◆</span>
              <p className="text-muted-foreground leading-relaxed">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
