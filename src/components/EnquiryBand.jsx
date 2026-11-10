import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Building2, Handshake, Briefcase, Mail, Phone } from 'lucide-react'
import { businesses } from '../data/content'
import { img } from '../data/images'
import { Button, Reveal } from './ui'
import LeafPattern from './LeafPattern'

const routes = [
  { icon: Building2, t: 'Group & corporate', d: 'Questions for Sarvaya Holdings itself.' },
  { icon: Handshake, t: 'Partnerships & procurement', d: 'Customers, suppliers and public bodies.' },
  { icon: Briefcase, t: 'Careers & media', d: 'Opportunities, stories and press.' },
]

export default function EnquiryBand() {
  return (
    <section className="grain relative isolate overflow-hidden bg-forest-950 py-28 text-white md:py-36">
      <img src={img.meetingTable} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.12]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-950 via-forest-950/95 to-forest/80" />
      <div className="absolute -top-40 right-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-emerald/25 blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 -z-10 h-[26rem] w-[26rem] rounded-full bg-saffron/10 blur-3xl" />
      <LeafPattern className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-[480px] w-[480px] text-white/[0.03]" />

      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Left: invitation */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-lime">
              <span className="h-px w-8 bg-saffron" /> Business enquiries
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl leading-[1.08] font-light text-balance md:text-[2.6rem]">
              Looking to connect with one of our <span className="text-lime italic">businesses?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-lg leading-relaxed text-white/70">
              We aim to direct every enquiry to the appropriate team. Whether you are a customer, a partner, a supplier
              or a public body, tell us what you need and we will route it to the right company.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/contact" variant="accent">
                Make an enquiry
              </Button>
              <Button to="/careers" variant="ghost">
                Explore careers
              </Button>
            </div>
          </Reveal>

          <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-white/10">
            {routes.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={0.18 + i * 0.05}>
                <div className="flex items-center gap-4 bg-white/[0.03] px-5 py-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.07] text-lime">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block font-semibold">{t}</span>
                    <span className="block text-sm text-white/55">{d}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: company directory */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-white/45">Reach a Sarvaya Group company</p>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {businesses.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md"
                >
                  <span
                    className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ background: b.theme.accent }}
                  />
                  <span className="relative block h-1 w-12 rounded-full" style={{ background: b.theme.accent }} />
                  <p className="relative mt-6 text-[0.68rem] font-bold tracking-[0.18em] text-white/50 uppercase">
                    {b.sector}
                  </p>
                  <p className="relative mt-2 font-display text-2xl leading-snug">{b.name}</p>
                  <p className="relative mt-3 text-sm leading-relaxed text-white/60">{b.tagline}</p>
                  <div className="relative mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm font-semibold">
                    <Link
                      to={`/contact?company=${b.slug}`}
                      className="inline-flex items-center gap-1.5 transition-colors"
                      style={{ color: b.theme.accent }}
                    >
                      Send an enquiry <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
                    </Link>
                    <a
                      href={b.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-white/60 transition hover:text-white"
                    >
                      Website <ArrowUpRight size={14} />
                    </a>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-5 flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/60">Prefer to reach the group directly?</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                <span className="inline-flex items-center gap-2">
                  <Mail size={15} className="text-lime" /> [Corporate email address]
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone size={15} className="text-lime" /> [Official phone number]
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
