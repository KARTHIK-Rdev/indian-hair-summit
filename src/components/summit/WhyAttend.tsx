import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import eduIcon from "@/assets/icon/stronger education.png";
import certIcon from "@/assets/icon/certification credibility.png";
import growthIcon from "@/assets/icon/business growth.png";
import accessIcon from "@/assets/icon/industry access.png";

const reasons = [
  { label: "Stronger education", icon: eduIcon },
  { label: "Certification credibility", icon: certIcon },
  { label: "Business growth", icon: growthIcon },
  { label: "Industry access", icon: accessIcon },
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
              className={`glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <img src={r.icon} alt={r.label} className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <p className="text-sm text-foreground font-medium">{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
