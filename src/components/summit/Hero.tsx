import { useEffect, useState, useCallback } from "react";

import d1 from "@/assets/dynamic/d1.jpeg";
import d2 from "@/assets/dynamic/d2.jpeg";
import d3 from "@/assets/dynamic/d3.jpeg";
import d4 from "@/assets/dynamic/d4.jpeg";
import d5 from "@/assets/dynamic/d5.jpeg";
import d6 from "@/assets/dynamic/d6.jpeg";
import d7 from "@/assets/dynamic/d7.jpeg";
import d8 from "@/assets/dynamic/d8.jpeg";
import d9 from "@/assets/dynamic/d9.jpeg";
import d10 from "@/assets/dynamic/d10.jpeg";
import d11 from "@/assets/dynamic/d11.jpeg";

const slides = [
  {
    image: d1,
    heading: "The Indian Hair\nEconomy Summit",
    sub: "Workshop  |  Certification  |  Networking",
  },
  {
    image: d2,
    heading: "Craft. Skill. Precision.",
    sub: "Where expertise meets opportunity",
  },
  {
    image: d3,
    heading: "Bangalore | Mumbai | Delhi | Kolkata",
    sub: "Connecting India's leading professionals",
  },
  {
    image: d4,
    heading: "A Growing Industry",
    sub: "Driven by innovation and demand",
  },
  {
    image: d5,
    heading: "Shaping the Future",
    sub: "Be part of the next phase",
  },
  {
    image: d6,
    heading: "Join the Industry Platform",
    cta: true,
  },
  {
    image: d7,
    heading: "Learn. Network. Grow.",
    sub: "India's premier hair business summit",
  },
  {
    image: d8,
    heading: "Bangalore",
    sub: "9th June 2026",
  },
  {
    image: d9,
    heading: "Mumbai",
    sub: "11th August 2026",
  },
  {
    image: d10,
    heading: "Delhi",
    sub: "13th October 2026",
  },
  {
    image: d11,
    heading: "Kolkata",
    sub: "8th December 2026",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 2000);
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
      <div className="absolute inset-0 bg-foreground/[0.45] z-[2]" />

      {/* Left / Right arrow buttons */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/25 border border-primary-foreground/20 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/25 border border-primary-foreground/20 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

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
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <button
                      onClick={() => scrollTo("register")}
                      className="bg-primary-foreground text-foreground px-10 py-4 text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform duration-300"
                    >
                      Register Now
                    </button>
                    <button
                      onClick={() => scrollTo("sponsorship")}
                      className="border border-primary-foreground/60 text-primary-foreground px-10 py-4 text-xs uppercase tracking-widest hover:bg-primary-foreground/10 transition-all duration-300"
                    >
                      Explore Sponsorship
                    </button>
                  </div>
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
            className={`h-1.5 rounded-full transition-all duration-500 ${current === i
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
