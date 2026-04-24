const roundParticles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: 4 + (i % 5) * 3,
  left: `${((i * 37 + 5) % 95) + 2}%`,
  delay: `${(i * 0.5) % 10}s`,
  duration: `${9 + (i % 7) * 2}s`,
  opacity: 0.18 + (i % 4) * 0.08,
}));

const diamonds = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  size: 6 + (i % 4) * 4,
  left: `${((i * 53 + 12) % 90) + 5}%`,
  delay: `${(i * 0.8) % 12}s`,
  duration: `${12 + (i % 5) * 3}s`,
  opacity: 0.15 + (i % 3) * 0.08,
}));

const streaks = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  top: `${10 + i * 11}%`,
  delay: `${i * 1.8}s`,
  duration: `${6 + (i % 4) * 2}s`,
  opacity: 0.10 + (i % 3) * 0.07,
  width: 80 + (i % 4) * 60,
}));

const twinkles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: 2 + (i % 3),
  top: `${((i * 41 + 7) % 90) + 5}%`,
  left: `${((i * 67 + 3) % 90) + 5}%`,
  delay: `${(i * 0.6) % 5}s`,
  duration: `${1.5 + (i % 4) * 0.8}s`,
}));

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

      {/* ── Large drifting blobs — coral/pink palette ── */}
      <div className="absolute rounded-full" style={{
        width: 700, height: 700, top: -200, left: -200,
        background: "radial-gradient(circle, rgba(240,80,58,0.28) 0%, transparent 65%)",
        filter: "blur(90px)",
        animation: "orbDrift1 20s ease-in-out infinite",
      }} />
      <div className="absolute rounded-full" style={{
        width: 620, height: 620, bottom: -180, right: -180,
        background: "radial-gradient(circle, rgba(217,48,96,0.24) 0%, transparent 65%)",
        filter: "blur(90px)",
        animation: "orbDrift2 25s ease-in-out infinite",
      }} />
      <div className="absolute rounded-full" style={{
        width: 520, height: 520, top: "38%", left: "32%",
        background: "radial-gradient(circle, rgba(255,120,100,0.18) 0%, transparent 65%)",
        filter: "blur(80px)",
        animation: "orbDrift3 18s ease-in-out infinite",
      }} />
      <div className="absolute rounded-full" style={{
        width: 400, height: 400, top: "5%", right: "5%",
        background: "radial-gradient(circle, rgba(240,80,58,0.18) 0%, transparent 65%)",
        filter: "blur(75px)",
        animation: "orbDrift2 22s ease-in-out infinite reverse",
      }} />

      {/* ── Rising round particles — coral ── */}
      {roundParticles.map((p) => (
        <div key={`rp-${p.id}`} className="absolute rounded-full" style={{
          width: p.size, height: p.size,
          left: p.left, bottom: "-20px",
          background: `rgba(217, 60, 80, ${p.opacity})`,
          animation: `riseUp ${p.duration} ${p.delay} linear infinite`,
        }} />
      ))}

      {/* ── Floating diamonds — pink ── */}
      {diamonds.map((d) => (
        <div key={`d-${d.id}`} className="absolute" style={{
          width: d.size, height: d.size,
          left: d.left, bottom: "-20px",
          background: `rgba(240, 80, 58, ${d.opacity})`,
          transform: "rotate(45deg)",
          animation: `riseUpSway ${d.duration} ${d.delay} linear infinite`,
        }} />
      ))}

      {/* ── Horizontal light streaks — blush ── */}
      {streaks.map((s) => (
        <div key={`s-${s.id}`} className="absolute" style={{
          height: 1,
          width: s.width,
          top: s.top,
          left: "-200px",
          background: `linear-gradient(90deg, transparent, rgba(217,48,96,${s.opacity}), transparent)`,
          animation: `streakAcross ${s.duration} ${s.delay} linear infinite`,
          borderRadius: 4,
        }} />
      ))}

      {/* ── Twinkling stars — coral ── */}
      {twinkles.map((t) => (
        <div key={`tw-${t.id}`} className="absolute rounded-full" style={{
          width: t.size, height: t.size,
          top: t.top, left: t.left,
          background: "rgba(240,80,58,0.65)",
          animation: `twinkle ${t.duration} ${t.delay} ease-in-out infinite`,
        }} />
      ))}

      {/* ── Expanding pulse rings — rose ── */}
      {rings.map((r) => (
        <div key={`ring-${r.id}`} className="absolute rounded-full" style={{
          width: r.size, height: r.size,
          top: r.top, left: r.left,
          border: "1px solid rgba(217,48,96,0.30)",
          animation: `expandRing ${r.duration} ${r.delay} ease-out infinite`,
        }} />
      ))}

    </div>
  );
}
