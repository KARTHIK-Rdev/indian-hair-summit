import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cityImg from "@/assets/hero-slide-4.jpg";

export default function Vision() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="vision" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative overflow-hidden rounded-xl group">
              <img
                src={cityImg}
                alt="Bangalore cityscape"
                loading="lazy"
                className="w-full h-80 lg:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 liquid-glass-overlay" />
              <div className="absolute inset-0 rounded-xl transition-shadow duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]" />
            </div>
          </div>

          <div>
            <p className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              Our Vision
            </p>
            <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Shaping the Future of India's Hair Industry
            </h2>
            <p className={`mt-6 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Building a movement that brings credibility, structure, and growth to every professional in the Indian hair economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
