import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  "Premium brand visibility across all summit cities",
  "Direct access to salon owners, chains, and industry leaders",
  "On-stage speaking and demonstration opportunities",
  "Product showcase and sampling zones",
  "Pre-event and post-event digital promotion",
  "Inclusion in all summit communications and media",
  "Networking with key decision-makers and buyers",
  "Data insights and attendee engagement reports",
];

const partners = [
  "Title Sponsor",
  "Co-Sponsor",
  "Education Partner",
  "Product Partner",
  "Technology Partner",
  "Media Partner",
  "Certification Partner",
  "Hospitality Partner",
];

export default function Sponsorship() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sponsorship" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Sponsorship
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Partner With the Summit
          </h2>
          <p
            className={`mt-4 text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Align your brand with India's most focused professional hair industry platform. Gain visibility, build relationships, and position yourself as an industry leader.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Benefits */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Sponsorship Benefits</h3>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: isVisible ? `${300 + i * 60}ms` : "0ms" }}
                >
                  <span className="text-accent text-xs mt-1">◆</span>
                  <p className="text-sm text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Categories */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Partner Categories</h3>
            <div className="grid grid-cols-2 gap-3">
              {partners.map((p, i) => (
                <div
                  key={p}
                  className={`p-4 border border-border rounded-sm text-center hover:border-accent/40 hover:shadow-sm transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? `${300 + i * 80}ms` : "0ms" }}
                >
                  <p className="text-xs font-medium text-foreground tracking-wide">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-foreground/90 hover:scale-[1.02] transition-all duration-300"
          >
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
}
