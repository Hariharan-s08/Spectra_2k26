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
          className="glass flex items-center gap-3 rounded-xl border border-border p-4"
        >
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Icon className="size-5" />
          </span>
          <span className="flex flex-col">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
              {label}
            </span>
            <span className="text-sm font-semibold text-foreground">{value}</span>
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
    <div className={cn('rounded-2xl border border-border bg-card p-6 sm:p-8', className)}>
      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
