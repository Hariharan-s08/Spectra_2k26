import { cn } from '@/lib/utils'

/**
 * Decorative animated circuit / signal traces. Purely aesthetic (aria-hidden).
 */
export function CircuitLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g
        stroke="oklch(0.78 0.16 200 / 0.25)"
        strokeWidth="1.5"
        strokeDasharray="6 10"
        className="animate-dash"
      >
        <path d="M0 120 H320 L360 160 H620" />
        <path d="M1200 200 H900 L860 240 H520" />
        <path d="M0 420 H240 L300 360 H540" />
        <path d="M1200 480 H820 L780 440 H600" />
      </g>
      <g fill="oklch(0.78 0.16 200)">
        <circle cx="360" cy="160" r="3.5" className="animate-pulse-node" />
        <circle cx="860" cy="240" r="3.5" className="animate-pulse-node" style={{ animationDelay: '0.6s' }} />
        <circle cx="300" cy="360" r="3.5" className="animate-pulse-node" style={{ animationDelay: '1.1s' }} />
        <circle cx="780" cy="440" r="3.5" className="animate-pulse-node" style={{ animationDelay: '1.6s' }} />
      </g>
      <g fill="oklch(0.62 0.16 270)">
        <circle cx="620" cy="160" r="2.5" className="animate-pulse-node" style={{ animationDelay: '0.3s' }} />
        <circle cx="540" cy="360" r="2.5" className="animate-pulse-node" style={{ animationDelay: '0.9s' }} />
      </g>
    </svg>
  )
}
