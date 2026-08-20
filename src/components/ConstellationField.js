import React from "react";

// Deterministic pseudo-random generator (seeded) — keeps server- and
// client-rendered markup identical so there's no hydration mismatch from
// using Math.random() directly.
function seededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

// Reuses the site's existing gradient tokens — no new colors introduced.
const PARTICLE_COLORS = ["var(--grad-1)", "var(--grad-2)", "var(--grad-3)"];

function buildParticles(count) {
  const rand = seededRandom(42);
  return Array.from({ length: count }, (_, i) => {
    const size = 3 + rand() * 5; // 3-8px
    return {
      id: i,
      top: rand() * 100,
      left: rand() * 100,
      size,
      color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
      duration: 12 + rand() * 14, // 12-26s
      delay: -(rand() * 20),
      driftX: 8 + rand() * 16,
      driftY: 6 + rand() * 12,
      opacity: 0.25 + rand() * 0.3,
    };
  });
}

/**
 * ConstellationField — ambient drifting particle backdrop, inspired by the
 * Dala brand reference's signature triangle-particle constellation. Purely
 * decorative (aria-hidden) and respects prefers-reduced-motion (see
 * globals.css). Uses the site's existing --grad-1/2/3 tokens so no new
 * brand colors are introduced.
 */
const ConstellationField = ({ count = 26, className = "" }) => {
  const particles = buildParticles(count);

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-constellation-drift"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: 0,
            height: 0,
            borderLeft: `${p.size / 2}px solid transparent`,
            borderRight: `${p.size / 2}px solid transparent`,
            borderBottom: `${p.size}px solid ${p.color}`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift-x": `${p.driftX}px`,
            "--drift-y": `${p.driftY}px`,
          }}
        />
      ))}
    </div>
  );
};

export default ConstellationField;
