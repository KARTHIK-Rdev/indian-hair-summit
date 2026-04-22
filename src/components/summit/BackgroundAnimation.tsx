/* Rising round particles */
const roundParticles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: 4 + (i % 5) * 3,
  left: `${((i * 37 + 5) % 95) + 2}%`,
  delay: `${(i * 0.5) % 10}s`,
  duration: `${9 + (i % 7) * 2}s`,
  opacity: 0.25 + (i % 4) * 0.1,
}));

/* Floating diamonds */
const diamonds = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  size: 6 + (i % 4) * 4,
  left: `${((i * 53 + 12) % 90) + 5}%`,
  delay: `${(i * 0.8) % 12}s`,
  duration: `${12 + (i % 5) * 3}s`,
  opacity: 0.18 + (i % 3) * 0.1,
}));

/* Horizontal streaks */
const streaks = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  top: `${10 + i * 11}%`,
  delay: `${i * 1.8}s`,
  duration: `${6 + (i % 4) * 2}s`,
  opacity: 0.12 + (i % 3) * 0.08,
  width: 80 + (i % 4) * 60,
}));

/* Twinkling dots */
const twinkles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: 2 + (i % 3),
  top: `${((i * 41 + 7) % 90) + 5}%`,
  left: `${((i * 67 + 3) % 90) + 5}%`,
  delay: `${(i * 0.6) % 5}s`,
  duration: `${1.5 + (i % 4) * 0.8}s`,
}));

/* Expanding rings */
const rings = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  top: `${15 + i * 14}%`,
  left: `${10 + (i % 3) * 30 + ((i % 2) * 15)}%`,
  delay: `${i * 2.2}s`,
  duration: `${5 + (i % 3) * 2}s`,
  size: 40 + (i % 3) * 30,
}));

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">

      {/* ── Large drifting blobs ───────────────── */}
      <div className="absolute rounded-full" style={{
        width: 700, height: 700, top: -200, left: -200,
        background: "radial-gradient(circle, rgba(196,169,125,0.55) 0%, transparent 65%)",
        filter: "blur(80px)",
        animation: "orbDrift1 20s ease-in-out infinite",
      }} />
      <div className="absolute rounded-full" style={{
        width: 600, height: 600, bottom: -150, right: -150,
        background: "radial-gradient(circle, rgba(180,148,100,0.45) 0%, transparent 65%)",
        filter: "blur(80px)",
        animation: "orbDrift2 25s ease-in-out infinite",
      }} />
      <div className="absolute rounded-full" style={{
        width: 500, height: 500, top: "40%", left: "35%",
        background: "radial-gradient(circle, rgba(210,185,140,0.35) 0%, transparent 65%)",
        filter: "blur(70px)",
        animation: "orbDrift3 18s ease-in-out infinite",
      }} />
      {/* Extra blob top-right */}
      <div className="absolute rounded-full" style={{
        width: 400, height: 400, top: "5%", right: "5%",
        background: "radial-gradient(circle, rgba(196,169,100,0.3) 0%, transparent 65%)",
        filter: "blur(70px)",
        animation: "orbDrift2 22s ease-in-out infinite reverse",
      }} />

      {/* ── Rising round particles ─────────────── */}
      {roundParticles.map((p) => (
        <div key={`rp-${p.id}`} className="absolute rounded-full" style={{
          width: p.size, height: p.size,
          left: p.left, bottom: "-20px",
          background: `rgba(160, 125, 70, ${p.opacity})`,
          animation: `riseUp ${p.duration} ${p.delay} linear infinite`,
        }} />
      ))}

      {/* ── Floating diamonds ─────────────────── */}
      {diamonds.map((d) => (
        <div key={`d-${d.id}`} className="absolute" style={{
          width: d.size, height: d.size,
          left: d.left, bottom: "-20px",
          background: `rgba(196, 155, 80, ${d.opacity})`,
          transform: "rotate(45deg)",
          animation: `riseUpSway ${d.duration} ${d.delay} linear infinite`,
        }} />
      ))}

      {/* ── Horizontal light streaks ───────────── */}
      {streaks.map((s) => (
        <div key={`s-${s.id}`} className="absolute" style={{
          height: 1,
          width: s.width,
          top: s.top,
          left: "-200px",
          background: `linear-gradient(90deg, transparent, rgba(196,169,125,${s.opacity}), transparent)`,
          animation: `streakAcross ${s.duration} ${s.delay} linear infinite`,
          borderRadius: 4,
        }} />
      ))}

      {/* ── Twinkling stars ────────────────────── */}
      {twinkles.map((t) => (
        <div key={`tw-${t.id}`} className="absolute rounded-full" style={{
          width: t.size, height: t.size,
          top: t.top, left: t.left,
          background: "rgba(196,169,100,0.7)",
          animation: `twinkle ${t.duration} ${t.delay} ease-in-out infinite`,
        }} />
      ))}

      {/* ── Expanding pulse rings ──────────────── */}
      {rings.map((r) => (
        <div key={`ring-${r.id}`} className="absolute rounded-full" style={{
          width: r.size, height: r.size,
          top: r.top, left: r.left,
          border: "1px solid rgba(180,145,80,0.35)",
          animation: `expandRing ${r.duration} ${r.delay} ease-out infinite`,
        }} />
      ))}

    </div>
  );
}
