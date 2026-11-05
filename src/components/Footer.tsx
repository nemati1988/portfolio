import navLogo from '@/imports/nav-logo.svg'
import Behance from '@/imports/Behance'
import Dribbble from '@/imports/Dribbble'
import FigmaCommunity from '@/imports/FigmaCommunity'
import Linkedin from '@/imports/Linkedin'

import { useLocation, useNavigate } from 'react-router'

import { NAV_LINKS, Reveal, smoothScrollTo } from './shared'

const FOOTER_SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amin-nemati/', external: true, Icon: Linkedin },
  { label: 'Dribbble', href: 'https://dribbble.com/amin_nemati', external: true, Icon: Dribbble },
  { label: 'Behance', href: 'https://www.behance.net/amin_nemati', external: true, Icon: Behance },
  { label: 'Figma Community', href: 'https://www.figma.com/@amin_nemati', external: true, Icon: FigmaCommunity },
]

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()
  const onHome = location.pathname === '/'

  const goToSection = (id: string) => {
    if (onHome) {
      if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' })
      else smoothScrollTo(`#${id}`)
    } else {
      navigate(id === 'top' ? '/' : `/#${id}`)
    }
  }

  return (
    <footer data-figma-id="Footer" className="" style={{ borderWidth: 0, borderStyle: 'none' }}>
      <div data-figma-id="footer-inner" className="mx-auto max-w-6xl px-6 pt-20 pb-10 sm:pt-24">
        {/* Top area — brand + socials / navigation */}
        <div data-figma-id="footer-top" className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Left — brand + social links */}
          <div data-figma-id="footer-brand" className="flex flex-col items-center sm:items-start">
            <Reveal>
              <button
                type="button"
                onClick={() => goToSection('top')}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2"
              >
                <img src={navLogo} alt="Amin Nemati" className="h-5 w-auto dark:[filter:brightness(0)_invert(56%)_sepia(98%)_saturate(400%)_hue-rotate(190deg)_brightness(103%)_contrast(97%)]" />
              </button>
            </Reveal>

            <Reveal delay={80}>
              <div data-figma-id="footer-socials" className="mt-5 flex items-center gap-2.5">
                {FOOTER_SOCIALS.map((social) => {
                  const { Icon } = social
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      {...(social.external
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                      aria-label={social.label}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:-translate-y-px hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:text-primary"
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </Reveal>
          </div>

          {/* Right — footer navigation */}
          <Reveal delay={120} as="div">
            <nav
              className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-end"
              aria-label="Footer"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => goToSection(link.id)}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:text-foreground sm:text-right"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </Reveal>
        </div>

        <div className="mt-10 border-t border-border" />

        <Reveal delay={200}>
          <div data-figma-id="footer-bottom" className="mt-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground text-center">
              © 2026 Amin Nemati. All Right Reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Designed with Figma. Built with Figma.
            </p>
          </div>
        </Reveal>

      </div>
    </footer>
  )
}
