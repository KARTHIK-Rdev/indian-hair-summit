import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Store, Scissors, Presentation, Building2, Truck, CircleDollarSign, Wrench, Mic } from "lucide-react";

const audience = [
  { title: "Salon Owners", desc: "Independent and chain operators", Icon: Store },
  { title: "Stylists", desc: "Skilled professionals", Icon: Scissors },
  { title: "Educators", desc: "Training leaders", Icon: Presentation },
  { title: "Brands", desc: "Product companies", Icon: Building2 },
  { title: "Distributors", desc: "Supply chain", Icon: Truck },
  { title: "Investors", desc: "Capital partners", Icon: CircleDollarSign },
  { title: "Equipment", desc: "Tech & tools", Icon: Wrench },
  { title: "Media", desc: "Industry voices", Icon: Mic },
];

export default function WhoAttend() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="attend" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Who Should Attend
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Built for Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {audience.map((a, i) => (
            <div
              key={a.title}
              className={`bg-white border border-border/50 shadow-sm p-6 md:p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + i * 60}ms` : "0ms" }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#fdf5ed] flex items-center justify-center mb-4 md:mb-5">
                <a.Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />
              </div>
              <p className="text-base md:text-lg font-bold text-foreground">{a.title}</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1.5">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
