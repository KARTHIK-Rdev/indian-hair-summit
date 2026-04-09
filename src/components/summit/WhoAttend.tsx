import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const audience = [
  "Salon Owners & Co-founders",
  "Salon Chain Operators",
  "Hair Technicians & Stylists",
  "Educators & Academy Heads",
  "Product & Brand Companies",
  "Distributors & Dealers",
  "Equipment & Technology Providers",
  "Beauty & Wellness Investors",
  "Franchise Developers",
  "Industry Media & Influencers",
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {audience.map((a, i) => (
            <div
              key={a}
              className={`text-center p-6 border border-border bg-background rounded-sm hover:border-accent/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + i * 60}ms` : "0ms" }}
            >
              <p className="text-xs font-medium text-foreground tracking-wide leading-snug">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
