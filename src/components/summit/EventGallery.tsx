import { useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@/assets/event images/WhatsApp Image 2026-04-11 at 6.38.35 PM (1).jpeg";
import img2 from "@/assets/event images/WhatsApp Image 2026-04-11 at 6.38.35 PM.jpeg";
import img3 from "@/assets/event images/WhatsApp Image 2026-04-11 at 6.38.36 PM (1).jpeg";
import img4 from "@/assets/event images/WhatsApp Image 2026-04-11 at 6.38.36 PM.jpeg";
import img5 from "@/assets/event images/WhatsApp Image 2026-04-11 at 6.38.37 PM (1).jpeg";
import img6 from "@/assets/event images/WhatsApp Image 2026-04-11 at 6.38.37 PM (2).jpeg";
import img7 from "@/assets/event images/WhatsApp Image 2026-04-11 at 6.38.37 PM.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function EventGallery() {
  const { ref, isVisible } = useScrollAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-background border-y border-border overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <p
              className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Gallery
            </p>
            <h2
              className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Experience The Summit
            </h2>
          </div>
          
          <div className={`hidden md:flex gap-4 mt-6 md:mt-0 transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <button
              onClick={scrollPrev}
              className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        <div 
          className={`overflow-hidden transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} 
          ref={emblaRef}
        >
          <div className="flex gap-4">
            {images.map((src, i) => (
              <div
                key={i}
                className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] relative overflow-hidden rounded-sm group min-w-0"
              >
                <div className="aspect-[4/3] w-full">
                  <img
                    src={src}
                    alt={`Event image ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile controls */}
        <div className={`flex md:hidden justify-center gap-4 mt-8 transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <button
            onClick={scrollPrev}
            className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
