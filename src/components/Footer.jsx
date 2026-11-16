import { Link } from 'react-router-dom'
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from './Navbar'
import { brand, businesses, foundation, navLinks } from '../data/content'
import LeafPattern from './LeafPattern'

/*
  Group footer, kept compact. It takes the page's theme, so its colours follow whichever page it sits under.
  Columns: contact, navigation, businesses and the Foundation; then the legal line.
*/

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const Heading = ({ children }) => <p className="eyebrow text-white/40">{children}</p>

export default function Footer({ theme }) {
  return (
    <footer className="grain relative overflow-hidden bg-forest-950 text-white transition-colors duration-500" style={theme}>
      <LeafPattern className="pointer-events-none absolute -top-24 -right-24 h-[26rem] w-[26rem] text-white/[0.035]" />

      <div className="container-x relative grid gap-7 pt-10 pb-7 sm:grid-cols-2 sm:gap-9 md:pt-14 lg:grid-cols-12 lg:gap-10">
        {/* Brand and contact */}
        <div className="lg:col-span-4">
          <span className="inline-flex shrink-0 rounded-2xl bg-cream px-4 py-2.5">
            <Logo />
          </span>
          <ul className="mt-5 space-y-2.5 text-sm sm:mt-6 sm:space-y-3">
            <li>
              <a href={brand.mapsHref} target="_blank" rel="noreferrer" className="flex gap-3 text-white/75 transition hover:text-white">
                <MapPin size={16} className="mt-0.5 shrink-0 text-lime" />
                <span>
                  {brand.address.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </a>
            </li>
            <li>
              <a href={brand.phoneHref} className="flex items-center gap-3 text-white/75 transition hover:text-white">
                <Phone size={16} className="shrink-0 text-lime" />
                {brand.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/75">
              <Mail size={16} className="shrink-0 text-lime" />
              {brand.email}
            </li>
          </ul>
        </div>

        {/* Explore: two short columns (hidden on phones, where the menu already lists these) */}
        <div className="hidden sm:order-3 sm:block lg:order-none lg:col-span-3">
          <Heading>Explore</Heading>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 transition hover:text-lime">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Businesses */}
        <div className="sm:order-2 lg:order-none lg:col-span-3">
          <Heading>Our businesses</Heading>
          <ul className="mt-4 space-y-2 text-sm sm:space-y-2.5">
            {businesses.map((b) => (
              <li key={b.slug}>
                <a href={b.url} target="_blank" rel="noreferrer" className="group inline-flex items-start gap-1 leading-snug text-white/75 transition hover:text-lime">
                  {b.name}
                  <ArrowUpRight size={13} className="mt-0.5 shrink-0 opacity-0 transition group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Philanthropy */}
        <div className="sm:order-4 lg:order-none lg:col-span-2">
          <Heading>Philanthropy</Heading>
          <ul className="mt-4 space-y-2 text-sm sm:space-y-2.5">
            <li>
              <a href={foundation.url} target="_blank" rel="noreferrer" className="group inline-flex items-start gap-1 leading-snug text-white/75 transition hover:text-lime">
                {foundation.name}
                <ArrowUpRight size={13} className="mt-0.5 shrink-0 opacity-0 transition group-hover:opacity-100" />
              </a>
            </li>
            <li>
              <Link to="/sustainability#foundation" className="text-white/75 transition hover:text-lime">
                Our impact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal line */}
      <div className="relative border-t border-white/10">
        <div className="container-x flex items-center justify-between gap-4 py-5 text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <p className="hidden font-display text-sm text-white/50 italic lg:block">{brand.promise}</p>
          <button
            type="button"
            onClick={toTop}
            aria-label="Back to top"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition hover:-translate-y-0.5 hover:border-lime hover:text-lime"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
