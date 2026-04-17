import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TARGET = new Date("2026-06-09T10:00:00+05:30").getTime();

function calcTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number, len = 2) {
  return String(n).padStart(len, "0");
}

function FlipDigit({ value, label }: { value: string; label: string }) {
  const [display, setDisplay] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== display) {
      setFlipping(true);
      const t = setTimeout(() => {
        setDisplay(value);
        setFlipping(false);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [value, display]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`relative bg-foreground border border-white/10 rounded-xl w-[72px] h-[88px] sm:w-[100px] sm:h-[110px] flex items-center justify-center overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 ${
          flipping ? "scale-y-95 opacity-80" : "scale-y-100 opacity-100"
        }`}
        style={{ transition: "transform 0.2s ease, opacity 0.15s ease" }}
      >
        <span className="font-display text-4xl sm:text-6xl font-bold text-primary-foreground tabular-nums">
          {display}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground font-body">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState(calcTimeLeft);
  const { ref, isVisible } = useScrollAnimation(0.2);

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-10 -mt-20 sm:-mt-24 pb-12 sm:pb-16"
    >
      <div
        className={`container mx-auto px-6 flex flex-col items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body">
          Event Starts In
        </p>

        <div className="grid grid-cols-4 gap-3 sm:gap-5">
          <FlipDigit value={pad(time.days, 3)} label="Days" />
          <FlipDigit value={pad(time.hours)} label="Hours" />
          <FlipDigit value={pad(time.minutes)} label="Minutes" />
          <FlipDigit value={pad(time.seconds)} label="Seconds" />
        </div>

        <button
          onClick={() =>
            document
              .getElementById("register")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 bg-foreground text-background px-8 py-3 text-xs uppercase tracking-widest hover:bg-foreground/90 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
        >
          Reserve Your Spot
        </button>
      </div>
    </section>
  );
}
