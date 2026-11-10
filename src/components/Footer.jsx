import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from './Navbar'
import { brand, businesses, navLinks } from '../data/content'
import LeafPattern from './LeafPattern'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white">
      <LeafPattern className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] text-white/[0.035]" />

      <div className="container-x relative grid gap-12 pt-20 pb-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="inline-flex rounded-2xl bg-cream px-4 py-2.5">
            <Logo />
          </span>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
            {brand.legalName}. A unified group. A shared vision. Progress with purpose.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-white/40">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 transition hover:text-lime">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-white/40">Our businesses</p>
          <ul className="mt-5 space-y-3 text-sm">
            {businesses.map((b) => (
              <li key={b.slug}>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-white/75 transition hover:text-lime"
                >
                  {b.name}
                  <ArrowUpRight size={14} className="opacity-0 transition group-hover:opacity-100" />
                </a>
              </li>
            ))}
            <li className="pt-2 text-xs text-white/40">
              Plastroots Foundation (Section 8 non-profit, independently registered)
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-white/40">Connect</p>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>[Corporate address]</li>
            <li>[Official phone number]</li>
            <li>[Corporate email address]</li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-saffron px-5 py-2.5 text-sm font-semibold text-forest-950 transition hover:bg-lime"
          >
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="container-x relative flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
        </p>
        <p className="font-display text-sm italic text-white/55">{brand.promise}</p>
      </div>
    </footer>
  )
}
