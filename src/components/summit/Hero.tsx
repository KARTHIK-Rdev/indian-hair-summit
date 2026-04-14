import { useState, useEffect, useCallback, useRef } from "react";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";
import heroSlide6 from "@/assets/hero-slide-6.jpg";
import palaceImg from "@/assets/hero-slide-bangalore-palace.jpg";

const slides = [
  { image: heroSlide1, heading: "The Indian Hair\nEconomy Summit", sub: "Workshop | Certification | Networking" },
  { image: heroSlide2, heading: "Craft. Skill. Precision.", sub: "Where expertise meets opportunity" },
  { image: heroSlide3, heading: "Bangalore | Delhi | Mumbai", sub: "Connecting India's leading professionals" },
  { image: heroSlide4, heading: "A Growing Industry", sub: "Driven by innovation and demand" },
  { image: palaceImg, heading: "Heritage Meets Innovation", sub: "Rooted in culture, built for the future" },
  { image: heroSlide5, heading: "Shaping the Future", sub: "Be part of the next phase" },
  { image: heroSlide6, heading: "Join the Industry Platform", sub: null },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(0);
  const scrollY = useRef(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [paused, next]);

  // Parallax scroll tracking
  useEffect(() => {
    const onScroll = () => { scrollY.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Force re-render for parallax
  const [, setTick] = useState(0);
  useEffect(() => {
    let raf: number;
    const loop = () => {
      setTick((t) => t + 1);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const parallaxOffset = Math.min(scrollY.current * 0.3, 150);

  return (
    <section
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const diff = touchStart.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
      }}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            loading={i <= 1 ? "eager" : "lazy"}
            className="w-full h-full object-cover will-change-transform"
            style={{
              transform: i === current
                ? `scale(1.06) translateY(${parallaxOffset}px)`
                : "scale(1)",
              transition: "transform 8s cubic-bezier(0.25,0.1,0.25,1)",
            }}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/[0.38] z-[2]" />

      {/* Liquid glass bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[3] liquid-glass-edge" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            key={`h-${current}`}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.1] tracking-tight animate-fade-up whitespace-pre-line"
          >
            {slides[current].heading}
          </h1>

          {slides[current].sub && (
            <p
              key={`s-${current}`}
              className="mt-8 text-sm md:text-base text-white/70 uppercase tracking-[0.35em] font-body animate-fade-up"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              {slides[current].sub}
            </p>
          )}

          {current === slides.length - 1 && (
            <div className="mt-12 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
              <a
                href="https://rzp.io/rzp/wHwi3Cc"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn px-10 py-4 text-xs uppercase tracking-widest text-white font-medium hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500"
              >
                Register Now
              </a>
            </div>
          )}

          {current !== slides.length - 1 && (
            <div
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              <a
                href="https://rzp.io/rzp/wHwi3Cc"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn px-10 py-4 text-xs uppercase tracking-widest text-white font-medium hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500"
              >
                Register Now
              </a>
              <button
                onClick={() => document.getElementById("sponsorship")?.scrollIntoView({ behavior: "smooth" })}
                className="px-10 py-4 text-xs uppercase tracking-widest text-white/80 border border-white/20 hover:border-white/40 hover:text-white hover:scale-[1.02] transition-all duration-300"
              >
                Explore Sponsorship
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === current ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
