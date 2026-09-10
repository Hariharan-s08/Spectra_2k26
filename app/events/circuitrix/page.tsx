import type { Metadata } from 'next'
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Wallet,
  Brain,
  Puzzle,
  Wrench,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { MetaGrid, InfoCard } from '@/components/event-detail'
import { Reveal } from '@/components/reveal'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Circuitrix — SPECTRA 2K26',
  description:
    'Circuitrix is a three-round circuit debugging event at SPECTRA 2K26 on 15 October 2026.',
}

const meta = [
  {
    icon: CalendarDays,
    label: 'Date',
    value: '15 October 2026',
  },
  {
    icon: Clock,
    label: 'Time',
    value: 'Forenoon (FN)',
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: 'SJB 102',
  },
  {
    icon: Users,
    label: 'Team Size',
    value: '2–3 members',
  },
  {
    icon: Wallet,
    label: 'Registration Fee',
    value: '₹100 per participant',
  },
]

const rounds = [
  {
    icon: Brain,
    title: 'Quiz',
    text: 'Test your electronics and technical knowledge through an exciting quiz round.',
  },
  {
    icon: Puzzle,
    title: 'Puzzle to Circuit',
    text: 'Solve the given puzzle and build the required circuit accurately within the given time.',
  },
  {
    icon: Wrench,
    title: 'Fault Detection',
    text: 'Identify faults in the given circuit and fix them successfully.',
  },
]

export default function CircuitrixPage() {
  return (
    <>
      <PageHeader
        eyebrow="Offline Event"
        title="Circuitrix"
        description="A three-round debugging challenge designed to test technical knowledge, problem-solving skills, and practical circuit-building ability."
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-widest text-primary">
          DEBUG EVENT
        </span>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <MetaGrid items={meta} />
        </Reveal>

        {/* Rounds */}
        <Reveal className="mt-16">
          <SectionHeading
            align="center"
            eyebrow="Format"
            title="Three Rounds"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {rounds.map((round, i) => (
            <Reveal key={round.title} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/50">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-4xl font-bold text-primary/25">
                    0{i + 1}
                  </span>

                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                    <round.icon className="size-6" />
                  </span>
                </div>

                <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                  Round {i + 1}
                </p>

                <h3 className="mt-1 text-xl font-bold tracking-tight">
                  {round.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {round.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Event Description */}
        <Reveal className="mt-16">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <SectionHeading
              eyebrow="Overview"
              title="Event Description"
            />

            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Circuitrix is a technical debugging event where teams
                compete through three challenging rounds. Participants
                will be tested on their technical knowledge, logical
                thinking, circuit-building skills, and ability to identify
                and fix circuit faults.
              </p>

              <p>
                The event begins with a quiz, followed by a puzzle-to-circuit
                challenge, and concludes with fault detection and fixing.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Event Information */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <InfoCard
              title="Event Details"
              items={[
                'Team size: 2–3 members.',
                'Registration fee: ₹100 per participant.',
                'Event date: 15 October 2026.',
                'Event session: Forenoon (FN).',
                'Venue: SJB 102.',
                'Registration closes on 14 October 2026.',
              ]}
            />
          </Reveal>

          <Reveal delay={120}>
            <InfoCard
              title="Rounds"
              items={[
                'Round 1 — Quiz.',
                'Round 2 — Puzzle to Circuit.',
                'Round 3 — Fault Detection.',
              ]}
            />
          </Reveal>
        </div>

        {/* Registration */}
        <Reveal className="mt-14 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Registration closes on 14 October 2026
          </p>

          <CtaButton href="/register" size="lg">
            Register for Circuitrix
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </CtaButton>
        </Reveal>
      </section>
    </>
  )
}
