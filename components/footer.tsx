import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Instagram } from '@/components/social-icons'
import { Logo } from '@/components/logo'
import { SOCIALS, CONTACT } from '@/lib/events'

const nav = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/register', label: 'Register' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: SOCIALS.instagram, label: 'Instagram', Icon: Instagram },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <Logo />

          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            National level technical symposium by the Department of Electronics
            and Communication Engineering, E. G. S. Pillay Engineering College,
            in association with SPARKS Association.
          </p>

          <p className="font-mono text-xs tracking-widest text-primary">
            14 &amp; 15 OCTOBER 2026
          </p>
        </div>

        <div className="md:justify-self-center">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
            Explore
          </h3>

          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:justify-self-end">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
            Connect
          </h3>

          <a
            href={`mailto:${CONTACT.email}`}
            className="mb-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4" />
            {CONTACT.email}
          </a>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/60 hover:text-primary hover:shadow-[0_0_16px_oklch(0.78_0.16_200/0.3)]"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            © 2026 SPECTRA 2K26 — Department of ECE, E. G. S. Pillay Engineering
            College.
          </p>

          <p className="font-mono tracking-widest">
            Innovate. Connect. Create.
          </p>
        </div>
      </div>
    </footer>
  )
}
