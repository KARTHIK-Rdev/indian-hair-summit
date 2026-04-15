import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";
import certificateImg from "@/assets/dpiit-certificate.jpg";

export default function DPIITRecognition() {
  const { ref, isVisible } = useScrollAnimation();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section
        ref={ref}
        className="py-20 md:py-28 bg-background"
      >
        <div
          className={`container mx-auto px-6 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            {/* Left — Content */}
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                Government of India Certified
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                DPIIT Recognized Startup
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Emilio Beaufort Private Limited is a DPIIT-recognized startup,
                incorporated on 17 February 2025 and officially recognized under
                the Fashion Industry. This recognition strengthens our foundation
                as a credible, growth-focused Indian company building with
                long-term vision.
              </p>
              <div className="pt-2 space-y-1.5">
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground/60 font-medium">Certificate No:</span>{" "}
                  DIPP255220
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground/60 font-medium">Recognized under:</span>{" "}
                  Startup India (DPIIT)
                </p>
              </div>
            </div>

            {/* Right — Certificate */}
            <div
              className="cursor-pointer group"
              onClick={() => setLightboxOpen(true)}
            >
              <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]">
                <img
                  src={certificateImg}
                  alt="DPIIT Certificate of Recognition — DIPP255220"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-[10px] text-muted-foreground text-center mt-3 uppercase tracking-widest">
                Click to view full certificate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={certificateImg}
            alt="DPIIT Certificate of Recognition — Full View"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
