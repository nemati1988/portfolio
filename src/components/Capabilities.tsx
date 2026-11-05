import { Reveal } from './shared'

const iconProps = {
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

const CAPABILITIES = [
  {
    title: 'Product Design',
    description:
      'Turning business goals into real user needs into clear, user-friendly digital experiences by simplifying workflows and aligning product design with objectives.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'UI & Interaction Design',
    description:
      'Creating intuitive, accessible interfaces with thoughtful typography, spacing, hierarchy, and subtle interactions that enhance usability.',
    icon: (
      <svg {...iconProps}>
        <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3Z" />
        <path d="m13 13 6 6" />
      </svg>
    ),
  },
  {
    title: 'Design Systems',
    description:
      'Building scalable design systems with reusable components, documentation, and accessibility standards to boost consistency and efficiency across teams.',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: 'UX Strategy & Research',
    description:
      'Shaping with user insights by identifying pain points, mapping journeys, and validating ideas to ensure designs meet real needs.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    title: 'Prototyping & Validation',
    description:
      'Using interactive prototypes and usability testing to communicate ideas, validate flows, and refine designs based on feedback.',
    icon: (
      <svg {...iconProps}>
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    title: 'Developer Collaboration',
    description:
      'Supporting a practical implementation with technical specs and engineering collaboration, leveraging frontend experience for smooth design-to-code handoff.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 17.5 17.5004" fill="currentColor" aria-hidden="true">
        <path d="M10.5342 0.526435C10.6577 0.131218 11.0784 -0.0890933 11.4736 0.0342472C11.8689 0.157778 12.0892 0.578394 11.9658 0.9737L6.96582 16.9737C6.84227 17.3691 6.42173 17.5894 6.02637 17.4659C5.63112 17.3423 5.41065 16.9217 5.53418 16.5264L10.5342 0.526435ZM3.21777 4.22077C3.50985 3.92708 3.98559 3.92577 4.2793 4.21784C4.57299 4.50992 4.5743 4.98566 4.28223 5.27936L2.44238 7.12897C2.04073 7.53287 1.79353 7.78394 1.6377 7.98933C1.4995 8.17151 1.49984 8.23371 1.5 8.24909V8.25104C1.49984 8.26643 1.4995 8.32862 1.6377 8.51081C1.79353 8.71619 2.04073 8.96727 2.44238 9.37116L4.28223 11.2208C4.5743 11.5145 4.57299 11.9902 4.2793 12.2823C3.98559 12.5744 3.50985 12.5731 3.21777 12.2794L1.37793 10.4288C1.36705 10.4178 1.35652 10.4065 1.3457 10.3956C0.987165 10.0351 0.666451 9.71335 0.442383 9.41804C0.198228 9.09624 0 8.72033 0 8.25007C0 7.77981 0.198228 7.40389 0.442383 7.0821C0.666451 6.78678 0.987165 6.46504 1.3457 6.10456C1.35652 6.09368 1.36704 6.0823 1.37793 6.07136L3.21777 4.22077ZM13.2207 4.21784C13.5144 3.92577 13.9901 3.92708 14.2822 4.22077L16.1221 6.07136C16.133 6.0823 16.1435 6.09368 16.1543 6.10456C16.5128 6.46504 16.8335 6.78678 17.0576 7.0821C17.3018 7.40389 17.5 7.77981 17.5 8.25007C17.5 8.72033 17.3018 9.09624 17.0576 9.41804C16.8335 9.71335 16.5128 10.0351 16.1543 10.3956C16.1435 10.4065 16.133 10.4178 16.1221 10.4288L14.2822 12.2794C13.9901 12.5731 13.5144 12.5744 13.2207 12.2823C12.927 11.9902 12.9257 11.5145 13.2178 11.2208L15.0576 9.37116C15.4593 8.96727 15.7065 8.71619 15.8623 8.51081C16.0005 8.32862 16.0002 8.26643 16 8.25104V8.24909C16.0002 8.23371 16.0005 8.17151 15.8623 7.98933C15.7065 7.78394 15.4593 7.53287 15.0576 7.12897L13.2178 5.27936C12.9257 4.98566 12.927 4.50992 13.2207 4.21784Z" />
      </svg>
    ),
  },
]

const INDUSTRIES = [
  'Mobile Applications',
  'Dashboards',
  'Design Systems',
  'B2B Platforms',
  'Landing Pages',
]

export default function Capabilities() {
  return (
    <section
      data-figma-id="Capabilities"
      id="capabilities"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      {/* Header */}
      <div className="w-full">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-muted-foreground/60 flex-none" />
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Capabilities
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-1.5 text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.02em] text-foreground">
            What I <span className="text-primary">Do</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Great digital products are built by balancing user needs, business
            goals, technical feasibility, and scalable design systems. My role
            extends beyond crafting interfaces—I solve product challenges through
            research, strategy, collaboration, and thoughtful execution.
          </p>
        </Reveal>
      </div>

      {/* Capability grid */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((cap, i) => (
          <Reveal key={cap.title} delay={220 + i * 70}>
            <article
              tabIndex={0}
              className="group h-full rounded-2xl border border-border bg-white dark:bg-zinc-900 p-6 transition-colors duration-300 hover:border-foreground/20 hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary/10">
                {cap.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Industries & product types */}
      <div className="mt-16">
        <Reveal delay={450}>
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            Industries & Product Types
          </h3>
        </Reveal>
        <Reveal delay={520}>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {INDUSTRIES.map((label) => (
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
