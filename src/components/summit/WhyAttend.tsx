import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    title: "Learn from the Best",
    desc: "Access workshops and sessions led by top industry professionals, international educators, and brand innovators.",
  },
  {
    title: "Get Certified",
    desc: "Earn recognized certifications that elevate your professional credibility and career opportunities.",
  },
  {
    title: "Build Connections",
    desc: "Network with salon owners, brand leaders, educators, and key decision-makers shaping the industry.",
  },
  {
    title: "Grow Your Business",
    desc: "Discover new tools, technologies, and strategies to scale your salon, brand, or career.",
  },
  {
    title: "Stay Ahead",
    desc: "Get firsthand exposure to trends, innovations, and shifts defining the future of hair in India.",
  },
  {
    title: "Be Part of the Movement",
    desc: "Join a growing community committed to professionalizing and elevating India's hair economy.",
  },
];

export default function WhyAttend() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
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
            Six Reasons to Be There
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`group p-8 bg-background border border-border rounded-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
