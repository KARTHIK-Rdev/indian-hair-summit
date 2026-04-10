import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import exp1 from "@/assets/experience-1.jpg";
import exp2 from "@/assets/experience-2.jpg";

const experiences = [
  "Expert-led workshops on cutting, coloring, styling, and business",
  "Live demonstrations by national and international educators",
  "Professional certification programs",
  "Panel discussions on industry trends and growth",
  "Product and technology showcases",
  "Structured networking sessions",
  "Business strategy and salon management talks",
  "Awards and recognition for outstanding professionals",
];

export default function Experience() {
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
            The Experience
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            What You'll Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
          {/* Images */}
          <div
            className={`lg:col-span-1 flex flex-col gap-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img src={exp1} alt="Summit experience" className="w-full h-56 object-cover rounded-sm" />
            <img src={exp2} alt="Summit experience" className="w-full h-56 object-cover rounded-sm" />
          </div>

          {/* List */}
          <div className="space-y-4">
            {experiences.map((e, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                }`}
                style={{ transitionDelay: isVisible ? `${300 + i * 80}ms` : "0ms" }}
              >
                <span className="text-accent mt-0.5 text-sm">✦</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{e}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
