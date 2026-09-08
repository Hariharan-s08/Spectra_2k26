import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
        <Image
          src="/spectra-logo.png"
          alt="SPECTRA 2K26"
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
          priority
        />
      </span>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-mono text-sm font-bold tracking-widest text-foreground">
            SPECTRA
          </span>
          <span className="font-mono text-[0.65rem] font-medium tracking-[0.3em] text-primary">
            2K26
          </span>
        </span>
      )}
    </span>
  )
}