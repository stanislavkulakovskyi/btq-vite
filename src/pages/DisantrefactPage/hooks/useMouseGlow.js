import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 400;
const REPEL_RADIUS = 160;
const REPEL_FORCE = 0.032;
const FRICTION = 0.88;

const OFFSCREEN = -9999;
const CENTER = 0.5;
const GLOW_LERP = 0.2;
const COUNTER_LERP = 0.12;
const RENDER_SCALE = 0.5;
const BLEED = 0.18;

const PRIMARY_RADIUS_RATIO = 0.62;
const COUNTER_RADIUS_RATIO = 0.52;
const SPECULAR_RADIUS_RATIO = 0.22;
const SPECULAR_SCALE_Y = 0.38;

const VX_RANGE = 0.18;
const VY_RANGE = 0.14;
const VY_BIAS = -0.06;
const RADIUS_RANGE = 0.7;
const RADIUS_MIN = 0.2;
const ALPHA_RANGE = 0.18;
const ALPHA_MIN = 0.04;

const SPAWN_OFFSET = 2;
const WRAP_MARGIN = 4;
const MIN_DIST = 0.1;
const ALPHA_PRECISION = 3;

const lerp = (a, b, t) => a + (b - a) * t;

const spawnParticle = (width, height) => ({
  x: Math.random() * (width || window.innerWidth),
  y: Math.random() * (height || window.innerHeight),
  vx: (Math.random() - CENTER) * VX_RANGE,
  vy: (Math.random() - CENTER) * VY_RANGE + VY_BIAS,
  r: Math.random() * RADIUS_RANGE + RADIUS_MIN,
  a: Math.random() * ALPHA_RANGE + ALPHA_MIN,
});

const drawGlow = (ctx, glow, width, height) => {
  const primary = ctx.createRadialGradient(
    glow.cx * width, glow.cy * height, 0,
    glow.cx * width, glow.cy * height, width * PRIMARY_RADIUS_RATIO,
  );
  primary.addColorStop(0, 'rgba(210,200,230,0.32)');
  primary.addColorStop(0.25, 'rgba(170,185,220,0.18)');
  primary.addColorStop(0.55, 'rgba(130,140,200,0.08)');
  primary.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = primary;
  ctx.fillRect(0, 0, width, height);

  const counter = ctx.createRadialGradient(
    glow.cx2 * width, glow.cy2 * height, 0,
    glow.cx2 * width, glow.cy2 * height, width * COUNTER_RADIUS_RATIO,
  );
  counter.addColorStop(0, 'rgba(242,165,190,0.22)');
  counter.addColorStop(0.35, 'rgba(200,150,230,0.12)');
  counter.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = counter;
  ctx.fillRect(0, 0, width, height);

  const sx = glow.cx * width;
  const sy = glow.cy * height;
  const specular = ctx.createRadialGradient(sx, sy, 0, sx, sy, width * SPECULAR_RADIUS_RATIO);
  specular.addColorStop(0, 'rgba(255,254,255,0.18)');
  specular.addColorStop(0.4, 'rgba(230,225,250,0.07)');
  specular.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.save();
  ctx.translate(sx, sy);
  ctx.scale(1, SPECULAR_SCALE_Y);
  ctx.translate(-sx, -sy);
  ctx.fillStyle = specular;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
};

const updateParticles = (ctx, particles, mouse, size) => {
  for (const p of particles) {
    if (mouse.hasMoved) {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < REPEL_RADIUS && dist > MIN_DIST) {
        const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_FORCE;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }
    }

    p.vx *= FRICTION;
    p.vy *= FRICTION;
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < -WRAP_MARGIN) p.x = size.width + WRAP_MARGIN;
    if (p.x > size.width + WRAP_MARGIN) p.x = -WRAP_MARGIN;
    if (p.y < -WRAP_MARGIN) p.y = size.height + WRAP_MARGIN;
    if (p.y > size.height + WRAP_MARGIN) p.y = -WRAP_MARGIN;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(220,220,228,${p.a.toFixed(ALPHA_PRECISION)})`;
    ctx.fill();
  }
};

const createGlowRenderer = (canvas, ctx) => {
  const size = {
    width: Math.round(window.innerWidth * (1 + 2 * BLEED) * RENDER_SCALE),
    height: Math.round(window.innerHeight * (1 + 2 * BLEED) * RENDER_SCALE),
  };
  const mouse = { x: OFFSCREEN, y: OFFSCREEN, hasMoved: false };
  const glow = { cx: CENTER, cy: CENTER, cx2: CENTER, cy2: CENTER };
  const particles = Array.from({ length: PARTICLE_COUNT }, () =>
    spawnParticle(size.width, size.height),
  );
  let rafId;

  const resize = () => {
    size.width = Math.round(window.innerWidth * (1 + 2 * BLEED) * RENDER_SCALE);
    size.height = Math.round(window.innerHeight * (1 + 2 * BLEED) * RENDER_SCALE);
    canvas.width = size.width;
    canvas.height = size.height;
  };

  const handleMove = (e) => {
    mouse.x = (e.clientX + window.innerWidth * BLEED) * RENDER_SCALE;
    mouse.y = (e.clientY + window.innerHeight * BLEED) * RENDER_SCALE;
    mouse.hasMoved = true;
  };

  const draw = () => {
    ctx.clearRect(0, 0, size.width, size.height);
    const tx = mouse.hasMoved ? mouse.x / size.width : CENTER;
    const ty = mouse.hasMoved ? mouse.y / size.height : CENTER;
    glow.cx = lerp(glow.cx, tx, GLOW_LERP);
    glow.cy = lerp(glow.cy, ty, GLOW_LERP);
    glow.cx2 = lerp(glow.cx2, 1 - tx, COUNTER_LERP);
    glow.cy2 = lerp(glow.cy2, 1 - ty, COUNTER_LERP);
    if (mouse.hasMoved) drawGlow(ctx, glow, size.width, size.height);
    updateParticles(ctx, particles, mouse, size);
    rafId = requestAnimationFrame(draw);
  };

  return {
    resize,
    handleMove,
    start: draw,
    stop: () => cancelAnimationFrame(rafId),
  };
};

export const useMouseGlow = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const renderer = createGlowRenderer(canvas, canvas.getContext('2d'));

    renderer.resize();
    window.addEventListener('resize', renderer.resize);
    document.addEventListener('mousemove', renderer.handleMove);
    renderer.start();

    return () => {
      renderer.stop();
      window.removeEventListener('resize', renderer.resize);
      document.removeEventListener('mousemove', renderer.handleMove);
    };
  }, []);

  return canvasRef;
};
