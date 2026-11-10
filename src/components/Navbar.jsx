import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks } from '../data/content'

export function Logo({ light = false, compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <img src="/sarvaya-logo.png" alt="" className={compact ? 'h-10 w-auto' : 'h-12 w-auto'} />
      <span className="leading-none">
        <span
          className={`block font-display text-[1.35rem] font-semibold tracking-[0.14em] ${light ? 'text-white' : 'text-forest'}`}
        >
          SARVAYA
        </span>
        <span
          className={`mt-1 block text-[0.5rem] font-semibold tracking-[0.2em] whitespace-nowrap ${light ? 'text-white/70' : 'text-emerald'}`}
        >
          HOLDINGS PRIVATE LIMITED
        </span>
      </span>
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const overHero = !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        overHero
          ? 'bg-gradient-to-b from-forest-950/60 to-transparent py-5'
          : 'border-b border-forest/10 bg-cream/90 py-3 shadow-[0_8px_30px_-12px_rgba(14,27,44,0.25)] backdrop-blur-xl'
      }`}
    >
      <nav className="container-x flex items-center justify-between gap-6">
        <Link to="/" aria-label="Sarvaya Holdings home" className="shrink-0">
          <span className={`inline-flex rounded-2xl transition ${overHero ? 'bg-white/95 px-3 py-1.5' : ''}`}>
            <Logo compact />
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(1).map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `relative rounded-full px-2.5 py-2 text-[0.84rem] font-semibold whitespace-nowrap transition-colors xl:px-3.5 ${
                    isActive
                      ? overHero
                        ? 'text-lime'
                        : 'text-emerald'
                      : overHero
                        ? 'text-white/90 hover:text-white'
                        : 'text-ink/80 hover:text-forest'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-saffron"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/businesses"
          className={`hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition xl:inline-flex ${
            overHero ? 'bg-white text-forest hover:bg-lime' : 'bg-forest text-white hover:bg-emerald'
          }`}
        >
          Explore the Group <ArrowUpRight size={16} />
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${
            overHero ? 'bg-white/15 text-white backdrop-blur' : 'bg-forest text-white'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pb-6 pt-4">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={l.to}
                    end
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 font-display text-xl ${
                        isActive ? 'bg-forest text-white' : 'text-forest hover:bg-forest/5'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
