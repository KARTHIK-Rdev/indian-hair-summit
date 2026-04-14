import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import handshakeImg from "@/assets/handshake.jpg";

const benefits = [
  "Brand visibility across all summit cities",
  "Direct lead generation & buyer access",
  "Strategic industry partnerships",
  "Premium positioning as an authority",
];

export default function Sponsorship() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sponsorship" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative overflow-hidden rounded-xl group">
              <img
                src={handshakeImg}
                alt="Partnership"
                loading="lazy"
                className="w-full h-72 lg:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 liquid-glass-overlay" />
              <div className="absolute inset-0 rounded-xl transition-shadow duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]" />
            </div>
          </div>

          <div>
            <p className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              Sponsorship
            </p>
            <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Partner With Us
            </h2>
            <div className="space-y-3 mb-10">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{ transitionDelay: isVisible ? `${300 + i * 80}ms` : "0ms" }}
                >
                  <span className="text-accent text-xs mt-1">◆</span>
                  <p className="text-sm text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-widest rounded-lg hover:bg-foreground/90 hover:scale-[1.02] transition-all duration-300"
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
