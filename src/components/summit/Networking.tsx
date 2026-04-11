import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import coffeeImg from "@/assets/coffee-networking.jpg";
import groupImg from "@/assets/group-discussion.jpg";

export default function Networking() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p
            className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Networking
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Connections That Count
          </h2>
          <p
            className={`mt-4 text-muted-foreground max-w-xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Structured sessions and curated meetups ensure you leave with valuable professional connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div
            className={`overflow-hidden transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={coffeeImg}
              alt="Networking over coffee"
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={groupImg}
              alt="Group discussion"
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
