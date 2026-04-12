import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cityImg from "@/assets/hero-slide-4.jpg";

export default function Vision() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="vision" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={cityImg}
              alt="Bangalore cityscape"
              className="w-full h-80 lg:h-[420px] object-cover rounded-xl"
            />
          </div>

          <div>
            <p
              className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Our Vision
            </p>
            <h2
              className={`font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Shaping the Future of India's Hair Industry
            </h2>
            <p
              className={`mt-6 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Building a movement that brings credibility, structure, and growth to every professional in the Indian hair economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
