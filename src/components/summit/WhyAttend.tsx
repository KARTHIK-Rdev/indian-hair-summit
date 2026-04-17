import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Award, TrendingUp, Network } from "lucide-react";

const reasons = [
  { label: "Stronger education", Icon: GraduationCap },
  { label: "Certification credibility", Icon: Award },
  { label: "Business growth", Icon: TrendingUp },
  { label: "Industry access", Icon: Network },
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
              className={`bg-white border border-border/50 shadow-sm p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-md transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#fdf5ed] flex items-center justify-center mb-4 md:mb-5">
                <r.Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />
              </div>
              <p className="text-base md:text-lg font-bold text-foreground">{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
