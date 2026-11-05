import featuredImage from '@/imports/home-work-me-time.jpg'
import tousImage from '@/imports/home-work-tous-ds.jpg'
import digiCareImage from '@/imports/home-work-digicarepro.jpg'
import babylonImage from '@/imports/home-work-my-babylon.jpg'
import swiftmaidsImage from '@/imports/home-work-swiftmaids.jpg'

import { Link } from 'react-router'

import { ArrowUpRight, Reveal } from './shared'

const FEATURED = {
  title: 'Me Time Feature',
  label: 'Case Study',
  image: featuredImage,
}

const PROJECTS = [
  {
    title: 'Tous Design System',
    kind: 'Design System',
    image: tousImage,
    to: '/work/tous-design-system',
  },
  {
    title: 'DigiCarePro',
    kind: 'Dashboard',
    image: digiCareImage,
    to: '/work/digicaRepro',
  },
  {
    title: 'My Babylon',
    kind: 'Mobile App',
    image: babylonImage,
    to: '/work/my-babylon',
  },
  {
    title: 'Swiftmaids',
    kind: 'Website',
    image: swiftmaidsImage,
    to: '/work/swiftmaids',
  },
]

export default function SelectedWork() {
  return (
    <section data-figma-id="SelectedWork" id="work" className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div className="w-full">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-muted-foreground/60 flex-none" />
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Featured Projects
            </p>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-1.5 text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.02em] text-foreground">
            Selected <span className="text-primary">Work</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            A curated collection of product design work
          </p>
        </Reveal>
      </div>

      {/* Featured project */}
      <Reveal delay={3} className="mt-14">
        <Link
          to="/work/me-time"
          aria-label={`${FEATURED.title} — ${FEATURED.label}`}
          className="group block overflow-hidden rounded-2xl border border-border transition-colors duration-300 hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
            <img
              src={FEATURED.image}
              alt={FEATURED.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-6">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.14em]" style={{ color: '#71717A' }}>
                {FEATURED.label}
              </span>
              <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                {FEATURED.title}
              </h3>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
          </div>
        </Link>
      </Reveal>

      {/* Secondary grid */}
      <div className="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={Math.min(i + 1, 6) as 1|2|3|4|5|6}>
            <Link
              to={project.to}
              aria-label={`${project.title} — ${project.kind}`}
              className="group block focus-visible:outline-none"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted transition-colors duration-300 group-hover:border-foreground/20 group-focus-visible:ring-2 group-focus-visible:ring-ring/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.kind}
                  </p>
                </div>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
