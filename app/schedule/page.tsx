import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Sun,
  Sunset,
  Radio,
  Clock,
  MapPin,
  Users,
  Wallet,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Schedule — SPECTRA 2K26',
  description:
    'Full schedule for SPECTRA 2K26 — online Idea Ignite on 14 October 2026 and offline events on 15 October 2026.',
}

const offlineTimeline = [
  {
    period: 'Forenoon (FN)',
    icon: Sun,
    accent: 'text-primary',
    ring: 'border-primary/40',
    items: [
      {
        name: 'Idea Ignite — Offline Paper Presentation',
        meta: '₹100 per participant · SJB 105',
        href: '/events/idea-ignite-offline',
      },
      {
        name: 'Circuitrix — Debug Event',
        meta: '₹100 per participant · SJB 102',
        href: '/events/circuitrix',
      },
    ],
  },
  {
    period: 'Afternoon (AN)',
    icon: Sunset,
    accent: 'text-accent',
    ring: 'border-accent/40',
    items: [
      {
        name: 'Fun Fusion — Non-Technical Event',
        meta: 'Free · SJB 102 · No registration required',
        href: '/events/fun-fusion',
      },
    ],
  },
]

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Schedule"
        title="SPECTRA 2K26 Schedule"
        description="Explore the complete schedule for the online and offline events of SPECTRA 2K26."
      />

      {/* Online Day */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <span className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-sm font-semibold tracking-widest text-accent">
                14 OCTOBER 2026
              </span>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Online Event
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-accent/30 bg-card p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <Radio className="size-3.5" />
                  Online
                </span>

                <span className="rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Full Day
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight">
                Idea Ignite — Online Paper Presentation
              </h3>

              <div className="mt-5 flex flex-wrap gap-5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-accent/80" />
                  Full Day
                </span>

                <span className="inline-flex items-center gap-2">
                  <Users className="size-4 text-accent/80" />
                  Team of 2–3 members
                </span>

                <span className="inline-flex items-center gap-2">
                  <Wallet className="size-4 text-accent/80" />
                  Free
                </span>

                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-accent/80" />
                  Online
                </span>
              </div>

              <p className="mt-5 text-sm text-muted-foreground">
                Registration closes on 10 October 2026.
              </p>

              <div className="mt-7">
                <CtaButton
                  href="/events/idea-ignite-online"
                  variant="outline"
                >
                  View Event Details
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offline Day */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-center gap-4">
            <span className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-sm font-semibold tracking-widest text-primary">
              15 OCTOBER 2026
            </span>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Offline Events
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div
            className="absolute bottom-2 left-[19px] top-2 w-px bg-border sm:left-[27px]"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {offlineTimeline.map((block, bi) => (
              <Reveal key={block.period} delay={bi * 120}>
                <div className="relative pl-14 sm:pl-20">
                  <span
                    className={`absolute left-0 top-0 inline-flex size-10 items-center justify-center rounded-full border ${block.ring} bg-card sm:size-14`}
                  >
                    <block.icon
                      className={`size-5 ${block.accent} sm:size-6`}
                    />
                  </span>

                  <div className="pt-1.5 sm:pt-3">
                    <p
                      className={`font-mono text-xs font-semibold uppercase tracking-widest ${block.accent}`}
                    >
                      {block.period}
                    </p>

                    <div className="mt-4 space-y-4">
                      {block.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                        >
                          <div>
                            <p className="font-semibold text-foreground">
                              {item.name}
                            </p>

                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.meta}
                            </p>
                          </div>

                          <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12">
          <SectionHeading
            align="center"
            eyebrow="Registration"
            title="Event Registration"
            description="Idea Ignite and Circuitrix require registration. Fun Fusion is free and requires no registration."
          />
        </Reveal>

        <Reveal delay={120} className="mt-8 text-center">
          <CtaButton href="/register" size="lg">
            Register for SPECTRA 2K26
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </CtaButton>
        </Reveal>
      </section>
    </>
  )
}
