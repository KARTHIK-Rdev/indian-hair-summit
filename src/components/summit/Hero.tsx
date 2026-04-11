import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-portrait.jpg";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Dark overlay 35% */}
      <div className="absolute inset-0 bg-foreground/[0.35]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className={`text-xs uppercase tracking-[0.4em] text-primary-foreground/60 mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Workshop &nbsp;|&nbsp; Certification &nbsp;|&nbsp; Networking
        </p>

        <h1
          className={`font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight tracking-tight transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The Indian Hair
          <br />
          Economy Summit
        </h1>

        <p
          className={`mt-8 text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed font-body transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A premier platform shaping India's professional hair industry.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => scrollTo("register")}
            className="bg-primary-foreground text-foreground px-8 py-3.5 text-xs uppercase tracking-widest hover:scale-[1.02] transition-all duration-300"
          >
            Register Interest
          </button>
          <button
            onClick={() => scrollTo("sponsorship")}
            className="border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-primary-foreground/10 hover:scale-[1.02] transition-all duration-300"
          >
            Explore Sponsorship
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
