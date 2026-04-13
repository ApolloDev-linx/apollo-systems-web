"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  color: string;
  vx: number;
  vy: number;
  pulseSpeed: number;
  pulseOffset: number;
}

function spawnCluster(
  cx: number,
  cy: number,
  count: number,
  spread: number,
  w: number,
  h: number,
  palette: string[]
): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * spread + Math.random() * spread * 0.5;
    const x = cx + Math.cos(angle) * dist;
    const y = cy + Math.sin(angle) * dist;
    if (x < 0 || x > w || y < 0 || y > h) continue;

    const size = Math.random() * 2.2 + 0.3;
    const baseAlpha = Math.random() * 0.6 + 0.2;
    particles.push({
      x,
      y,
      size,
      baseAlpha,
      alpha: baseAlpha,
      color: palette[Math.floor(Math.random() * palette.length)],
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      pulseSpeed: Math.random() * 0.008 + 0.002,
      pulseOffset: Math.random() * Math.PI * 2,
    });
  }
  return particles;
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    // Vanta black palette — only white and your blue
    const palette = [
      "255,255,255",  // white
      "255,255,255",  // white (weighted heavier)
      "255,255,255",  // white (weighted heavier)
      "14,165,233",   // --primary blue
      "56,189,248",   // --accent blue
    ];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = document.documentElement.scrollHeight * dpr;
      canvas!.style.width = "100%";
      canvas!.style.height = `${document.documentElement.scrollHeight}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    }

    function initParticles() {
      particles = [];
      const w = window.innerWidth;
      const h = document.documentElement.scrollHeight;

      // Layer 1: Distant white stars — tiny, faint, barely moving
      const starCount = Math.floor((w * h) / 2800);
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 1.1 + 0.2;
        const baseAlpha = Math.random() * 0.45 + 0.08;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size,
          baseAlpha,
          alpha: baseAlpha,
          color: Math.random() > 0.15 ? "255,255,255" : "14,165,233",
          vx: (Math.random() - 0.5) * 0.04,
          vy: (Math.random() - 0.5) * 0.04,
          pulseSpeed: Math.random() * 0.005 + 0.001,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }

      // Layer 2: Splatter clusters — white-dominant with blue accents
      const clusterCount = Math.floor((w * h) / 180000) + 4;
      for (let i = 0; i < clusterCount; i++) {
        const cx = Math.random() * w;
        const cy = Math.random() * h;
        const count = Math.floor(Math.random() * 30) + 15;
        const spread = Math.random() * 120 + 50;
        particles.push(...spawnCluster(cx, cy, count, spread, w, h, palette));
      }

      // Layer 3: Bright accent dots — mostly blue with a few white
      const brightCount = Math.floor((w * h) / 120000) + 3;
      for (let i = 0; i < brightCount; i++) {
        const size = Math.random() * 3 + 1.5;
        const isBlue = Math.random() > 0.35;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size,
          baseAlpha: Math.random() * 0.4 + 0.5,
          alpha: 0.7,
          color: isBlue
            ? Math.random() > 0.5
              ? "14,165,233"
              : "56,189,248"
            : "255,255,255",
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          pulseSpeed: Math.random() * 0.01 + 0.004,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    }

    let time = 0;

    function draw() {
      const w = window.innerWidth;
      const h = document.documentElement.scrollHeight;

      ctx!.clearRect(0, 0, w, h);

      time += 1;

      for (const p of particles) {
        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;

        // Pulse alpha
        p.alpha =
          p.baseAlpha +
          Math.sin(time * p.pulseSpeed + p.pulseOffset) * p.baseAlpha * 0.4;

        // Draw glow for larger particles
        if (p.size > 1.5) {
          const gradient = ctx!.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, p.size * 4
          );
          gradient.addColorStop(0, `rgba(${p.color}, ${p.alpha * 0.5})`);
          gradient.addColorStop(1, `rgba(${p.color}, 0)`);
          ctx!.fillStyle = gradient;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Draw core dot
        ctx!.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    };

    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 300);
    });
    observer.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
