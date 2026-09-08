import Link from 'next/link'
import { ArrowRight, Users, Wallet, Clock, Trophy } from 'lucide-react'
import type { SymposiumEvent } from '@/lib/events'
import { cn } from '@/lib/utils'

export function EventCard({ event }: { event: SymposiumEvent }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_36px_oklch(0.78_0.16_200/0.14)]">
      {/* corner glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-40" />

      <div className="mb-4 flex items-center justify-between gap-3">
        <span
          className={cn(
            'inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-widest',
            event.category === 'online'
              ? 'bg-accent/15 text-accent'
              : 'bg-primary/15 text-primary',
          )}
        >
          {event.category === 'online' ? 'Online' : 'Offline'}
        </span>
        {event.hasPrizes && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-gold">
            <Trophy className="size-3.5" />
            Prizes
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold tracking-tight">{event.name}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{event.type}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{event.tagline}</p>

      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-5 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="size-4 text-primary/70" />
          <span>{event.teamSize}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="size-4 text-primary/70" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Wallet className="size-4 text-primary/70" />
          <span>{event.fee}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="font-mono text-xs text-primary/70">DATE</span>
          <span>{event.date}</span>
        </div>
      </dl>

      <Link
        href={event.href}
        className="mt-6 inline-flex items-center gap-2 self-start rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-all group-hover:border-primary/60 group-hover:text-primary"
      >
        View Event Details
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  )
}
