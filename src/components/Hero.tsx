import PORTRAIT from '@/imports/home-my-picture.jpg'

import { ArrowRight, ArrowUpRight, smoothScrollTo } from './shared'

export default function Hero() {
  return (
    <section
      data-figma-id="Hero"
      id="top"
      className="relative mx-auto flex min-h-[700px] max-w-6xl items-center px-6 pt-28 pb-20"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-10">
        {/* Left — text */}
        <div className="max-w-xl">
          <h1 className="hero-anim-1 text-[clamp(2.6rem,6vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-foreground">
            Hi, I am <span className="text-primary">Amin</span>
          </h1>

          <p className="hero-anim-2 mt-4 text-lg font-semibold tracking-tight text-foreground/80">
            Product Designer
          </p>

          <div className="hero-anim-3 mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              With over four years of experience in creating enterprise, B2B, and B2C products, including mobile apps and design systems.
              <br /><br />
              I excel in solving complex problems through information architecture, user flow design, and UI design, collaborating closely with technical teams throughout the design and development process.
            </p>
            <p>
              My focus is on enhancing user experience while delivering business value.
              <br /><br />
              I leverage AI for research and ideation, but I ensure a balance between user needs, product requirements, and technical constraints in my decision-making.
            </p>
          </div>

          {/* Metadata card */}
          <div className="hero-anim-4 mt-8">
            <dl className="grid grid-cols-1 divide-y divide-border rounded-xl border border-border bg-white dark:bg-zinc-900 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {[
                {
                  label: 'Latest Company',
                  value: 'Golrang System',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="7" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  ),
                },
                {
                  label: 'Specialization',
                  value: 'UI/UX, Design System, Figma, Prototyping',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                    </svg>
                  ),
                },
                {
                  label: 'Location',
                  value: 'Mashhad, Iran',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="px-4 py-3.5">
                  <dt className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                    <span className="text-muted-foreground">{item.icon}</span>
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-[13px] font-medium leading-snug text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* CTAs */}
          <div className="hero-anim-5 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => smoothScrollTo('#work')}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium focus-visible:outline-none bg-[#09090b] text-white dark:bg-white dark:text-[#09090b]"
            >
              View Selected Work
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => smoothScrollTo('#contact')}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-white dark:bg-zinc-800 px-5 text-sm font-medium text-foreground hover:bg-muted/60 focus-visible:outline-none"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.61 5.61l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03Z" />
              </svg>
              Get in touch
            </button>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="hero-img order-last lg:order-none">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-muted lg:max-w-none">
            <img
              src={PORTRAIT}
              alt="Portrait of Amin, User Interface Designer"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
