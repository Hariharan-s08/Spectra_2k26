import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { Countdown } from '@/components/countdown'
import { CircuitLines } from '@/components/circuit-lines'
import { Logo } from '@/components/logo'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="circuit-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="radial-fade absolute inset-0" aria-hidden="true" />
      <CircuitLines />
      {/* ambient glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-32 text-center sm:px-6 sm:pt-40 lg:px-8">
        <div className="animate-fade-up flex justify-center">
          <span className="animate-float-slow inline-flex items-center justify-center rounded-2xl border border-border glass p-4 glow-primary">
            <Logo showWordmark={false} className="[&_svg]:h-14 [&_svg]:w-14" />
          </span>
        </div>

        <div
          className="animate-fade-up mt-8 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 font-mono text-xs tracking-widest text-primary uppercase"
          style={{ animationDelay: '80ms' }}
        >
          <Sparkles className="size-3.5" />
          National Level Technical Symposium
        </div>

        <h1
          className="animate-fade-up mt-6 text-balance text-5xl font-bold tracking-tight text-glow sm:text-7xl lg:text-8xl"
          style={{ animationDelay: '140ms' }}
        >
          SPECTRA{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            2K26
          </span>
        </h1>

        <p
          className="animate-fade-up mt-5 font-mono text-lg tracking-[0.2em] text-muted-foreground sm:text-xl"
          style={{ animationDelay: '200ms' }}
        >
          Innovate. Connect. Create.
        </p>

        <div
          className="animate-fade-up mt-6 space-y-1 text-sm leading-relaxed text-muted-foreground sm:text-base"
          style={{ animationDelay: '260ms' }}
        >
          <p>Organized by the Department of Electronics and Communication Engineering</p>
          <p className="font-medium text-foreground">E. G. S. Pillay Engineering College</p>
          <p>In association with SPARKS Association</p>
        </div>

        <div
          className="animate-fade-up mt-7 inline-flex items-center gap-2.5 rounded-xl border border-primary/40 bg-primary/10 px-5 py-3 text-primary"
          style={{ animationDelay: '320ms' }}
        >
          <CalendarDays className="size-5" />
          <span className="font-mono text-sm font-semibold tracking-widest sm:text-base">
            14 &amp; 15 OCTOBER 2026
          </span>
        </div>

        <div
          className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: '380ms' }}
        >
          <CtaButton href="/register" size="lg" className="w-full sm:w-auto">
            Register Now
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </CtaButton>
          <CtaButton href="/events" variant="outline" size="lg" className="w-full sm:w-auto">
            Explore Events
          </CtaButton>
        </div>

        <div className="animate-fade-up mx-auto mt-14 max-w-2xl" style={{ animationDelay: '440ms' }}>
          <Countdown />
        </div>
      </div>
    </section>
  )
}
