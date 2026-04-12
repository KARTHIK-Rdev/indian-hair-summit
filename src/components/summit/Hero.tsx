import { useEffect, useState, useCallback } from "react";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import slide4 from "@/assets/hero-slide-4.jpg";
import slide5 from "@/assets/hero-slide-5.jpg";
import slide6 from "@/assets/hero-slide-6.jpg";

const slides = [
  {
    image: slide1,
    heading: "The Indian Hair\nEconomy Summit",
    sub: "Workshop  |  Certification  |  Networking",
  },
  {
    image: slide2,
    heading: "Craft. Skill. Precision.",
    sub: "Where expertise meets opportunity",
  },
  {
    image: slide3,
    heading: "Bangalore | Mumbai | Delhi | Kolkata",
    sub: "Connecting India's leading professionals",
  },
  {
    image: slide4,
    heading: "A Growing Industry",
    sub: "Driven by innovation and demand",
  },
  {
    image: slide5,
    heading: "Shaping the Future",
    sub: "Be part of the next phase",
  },
  {
    image: slide6,
    heading: "Join the Industry Platform",
    cta: true,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [paused, next]);

  // Swipe support
  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        setCurrent((p) =>
          diff > 0 ? (p + 1) % slides.length : (p - 1 + slides.length) % slides.length
        );
      }
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide backgrounds */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: current === i ? 1 : 0, zIndex: current === i ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-out"
            style={{
              backgroundImage: `url(${s.image})`,
              transform: current === i ? "scale(1.06)" : "scale(1)",
            }}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/[0.38] z-[2]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          {slides.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out px-6"
              style={{
                opacity: current === i ? 1 : 0,
                transform: current === i ? "translateY(0)" : "translateY(16px)",
                pointerEvents: current === i ? "auto" : "none",
              }}
            >
              <div className="max-w-4xl mx-auto">
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight tracking-tight whitespace-pre-line">
                  {s.heading}
                </h1>

                {s.sub && (
                  <p className="mt-6 text-sm md:text-base text-primary-foreground/70 uppercase tracking-[0.3em] font-body">
                    {s.sub}
                  </p>
                )}

                {s.cta && (
                  <button
                    onClick={() => scrollTo("register")}
                    className="mt-10 bg-primary-foreground text-foreground px-10 py-4 text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform duration-300"
                  >
                    Register Interest
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === i
                ? "w-8 bg-primary-foreground"
                : "w-1.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
