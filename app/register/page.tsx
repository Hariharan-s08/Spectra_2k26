import type { Metadata } from 'next'
import { ExternalLink, FileSpreadsheet, ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaButton } from '@/components/cta-button'
import { REGISTER_GFORM_URL } from '@/lib/events'

export const metadata: Metadata = {
  title: 'Register — SPECTRA 2K26',
  description:
    'Register for SPECTRA 2K26 and secure your spot for the online and offline events.',
}

export default function RegisterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Register"
        title="Secure your spot at SPECTRA 2K26"
        description="Register your team and get ready for SPECTRA 2K26 on 14 & 15 October 2026."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative text-center">
              <div className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <FileSpreadsheet className="size-8" />
              </div>

              <h2 className="mt-6 text-2xl font-bold tracking-tight">
                Register for SPECTRA 2K26
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Register your team through our official registration form and
                participate in the exciting technical and non-technical events.
              </p>

              <CtaButton
                href={REGISTER_GFORM_URL}
                variant="primary"
                className="mt-8 w-full sm:w-auto"
              >
                Register Now
                <ExternalLink />
              </CtaButton>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12 rounded-3xl border border-border bg-card/40 p-8 text-center sm:p-10">
          <h3 className="text-xl font-bold tracking-tight">
            Have questions before registering?
          </h3>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Reach out to our coordinators for help with team formation or event
            details.
          </p>

          <div className="mt-6">
            <CtaButton href="/contact" variant="outline">
              Contact the Team
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </CtaButton>
          </div>
        </Reveal>
      </section>
    </>
  )
}