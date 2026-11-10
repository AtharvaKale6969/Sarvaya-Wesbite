import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Layers, Landmark, ShieldCheck, Hourglass, Scale, FileCheck2, Eye, AlertTriangle,
  FileText, BookOpen, BarChart3, Building2, ArrowRight, ArrowUpRight, Plus, Mail,
} from 'lucide-react'
import { img } from '../data/images'
import { businesses, brand } from '../data/content'
import { PageHero, Pill, Reveal } from '../components/ui'

const highlights = [
  {
    icon: Layers,
    t: 'A diversified portfolio',
    d: 'Four businesses across waste management, agriculture, renewable energy and biomass, and beverages, balancing exposure across different markets and cycles.',
  },
  {
    icon: Landmark,
    t: 'Sectors with long-term relevance',
    d: 'Circular economy, farming, clean energy and everyday consumer needs are areas where demand is driven by lasting economic and environmental priorities.',
  },
  {
    icon: ShieldCheck,
    t: 'Shared values and oversight',
    d: 'Every business operates with its own identity, guided by common standards of trust, transparency and accountability set at the group level.',
  },
  {
    icon: Hourglass,
    t: 'A long-term orientation',
    d: 'As a holding company, Sarvaya is focused on building enduring enterprises and responsible growth rather than short-term outcomes.',
  },
]

const governance = [
  { icon: Scale, t: 'Accountable leadership', d: 'Clear responsibility for decisions at both the group and business level.' },
  { icon: Eye, t: 'Transparent reporting', d: 'Honest, timely and accurate communication with stakeholders.' },
  { icon: FileCheck2, t: 'Statutory compliance', d: 'Adherence to applicable laws, regulations and filing requirements.' },
  { icon: AlertTriangle, t: 'Responsible risk management', d: 'Identifying and managing operational, financial and environmental risks.' },
]

const documents = [
  { icon: Building2, t: 'Corporate profile', d: 'An overview of the group, its structure and its businesses.' },
  { icon: BookOpen, t: 'Annual report', d: 'Statutory annual report and directors’ report.' },
  { icon: BarChart3, t: 'Financial statements', d: 'Audited financial statements for the relevant financial year.' },
  { icon: FileText, t: 'Governance overview', d: 'Our approach to oversight, compliance and conduct.' },
]

