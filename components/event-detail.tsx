import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function MetaGrid({
  items,
}: {
  items: { icon: LucideIcon; label: string; value: string }[]
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="glass flex min-w-0 items-center gap-3 rounded-xl border border-border p-4"
        >
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Icon className="size-5" />
          </span>

          <span className="flex min-w-0 flex-col">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
              {label}
            </span>

            <span className="break-words text-sm font-semibold text-foreground">
              {value}
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

export function InfoCard({
  title,
  items,
  className,
}: {
  title: string
  items: string[]
  className?: string
}) {
  return (
    <div
      className={cn(
        'h-full min-w-0 overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8',
        className,
      )}
    >
      <h3 className="text-lg font-bold tracking-tight">{title}</h3>

      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex min-w-0 gap-3 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />

            <span className="min-w-0 break-words">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
