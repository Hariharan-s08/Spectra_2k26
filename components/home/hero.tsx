import { ArrowRight, CalendarDays } from 'lucide-react'
import Image from 'next/image'
import { CtaButton } from '@/components/cta-button'
import { Countdown } from '@/components/countdown'
import { CircuitLines } from '@/components/circuit-lines'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* EGSPEC header image */}
      <div className="relative z-10 w-full bg-background">
        <Image
          src="/egspec-header.png"
          alt="E.G.S. Pillay Engineering College"
          width={1536}
          height={192}
          priority
          className="h-auto w-full"
        />
      </div>

      <div className="circuit-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="radial-fade absolute inset-0" aria-hidden="true" />
      <CircuitLines />

      {/* ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 text-center sm:px-6 sm:pt-32 lg:px-8">
        {/* Main title */}
        <h1
          className="animate-fade-up text-balance text-5xl font-bold tracking-tight text-glow sm:text-7xl lg:text-8xl"
          style={{ animationDelay: '80ms' }}
        >
          SPECTRA{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            2K26
          </span>
        </h1>

        {/* Symposium name */}
        <p
          className="animate-fade-up mt-4 font-mono text-base font-semibold tracking-[0.12em] text-primary uppercase sm:text-xl"
          style={{ animationDelay: '140ms' }}
        >
          International Technical Symposium
        </p>

        {/* Organized by */}
        <div
          className="animate-fade-up mt-8 space-y-2"
          style={{ animationDelay: '200ms' }}
        >
          <p className="text-sm text-muted-foreground sm:text-base">
            Organized by
          </p>

          <p className="text-lg font-semibold text-foreground sm:text-2xl">
            Department of Electronics and Communication Engineering
          </p>
        </div>

        {/* College */}
        <p
          className="animate-fade-up mt-3 text-sm font-medium text-muted-foreground sm:text-base"
          style={{ animationDelay: '240ms' }}
        >
          E. G. S. Pillay Engineering College
        </p>

        {/* Association */}
        <p
          className="animate-fade-up mt-1 text-sm text-muted-foreground"
          style={{ animationDelay: '280ms' }}
        >
          In association with SPARKS Association
        </p>

        {/* Date */}
        <div
          className="animate-fade-up mt-7 inline-flex items-center gap-2.5 rounded-xl border border-primary/40 bg-primary/10 px-5 py-3 text-primary"
          style={{ animationDelay: '320ms' }}
        >
          <CalendarDays className="size-5" />
          <span className="font-mono text-sm font-semibold tracking-widest sm:text-base">
            14 &amp; 15 OCTOBER 2026
          </span>
        </div>

        {/* Buttons */}
        <div
          className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: '380ms' }}
        >
          <CtaButton
            href="/register"
            size="lg"
            className="w-full sm:w-auto"
          >
            Register Now
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </CtaButton>

          <CtaButton
            href="/events"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            Explore Events
          </CtaButton>
        </div>

        {/* Countdown */}
        <div
          className="animate-fade-up mx-auto mt-14 max-w-2xl"
          style={{ animationDelay: '440ms' }}
        >
          <Countdown />
        </div>
      </div>
    </section>
  )
}
