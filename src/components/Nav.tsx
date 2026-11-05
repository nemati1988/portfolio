import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import navLogo from '@/imports/nav-logo.svg'
import { ArrowUpRight, NAV_LINKS, smoothScrollTo } from './shared'
import { useTheme } from '@/context/ThemeContext'

function HamburgerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.667 3.333H13.333M2.667 8H13.333M2.667 12.667H13.333" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M13 3L3 13M3 3L13 13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function ThemeToggle({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-foreground hover:border-foreground/25 hover:bg-muted/60 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus-visible:outline-none"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('top')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const onHome = location.pathname === '/'
  const { dark, toggle } = useTheme()

  const goToSection = (id: string) => {
    if (onHome) {
      if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' })
      else smoothScrollTo(`#${id}`)
    } else {
      navigate(id === 'top' ? '/' : `/#${id}`)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id).filter((id) => id !== 'top')
    const getActive = () => {
      const scrollY = window.scrollY + 80
      let current = 'top'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY
          if (top <= scrollY) current = id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', getActive, { passive: true })
    return () => window.removeEventListener('scroll', getActive)
  }, [])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => goToSection(id), 10)
  }

  return (
    <>
      <header data-figma-id="Nav" className={`fixed inset-x-0 top-0 z-50${scrolled ? ' nav-scrolled' : ''}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button
            type="button"
            onClick={() => goToSection('top')}
            className="focus-visible:outline-none"
          >
            <img src={navLogo} alt="Amin Nemati" className="h-5 w-auto dark:[filter:brightness(0)_invert(56%)_sepia(98%)_saturate(400%)_hue-rotate(190deg)_brightness(103%)_contrast(97%)]" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => goToSection(link.id)}
                className={`text-sm transition-colors focus-visible:outline-none focus-visible:text-foreground ${
                  onHome && active === link.id
                    ? 'font-semibold text-foreground'
                    : 'font-normal text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle dark={dark} toggle={toggle} />
            <a
              href="https://drive.google.com/file/d/1j0LvUEWV6tPRLjKSewy3b4QQXVx7CmYz/view"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center rounded-lg border border-border bg-white px-3.5 text-sm font-medium text-foreground transition-all hover:border-foreground/25 hover:bg-muted/60 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              Resume
            </a>
          </div>

          {/* Mobile right actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle dark={dark} toggle={toggle} />
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-white/10 text-foreground transition-colors hover:bg-muted/40 dark:bg-white/5 focus-visible:outline-none"
            >
              {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
      <div className="fixed inset-x-0 top-16 z-40 md:hidden border-b border-border">
        <div className="bg-white shadow-lg overflow-hidden dark:bg-zinc-900">
          <nav className="flex flex-col px-4 pt-4 pb-3" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-3 text-sm transition-colors focus-visible:outline-none ${
                  onHome && active === link.id
                    ? 'font-semibold text-foreground'
                    : 'font-normal text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="px-4 pb-4">
            <a
              href="https://drive.google.com/file/d/1j0LvUEWV6tPRLjKSewy3b4QQXVx7CmYz/view"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-lg border border-border bg-white h-10 text-sm font-medium text-foreground transition-all hover:border-foreground/25 hover:bg-muted/60 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus-visible:outline-none"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      )}

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}
