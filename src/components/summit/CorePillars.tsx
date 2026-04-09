import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    title: "Education & Skill Building",
    desc: "Hands-on workshops, masterclasses, and sessions designed to elevate technical and business skills.",
  },
  {
    title: "Certification & Credibility",
    desc: "Industry-recognized certifications that set professionals apart and open new career pathways.",
  },
  {
    title: "Networking & Community",
    desc: "A powerful environment for building connections with peers, mentors, brands, and business leaders.",
  },
  {
    title: "Innovation & Trends",
    desc: "First look at emerging products, technologies, and trends redefining the hair economy.",
  },
  {
    title: "Business Growth",
    desc: "Strategies, tools, and insights to help salon owners and brands scale sustainably.",
  },
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
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group p-8 border border-border rounded-sm bg-background hover:border-accent/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-500 ${
                i === 2 ? "md:col-span-2 lg:col-span-1" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${200 + i * 120}ms` : "0ms" }}
            >
              <div className="w-8 h-0.5 bg-accent mb-6 group-hover:w-12 transition-all duration-300" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
