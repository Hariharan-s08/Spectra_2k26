import { Cpu } from 'lucide-react'
import { DOMAINS } from '@/lib/events'

export function DomainList() {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {DOMAINS.map((domain) => (
        <li
          key={domain}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary"
        >
          <Cpu className="size-3.5 text-primary/70" />
          {domain}
        </li>
      ))}
    </ul>
  )
}
