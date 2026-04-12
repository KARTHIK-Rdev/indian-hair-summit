import heroImg from "@/assets/hero-slide-1.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium hair model"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.1] tracking-tight animate-fade-up"
          >
            The Indian Hair
            <br />
            Economy Summit
          </h1>

          <p
            className="mt-8 text-sm md:text-base text-white/70 uppercase tracking-[0.35em] font-body animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            A premier platform shaping India's professional hair industry
          </p>

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
        </div>
      </div>
    </section>
  );
}
