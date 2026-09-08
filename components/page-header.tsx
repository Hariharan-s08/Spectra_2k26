import { CircuitLines } from '@/components/circuit-lines'

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="circuit-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="radial-fade absolute inset-0" aria-hidden="true" />
      <CircuitLines className="opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.25em] text-primary uppercase">
            <span className="h-px w-6 bg-primary/60" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
