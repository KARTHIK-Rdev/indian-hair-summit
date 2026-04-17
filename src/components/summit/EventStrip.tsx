import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function EventStrip() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-surface border-y border-border">
      <div
        className={`w-full transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <img
          src="/banner.jpeg"
          alt="Event Dates and Venues Banner"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
