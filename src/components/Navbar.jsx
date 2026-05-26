import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/menopause', label: 'Menopause Spa' },
  { to: '/wellness', label: 'Wellness Room' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur border-b border-cream-200 shadow-sm'
          : 'bg-cream-50/80 backdrop-blur'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Brand */}
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="font-serif text-2xl lg:text-3xl text-ink-900 tracking-tight">
              Downtown <span className="italic text-clay-600">Spa</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[0.78rem] tracking-wider2 uppercase font-medium transition-colors ${
                    isActive ? 'text-clay-700' : 'text-ink-700 hover:text-clay-700'
                  }`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/gift-cards" className="text-[0.78rem] tracking-wider2 uppercase font-medium text-ink-700 hover:text-clay-700">
              Gift Cards
            </Link>
            <a href="tel:+19058734907" className="btn-primary text-xs">
              Book · 905·873·4907
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink-900"
            aria-label="Toggle menu"
          >
            <span className="relative w-6 h-4 block">
              <span className={`absolute left-0 top-0 w-6 h-px bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-2 w-6 h-px bg-current transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 top-4 w-6 h-px bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? 'max-h-[80vh]' : 'max-h-0'
        }`}
      >
        <nav className="px-6 pb-8 pt-2 flex flex-col gap-1 border-t border-cream-200">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `py-3 text-base tracking-wide ${isActive ? 'text-clay-700' : 'text-ink-700'}`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/gift-cards" className="py-3 text-base text-ink-700">Gift Cards</Link>
          <a href="tel:+19058734907" className="btn-primary mt-4 w-full">Call · 905·873·4907</a>
        </nav>
      </div>
    </header>
  )
}
