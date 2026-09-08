import type { Metadata } from 'next'
import {
  ArrowRight,
  CalendarDays,
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
    'Idea Ignite online paper presentation at SPECTRA 2K26 — 14 October 2026. Team of 2–3 members, free registration.',
}

const meta = [
  {
    icon: FileText,
    label: 'Type',
    value: 'Paper Presentation',
  },
  {
    icon: CalendarDays,
    label: 'Date',
    value: '14 October 2026',
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

        {/* Description */}
        <Reveal className="mt-14">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <SectionHeading
              eyebrow="Overview"
              title="Event description"
            />

            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Idea Ignite — Online is the online paper presentation event of
                SPECTRA 2K26, conducted on 14 October 2026. Participants can
                present their innovative ideas, research work, or technical
                solutions through an online platform.
              </p>

              <p>
                The event is open to teams of 2–3 members and participation is
                completely free. Participants can choose a topic from the
                listed domains or present an open-choice topic related to their
                area of interest.
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
              title="Guidelines"
              items={[
                'Each team must consist of 2–3 members.',
                'Participants can choose a topic from the listed domains or an open-choice topic.',
                'The presented work should be original.',
                'The presentation should clearly explain the proposed idea, research, or solution.',
              ]}
            />
          </Reveal>

          <Reveal delay={120}>
            <InfoCard
              title="Online Presentation Instructions"
              items={[
                'The event will be conducted online on 14 October 2026.',
                'Participants should ensure a stable internet connection.',
                'Keep the presentation file ready for screen sharing.',
                'Online meeting and presentation details will be shared with registered participants.',
              ]}
            />
          </Reveal>
        </div>

        {/* Registration */}
        <Reveal className="mt-14 text-center">
          <CtaButton href="/register" size="lg">
            Register for Free
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </CtaButton>
        </Reveal>
      </section>
    </>
  )
}