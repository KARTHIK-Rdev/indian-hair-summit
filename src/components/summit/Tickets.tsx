import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tickets = [
  {
    name: "General Pass",
    price: "₹2,999",
    features: [
      "Technician Certificate",
      "Full-day summit access",
      "All keynotes & panels",
      "Networking sessions",
      "Event materials & badge",
    ],
    highlighted: false,
    bmsLink: "https://in.bookmyshow.com/events/indian-hair-economy-summit-2026-2nd-editio/ET00495939",
    townscriptLink: "https://www.townscript.com/e/indian-hair-economy-summit-2026-2nd-edition-011441",
  },
  {
    name: "Premium Pass",
    price: "₹14,999",
    features: [
      "Salon Certificate",
      "Everything in General",
      "Workshop access (choose 2)",
      "Certification program",
      "Priority seating",
      "Exclusive lounge access",
    ],
    highlighted: true,
    bmsLink: "https://in.bookmyshow.com/events/indian-hair-economy-summit-2026-2nd-editio/ET00495939",
    townscriptLink: "https://www.townscript.com/e/indian-hair-economy-summit-2026-2nd-edition-011441",
  },
  {
    name: "VIP Pass",
    price: "₹49,999",
    features: [
      "Special Recognition",
      "Everything in Premium",
      "All workshops included",
      "VIP networking dinner",
      "1-on-1 mentor sessions",
      "Speaker meet & greet",
    ],
    highlighted: false,
    bmsLink: "https://in.bookmyshow.com/events/indian-hair-economy-summit-2026-2nd-editio/ET00495939",
    townscriptLink: "#",
  },
];

export default function Tickets() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            Tickets
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Choose Your Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tickets.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card p-8 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${t.highlighted
                  ? "border-accent/40 ring-1 ring-accent/20 shadow-lg"
                  : ""
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${200 + i * 150}ms` : "0ms" }}
            >
              {t.highlighted && (
                <p className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-4">
                  ★ Most Popular
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
              
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={t.bmsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3.5 rounded-lg text-[10px] sm:text-[11px] uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] ${t.highlighted
                      ? "bg-foreground text-background hover:bg-foreground/90 hover:shadow-xl"
                      : "border border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                    }`}
                >
                  Register via BookMyShow
                </a>
                <a
                  href={t.townscriptLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3.5 rounded-lg text-[10px] sm:text-[11px] uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] ${t.highlighted
                      ? "border border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
                      : "border border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                    }`}
                >
                  Register via Townscript
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
