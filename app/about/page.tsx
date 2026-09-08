import type { Metadata } from 'next'
import { ArrowRight, Cpu, Lightbulb, Users, Trophy } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'About — SPECTRA 2K26',
  description:
    'Learn about SPECTRA 2K26, the national level technical symposium organized by the Department of Electronics and Communication Engineering.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About SPECTRA 2K26"
        title="Where ideas meet innovation"
        description="SPECTRA 2K26 is a national level technical symposium organized by the Department of Electronics and Communication Engineering in association with SPARKS Association."
      />

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="font-mono text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              About the Symposium
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Innovate. Connect. Create.
            </h2>

            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                SPECTRA 2K26 brings together students to showcase innovative
                ideas, technical knowledge, creativity, and problem-solving
                skills.
              </p>

              <p>
                The symposium features technical and non-technical events,
                giving participants opportunities to present ideas, solve
                circuit challenges, compete with other teams, and enjoy an
                engaging event experience.
              </p>

              <p>
                The symposium is conducted on{' '}
                <span className="font-semibold text-foreground">
                  14 and 15 October 2026
                </span>
                , with the online event on 14 October and offline events on
                15 October.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl border border-border p-6">
                <Lightbulb className="size-6 text-primary" />
                <p className="mt-4 text-2xl font-bold">Idea Ignite</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Paper Presentation
                </p>
              </div>

              <div className="glass rounded-2xl border border-border p-6">
                <Cpu className="size-6 text-primary" />
                <p className="mt-4 text-2xl font-bold">Circuitrix</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Debug Event
                </p>
              </div>

              <div className="glass rounded-2xl border border-border p-6">
                <Users className="size-6 text-primary" />
                <p className="mt-4 text-2xl font-bold">2–3</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Members per team
                </p>
              </div>

              <div className="glass rounded-2xl border border-border p-6">
                <Trophy className="size-6 text-primary" />
                <p className="mt-4 text-2xl font-bold">₹5,000</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Top prize
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Department */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Organized By
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Department of Electronics and Communication Engineering
            </h2>

            <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
              SPECTRA 2K26 is organized by the Department of Electronics and
              Communication Engineering in association with SPARKS Association
              at E. G. S. Pillay Engineering College.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Event overview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            What to Expect
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Something for every participant
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <Lightbulb className="size-7 text-primary" />

              <h3 className="mt-5 text-xl font-bold">Idea Ignite</h3>

              <p className="mt-3 leading-relaxed text-muted-foreground">
                Present innovative ideas, research, and technical solutions
                through paper presentations in offline and online formats.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <Cpu className="size-7 text-primary" />

              <h3 className="mt-5 text-xl font-bold">Circuitrix</h3>

              <p className="mt-3 leading-relaxed text-muted-foreground">
                Take on quiz, puzzle and circuit-building challenges followed
                by fault detection and fixing.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <Users className="size-7 text-primary" />

              <h3 className="mt-5 text-xl font-bold">Fun Fusion</h3>

              <p className="mt-3 leading-relaxed text-muted-foreground">
                Enjoy an exciting non-technical event focused on teamwork,
                entertainment, and fun.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 text-center">
          <CtaButton href="/events" variant="outline">
            Explore Events
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </CtaButton>
        </Reveal>
      </section>

      {/* Dates */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Save the Date
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              14 & 15 October 2026
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Join SPECTRA 2K26 and be part of an experience built around
              innovation, connection, creativity, and competition.
            </p>

            <div className="mt-8">
              <CtaButton href="/register" size="lg">
                Register Now
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}