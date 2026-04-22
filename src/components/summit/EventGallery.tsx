import { useCallback, useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Auto-import all .jpeg files from the event images directory via Vite
const imageModules = import.meta.glob("@/assets/event images/*.jpeg", { eager: true, import: "default" });
const images = Object.values(imageModules) as string[];

// Sort images numerically based on their filenames (e.g., g1.jpeg, g2.jpeg, ..., g10.jpeg)
images.sort((a, b) => {
  const matchA = a.match(/g(\d+)\.jpeg$/);
  const matchB = b.match(/g(\d+)\.jpeg$/);
  const numA = matchA ? parseInt(matchA[1], 10) : 0;
  const numB = matchB ? parseInt(matchB[1], 10) : 0;
  return numA - numB;
});

export default function EventGallery() {
  const { ref, isVisible } = useScrollAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [autoplay, setAutoplay] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    const id = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [emblaApi, autoplay]);

  return (
    <section className="py-24 bg-background border-y border-border overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <p className={`text-sm uppercase tracking-[0.4em] font-bold text-accent mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              Gallery
            </p>
            <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Experience The Summit
            </h2>
          </div>
          <div className={`hidden md:flex gap-4 mt-6 md:mt-0 transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <button onClick={scrollPrev} className="p-3 border border-border rounded-full hover:bg-muted transition-colors" aria-label="Previous slide">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={scrollNext} className="p-3 border border-border rounded-full hover:bg-muted transition-colors" aria-label="Next slide">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          ref={emblaRef}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="flex gap-4">
            {images.map((src, i) => (
              <div
                key={i}
                className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] relative overflow-hidden rounded-xl group min-w-0"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] w-full relative">
                  <img
                    src={src}
                    alt={`Event image ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
                  />
                  {/* Liquid glass hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 liquid-glass-overlay" />
                  {/* Shadow lift on hover */}
                  <div className="absolute inset-0 rounded-xl transition-shadow duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`flex md:hidden justify-center gap-4 mt-8 transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <button onClick={scrollPrev} className="p-3 border border-border rounded-full hover:bg-muted transition-colors" aria-label="Previous slide">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={scrollNext} className="p-3 border border-border rounded-full hover:bg-muted transition-colors" aria-label="Next slide">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
