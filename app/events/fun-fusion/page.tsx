import type { Metadata } from 'next'
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Wallet,
  PartyPopper,
  MessageSquareOff,
  Gavel,
  Info,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { MetaGrid } from '@/components/event-detail'
import { Reveal } from '@/components/reveal'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Fun Fusion — SPECTRA 2K26',
  description:
    'Fun Fusion non-technical event at SPECTRA 2K26 — 15 October 2026, forenoon. Free entry.',
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
    icon: PartyPopper,
    label: 'Type',
    value: 'Non-Technical Event',
  },
  {
    icon: Wallet,
    label: 'Registration Fee',
    value: 'Free',
  },
]

const dontSayCategories = [
  'Movies',
  'Memes',
  'Celebrities',
  'Sports',
  'Food',
  'College Life',
  'Everyday Objects',
]

const chaosChallenges = [
  'Cup stacking',
  'Balloon games',
  'Puzzles',
  'Memory challenges',
  'Speed drawing',
  'Tongue twisters',
  'Object identification',
  'Other entertaining tasks',
]

export default function FunFusionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Non-Technical Event"
        title="Fun Fusion"
        description="A fun-filled non-technical event designed to bring energy, creativity, quick thinking, and entertainment to SPECTRA 2K26."
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-widest text-accent">
          FREE · FOR EVERYONE
        </span>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <MetaGrid items={meta} />
        </Reveal>

        {/* Registration Note */}
        <Reveal className="mt-8">
          <div className="flex items-start gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6">
            <Info className="mt-0.5 size-5 shrink-0 text-accent" />

            <p className="text-sm leading-relaxed text-foreground/90">
              <span className="font-semibold text-accent">
                Free participation.
              </span>{' '}
              Fun Fusion will be conducted during the forenoon session on
              15 October 2026.
            </p>
          </div>
        </Reveal>

        {/* Rounds */}
        <Reveal className="mt-16">
          <SectionHeading
            align="center"
            eyebrow="Format"
            title="Two rounds of pure fun"
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {/* Round 1 */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MessageSquareOff className="size-6" />
                </span>

                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    Round 1
                  </p>

                  <h3 className="mt-1 text-2xl font-bold tracking-tight">
                    Don&apos;t Say It!
                  </h3>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                Participants make their teammates guess secret words without
                saying the actual word or any restricted related words.
                Quick thinking and creative clues are the key to victory.
              </p>

              <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-widest text-primary">
                Categories
              </p>

              <ul className="mt-3 flex flex-wrap gap-2.5">
                {dontSayCategories.map((category) => (
                  <li
                    key={category}
                    className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-foreground/90"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Round 2 */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Gavel className="size-6" />
                </span>

                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    Round 2
                  </p>

                  <h3 className="mt-1 text-2xl font-bold tracking-tight">
                    Auction of Chaos
                  </h3>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                Teams receive virtual points and bid on mystery fun
                challenges. Win a challenge to gain points — fail, and you
                lose your bid. The team with the highest score becomes the
                <span className="font-semibold text-accent">
                  {' '}
                  CHAOS Champion
                </span>
                .
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-primary">
                    Possible Challenges
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-2.5">
                    {chaosChallenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-foreground/90"
                      >
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/30 p-5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-primary">
                    Scoring
                  </p>

                  <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Success → Gain points
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-destructive" />
                      Failure → Lose the bid
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-gold" />
                      Highest score → CHAOS Champion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Registration */}
        <Reveal className="mt-14 text-center">
          <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Join Fun Fusion during the forenoon session on 15 October 2026
            and enjoy an exciting non-technical experience.
          </p>

          <CtaButton href="/register" size="lg">
            Register for Fun Fusion
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </CtaButton>
        </Reveal>
      </section>
    </>
  )
}