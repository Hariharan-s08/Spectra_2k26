import {
  ArrowRight,
  Trophy,
  Users,
  Lightbulb,
  Cpu,
  Radio,
  Gamepad2,
  Mail,
} from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { SectionHeading } from '@/components/section-heading'
import { EventCard } from '@/components/event-card'
import { Reveal } from '@/components/reveal'
import { events, CONTACT } from '@/lib/events'

/* ---------------- About preview ---------------- */
export function AboutPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="About the Symposium"
            title="Where ideas meet innovation"
            description="SPECTRA 2K26 is a national level technical symposium hosted by the Department of Electronics and Communication Engineering. It brings together students to present ideas, solve engineering challenges, and participate in technical and non-technical events."
          />

          <p className="mt-5 leading-relaxed text-muted-foreground">
            With paper presentations, a circuit debugging challenge, and a
            non-technical event, SPECTRA 2K26 provides a platform to innovate,
            connect, create, compete, and learn.
          </p>

          <div className="mt-7">
            <CtaButton href="/about" variant="outline">
              Learn More
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          {[
            { icon: Cpu, label: 'Technical Events', value: '02' },
            { icon: Gamepad2, label: 'Fun Event', value: '01' },
            { icon: Radio, label: 'Online Event', value: '01' },
            { icon: Trophy, label: 'Technical Prizes', value: '₹18K' },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="glass rounded-2xl border border-border p-6 transition-transform hover:-translate-y-1"
            >
              <Icon className="size-6 text-primary" />

              <p className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground">
                {value}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Highlights ---------------- */
const highlights = [
  {
    icon: Lightbulb,
    title: 'Paper Presentations',
    text: 'Present innovative ideas, research, and technical solutions through Idea Ignite in offline and online formats.',
  },
  {
    icon: Cpu,
    title: 'Circuitrix',
    text: 'Test your electronics and circuit knowledge through quiz, puzzle and circuit-building, followed by fault detection and fixing.',
  },
  {
    icon: Gamepad2,
    title: 'Fun Fusion',
    text: 'Take part in an exciting non-technical event designed for teamwork, entertainment, and fun.',
  },
]

export function Highlights() {
  return (
    <section className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Event Highlights"
            title="Innovate. Connect. Create."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 120}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/50">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <h.icon className="size-6" />
                </span>

                <h3 className="mt-5 text-lg font-bold tracking-tight">
                  {h.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Prize highlight ---------------- */
export function PrizeHighlight() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.25em] text-gold uppercase">
                <Trophy className="size-4" />
                Prize Highlights
              </p>

              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Win up to ₹5,000 in technical events
              </h2>

              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                Idea Ignite (Offline) and Circuitrix offer prizes for the top
                three positions. Compete for the podium and showcase your
                technical skills at SPECTRA 2K26.
              </p>
            </div>

            <div className="flex gap-3">
              {[
                { medal: '🥇', amt: '₹5,000' },
                { medal: '🥈', amt: '₹3,000' },
                { medal: '🥉', amt: '₹1,000' },
              ].map((p) => (
                <div
                  key={p.amt}
                  className="glass flex flex-col items-center rounded-2xl border border-border px-5 py-4"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {p.medal}
                  </span>

                  <span className="mt-2 font-mono text-lg font-bold text-foreground">
                    {p.amt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ---------------- Events preview ---------------- */
export function EventsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Events"
          title="Explore the lineup"
          description="Explore paper presentations, circuit challenges, and non-technical fun at SPECTRA 2K26."
        />

        <CtaButton href="/events" variant="ghost" className="shrink-0">
          View all events
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </CtaButton>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event, i) => (
          <Reveal key={event.id} delay={i * 100}>
            <EventCard event={event} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Register CTA ---------------- */
export function RegisterCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-secondary/60 to-card p-10 text-center sm:p-16">
          <div
            className="circuit-grid absolute inset-0 opacity-40"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to be part of SPECTRA 2K26?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Register your team and get ready for SPECTRA 2K26 on 14 and 15
              October 2026.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButton href="/register" size="lg">
                Register Now
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </CtaButton>

              <CtaButton href="/schedule" variant="outline" size="lg">
                View Schedule
              </CtaButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ---------------- Contact preview ---------------- */
export function ContactPreview() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Get in touch"
              title="Questions? We're here to help"
              description="Reach out to our coordinators for any queries about events, registration, or logistics."
            />

            <div className="mt-7">
              <CtaButton href="/contact" variant="outline">
                Contact Us
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            {/* Convenor */}
            <div className="glass flex items-start gap-4 rounded-2xl border border-border p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Users className="size-5" />
              </span>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  Convenor
                </p>

                <p className="text-sm text-muted-foreground">
                  {CONTACT.convenor.name}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {CONTACT.convenor.role}
                </p>
              </div>
            </div>

            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="glass flex items-center gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-primary/50"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Mail className="size-5" />
              </span>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  Email us
                </p>

                <p className="text-sm text-muted-foreground">
                  {CONTACT.email}
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}