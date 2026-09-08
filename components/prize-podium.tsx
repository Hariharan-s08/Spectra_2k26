import { PRIZES } from '@/lib/events'
import { cn } from '@/lib/utils'

const styles = [
  { ring: 'border-gold/50', glow: 'shadow-[0_0_30px_oklch(0.82_0.15_85/0.25)]', text: 'text-gold' },
  { ring: 'border-border', glow: '', text: 'text-foreground' },
  { ring: 'border-border', glow: '', text: 'text-foreground' },
]

export function PrizePodium() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {PRIZES.map((prize, i) => (
        <div
          key={prize.place}
          className={cn(
            'glass flex flex-col items-center rounded-2xl border p-6 text-center transition-transform hover:-translate-y-1',
            styles[i].ring,
            styles[i].glow,
          )}
        >
          <span className="text-4xl" aria-hidden="true">
            {prize.medal}
          </span>
          <span
            className={cn('mt-3 font-mono text-2xl font-bold tracking-tight', styles[i].text)}
          >
            {prize.amount}
          </span>
          <span className="mt-1 text-sm font-medium text-muted-foreground">{prize.place}</span>
        </div>
      ))}
    </div>
  )
}
