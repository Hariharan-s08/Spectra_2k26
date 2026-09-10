import Link from 'next/link'
import { ArrowRight, Users, Wallet, Clock } from 'lucide-react'

import type { SymposiumEvent } from '@/lib/events'
import { cn } from '@/lib/utils'

export function EventCard({ event }: { event: SymposiumEvent }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_36px_oklch(0.78_0.16_200/0.14)]">
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
      </div>

      <h3 className="text-xl font-bold tracking-tight">{event.name}</h3>

      <p className="mt-1 text-sm font-medium text-primary">
        {event.type}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {event.tagline}
      </p>

      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-5 text-sm">
        <div className="flex items-center gap-2">
          <Clock className="size-4 text-primary" />
          <div>
            <dt className="text-xs text-muted-foreground">Date</dt>
            <dd className="font-medium">{event.date}</dd>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="size-4 text-primary" />
          <div>
            <dt className="text-xs text-muted-foreground">Time</dt>
            <dd className="font-medium">{event.time}</dd>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Users className="size-4 text-primary" />
          <div>
            <dt className="text-xs text-muted-foreground">Team</dt>
            <dd className="font-medium">{event.teamSize}</dd>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Wallet className="size-4 text-primary" />
          <div>
            <dt className="text-xs text-muted-foreground">Fee</dt>
            <dd className="font-medium">{event.fee}</dd>
          </div>
        </div>
      </dl>

      {event.venue && (
        <p className="mt-4 text-xs text-muted-foreground">
          Venue: <span className="font-medium text-foreground">{event.venue}</span>
        </p>
      )}

      {event.registrationDeadline && (
        <p className="mt-1 text-xs text-muted-foreground">
          Registration closes:{' '}
          <span className="font-medium text-foreground">
            {event.registrationDeadline}
          </span>
        </p>
      )}

      <Link
        href={event.href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        View Event
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  )
}
