import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.25em] text-primary uppercase',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="h-px w-6 bg-primary/60" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
