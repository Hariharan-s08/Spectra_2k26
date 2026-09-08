import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CONTACT, SOCIALS } from '@/lib/events'

export const metadata: Metadata = {
  title: 'Contact — SPECTRA 2K26',
  description:
    'Contact the organizers of SPECTRA 2K26, National Level Technical Symposium.',
}

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have questions about SPECTRA 2K26? Reach out to our coordinators."
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Convenor */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                Convenor
              </p>

              <h2 className="text-xl font-semibold text-foreground">
                {CONTACT.convenor.name}
              </h2>

              <p className="mt-1 text-muted-foreground">
                {CONTACT.convenor.role}
              </p>
            </div>

            {/* Faculty Coordinators */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                Faculty Coordinators
              </p>

              <div className="space-y-5">
                {CONTACT.facultyCoordinators.map((coordinator) => (
                  <div key={coordinator.name}>
                    <h2 className="text-lg font-semibold text-foreground">
                      {coordinator.name}
                    </h2>
                    <p className="text-muted-foreground">
                      {coordinator.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Coordinators */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                Student Coordinators
              </p>

              <div className="space-y-5">
                {CONTACT.studentCoordinators.map((coordinator) => (
                  <div key={coordinator.name}>
                    <h2 className="text-lg font-semibold text-foreground">
                      {coordinator.name}
                    </h2>

                    <p className="text-muted-foreground">
                      {coordinator.role}
                    </p>

                    <a
                      href={`tel:${coordinator.phone}`}
                      className="mt-1 inline-block text-primary hover:underline"
                    >
                      {coordinator.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                Contact
              </p>

              <a
                href={`mailto:${CONTACT.email}`}
                className="text-lg font-medium text-foreground hover:text-primary"
              >
                {CONTACT.email}
              </a>

              <div className="mt-6">
                <p className="mb-2 text-sm text-muted-foreground">
                  Follow SPECTRA 2K26
                </p>

                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Venue */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
              Venue
            </p>

            <h2 className="text-lg font-semibold text-foreground">
              E. G. S. Pillay Engineering College
            </h2>

            <p className="mt-1 text-muted-foreground">
              Department of Electronics and Communication Engineering
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}