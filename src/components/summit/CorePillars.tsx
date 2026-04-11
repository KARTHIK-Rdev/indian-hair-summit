import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, Award, Users, TrendingUp, Lightbulb } from "lucide-react";

const pillars = [
  { icon: BookOpen, title: "Education & Skill Building", desc: "Workshops and masterclasses to elevate technical and business skills." },
  { icon: Award, title: "Certification & Credibility", desc: "Industry-recognized certifications that open new career pathways." },
  { icon: Users, title: "Networking & Community", desc: "Connect with peers, mentors, brands, and business leaders." },
  { icon: Lightbulb, title: "Innovation & Trends", desc: "First look at products and technologies redefining the industry." },
  { icon: TrendingUp, title: "Business Growth", desc: "Strategies and tools to help salons and brands scale sustainably." },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`group p-8 border border-border bg-background hover:border-accent/40 transition-all duration-500 ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: isVisible ? `${200 + i * 120}ms` : "0ms" }}
              >
                <Icon size={24} className="text-accent mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
