import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { smoothScrollTo } from '@/components/shared'
import { ThemeProvider } from '@/context/ThemeContext'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white dark:bg-zinc-800 shadow-md hover:border-foreground/25 hover:shadow-lg focus-visible:outline-none"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}

// Scrolls to top on route change, or to the hash target when present.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = window.setTimeout(() => smoothScrollTo(hash), 60)
      return () => window.clearTimeout(id)
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

export default function Root() {
  return (
    <ThemeProvider>
      <div data-figma-id="App" className="min-h-screen bg-background">
        <ScrollManager />
        <Nav />
        <Outlet />
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}
