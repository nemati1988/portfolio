import { Reveal } from './shared'

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground/70 transition-colors duration-200 hover:border-foreground/20 hover:bg-muted hover:text-foreground">
      {children}
    </span>
  )
}

function CardShell({
  children,
  delay,
}: {
  children: React.ReactNode
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <article
        tabIndex={0}
        className="group rounded-2xl border border-border bg-white dark:bg-zinc-900 p-6 transition-colors duration-300 hover:border-foreground/20 hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 sm:p-7"
      >
        {children}
      </article>
    </Reveal>
  )
}

const STANDARD_ROLES = [
  {
    company: 'Golrang System',
    current: false,
    role: 'Product Designer',
    date: 'Mar 2023 - Sep 2026',
    location: 'On-Site - Mashhad, Iran',
    tags: [
      'SFA App',
      'Tous Design System',
      'Negah HSE Dashboard',
      'Reporting Dashboard',
      'Notification App',
    ],
  },
  {
    company: 'Effect Studio',
    current: false,
    role: 'Director of Design Systems',
    date: 'Dec 2023 - April 2024',
    location: 'Remote',
    tags: ['Components', 'Tokens', 'Documentation', 'Scalability'],
  },
  {
    company: 'Nikaro',
    current: false,
    role: 'User Interface Designer',
    date: 'Nov 2022 - Jan 2023',
    location: 'Hybrid',
    tags: ['Website Redesign', 'UX Audit', 'Landing Pages'],
  },
]

const ROSHDANA_ROLES = [
  { role: 'User Interface Designer', date: 'Apr 2022 - Oct 2022' },
  { role: 'Head of Education Department', date: 'Jul 2020 - Mar 2022' },
  { role: 'Graphic Designer', date: 'Nov 2019 - Jun 2020' },
]

const ROSHDANA_TAGS = [
  'UI/UX',
  'Product Design',
  'UX Audit',
  'Style Guides',
  'Platform Redesign',
  'Landing Pages',
  'Graphic Design',
]

export default function Experience() {
  return (
    <section data-figma-id="Experience" id="experience" className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div className="w-full">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-muted-foreground/60 flex-none" />
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Experience
            </p>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-1.5 text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.02em] text-foreground">
            Professional <span className="text-primary">Journey</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Every role has shaped my expertise in product thinking, enterprise
            software, design systems, and user-centered design. This timeline
            represents deliberate growth toward solving increasingly complex
            product challenges.
          </p>
        </Reveal>
      </div>

      {/* Cards */}
      <div className="mt-12 space-y-4">
        {STANDARD_ROLES.map((item, i) => (
          <CardShell key={item.company} delay={220 + i * 80}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              {/* Left: company + role */}
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {item.company}
                  </h3>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
              </div>

              {/* Right: date + location */}
              <div className="shrink-0 text-left sm:text-right">
                <p className="text-sm font-medium text-foreground/80">
                  {item.date}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {item.location}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </CardShell>
        ))}

        {/* Roshdana — progression card */}
        <CardShell delay={220 + STANDARD_ROLES.length * 80}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Roshdana
            </h3>
            <p className="text-sm font-medium text-muted-foreground sm:text-right">
              3 Roles / Progression
            </p>
          </div>

          <ul className="mt-5 space-y-3.5">
            {ROSHDANA_ROLES.map((r) => (
              <li
                key={r.role}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="flex items-center gap-2.5 text-sm text-foreground/85">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  {r.role}
                </span>
                <span className="pl-5 text-sm text-muted-foreground sm:pl-0">
                  {r.date}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {ROSHDANA_TAGS.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </CardShell>
      </div>
    </section>
  )
}
