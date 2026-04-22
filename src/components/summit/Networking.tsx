import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import handshakeImg from "@/assets/event images/g9.jpeg";
import coffeeImg from "@/assets/coffee-networking.jpg";
import groupImg from "@/assets/group-discussion.jpg";

const cards = [
  { label: "Partnerships", image: handshakeImg },
  { label: "Growth", image: coffeeImg },
  { label: "Collaboration", image: groupImg },
];

export default function Networking() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className={`text-sm uppercase tracking-[0.4em] font-bold text-accent mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            Networking
          </p>
          <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Connections That Count
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((c, i) => (
            <div
              key={c.label}
              className={`glass-card rounded-xl overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${200 + i * 120}ms` : "0ms" }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={c.image}
                  alt={c.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 liquid-glass-overlay" />
              </div>
              <div className="p-5 text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  {c.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
