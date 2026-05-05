export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Faint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Drifting gradient orbs */}
      <div
        className="absolute -top-40 -right-40 h-[680px] w-[680px] rounded-full opacity-[0.22] blur-[120px] will-change-transform animate-orb-a"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.16 78) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-60 -left-40 h-[560px] w-[560px] rounded-full opacity-[0.14] blur-[120px] will-change-transform animate-orb-b"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.16 78) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 h-[420px] w-[420px] rounded-full opacity-[0.08] blur-[120px] will-change-transform animate-orb-c"
        style={{
          background:
            "radial-gradient(circle, oklch(0.85 0.05 80) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-foreground will-change-transform animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Top-to-bottom fade so background never competes with content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 60%, var(--background) 100%)",
        }}
      />
    </div>
  )
}

/* Pre-computed deterministic positions so SSR and client match */
const PARTICLES = [
  { left: 8, top: 22, size: 2, opacity: 0.35, duration: 14, delay: 0 },
  { left: 18, top: 68, size: 1.5, opacity: 0.25, duration: 18, delay: 2 },
  { left: 32, top: 14, size: 2.5, opacity: 0.4, duration: 16, delay: 4 },
  { left: 44, top: 82, size: 1.5, opacity: 0.22, duration: 20, delay: 1 },
  { left: 58, top: 36, size: 2, opacity: 0.3, duration: 15, delay: 3 },
  { left: 71, top: 74, size: 1.5, opacity: 0.28, duration: 19, delay: 5 },
  { left: 84, top: 24, size: 2, opacity: 0.32, duration: 17, delay: 2.5 },
  { left: 92, top: 60, size: 1.5, opacity: 0.2, duration: 21, delay: 6 },
  { left: 26, top: 48, size: 1.5, opacity: 0.22, duration: 22, delay: 3.5 },
  { left: 64, top: 12, size: 2, opacity: 0.3, duration: 16, delay: 1.5 },
  { left: 50, top: 56, size: 1.5, opacity: 0.2, duration: 20, delay: 4.5 },
  { left: 12, top: 88, size: 2, opacity: 0.28, duration: 18, delay: 0.5 },
]
