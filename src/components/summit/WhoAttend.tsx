import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const audience = [
  { title: "Salon Owners", desc: "Independent and chain operators" },
  { title: "Stylists", desc: "Skilled professionals" },
  { title: "Educators", desc: "Training leaders" },
  { title: "Brands", desc: "Product companies" },
  { title: "Distributors", desc: "Supply chain" },
  { title: "Investors", desc: "Capital partners" },
  { title: "Equipment", desc: "Tech & tools" },
  { title: "Media", desc: "Industry voices" },
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
              className={`glass-card p-6 md:p-8 rounded-xl text-center hover:scale-[1.02] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + i * 60}ms` : "0ms" }}
            >
              <p className="text-base md:text-lg font-medium text-foreground">{a.title}</p>
              <p className="text-sm md:text-base text-muted-foreground mt-2">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
