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
  const touchStart = useRef(0);
  const scrollY = useRef(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
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
          )}
    </div>
      </div >

    {/* Dots */ }
    < div className = "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2" >
    {
      slides.map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i)}
          className={`h-1.5 rounded-full transition-all duration-500 ${current === i
              ? "w-8 bg-primary-foreground"
              : "w-1.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))
    }
      </div >
    </section >
  );
}
