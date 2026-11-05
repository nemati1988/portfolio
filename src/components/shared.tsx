import React, { useEffect, useRef } from 'react'

/* ---------------------------------------------------------------- Icons -- */

export function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

/* -------------------------------------------------------------- Reveal --- */

const DELAY_MAP: Record<number, string> = {
  0: '',
  1: 'd-1',
  2: 'd-2',
  3: 'd-3',
  4: 'd-4',
  5: 'd-5',
  6: 'd-6',
}

export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  as?: 'div' | 'section' | 'article' | 'header'
  className?: string
}) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const delayClass = DELAY_MAP[delay] ?? ''
  const combinedClass = ['reveal', delayClass, className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref as React.RefObject<HTMLElement & HTMLDivElement>} className={combinedClass}>
      {children}
    </Tag>
  )
}

export const smoothScrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export const NAV_LINKS = [
  { label: 'Home', id: 'top' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'What I Do', id: 'capabilities' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
]
