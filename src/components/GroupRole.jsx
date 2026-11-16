import { motion } from 'framer-motion'
import {
  Network, Landmark, Calculator, Scale, Users, Truck, Megaphone, TrendingUp, Globe2,
  Search, Coins, Hammer, Leaf, HeartHandshake, Briefcase, ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { businesses } from '../data/content'
import { img } from '../data/images'
import { Pill, Reveal } from './ui'

const building = [
  { icon: Search, t: 'Identify', d: 'Find sectors with real needs and lasting relevance.' },
  { icon: Coins, t: 'Invest', d: 'Commit capital and resources to build the business.' },
  { icon: Hammer, t: 'Build', d: 'Set up teams, systems and standards from the centre.' },
  { icon: TrendingUp, t: 'Scale', d: 'Grow responsibly as each business finds its footing.' },
]

const impact = [
  { icon: Leaf, t: 'Environmental', d: 'Recovering waste, producing cleaner energy and promoting organic farming.' },
  { icon: HeartHandshake, t: 'Social', d: 'Community, health, education and women’s empowerment through the Foundation.' },
  { icon: Briefcase, t: 'Economic', d: 'Creating jobs, supporting farmer livelihoods and strengthening local enterprise.' },
]

const functions = [
  { icon: Landmark, t: 'Strategy & governance' },
  { icon: Calculator, t: 'Finance & accounts' },
  { icon: Scale, t: 'Compliance & legal' },
  { icon: Users, t: 'People & talent' },
  { icon: Truck, t: 'Procurement & supply' },
  { icon: Megaphone, t: 'Brand & communications' },
]

// Hub diagram: Sarvaya at the centre, shared operations flowing out to each business.
function Hub() {
  const nodes = businesses.map((b, i) => {
    const a = (i / businesses.length) * Math.PI * 2 - Math.PI / 4
    return { b, x: 50 + Math.cos(a) * 38, y: 50 + Math.sin(a) * 38 }
  })
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[28.75rem]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="1 1.5" />
        {nodes.map(({ b, x, y }, i) => (
          <g key={b.slug}>
            <line x1="50" y1="50" x2={x} y2={y} stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.4" />
            {/* Pulse travelling from the centre to each business */}
            <motion.circle
              r="1.1"
              fill="var(--color-saffron)"
              initial={{ cx: 50, cy: 50, opacity: 0 }}
              animate={{ cx: [50, x], cy: [50, y], opacity: [0, 1, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
            />
          </g>
        ))}
      </svg>

      {/* Centre */}
      {/* Light disc so the logo's own greens and gold stay clear */}
      <div className="absolute inset-[35%] flex items-center justify-center rounded-full border border-forest/10 bg-white shadow-[0_0_0_10px_rgba(255,255,255,0.6),0_30px_60px_-20px_rgba(0,0,0,0.35)]">
        <img src="/sarvaya-logo.png" alt="Sarvaya Holdings" className="h-[58%] w-auto" />
      </div>

      {/* Businesses */}
      {nodes.map(({ b, x, y }) => (
        <div
          key={b.slug}
          className="absolute w-[6.5rem] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-ink/10 bg-white px-2 py-2 sm:w-40 sm:rounded-2xl sm:px-3 sm:py-2.5 text-center shadow-[0_14px_30px_-18px_rgba(0,0,0,0.35)]"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <span className="mx-auto block h-1 w-6 rounded-full" style={{ background: b.theme.accent }} />
          <p className="mt-1.5 text-[0.56rem] leading-tight font-semibold text-ink sm:text-[0.68rem]">{b.name}</p>
        </div>
      ))}
    </div>
  )
}

export default function GroupRole() {
  return (
    <section id="role" className="bg-white py-24 md:py-32">
      <div className="container-x">
        {/* Introduction */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Pill>What Sarvaya does</Pill>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-3xl leading-[1.15] text-ink md:text-[2.5rem]">
                The centre that <span className="text-emerald italic">powers the group.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <p className="text-lg leading-relaxed text-muted">
                Sarvaya Holdings sits at the centre of a group of businesses working in very different sectors. Rather
                than each company building every capability on its own, Sarvaya runs the shared operations that every
                business needs, invests in building new ones, and keeps the whole group focused on creating positive
                impact.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                The result is a group where each business stays independent in what it does, while drawing on the
                strength, discipline and direction of one common centre.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Main: centralised operations */}
        <Reveal y={40}>
          <div className="mt-14 grid overflow-hidden rounded-[2.5rem] border border-ink/10 bg-cream lg:grid-cols-12">
            <div className="p-8 md:p-12 lg:col-span-6 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest text-lime">
                  <Network size={22} strokeWidth={1.6} />
                </span>
                <span className="rounded-full border border-emerald/30 px-3 py-1 text-[0.68rem] font-bold tracking-[0.16em] text-emerald uppercase">
                  Our core role
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl leading-tight text-ink md:text-4xl">Centralised operations</h3>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Key functions are brought together at the group level and shared across every business. This gives each
                company stronger systems, consistent standards and lower duplication, so its own team can focus on
                customers, products and growth.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {functions.map(({ icon: Icon, t }) => (
                  <div key={t} className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-4 py-3">
                    <Icon size={18} className="shrink-0 text-emerald" strokeWidth={1.7} />
                    <span className="text-sm font-semibold text-ink">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative grid place-items-center border-t border-ink/10 p-8 text-forest md:p-12 lg:col-span-6 lg:border-t-0 lg:border-l">
              <Hub />
              <p className="mt-6 text-center text-sm text-muted">One centre. Shared strength across every business.</p>
            </div>
          </div>
        </Reveal>

        {/* Investment & business building */}
        <Reveal y={40}>
          <div className="mt-6 grid overflow-hidden rounded-[2.5rem] border border-ink/10 bg-white lg:grid-cols-12">
            <div className="relative min-h-[18rem] overflow-hidden lg:order-2 lg:col-span-5 lg:min-h-0">
              <img src={img.leadershipMeeting} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/10 to-transparent" />
              <p className="absolute right-8 bottom-8 left-8 font-display text-xl leading-snug text-white md:text-2xl">
                Capital, direction and support for businesses with <span className="text-lime italic">lasting relevance.</span>
              </p>
            </div>
            <div className="p-8 md:p-12 lg:order-1 lg:col-span-7 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest text-lime">
                  <TrendingUp size={22} strokeWidth={1.6} />
                </span>
                <span className="rounded-full border border-emerald/30 px-3 py-1 text-[0.68rem] font-bold tracking-[0.16em] text-emerald uppercase">
                  Building for the future
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl leading-tight text-ink md:text-4xl">Investment & business building</h3>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Beyond running shared operations, Sarvaya grows the group. It identifies sectors where a business can
                create lasting value, invests in building it, and stays alongside it with direction and support until
                it can stand on its own.
              </p>

              {/* Lifecycle */}
              <ol className="relative mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
                <span className="absolute top-5 right-6 left-6 hidden h-px bg-ink/10 xl:block" />
                {building.map(({ icon: Icon, t, d }, i) => (
                  <li key={t} className="relative">
                    <span className="relative grid h-10 w-10 place-items-center rounded-full bg-forest text-lime ring-4 ring-white">
                      <Icon size={17} strokeWidth={1.8} />
                    </span>
                    <p className="mt-4 text-[0.68rem] font-bold tracking-[0.14em] text-emerald uppercase">Step 0{i + 1}</p>
                    <p className="mt-1 font-display text-lg text-ink">{t}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        {/* Impact */}
        <Reveal y={40}>
          <div className="grain mt-6 grid overflow-hidden rounded-[2.5rem] bg-forest text-white lg:grid-cols-12">
            <div className="relative min-h-[18rem] overflow-hidden lg:col-span-5 lg:min-h-0">
              <img src={img.handsPlant} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-forest/40" />
            </div>
            <div className="p-8 md:p-12 lg:col-span-7 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-lime">
                  <Globe2 size={22} strokeWidth={1.6} />
                </span>
                <span className="rounded-full border border-lime/30 px-3 py-1 text-[0.68rem] font-bold tracking-[0.16em] text-lime uppercase">
                  Our purpose
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl leading-tight md:text-4xl">
                Impact <span className="text-lime italic">in everything we build</span>
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-white/75">
                Sarvaya measures success by the positive change its businesses create: for the environment, for
                communities and for the people connected to them. Its philanthropic work is carried forward by
                Plastroots Foundation.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {impact.map(({ icon: Icon, t, d }) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition duration-500 hover:bg-white/[0.09]">
                    <Icon size={20} className="text-lime" strokeWidth={1.7} />
                    <p className="mt-4 font-display text-lg">{t}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{d}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/sustainability"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-lime"
              >
                Explore sustainability & impact
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
