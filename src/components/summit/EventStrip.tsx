import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const details = [
  { icon: "📍", label: "Bangalore", value: "9th June 2026" },
  { icon: "📍", label: "Mumbai", value: "11 Aug 2026" },
  { icon: "📍", label: "Delhi", value: "13 Oct 2026" },
  { icon: "📍", label: "Kolkata", value: "8 Dec 2026" },
];

export default function EventStrip() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-surface py-6 border-y border-border">
      <div
        className={`container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {details.map((d) => (
          <div key={d.label} className="text-center">
            <span className="text-lg">{d.icon}</span>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{d.label}</p>
            <p className="text-sm font-medium text-foreground mt-0.5">{d.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
