import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  "Stronger education",
  "Certification credibility",
  "Business growth",
  "Industry access",
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

        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`glass-card p-6 rounded-xl text-center transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <span className="text-accent text-lg">◆</span>
              <p className="text-sm text-foreground mt-2 font-medium">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
