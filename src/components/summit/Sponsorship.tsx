import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import handshakeImg from "@/assets/handshake.jpg";

const benefits = [
  "Premium brand visibility across all summit cities",
  "Direct lead generation and buyer access",
  "Strategic partnerships with industry leaders",
  "Premium positioning as an industry authority",
];

export default function Sponsorship() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sponsorship" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={handshakeImg}
              alt="Partnership and sponsorship"
              className="w-full h-72 lg:h-[420px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p
              className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Sponsorship
            </p>
            <h2
              className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Partner With the Summit
            </h2>
            <p
              className={`text-muted-foreground mb-8 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Align your brand with India's most focused professional hair industry platform.
            </p>

            <div className="space-y-3 mb-10">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: isVisible ? `${300 + i * 80}ms` : "0ms" }}
                >
                  <span className="text-accent text-xs mt-1">◆</span>
                  <p className="text-sm text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-foreground/90 hover:scale-[1.02] transition-all duration-300"
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
