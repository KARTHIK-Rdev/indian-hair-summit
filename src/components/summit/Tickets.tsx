import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tickets = [
  {
    name: "Standard Pass",
    price: "₹2,999",
    features: [
      "Full-day summit access",
      "All keynotes & panels",
      "Networking sessions",
      "Event materials & badge",
      "Lunch & refreshments",
    ],
    highlighted: false,
  },
  {
    name: "Professional Pass",
    price: "₹5,999",
    features: [
      "Everything in Standard",
      "Workshop access (choose 2)",
      "Certification program",
      "Priority seating",
      "Exclusive lounge access",
    ],
    highlighted: true,
  },
  {
    name: "VIP Pass",
    price: "₹9,999",
    features: [
      "Everything in Professional",
      "All workshops included",
      "VIP networking dinner",
      "1-on-1 mentor sessions",
      "Speaker meet & greet",
    ],
    highlighted: false,
  },
];

export default function Tickets() {
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
            Tickets
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Choose Your Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tickets.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 rounded-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                t.highlighted
                  ? "border-2 border-accent bg-background shadow-lg"
                  : "border border-border bg-background"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${200 + i * 150}ms` : "0ms" }}
            >
              {t.highlighted && (
                <p className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-4">
                  Most Popular
                </p>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground">{t.name}</h3>
              <p className="text-3xl font-display font-bold text-foreground mt-2">{t.price}</p>
              <p className="text-xs text-muted-foreground mt-1">per person</p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent text-xs mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
                className={`mt-8 w-full py-3 text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] ${
                  t.highlighted
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Register Interest
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
