import type { Metadata } from 'next'
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Radio,
  Users,
  Wallet,
  FileText,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { DomainList } from '@/components/domain-list'
import { MetaGrid, InfoCard } from '@/components/event-detail'
import { Reveal } from '@/components/reveal'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Idea Ignite (Online) — SPECTRA 2K26',
  description:
    'Idea Ignite online paper presentation at SPECTRA 2K26 — 14 October 2026, full day. Team of 2–3 members, free registration.',
}

const meta = [
  {
    icon: FileText,
    label: 'Type',
    value: 'Online Paper Presentation',
  },
  {
    icon: CalendarDays,
    label: 'Date',
    value: '14 October 2026',
  },
  {
    icon: Clock,
    label: 'Time',
    value: 'Full Day',
  },
  {
    icon: Radio,
    label: 'Mode',
    value: 'Online',
  },
  {
    icon: Users,
    label: 'Team Size',
    value: '2–3 members',
  },
  {
    icon: Wallet,
    label: 'Registration Fee',
    value: 'Free',
  },
]

export default function IdeaIgniteOnlinePage() {
  return (
    <>
      <PageHeader
        eyebrow="Online Event"
        title="Idea Ignite — Online"
        description="Present your innovative ideas, research, and technical solutions online from anywhere."
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent">
          FREE · ONLINE PAPER PRESENTATION
        </span>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <MetaGrid items={meta} />
        </Reveal>

        {/* Registration Note */}
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
            <p className="text-sm leading-relaxed text-foreground/90">
              <span className="font-semibold text-accent">
                Free registration.
              </span>{' '}
              The online presentation will be conducted for the full day on
              14 October 2026. Registration closes on 10 October 2026.
            </p>
          </div>
        </Reveal>

        {/* Description */}
        <Reveal className="mt-14">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <SectionHeading
              eyebrow="Overview"
              title="Event Description"
            />

            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Idea Ignite — Online is the online paper presentation event of
                SPECTRA 2K26, conducted on 14 October 2026. Teams can present
                their innovative ideas, research work, or technical solutions
                through an online platform.
              </p>

              <p>
                Each team must consist of 2–3 members. The paper must be
                related to SDG Goals and Electronics and Communication
                Engineering.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Domains */}
        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <SectionHeading
              eyebrow="Topics"
              title="Domains"
            />

            <div className="mt-6">
              <DomainList />
            </div>
          </div>
        </Reveal>

        {/* Guidelines + Instructions */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <InfoCard
              title="Rules & Guidelines"
              items={[
                'Each team must consist of 2–3 members.',
                'The paper must be related to SDG Goals and Electronics and Communication Engineering.',
                'Only original work is accepted. Plagiarism will lead to disqualification.',
                'Each team must present within the allotted time, followed by a Q&A session.',
                'Teams should keep their presentation and demonstration materials ready before their scheduled slot.',
                'Any form of malpractice or unfair practice may result in immediate disqualification.',
              ]}
            />
          </Reveal>

          <Reveal delay={120}>
            <InfoCard
              title="Online Presentation Instructions"
              items={[
                'All participants must join the online session on time.',
                'Participants must ensure a stable internet connection and the necessary presentation facilities.',
                'Teams must join the online presentation session at their scheduled time.',
                'Keep the presentation and demonstration materials ready before the scheduled slot.',
                'Any technical issue must be immediately reported to the event coordinators.',
                'Participants must maintain professional decorum throughout the online event.',
                'The organizers may modify the schedule in case of unavoidable circumstances or technical difficulties.',
                'The decision of the jury and organizers will be final and binding.',
              ]}
            />
          </Reveal>
        </div>

        {/* Registration */}
        <Reveal className="mt-14 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Registration closes on 10 October 2026
          </p>

          <CtaButton href="/register" size="lg">
            Register for Free
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </CtaButton>
        </Reveal>
      </section>
    </>
  )
}
