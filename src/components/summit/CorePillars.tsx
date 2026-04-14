import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, Award, Users, TrendingUp, Lightbulb } from "lucide-react";

const pillars = [
  { icon: BookOpen, title: "Education" },
  { icon: Award, title: "Certification" },
  { icon: Users, title: "Networking" },
  { icon: Lightbulb, title: "Innovation" },
  { icon: TrendingUp, title: "Growth" },
];

export default function CorePillars() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Core Pillars
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            What Drives the Summit
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`glass-card w-36 h-36 rounded-xl flex flex-col items-center justify-center gap-3 hover:scale-[1.05] transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
              >
                <Icon size={28} className="text-accent" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-widest text-foreground font-medium">{p.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
