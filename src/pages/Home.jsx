import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowUpRight, ArrowRight, ShieldCheck, Compass, HeartHandshake, Lightbulb, TrendingUp, Eye,
  Building2, Layers, Gem, Target, Handshake, BadgeCheck, Users, Leaf, Hourglass,
} from 'lucide-react'
import { brand, businesses, foundation } from '../data/content'
import { img } from '../data/images'
import { sectorStories } from '../data/sectors'
import { BrandRule, Button, Layer, Pill, Reveal } from '../components/ui'
import LeafPattern from '../components/LeafPattern'

const ease = [0.22, 1, 0.36, 1]

/* ------------------------------------------------------------------ */
/* Hero: cinematic, corporate, slow cross-fading imagery               */
/* ------------------------------------------------------------------ */
const heroSlides = [img.seaLink, img.towerNight, img.boardroom, img.glassAbstract]

function Hero() {
  const ref = useRef(null)
  const [slide, setSlide] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const lines = ['One Vision.', 'Many Businesses.', 'Infinite Possibilities.']

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 7000)
    return () => clearInterval(t)
  }, [])

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#0A0E0D]">
      <motion.div style={{ y }} className="absolute inset-0 -z-20">
        <AnimatePresence initial={false}>
          <motion.img
            key={slide}
            src={heroSlides[slide]}
            alt=""
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.8 }, scale: { duration: 9, ease: 'linear' } }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A0E0D] via-[#0A0E0D]/80 to-[#0A0E0D]/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0A0E0D] via-transparent to-[#0A0E0D]/50" />
      <div className="pointer-events-none absolute top-[16%] right-[14%] -z-10 h-64 w-64 rounded-full bg-saffron/30 blur-[100px]" />
      <LeafPattern className="pointer-events-none absolute -right-10 bottom-10 -z-10 hidden h-[480px] w-[480px] text-lime/[0.07] md:block" />

      <motion.div style={{ opacity: fade }} className="container-x w-full pt-36 pb-28 md:pb-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="eyebrow flex items-center gap-3 text-white/70"
        >
          <BrandRule /> Sarvaya Holdings Private Limited
        </motion.p>

        <h1 className="mt-8 font-display text-[2.5rem] leading-[1.02] font-light text-white sm:text-5xl md:text-[4.4rem]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${i === 2 ? 'text-lime italic' : ''}`}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.14, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="mt-12 grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-12"
        >
          <p className="max-w-2xl text-lg leading-relaxed text-white/75 lg:col-span-7">
            A unified group driven by trust, leadership and shared values. Sarvaya Holdings brings diverse businesses
            together under one vision: to build responsible enterprises, encourage innovation and create meaningful
            value for people, partners and communities.
          </p>
          <div className="flex flex-wrap items-start gap-3 lg:col-span-5 lg:justify-end">
            <Button to="/businesses" variant="light">
              Explore Our Businesses
            </Button>
            <Button to="/about" variant="ghost">
              Discover Sarvaya
            </Button>
          </div>
        </motion.div>

        {/* Slide indicator */}
        <div className="mt-12 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Show image ${i + 1}`}
              className="relative h-[3px] w-12 overflow-hidden rounded-full bg-white/20"
            >
              {i === slide && (
                <motion.span
                  key={slide}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 7, ease: 'linear' }}
                  className="absolute inset-0 origin-left bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Group overview: who we are, in facts                                */
/* ------------------------------------------------------------------ */
function Overview() {
  const facts = [
    { n: '04', l: 'Operating businesses', icon: Building2 },
    { n: '04', l: 'Sectors of focus', icon: Layers },
    { n: '06', l: 'Shared values', icon: Gem },
    { n: '01', l: 'Unified vision', icon: Target },
  ]
  const tags = [
    { t: 'Trust' },
    { t: 'Leadership' },
    { t: 'Human Values' },
    { t: 'Innovation' },
    { t: 'Growth' },
    { t: 'Transparency' },
  ]
  return (
    <Layer className="z-10 bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: name card */}
          <div className="flex flex-col lg:col-span-4">
            <Reveal>
              <Pill>The Sarvaya Group</Pill>
            </Reveal>
            <Reveal delay={0.05} className="mt-8 flex-1">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-forest p-8 text-white shadow-[0_30px_60px_-30px_rgba(10,14,13,0.6)]">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-saffron/15 blur-3xl" />
                <LeafPattern className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 text-white/[0.05]" />
                <span className="absolute top-8 right-8 h-3 w-3 rounded-full bg-saffron shadow-[0_0_18px_rgba(201,162,77,0.8)]" />
                <p className="relative eyebrow text-white/50">The meaning of our name</p>

                {/* Word parts */}
                <div className="relative mt-6 grid grid-cols-[1fr_auto_1fr] items-stretch gap-2">
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center">
                    <p className="font-display text-4xl leading-none text-cream">सर्व</p>
                    <p className="mt-2 font-display text-base text-lime italic">Sarva</p>
                    <p className="mt-1 text-xs leading-snug text-white/65">all, everyone, universal</p>
                  </div>
                  <span className="self-center font-display text-2xl text-white/40">+</span>
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center">
                    <p className="font-display text-4xl leading-none text-cream">य</p>
                    <p className="mt-2 font-display text-base text-lime italic">ya</p>
                    <p className="mt-1 text-xs leading-snug text-white/65">of, for, belonging to</p>
                  </div>
                </div>

                {/* Result */}
                <div className="relative mt-3 flex items-center gap-3">
                  <span className="h-px flex-1 bg-white/15" />
                  <span className="font-display text-xl text-white/40">=</span>
                  <span className="h-px flex-1 bg-white/15" />
                </div>
                <div className="relative mt-3 rounded-2xl border border-lime/30 bg-lime/[0.08] p-5 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <p className="font-display text-5xl leading-none text-cream">सर्वाय</p>
                    <p className="font-display text-xl text-lime italic">Sarvaya</p>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">For all. Belonging to everyone.</p>
                </div>

                <p className="relative mt-6 text-sm leading-relaxed text-white/70">
                  An inclusive outlook at the heart of the group: creating value across businesses, people, communities
                  and the wider environment.
                </p>

                <div className="relative mt-auto grid grid-cols-3 gap-2 pt-6">
                  {['Inclusive', 'Universal', 'For everyone'].map((w) => (
                    <span key={w} className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-center text-[0.68rem] font-semibold whitespace-nowrap sm:px-3 sm:text-xs">
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: statement */}
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <p className="font-display text-2xl leading-[1.3] text-ink md:text-[2rem] md:leading-[1.25]">
                Sarvaya is more than a collection of businesses. It is a shared platform where{' '}
                <span className="text-emerald italic">trust builds relationships</span>,{' '}
                <span className="text-emerald italic">leadership provides direction</span> and{' '}
                <span className="text-emerald italic">human values</span> keep people at the centre.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-8 grid grid-cols-2 gap-2 min-[400px]:grid-cols-3 lg:flex lg:flex-wrap">
                {tags.map(({ t }) => (
                  <span
                    key={t}
                    className="inline-flex items-center justify-center rounded-full border border-ink/15 px-4 py-2 text-sm font-medium whitespace-nowrap text-ink/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                {
                  icon: Compass,
                  t: 'A common direction',
                  d: 'As a holding company, Sarvaya provides a common direction for businesses working across different sectors. Each business has its own purpose and capabilities.',
                },
                {
                  icon: Handshake,
                  t: 'A shared foundation',
                  d: 'Together they share trust, accountability, innovation and long-term thinking, because lasting growth is achieved when businesses and people progress together.',
                },
              ].map(({ icon: Icon, t, d }, i) => (
                <Reveal key={t} delay={0.1 + i * 0.06}>
                  <div className="group h-full rounded-[1.5rem] border border-ink/10 bg-cream p-7 transition duration-500 hover:-translate-y-1 hover:border-emerald/30 hover:bg-white hover:shadow-[0_24px_50px_-30px_rgba(10,14,13,0.45)]">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-saffron transition duration-300 group-hover:bg-saffron group-hover:text-forest">
                      <Icon size={20} />
                    </span>
                    <p className="mt-5 font-display text-2xl text-forest">{t}</p>
                    <p className="mt-2 leading-relaxed text-muted">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald"
              >
                About the group <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Facts */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {facts.map(({ n, l, icon: Icon }, i) => (
            <Reveal key={l} delay={i * 0.06}>
              <div className="h-full rounded-[1.5rem] border border-ink/10 bg-white p-6 transition duration-500 hover:border-forest/30 md:p-7">
                <div className="flex items-start justify-between">
                  <p className="font-display text-4xl font-light text-forest md:text-5xl">{n}</p>
                  <Icon size={20} className="mt-2 text-ink/30" strokeWidth={1.5} />
                </div>
                <p className="mt-4 eyebrow text-muted">{l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Layer>
  )
}

/* ------------------------------------------------------------------ */
/* Values: expanding panels                                            */
/* ------------------------------------------------------------------ */
const valuePanels = [
  { t: 'Trust', role: 'builds relationships', icon: ShieldCheck, image: img.handshake, d: 'We aim to build relationships through reliability, consistency and integrity.' },
  { t: 'Leadership', role: 'provides direction', icon: Compass, image: img.leadershipMeeting, d: 'We believe in taking responsibility, setting direction and enabling others to grow.' },
  { t: 'Human Values', role: 'keep people at the centre', icon: HeartHandshake, image: img.kids, d: 'We respect people and recognise the importance of positive social and environmental outcomes.' },
  { t: 'Innovation', role: 'opens new possibilities', icon: Lightbulb, image: img.research, d: 'We remain open to ideas, new approaches and continuous improvement.' },
  { t: 'Growth', role: 'creates opportunity', icon: TrendingUp, image: img.citySkyline, d: 'We seek progress that creates opportunities across our businesses and stakeholder relationships.' },
  { t: 'Transparency', role: 'strengthens confidence', icon: Eye, image: img.glassFacade, d: 'We value honest communication, clarity and accountability in the way we work.' },
]

function Values() {
  const [active, setActive] = useState(0)
  return (
    <Layer className="z-20 overflow-hidden bg-slate-deep py-20 text-white md:py-28">
      <LeafPattern className="pointer-events-none absolute -left-24 top-10 h-[560px] w-[560px] text-lime/[0.04]" />
      <div className="pointer-events-none absolute top-0 right-[10%] h-72 w-72 rounded-full bg-saffron/10 blur-[110px]" />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Pill tone="dark">What guides us</Pill>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl leading-[1.04] font-light md:text-5xl">
                Six values.
                <br />
                <span className="text-lime italic">One way of working.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-white/65">
              These principles shape how every Sarvaya business works with customers, partners, employees and
              communities. Select a value to explore what it means to us.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-3 lg:h-[35rem] lg:flex-row">
            {valuePanels.map((v, i) => {
              const on = active === i
              const Icon = v.icon
              return (
                <button
                  key={v.t}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-expanded={on}
                  className={`group relative overflow-hidden rounded-[1.75rem] text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    on ? 'h-[27.5rem] lg:h-auto lg:flex-[5]' : 'h-[4.75rem] lg:h-auto lg:flex-[1]'
                  }`}
                >
                  <img
                    src={v.image}
                    alt=""
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition duration-1000 ${
                      on ? 'scale-100 opacity-100' : 'scale-110 opacity-40 grayscale'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition duration-700 ${
                      on
                        ? 'bg-gradient-to-t from-[#18222D] via-[#18222D]/45 to-[#18222D]/10'
                        : 'bg-slate-mid/80 group-hover:bg-slate-mid/65'
                    }`}
                  />

                  {/* Collapsed label */}
                  <div
                    className={`absolute inset-0 flex items-center gap-4 px-6 transition-opacity duration-500 lg:flex-col lg:items-center lg:justify-between lg:px-0 lg:py-8 ${
                      on ? 'pointer-events-none opacity-0' : 'opacity-100'
                    }`}
                  >
                    <span className="font-display text-sm text-white/50">0{i + 1}</span>
                    <span className="font-display text-2xl whitespace-nowrap text-white lg:rotate-180 lg:[writing-mode:vertical-rl]">
                      {v.t}
                    </span>
                    <Icon size={20} className="ml-auto text-white/50 lg:ml-0" />
                  </div>

                  {/* Expanded content */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-7 transition-all duration-700 md:p-10 ${
                      on ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur">
                        <Icon size={20} />
                      </span>
                      <span className="font-display text-sm text-white/60">Value 0{i + 1} of 06</span>
                    </div>
                    <p className="mt-6 font-display text-3xl leading-tight md:text-4xl">
                      {v.t} <span className="text-white/55 italic">{v.role}.</span>
                    </p>
                    <p className="mt-4 max-w-lg leading-relaxed text-white/75 md:text-lg">{v.d}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </Reveal>
      </div>
    </Layer>
  )
}

/* ------------------------------------------------------------------ */
/* Promise: commitments to each stakeholder (distinct from the values) */
/* ------------------------------------------------------------------ */
const promises = [
  { to: 'Our partners', t: 'Relationships built to last', d: 'We keep our word, communicate openly and honour every commitment we make.', icon: Handshake },
  { to: 'Our customers', t: 'Quality you can rely on', d: 'Consistent standards in every product and service delivered by a Sarvaya business.', icon: BadgeCheck },
  { to: 'Our people', t: 'Room to learn and take ownership', d: 'A workplace where ideas are heard and responsibility is earned and encouraged.', icon: Users },
  { to: 'Our communities', t: 'Progress that leaves places better', d: 'Conducting business with care for the environment and the people around us.', icon: Leaf },
  { to: 'The future', t: 'Decisions made for the long term', d: 'Choosing what is sustainable and responsible over what is merely quick.', icon: Hourglass },
]

function PromiseSection() {
  return (
    <Layer className="z-[25] bg-slate-tint py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Pill>Our promise</Pill>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] font-light text-ink md:text-5xl">
                What everyone can expect
                <br />
                <span className="text-emerald italic">from Sarvaya.</span>
              </h2>
              <BrandRule className="mt-6" />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted">
              Our values guide how we think. These commitments describe how that shows up for the people and
              organisations we work with.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:[&>*:last-child]:col-span-2 lg:grid-cols-5 lg:[&>*:last-child]:col-span-1">
          {promises.map(({ to, t, d, icon: Icon }, i) => (
            <Reveal key={to} delay={i * 0.06} className="h-full">
              <div className="group flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-forest/25 hover:shadow-[0_24px_50px_-30px_rgba(10,14,13,0.45)]">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-lime transition duration-300 group-hover:bg-lime group-hover:text-forest">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <span className="font-display text-sm text-ink/30">0{i + 1}</span>
                </div>
                <p className="mt-8 eyebrow text-muted">To {to.toLowerCase()}</p>
                <p className="mt-3 font-display text-xl leading-snug text-ink">{t}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Layer>
  )
}

/* ------------------------------------------------------------------ */
/* Businesses: editorial index with image reveal                       */
/* ------------------------------------------------------------------ */
function BusinessIndex() {
  const [hover, setHover] = useState(null)
  return (
    <Layer className="z-30 bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Pill>Our businesses</Pill>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl leading-[1.04] font-light text-ink md:text-5xl">
                Different sectors.
                <br />
                <span className="text-emerald italic">Shared standards.</span>
              </h2>
              <BrandRule className="mt-6" />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted">
              Four businesses operate across waste management, agriculture, waste to energy and machinery, and packaged foods and beverages.
              Each has its own identity and expertise, connected by the values of the group.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 border-t border-ink/10" onMouseLeave={() => setHover(null)}>
          {businesses.map((b, i) => {
            const on = hover === i
            return (
              <Reveal key={b.slug} delay={i * 0.05}>
                <Link
                  to={`/businesses#${b.slug}`}
                  onMouseEnter={() => setHover(i)}
                  className="group relative block overflow-hidden border-b border-ink/10"
                >
                  {/* Hover backdrop in the company's colours */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${on ? 'opacity-100' : 'opacity-0'}`}
                    style={{ background: b.theme.panel }}
                  >
                    <img
                      src={sectorStories[b.slug].opener}
                      alt=""
                      className={`absolute inset-y-0 right-0 h-full w-full object-cover opacity-30 transition-transform duration-[1.2s] md:w-2/3 ${
                        on ? 'scale-100' : 'scale-110'
                      }`}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to right, ${b.theme.panel} 35%, transparent)` }}
                    />
                  </div>

                  <div className="relative grid items-center gap-4 px-2 py-7 md:grid-cols-12 md:gap-8 md:py-9">
                    <span className={`font-display text-sm transition-colors md:col-span-1 ${on ? 'text-white/60' : 'text-muted'}`}>
                      0{i + 1}
                    </span>
                    <div className="md:col-span-5">
                      <p
                        className={`font-display text-2xl leading-none transition-colors duration-300 md:text-3xl ${
                          on ? 'text-white' : 'text-ink'
                        }`}
                      >
                        {b.sector}
                      </p>
                    </div>
                    <div className="md:col-span-5">
                      <p
                        className="flex items-center gap-2 text-sm font-semibold transition-colors"
                        style={{ color: on ? b.theme.accent : '#141A18' }}
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: on ? b.theme.accent : '#141A1840' }} />
                        {b.name}
                      </p>
                      <p className={`mt-1.5 text-sm transition-colors ${on ? 'text-white/65' : 'text-muted'}`}>{b.tagline}</p>
                    </div>
                    <span
                      className={`hidden h-12 w-12 place-items-center justify-self-end rounded-full border transition-all duration-500 md:col-span-1 md:grid ${
                        on ? 'rotate-45 border-transparent' : 'border-ink/15 text-ink'
                      }`}
                      style={on ? { background: b.theme.accent, color: b.theme.onAccent } : undefined}
                    >
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <div className="mt-12">
            <Button to="/businesses" variant="outline">
              Explore all businesses
            </Button>
          </div>
        </Reveal>
      </div>
    </Layer>
  )
}

/* ------------------------------------------------------------------ */
/* Statement band                                                      */
/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/* Sustainability: Plastroots Foundation (independent non-profit)      */
/* ------------------------------------------------------------------ */
function FoundationSection() {
  const t = foundation.theme
  return (
    <Layer className="z-[35] bg-white py-16 md:py-20">
      <div className="container-x">
        <Reveal>
          <div
            className="grain group relative grid overflow-hidden rounded-[2rem] text-white md:grid-cols-12"
            style={{ background: t.panel }}
          >
            {/* Image sits under one continuous fade, so there is no hard edge between photo and panel */}
            <div className="relative h-60 overflow-hidden md:absolute md:inset-y-0 md:left-0 md:h-auto md:w-1/2">
              <img
                src={img.volunteersBoxes}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-[1.2s] group-hover:scale-105"
              />
              <div
                className="absolute inset-0 md:hidden"
                style={{ background: `linear-gradient(to bottom, transparent 40%, ${t.panel})` }}
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 hidden md:block"
              style={{ background: `linear-gradient(to right, transparent 0%, transparent 22%, ${t.panel} 46%, ${t.panel} 100%)` }}
            />

            {/* Text */}
            <div className="relative p-8 md:col-span-7 md:col-start-6 md:p-12">
              <p className="eyebrow" style={{ color: t.accent }}>
                Sustainability & Social Impact
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">Plastroots Foundation</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/75">
                An independent Section 8 non-profit carrying forward the Sarvaya Group’s philanthropic work, for
                cleaner villages and stronger communities.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={foundation.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold whitespace-nowrap transition hover:brightness-110"
                  style={{ background: t.accent, color: t.onAccent }}
                >
                  Visit the Foundation
                  <ArrowUpRight size={16} className="transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
                <Link
                  to="/sustainability#foundation"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
                >
                  Learn more <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Layer>
  )
}

function Statement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  return (
    <Layer className="z-40 bg-[#0A0E0D]">
      <div ref={ref} className="relative isolate overflow-hidden rounded-t-[2.5rem] py-32 md:rounded-t-[3rem] md:py-44">
        <motion.img style={{ y }} src={img.seaLinkPylons} alt="" className="absolute inset-0 -z-20 h-[125%] w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A0E0D]/90 via-[#0A0E0D]/65 to-[#0A0E0D]/40" />
        <LeafPattern className="pointer-events-none absolute right-6 bottom-0 -z-10 hidden h-80 w-80 text-lime/[0.08] md:block" />
        <div className="container-x">
          <Reveal>
            <p className="max-w-5xl font-display text-3xl leading-tight font-light text-white text-balance md:text-5xl">
              Different capabilities. <span className="text-white/55 italic">Shared values.</span> One direction
              forward.
            </p>
          </Reveal>
        </div>
      </div>
    </Layer>
  )
}

/* ------------------------------------------------------------------ */
/* Explore: sustainability, careers, media                             */
/* ------------------------------------------------------------------ */
const explore = [
  { to: '/sustainability', label: 'Sustainability & Impact', t: 'Progress that considers people and the planet.', image: img.solarField },
  { to: '/careers', label: 'Careers', t: 'Find your place in the Sarvaya journey.', image: img.teamLaptops },
  { to: '/media', label: 'Media & News', t: 'Stories, perspectives and moments from Sarvaya.', image: img.presenter },
]

function Explore() {
  return (
    <Layer className="z-50 bg-cream py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <Pill>Explore the group</Pill>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {explore.map((e, i) => (
            <Reveal key={e.to} delay={i * 0.08}>
              <Link to={e.to} className="group relative block h-[25rem] overflow-hidden rounded-[1.75rem] bg-[#0A0E0D]">
                <img
                  src={e.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-[1.2s] group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E0D] via-[#0A0E0D]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="eyebrow text-white/60">{e.label}</p>
                  <p className="mt-3 font-display text-2xl leading-snug text-white">{e.t}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Discover <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Layer>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Values />
      <PromiseSection />
      <BusinessIndex />
      <FoundationSection />
      <Statement />
      <Explore />
    </>
  )
}