const faqs = [
  {
    q: 'Is Sarvaya Holdings a listed company?',
    a: 'No. Sarvaya Holdings Private Limited is a privately held company and is not listed on any stock exchange.',
  },
  {
    q: 'How can I explore an investment or strategic partnership?',
    a: 'Please reach out through our investor enquiry route. Your enquiry will be reviewed and directed to the appropriate team at the group.',
  },
  {
    q: 'How are the group’s businesses overseen?',
    a: 'Each business is run with its own identity and expertise, while Sarvaya Holdings provides common direction, shared values and group-level oversight.',
  },
  {
    q: 'Where can I learn more about each business?',
    a: 'Every business has a dedicated chapter on our Businesses page, with a link to its own website.',
  },
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faqs.map((f, i) => (
        <div key={f.q}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-6 py-6 text-left"
            aria-expanded={open === i}
          >
            <span className="font-display text-xl text-ink">{f.q}</span>
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-transform duration-300 ${
                open === i ? 'rotate-45 bg-forest text-white' : ''
              }`}
            >
              <Plus size={16} />
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <p className="max-w-3xl pb-6 leading-relaxed text-muted">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default function Investors() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Building long-term value across a diversified group."
        intro="Information for investors, partners and stakeholders on the Sarvaya portfolio, our approach to governance and how to engage with the group."
        image={img.towerNight}
      />

      {/* Overview */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Pill>Investor overview</Pill>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-3xl leading-[1.15] text-ink md:text-[2.5rem]">
                One holding company. <span className="text-emerald italic">Four growing businesses.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-muted">
                {brand.legalName} is the parent organisation of a portfolio of businesses with distinct areas of
                focus. The group provides common direction, shared values and oversight, while each business develops its
                own identity and expertise.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Our relationship with investors and partners is built on the same principles that guide the group:
                transparency in engagement, accountability in conduct and a commitment to responsible, long-term growth.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { n: '04', l: 'Businesses' },
                  { n: '04', l: 'Sectors' },
                  { n: 'Pvt.', l: 'Privately held' },
                  { n: 'IN', l: 'Headquartered in India' },
                ].map((f) => (
                  <div key={f.l} className="rounded-[1.25rem] border border-ink/10 bg-cream p-5">
                    <p className="font-display text-3xl text-forest">{f.n}</p>
                    <p className="mt-2 text-xs font-semibold tracking-[0.12em] text-muted uppercase">{f.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Investment highlights */}
      <section className="bg-forest py-20 text-white md:py-28">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Pill tone="dark">Why Sarvaya</Pill>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-3xl leading-[1.15] font-light md:text-[2.5rem]">
                  Investment <span className="text-lime italic">highlights.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="leading-relaxed text-white/65">
                The qualities that shape the group’s approach to building value over time.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.06} className="h-full">
                <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:bg-white/[0.08]">
                  <Icon size={22} className="text-lime" strokeWidth={1.6} />
                  <p className="mt-8 font-display text-xl">{t}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <Pill>Portfolio at a glance</Pill>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-3xl font-display text-3xl leading-[1.15] text-ink md:text-[2.5rem]">
              The businesses of the Sarvaya Group.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white">
              <div className="hidden grid-cols-12 gap-6 border-b border-ink/10 bg-sand/60 px-7 py-4 text-xs font-bold tracking-[0.14em] text-muted uppercase md:grid">
                <span className="col-span-5">Company</span>
                <span className="col-span-3">Sector</span>
                <span className="col-span-3">Focus</span>
                <span className="col-span-1" />
              </div>
              {businesses.map((b) => (
                <div
                  key={b.slug}
                  className="grid gap-2 border-b border-ink/10 px-7 py-6 last:border-b-0 md:grid-cols-12 md:items-center md:gap-6"
                >
                  <p className="font-display text-lg text-ink md:col-span-5">{b.name}</p>
                  <p className="text-sm font-semibold text-forest md:col-span-3">{b.sector}</p>
                  <p className="text-sm text-muted md:col-span-3">{b.tagline}</p>
                  <Link
                    to={`/businesses#${b.slug}`}
                    aria-label={`About ${b.name}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition hover:bg-forest hover:text-white md:col-span-1 md:justify-self-end"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Pill>Corporate governance</Pill>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-3xl leading-[1.15] text-ink md:text-[2.5rem]">
                Governance that earns <span className="text-emerald italic">confidence.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Good governance is how the group turns its values into everyday practice. Our framework is built on
                clear accountability, transparent reporting and responsible conduct across every business.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {governance.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.06} className="h-full">
                <div className="h-full rounded-[1.5rem] border border-ink/10 bg-cream p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-lime">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <p className="mt-6 font-display text-xl text-ink">{t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & disclosures */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Pill>Reports & disclosures</Pill>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-3xl leading-[1.15] text-ink md:text-[2.5rem]">
                  Documents for investors.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="leading-relaxed text-muted">
                As a private company, our corporate documents are shared with investors and partners on request.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.06} className="h-full">
                <Link
                  to="/contact?type=investor"
                  className="group flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-forest/25 hover:shadow-[0_24px_50px_-30px_rgba(14,27,44,0.45)]"
                >
                  <Icon size={22} className="text-forest" strokeWidth={1.6} />
                  <p className="mt-8 font-display text-xl text-ink">{t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-forest">
                    Request a copy <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + contact */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Pill>Investor FAQs</Pill>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 mb-10 font-display text-3xl leading-[1.15] text-ink md:text-[2.5rem]">
                Frequently asked questions.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Faq />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="grain relative overflow-hidden rounded-[2rem] bg-forest p-8 text-white md:p-10 lg:sticky lg:top-28">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald/50 blur-3xl" />
                <Mail size={24} className="relative text-lime" strokeWidth={1.6} />
                <p className="relative mt-8 font-display text-3xl leading-snug">Investor relations</p>
                <p className="relative mt-4 leading-relaxed text-white/70">
                  For investment enquiries, partnership opportunities or document requests, contact our investor
                  relations team.
                </p>
                <Link
                  to="/contact?type=investor"
                  className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-forest transition hover:bg-lime"
                >
                  Make an investor enquiry
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
