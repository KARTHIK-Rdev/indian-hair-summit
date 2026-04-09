import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const details = [
  { icon: "📅", label: "Date", value: "September 2026" },
  { icon: "🕒", label: "Time", value: "10:00 AM – 6:00 PM" },
  { icon: "📍", label: "Locations", value: "Bangalore | Delhi | Mumbai" },
  { icon: "🎯", label: "Format", value: "Workshop | Certification | Networking" },
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
