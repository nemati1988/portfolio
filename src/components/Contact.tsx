import { ArrowUpRight, Reveal } from './shared'

const contactIconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const CONTACTS = [
  {
    title: 'Email',
    value: 'amin.nemati3@gmail.com',
    support: 'Best for project inquiries and collaborations',
    action: 'Click to open',
    href: 'mailto:amin.nemati3@gmail.com',
    external: false,
    icon: (
      <svg {...contactIconProps}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
  },
  {
    title: 'Phone',
    value: '(+98) 915 474 1924',
    support: 'Available for professional conversations',
    action: 'Click to call',
    href: 'tel:+989154741924',
    external: false,
    icon: (
      <svg {...contactIconProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    title: 'Telegram',
    value: 'amin_nemati',
    support: 'Quickest way to start a conversation',
    action: 'Open chat',
    href: 'https://t.me/amin_nemati',
    external: true,
    icon: (
      <svg {...contactIconProps}>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
      </svg>
    ),
  },
]

const OPEN_TO = [
  'Full-time Opportunities',
  'Remote Opportunities',
  'Projects',
  'Design Systems',
  'B2B Products',
]

export default function Contact() {
  return (
    <section data-figma-id="Contact" id="contact" className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div className="w-full">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-muted-foreground/60 flex-none" />
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Contact Me
            </p>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-1.5 text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.02em] text-foreground">
            Let&apos;s build <span className="text-primary">products</span>{' '}
            together
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            I&apos;m always interested in discussing product design, enterprise
            software, Design Systems, and opportunities to create meaningful
            digital experiences. Let&apos;s start a conversation.
          </p>
        </Reveal>
      </div>

      {/* Contact cards */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CONTACTS.map((c, i) => (
          <Reveal key={c.title} delay={230 + i * 60}>
            <a
              href={c.href}
              {...(c.external
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
              aria-label={`${c.title}: ${c.value}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-white dark:bg-zinc-900 p-6 transition-colors duration-300 hover:border-foreground/20 hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary/10">
                {c.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                {c.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-foreground/80">
                {c.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.support}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                {c.action}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Currently open to */}
      <div className="mt-16">
        <Reveal delay={450}>
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            Currently Open To
          </h3>
        </Reveal>
        <Reveal delay={520}>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {OPEN_TO.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-border bg-white dark:bg-zinc-900 px-3.5 py-1.5 text-sm text-foreground/70 transition-colors duration-200 hover:border-foreground/20 hover:text-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
