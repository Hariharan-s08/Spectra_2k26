import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { EventCard } from '@/components/event-card'
import { Reveal } from '@/components/reveal'
import { events } from '@/lib/events'

export const metadata: Metadata = {
  title: 'Events — SPECTRA 2K26',
  description:
    'Explore all SPECTRA 2K26 events — Idea Ignite, Circuitrix, Fun Fusion, and the online paper presentation.',
}

export default function EventsPage() {
  const offline = events.filter((event) => event.mode === 'Offline')
  const online = events.filter((event) => event.mode === 'Online')

  return (
    <main className="min-w-0">
      <PageHeader
        eyebrow="Events"
        title="The SPECTRA 2K26 lineup"
        description="Technical brilliance meets non-technical fun. Pick your events, build your team, and get ready to compete."
      />

      {/* Offline Events */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Reveal className="mb-8 flex flex-col items-start gap-4 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center">
          <span className="max-w-full rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-center font-mono text-xs font-semibold tracking-widest text-primary sm:text-sm">
            OFFLINE · 15 OCTOBER 2026
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Offline Events
          </h2>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offline.map((event, i) => (
            <Reveal key={event.id} delay={i * 100}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Online Events */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Reveal className="mb-8 flex flex-col items-start gap-4 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center">
            <span className="max-w-full rounded-xl border border-accent/40 bg-accent/10 px-4 py-2 text-center font-mono text-xs font-semibold tracking-widest text-accent sm:text-sm">
              ONLINE · 14 OCTOBER 2026
            </span>

            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Online Event
            </h2>
          </Reveal>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {online.map((event, i) => (
              <Reveal key={event.id} delay={i * 100}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}