import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const ctaVariants = cva(
  'group relative inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-wide transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:shadow-[0_0_28px_oklch(0.78_0.16_200/0.5)] hover:-translate-y-0.5',
        outline:
          'border border-border glass text-foreground hover:border-primary/60 hover:text-primary hover:-translate-y-0.5',
        accent:
          'bg-accent text-accent-foreground hover:shadow-[0_0_28px_oklch(0.62_0.16_270/0.5)] hover:-translate-y-0.5',
        ghost: 'text-foreground/80 hover:text-primary',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type CtaButtonProps = VariantProps<typeof ctaVariants> & {
  className?: string
  children: React.ReactNode
} & (
    | ({ href: string } & React.ComponentPropsWithoutRef<typeof Link>)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  )

export function CtaButton({ className, variant, size, children, ...props }: CtaButtonProps) {
  const classes = cn(ctaVariants({ variant, size }), className)

  if ('href' in props && props.href) {
    const { href, ...rest } = props as { href: string } & React.ComponentPropsWithoutRef<
      typeof Link
    >
    const external = href.startsWith('http')
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
