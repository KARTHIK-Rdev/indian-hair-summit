import { useEffect, useRef } from "react";

/* ── Types ─────────────────────────────────────────────── */
interface Orb {
  x: number; y: number; vx: number; vy: number;
  radius: number; alpha: number; alphaDir: number; color: string;
}
interface Particle {
  x: number; y: number; vx: number; vy: number;
  radius: number; alpha: number;
}
interface Star {
  x: number; y: number; len: number; speed: number;
  alpha: number; active: boolean; angle: number;
}
interface Ring {
  x: number; y: number; radius: number; maxR: number; alpha: number;
}

const ORB_COLORS = [
  "rgba(196,169,125,",
  "rgba(227,213,184,",
  "rgba(33,40,66,",
  "rgba(240,231,213,",
  "rgba(210,190,155,",
];

function rand(min: number, max: number) { return min + Math.random() * (max - min); }

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight || window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    /* ── Orbs (slow drifting blobs) ─────────────────────── */
    const orbs: Orb[] = Array.from({ length: 14 }, () => ({
      x: rand(0, W()), y: rand(0, H()),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: rand(90, 280),
      alpha: rand(0.04, 0.10),
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      color: ORB_COLORS[Math.floor(Math.random() * ORB_COLORS.length)],
    }));

    /* ── Particles (floating dust) ──────────────────────── */
    const particles: Particle[] = Array.from({ length: 70 }, () => ({
      x: rand(0, W()), y: rand(0, H()),
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: rand(0.8, 2.5),
      alpha: rand(0.08, 0.3),
    }));

    /* ── Shooting stars ─────────────────────────────────── */
    const MAX_STARS = 4;
    const shootingStars: Star[] = Array.from({ length: MAX_STARS }, () => ({
      x: rand(0, W()), y: rand(0, H() * 0.4),
      len: rand(80, 200), speed: rand(6, 14),
      alpha: 0, active: false,
      angle: rand(20, 45) * (Math.PI / 180),
    }));

    // Stagger their spawning
    const spawnStar = (s: Star) => {
      s.x = rand(0, W() * 0.8);
      s.y = rand(0, H() * 0.35);
      s.len   = rand(80, 220);
      s.speed = rand(5, 12);
      s.angle = rand(15, 50) * (Math.PI / 180);
      s.alpha = 0;
      s.active = true;
    };
    shootingStars.forEach((s, i) => {
      setTimeout(() => spawnStar(s), rand(1000, 8000) + i * 3000);
    });

    /* ── Pulse rings ────────────────────────────────────── */
    const rings: Ring[] = [];
    const addRing = () => {
      rings.push({
        x: rand(W() * 0.1, W() * 0.9),
        y: rand(H() * 0.1, H() * 0.9),
        radius: 0,
        maxR: rand(80, 180),
        alpha: 0.25,
      });
    };
    // Spawn a ring every ~4 s
    const ringInterval = setInterval(addRing, 4000);
    addRing();

    /* ── Draw loop ──────────────────────────────────────── */
    const draw = () => {
      ctx.clearRect(0, 0, W(), H());

      /* --- Orbs --- */
      orbs.forEach((orb) => {
        orb.x += orb.vx; orb.y += orb.vy;
        if (orb.x < -orb.radius) orb.x = W() + orb.radius;
        if (orb.x > W() + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = H() + orb.radius;
        if (orb.y > H() + orb.radius) orb.y = -orb.radius;

        orb.alpha += orb.alphaDir * 0.0003;
        if (orb.alpha > 0.14 || orb.alpha < 0.025) orb.alphaDir *= -1;

        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        g.addColorStop(0, `${orb.color}${orb.alpha.toFixed(3)})`);
        g.addColorStop(1, `${orb.color}0)`);
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      /* --- Constellation lines between nearby particles --- */
      const LINK_DIST = 120;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const lineAlpha = (1 - dist / LINK_DIST) * 0.08;
            ctx.strokeStyle = `rgba(196,169,125,${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      /* --- Particles --- */
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W();
        if (p.x > W()) p.x = 0;
        if (p.y < 0) p.y = H();
        if (p.y > H()) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,169,125,${p.alpha})`;
        ctx.fill();
      });

      /* --- Shooting stars --- */
      shootingStars.forEach((s) => {
        if (!s.active) return;

        s.alpha += 0.04;
        const tailX = s.x - Math.cos(s.angle) * s.len;
        const tailY = s.y - Math.sin(s.angle) * s.len;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(196,169,125,0)`);
        grad.addColorStop(1, `rgba(255,245,220,${Math.min(s.alpha, 0.9)})`);

        ctx.lineWidth = 1.5;
        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        if (s.x > W() + 50 || s.y > H() * 0.6) {
          s.active = false;
          setTimeout(() => spawnStar(s), rand(3000, 9000));
        }
      });

      /* --- Pulse rings --- */
      for (let i = rings.length - 1; i >= 0; i--) {
        const r = rings[i];
        r.radius += 0.7;
        r.alpha  -= 0.0025;
        if (r.alpha <= 0) { rings.splice(i, 1); continue; }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(196,169,125,${r.alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(ringInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
