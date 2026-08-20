import { useRef, useEffect, useState } from "react";

// Interactive ASCII portrait. If an image exists at `src` (default
// /portrait.png) it is turned into a field of ASCII characters — brighter
// pixels become denser glyphs, transparent/near-black pixels are dropped so a
// cut-out subject "floats". If the image is missing, it falls back to rendering
// the "JG" monogram as text. Either way the characters fly in, settle, and
// scatter away from the pointer.

const ACCENT = "134, 225, 196"; // --accent as rgb
const CHARS = " .:-=+*#%@".split("");

const calcSize = (w) => {
  if (w <= 480) return Math.min(240, w - 48);
  if (w <= 768) return Math.min(300, w - 64);
  return 380;
};

export default function AsciiPortrait({ src = "/portrait.png", fixedSize }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999, tx: -9999, ty: -9999, active: false });
  const particles = useRef([]);
  const startRef = useRef(0);
  const [size, setSize] = useState(
    () => fixedSize ?? calcSize(typeof window !== "undefined" ? window.innerWidth : 1200)
  );

  useEffect(() => {
    if (fixedSize) return;
    const onResize = () => setSize(calcSize(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [fixedSize]);

  // Build the particle field for the current size (from image, or text fallback).
  useEffect(() => {
    let cancelled = false;
    const off = document.createElement("canvas");
    off.width = size;
    off.height = size;
    const octx = off.getContext("2d", { willReadFrequently: true });

    const sampleToParticles = ({ dropDark }) => {
      const pixels = octx.getImageData(0, 0, size, size).data;
      const font = size <= 300 ? 6 : 7;
      const colGap = font * 0.72;
      const rowGap = font * 1.08;
      const built = [];
      for (let y = 0; y < size; y += rowGap) {
        for (let x = 0; x < size; x += colGap) {
          const i = (Math.floor(y) * size + Math.floor(x)) * 4;
          const a = pixels[i + 3];
          if (a < 110) continue;
          const lum = (pixels[i] * 0.299 + pixels[i + 1] * 0.587 + pixels[i + 2] * 0.114) / 255;
          if (dropDark && lum < 0.12) continue; // dark background falls away on its own
          const b = dropDark ? lum : a / 255;
          built.push({
            x: x + (Math.random() - 0.5) * size,
            y: y + (Math.random() - 0.5) * size,
            tx: x,
            ty: y,
            vx: 0,
            vy: 0,
            char: CHARS[Math.min(CHARS.length - 1, Math.floor(b * (CHARS.length - 1)) + (dropDark ? 0 : 3))],
            alpha: 0.4 + b * 0.6,
            cur: 0,
            delay: Math.random() * 0.5,
            shimmer: Math.random() * Math.PI * 2,
            font,
          });
        }
      }
      if (!cancelled) {
        particles.current = built;
        startRef.current = performance.now();
      }
    };

    const drawTextFallback = () => {
      octx.clearRect(0, 0, size, size);
      octx.fillStyle = "#fff";
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.font = `700 ${size * 0.62}px "Space Grotesk", sans-serif`;
      octx.fillText("JG", size / 2, size / 2 + size * 0.02);
      sampleToParticles({ dropDark: false });
    };

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (cancelled) return;
      octx.clearRect(0, 0, size, size);
      // contain the image, centred, at ~88% so it breathes
      const scale = 0.88;
      const ar = img.width / img.height;
      let w = size * scale;
      let h = w / ar;
      if (h > size * scale) {
        h = size * scale;
        w = h * ar;
      }
      octx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
      sampleToParticles({ dropDark: true });
    };
    img.onerror = drawTextFallback;
    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [size, src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);
    let raf;

    const draw = () => {
      raf = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, size, size);
      const ps = particles.current;
      if (!ps.length) return;

      const m = mouse.current;
      m.x += (m.tx - m.x) * 0.15;
      m.y += (m.ty - m.y) * 0.15;
      const elapsed = (performance.now() - startRef.current) / 1000;
      const font = size <= 300 ? 6 : 7;
      ctx.font = `${font}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const p of ps) {
        const t = elapsed - p.delay;
        if (t < 0) continue;

        const fade = Math.min(t / 1.4, 1);
        const eased = 1 - Math.pow(1 - fade, 2);
        const settling = t < 3;
        const shimmer = settling || m.active ? Math.sin(elapsed * 2 + p.shimmer) * 0.12 : 0;
        p.cur = Math.max(0, p.alpha * eased + shimmer);

        if (m.active) {
          const dx = p.x - m.x;
          const dy = p.y - m.y;
          const dist = Math.hypot(dx, dy);
          const max = size * 0.22;
          if (dist < max && dist > 0) {
            const force = (1 - dist / max) * 4;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        const pull = 0.012 + Math.min(t / 2.4, 1) * 0.085;
        p.vx += dx * pull;
        p.vy += dy * pull;
        p.vx *= 0.9;
        p.vy *= 0.9;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = `rgba(${ACCENT}, ${p.cur})`;
        ctx.fillText(p.char, p.x, p.y);
      }
    };

    const move = (e) => {
      const r = canvas.getBoundingClientRect();
      const pt = e.touches ? e.touches[0] : e;
      mouse.current.tx = pt.clientX - r.left;
      mouse.current.ty = pt.clientY - r.top;
      mouse.current.active = true;
      if (e.touches && e.cancelable) e.preventDefault();
    };
    const leave = () => {
      mouse.current.active = false;
      mouse.current.tx = -9999;
      mouse.current.ty = -9999;
    };

    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseleave", leave);
    canvas.addEventListener("touchmove", move, { passive: false });
    canvas.addEventListener("touchend", leave);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("mousemove", move);
      canvas.removeEventListener("mouseleave", leave);
      canvas.removeEventListener("touchmove", move);
      canvas.removeEventListener("touchend", leave);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Interactive ASCII portrait"
      style={{ width: size, height: size, cursor: "crosshair", touchAction: "none" }}
    />
  );
}
