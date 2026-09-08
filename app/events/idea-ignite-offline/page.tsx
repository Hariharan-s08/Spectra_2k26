import type { Metadata } from 'next'
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Wallet,
  FileText,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { PrizePodium } from '@/components/prize-podium'
import { DomainList } from '@/components/domain-list'
import { MetaGrid, InfoCard } from '@/components/event-detail'
import { Reveal } from '@/components/reveal'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Idea Ignite (Offline) — SPECTRA 2K26',
  description:
    'Idea Ignite offline paper presentation at SPECTRA 2K26 — 15 October 2026, afternoon. Team of 2–3, ₹100 per participant, prizes up to ₹5,000.',
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
    value: '15 October 2026',
  },
  {
    icon: Clock,
    label: 'Time',
    value: 'Afternoon (AN)',
  },
  {
    icon: MapPin,
    label: 'Mode',
    value: 'Offline',
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

export default function IdeaIgniteOfflinePage() {
  return (
    <>
      <PageHeader
        eyebrow="Offline Event"
        title="Idea Ignite"
        description="Present your innovative ideas, research, and technical solutions across exciting domains in electronics and communication."
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-widest text-primary">
          PAPER PRESENTATION
        </span>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <MetaGrid items={meta} />
        </Reveal>

        {/* Prizes */}
        <Reveal className="mt-16">
          <SectionHeading
            eyebrow="Rewards"
            title="Prize pool"
            align="center"
          />

          <div className="mt-8">
            <PrizePodium />
          </div>
        </Reveal>

        {/* Description */}
        <Reveal className="mt-16">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <SectionHeading
              eyebrow="Overview"
              title="Event description"
            />

            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Idea Ignite is the paper presentation event of SPECTRA 2K26.
                Teams can present innovative ideas, research work, or
                technical solutions and showcase their knowledge,
                creativity, and understanding of the chosen topic.
              </p>

              <p>
                Participants are encouraged to explore emerging technologies
                and real-world problems while presenting their ideas with
                clarity and confidence.
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

        {/* Rules + Instructions */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <InfoCard
              title="Rules & Guidelines"
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
              title="Important Instructions"
              items={[
                'Carry a valid college ID and registration confirmation.',
                'Bring your presentation file as a backup.',
                'Report to the venue on 15 October 2026.',
                'Participants must follow the instructions given by the event coordinators.',
              ]}
            />
          </Reveal>
        </div>

        {/* Registration */}
        <Reveal className="mt-14 text-center">
          <CtaButton href="/register" size="lg">
            Register for Idea Ignite
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </CtaButton>
        </Reveal>
      </section>
    </>
  )
}