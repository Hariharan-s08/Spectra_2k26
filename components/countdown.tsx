'use client'

import { useEffect, useState } from 'react'

const TARGET = new Date('2026-10-15T09:00:00+05:30').getTime()

function getRemaining() {
  const now = Date.now()
  const diff = Math.max(0, TARGET - now)
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  }
}

export function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(null)

  useEffect(() => {
    setTime(getRemaining())
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time?.days },
    { label: 'Hours', value: time?.hours },
    { label: 'Minutes', value: time?.minutes },
    { label: 'Seconds', value: time?.seconds },
  ]

  return (
    <div>
      <p className="mb-3 font-mono text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
        Countdown to 15 October 2026
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="glass flex flex-col items-center rounded-xl border border-border px-2 py-3 sm:px-4 sm:py-4"
          >
            <span
              className="font-mono text-2xl font-bold tabular-nums text-primary text-glow sm:text-4xl"
              suppressHydrationWarning
            >
              {time == null ? '--' : String(unit.value).padStart(2, '0')}
            </span>
            <span className="mt-1 text-[0.6rem] font-medium tracking-widest text-muted-foreground uppercase sm:text-xs">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
