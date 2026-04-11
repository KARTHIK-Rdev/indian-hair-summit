import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const audience = [
  { title: "Salon Owners", desc: "Independent and chain operators" },
  { title: "Technicians & Stylists", desc: "Skilled professionals seeking growth" },
  { title: "Educators & Academies", desc: "Training leaders and institutions" },
  { title: "Brands & Products", desc: "Companies driving innovation" },
  { title: "Distributors & Dealers", desc: "Supply chain professionals" },
  { title: "Investors & Franchisors", desc: "Capital and expansion partners" },
  { title: "Equipment Providers", desc: "Technology and tools" },
  { title: "Media & Influencers", desc: "Industry voices and creators" },
];

export default function WhoAttend() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="attend" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Who Should Attend
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Built for Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {audience.map((a, i) => (
            <div
              key={a.title}
              className={`p-6 border border-border bg-background text-center hover:border-accent/40 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + i * 60}ms` : "0ms" }}
            >
              <p className="text-sm font-medium text-foreground">{a.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
