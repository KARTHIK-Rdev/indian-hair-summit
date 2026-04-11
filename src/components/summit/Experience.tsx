import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import groupImg from "@/assets/group-discussion.jpg";

const items = [
  "Hands-on Workshops",
  "Professional Certification",
  "Curated Networking",
  "Brand Engagement & Showcases",
];

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={groupImg}
              alt="Summit experience"
              className="w-full h-72 lg:h-[380px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p
              className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              The Experience
            </p>
            <h2
              className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              What You'll Experience
            </h2>
            <div className="space-y-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                  }`}
                  style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : "0ms" }}
                >
                  <span className="text-accent text-sm">✦</span>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
