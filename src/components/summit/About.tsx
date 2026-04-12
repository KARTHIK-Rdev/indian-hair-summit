import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import trainingImg from "@/assets/training-session.jpg";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <p
              className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              About
            </p>
            <h2
              className={`font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Redefining India's Hair Industry
            </h2>
            <p
              className={`mt-6 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              A platform uniting salon owners, brands, and industry leaders to drive education, certification, and business growth across India's professional hair economy.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={trainingImg}
              alt="Professional networking at the summit"
              className="w-full h-80 lg:h-[420px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
