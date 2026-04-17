import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function DPIITRecognition() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div
        className={`container mx-auto px-6 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium">
              Government of India Certified
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-2">
              DPIIT Recognized Startup
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Indian Hair economy Summit is a DPIIT-recognized startup,
              incorporated on 17 February 2025 and officially recognized under
              the Fashion Industry. This recognition strengthens our foundation
              as a credible, growth-focused Indian company building with
              long-term vision.
            </p>
            <div className="pt-6 space-y-2 flex flex-col items-center">
              <p className="text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-md">
                <span className="text-foreground/80 font-medium">Certificate No:</span>{" "}
                DIPP255220
              </p>
              <p className="text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-md">
                <span className="text-foreground/80 font-medium">Recognized under:</span>{" "}
                Startup India (DPIIT)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
