import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import groupImg from "@/assets/group-discussion.jpg";
import trainingImg from "@/assets/training-session.jpg";
import coffeeImg from "@/assets/coffee-networking.jpg";

const items = [
  { label: "Workshops", image: trainingImg },
  { label: "Certification", image: groupImg },
  { label: "Networking", image: coffeeImg },
];

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            The Experience
          </p>
          <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            What Awaits You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${200 + i * 150}ms` : "0ms" }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Liquid glass hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 liquid-glass-overlay" />
              <div className="absolute inset-0 rounded-xl transition-shadow duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]" />
              <p className="absolute bottom-6 left-6 text-white text-sm uppercase tracking-widest font-medium z-[1]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
