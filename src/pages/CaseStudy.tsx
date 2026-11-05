import { Link } from 'react-router'
import { useState, useEffect, useCallback } from 'react'

import heroImage from '@/imports/me-time1.jpg'
import galleryLarge01 from '@/imports/me-time2.jpg'
import galleryLeft from '@/imports/me-time3.jpg'
import galleryRight from '@/imports/me-time4.jpg'

import { ArrowUpRight, Reveal } from '@/components/shared'

const PROJECT_URL =
  'https://dribbble.com/shots/27572864-UX-UI-Case-Study-Me-Time-Feature'

/* --------------------------------------------------------------- Icons --- */

const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

function SpecialtiesIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
    </svg>
  )
}

function PlatformIcon() {
  return (
    <svg {...iconProps}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  )
}

function DeliverablesIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
      <path d="M14 4v5h5" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
    </svg>
  )
}

function DurationIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  )
}

function WebsiteIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </svg>
  )
}

/* ------------------------------------------------------------ Metadata --- */

const METADATA = [
  { label: 'Specialties', value: 'Research, Strategy, UI Design', Icon: SpecialtiesIcon },
  { label: 'Platforms', value: 'Mobile Application', Icon: PlatformIcon },
  { label: 'Deliverables', value: 'Conceptual, UI Design, Case Study', Icon: DeliverablesIcon },
  { label: 'Date', value: '2026', Icon: CalendarIcon },
  { label: 'Duration', value: '2 Weeks', Icon: DurationIcon },
]

/* ----------------------------------------------------------- Breadcrumb -- */

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
      <Link
        to="/"
        className="group inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:text-primary"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-0.5">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Home
      </Link>
      <span aria-hidden="true" className="text-border">/</span>
      <span aria-current="page" className="text-foreground">Me Time Case Study</span>
    </nav>
  )
}

/* ----------------------------------------------------------- Lightbox ----- */

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
      />
    </div>
  )
}

/* ----------------------------------------------------------- Gallery ------ */

function GalleryImage({
  src,
  alt,
  className = '',
  onOpen,
}: {
  src: string
  alt: string
  className?: string
  onOpen: () => void
}) {
  return (
    <button
      onClick={onOpen}
      aria-label={`View full screen: ${alt}`}
      className={`group block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-muted ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
      />
    </button>
  )
}

/* ----------------------------------------------------------- Page --------- */

export default function CaseStudy() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const closeLightbox = useCallback(() => setLightbox(null), [])

  return (
    <main data-figma-id="case-study" className="mx-auto max-w-6xl px-6 pt-28 pb-4 sm:pt-32">
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />}
      {/* Breadcrumb + title */}
      <Reveal>
        <Breadcrumb />
      </Reveal>

      <Reveal delay={90}>
        <h1 className="mt-6 text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
          <span className="text-primary">Me Time</span> Case Study
        </h1>
      </Reveal>

      {/* Metadata card */}
      <Reveal delay={160} className="mt-10">
        <div className="rounded-2xl border border-border bg-card">
          <dl className="flex flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0 overflow-x-auto">
            {METADATA.map((item) => {
              const { Icon } = item
              return (
                <div
                  key={item.label}
                  className="flex w-full flex-col gap-2 px-5 py-5 sm:w-0 sm:flex-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground/80">
                      <Icon />
                    </span>
                    <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {item.label}
                    </dt>
                  </div>
                  <dd className="text-sm font-medium text-foreground">{item.value}</dd>
                </div>
              )
            })}

            {/* Website column */}
            <div className="flex w-full flex-col gap-2 px-5 py-5 sm:w-0 sm:flex-1">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground/80">
                  <WebsiteIcon />
                </span>
                <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Website
                </dt>
              </div>
              <dd>
                <a
                  href={PROJECT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2"
                >
                  View project
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>

      {/* Hero image */}
      <Reveal delay={230} className="mt-10">
        <div className="overflow-hidden rounded-2xl bg-muted">
          <img
            src={heroImage}
            alt="Me Time — main project visual showing the concept for LinkedIn saved content"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </Reveal>

      {/* Project Overview */}
      <section className="mt-24 sm:mt-32">
        <Reveal>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#909093]" />
            <p className="text-[11px] font-medium uppercase tracking-[2px] text-[#909093]" style={{ fontFamily: "'Outfit', sans-serif" }}>Experience</p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-2 text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-foreground">
            <span className="text-primary">Project</span> Overview
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-5 text-[15px] leading-[1.75] text-muted-foreground sm:text-base">
            <strong className="font-semibold text-foreground">Me Time</strong> is a conceptual feature designed for LinkedIn to help users make better use of
            their saved content. The project addresses a common challenge: while users frequently
            save valuable posts and articles, they often never return to read them. By introducing
            personalized reading schedules and timely reminders, <strong className="font-semibold text-foreground">Me Time</strong> bridges the gap between
            saving content and actually consuming it, encouraging a more intentional and consistent
            learning experience.
          </p>
        </Reveal>
      </section>

      {/* Visual gallery */}
      <section className="mt-16 space-y-6 sm:mt-20">
        <Reveal>
          <GalleryImage
            src={galleryLarge01}
            alt="Me Time — full-width interface exploration"
            className="aspect-[16/9]"
            onOpen={() => setLightbox({ src: galleryLarge01, alt: "Me Time — full-width interface exploration" })}
          />
        </Reveal>
        <Reveal delay={60}>
          <GalleryImage
            src={galleryLeft}
            alt="Me Time — reading schedule detail"
            className="aspect-[16/9]"
            onOpen={() => setLightbox({ src: galleryLeft, alt: "Me Time — reading schedule detail" })}
          />
        </Reveal>
        <Reveal delay={120}>
          <GalleryImage
            src={galleryRight}
            alt="Me Time — reminder and notification flow"
            className="aspect-[16/9]"
            onOpen={() => setLightbox({ src: galleryRight, alt: "Me Time — reminder and notification flow" })}
          />
        </Reveal>
      </section>
    </main>
  )
}
