import { useEffect, useState, useCallback, useRef } from "react";
import d1 from "@/assets/dynamic/d1.jpeg";
import d3 from "@/assets/dynamic/d3.jpeg";
import d4 from "@/assets/dynamic/d4.jpeg";
import d5 from "@/assets/dynamic/d5.jpeg";
import d6 from "@/assets/dynamic/d6.jpeg";
import d7 from "@/assets/dynamic/d7.jpeg";
import d8 from "@/assets/dynamic/d8.jpeg";
import d9 from "@/assets/dynamic/d9.jpg";
import d10 from "@/assets/dynamic/d10.jpg";
import d11 from "@/assets/dynamic/d11.jpg";
import d12 from "@/assets/dynamic/d12.jpeg";
import d13 from "@/assets/dynamic/d13.jpeg";
import d14 from "@/assets/dynamic/d14.jpeg";
import d15 from "@/assets/dynamic/d15.jpeg";

const slides = [
  {
    image: d1,
    heading: "The Indian Hair\nEconomy Summit",
    sub: "Workshop  |  Certification  |  Networking",
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
  {
    image: d12,
    heading: "Industry Leaders",
    sub: "Learn from global experts",
  },
  {
    image: d13,
    heading: "Discover Innovation",
    sub: "Latest trends and techniques",
  },
  {
    image: d14,
    heading: "Scale Your Business",
    sub: "Exclusive insights for salon owners",
  },
  {
    image: d15,
    heading: "Be Part of the Future",
    cta: true,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(0);
  const scrollY = useRef(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 2000);
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

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative h-screen overflow-hidden"
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

          {slides[current].cta && (
            <button
              onClick={() => scrollTo("register")}
              className="mt-10 bg-primary-foreground text-foreground px-10 py-4 text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform duration-300"
            >
              Register Interest
            </button>
          )}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
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
