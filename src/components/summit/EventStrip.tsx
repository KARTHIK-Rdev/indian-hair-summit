import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const events = [
  { day: "9TH",  month: "JUNE",     year: "2026", city: "BANGALORE" },
  { day: "11TH", month: "AUGUST",   year: "2026", city: "MUMBAI"    },
  { day: "13TH", month: "OCTOBER",  year: "2026", city: "DELHI"     },
  { day: "8TH",  month: "DECEMBER", year: "2026", city: "KOLKATA"   },
];

export default function EventStrip() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="border-y border-[#C4A97D]/30 bg-[#F0E7D5] overflow-hidden"
    >
      {/* Label */}
      <div
        className={`text-center pt-8 pb-2 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#212842]/50 font-medium mb-1">
          Upcoming
        </p>
        <h2 className="font-display text-xl md:text-2xl font-bold tracking-[0.15em] uppercase text-[#212842]">
          Exhibition Dates
        </h2>
        {/* Decorative divider */}
        <div className="mx-auto mt-3 w-12 h-px bg-gradient-to-r from-transparent via-[#C4A97D] to-transparent" />
      </div>

      {/* Date cards */}
      <div
        className={`grid grid-cols-2 md:grid-cols-4 transition-all duration-700 delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {events.map((e, i) => (
          <div
            key={e.city}
            className="group relative flex flex-col items-center justify-center py-8 px-4 cursor-pointer
              transition-all duration-400 ease-out
              border-r border-[#C4A97D]/20 last:border-r-0
              hover:bg-[#212842] overflow-hidden"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {/* Glow behind on hover */}
            <span className="absolute inset-0 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-500
              pointer-events-none"
              style={{
                boxShadow: "inset 0 0 60px 10px rgba(196,169,125,0.15)",
                background: "radial-gradient(ellipse at center, rgba(196,169,125,0.08) 0%, transparent 70%)"
              }}
            />

            {/* Day number */}
            <p className="font-display text-4xl md:text-5xl font-bold text-[#212842] group-hover:text-white
              transition-colors duration-300 relative z-10">
              {e.day}
            </p>

            {/* Month + Year */}
            <p className="text-[10px] tracking-[0.3em] uppercase mt-1 text-[#212842]/60 group-hover:text-[#C4A97D]
              transition-colors duration-300 relative z-10">
              {e.month} {e.year}
            </p>

            {/* City */}
            <p className="font-display text-sm md:text-base font-bold uppercase tracking-widest mt-3
              text-[#212842] group-hover:text-white transition-colors duration-300 relative z-10">
              {e.city}
            </p>

            {/* Bottom glow line on hover */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4
              bg-gradient-to-r from-transparent via-[#C4A97D] to-transparent
              transition-all duration-500 rounded-full" />
          </div>
        ))}
      </div>

      <div className="h-4" /> {/* bottom breathing room */}
    </section>
  );
}
