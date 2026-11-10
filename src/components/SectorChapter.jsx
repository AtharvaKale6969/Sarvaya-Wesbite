import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Info } from 'lucide-react'
import { Reveal } from './ui'
import LeafPattern from './LeafPattern'

const ease = [0.22, 1, 0.36, 1]

// Gentle parallax: the element drifts `range` px across its own pass through the viewport.
function useDrift(ref, range = 60) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  return useTransform(scrollYProgress, [0, 1], [range, -range])
}

function SubHead({ label, title, t, light = false }) {
  return (
    <>
      <Reveal>
        <p className="eyebrow flex items-center gap-3" style={{ color: light ? t.accent : t.ink }}>
          <span className="h-px w-8" style={{ background: t.accent }} />
          {label}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h3 className={`mt-5 font-display text-3xl leading-[1.1] text-balance md:text-4xl ${light ? 'text-white' : 'text-[var(--ch-heading)]'}`}>
          {title}
        </h3>
      </Reveal>
    </>
  )
}

function Opener({ b, s, t, index, total }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const textY = useTransform(scrollYProgress, [0.3, 1], [0, -80])

  return (
    <div ref={ref} className="grain relative isolate flex min-h-[86vh] items-end overflow-hidden" style={{ background: t.panel }}>
      <motion.img src={s.opener} alt="" style={{ y }} className="absolute inset-0 -z-20 h-[124%] w-full object-cover" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: `linear-gradient(to top, ${t.panel} 0%, ${t.panel}cc 35%, ${t.panel}40 100%)` }}
      />
      <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(to right, ${t.panel}b3, transparent 70%)` }} />

      <motion.div style={{ y: textY }} className="container-x w-full pb-20 md:pb-28">
        <Reveal>
          <p className="flex items-center gap-4 text-white/70">
            <span className="font-display text-4xl leading-none font-light md:text-5xl" style={{ color: t.accent }}>
              0{index + 1}
            </span>
            <span className="h-12 w-px bg-white/25" />
            <span className="eyebrow leading-relaxed">
              Sector 0{index + 1} of 0{total}
              <span className="block text-white/45">{b.name}</span>
            </span>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-6xl font-display text-[2.5rem] leading-[0.98] font-light text-white text-balance sm:text-6xl md:text-[4.5rem]">
            {b.sector}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-white/80 italic md:text-3xl">{s.hook}</p>
        </Reveal>
      </motion.div>
    </div>
  )
}

function Landscape({ b, s, t }) {
  const ref = useRef(null)
  const slow = useDrift(ref, 40)
  const fast = useDrift(ref, 90)

  return (
    <div ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <SubHead t={t} label="The landscape" title={`Understanding ${b.sector.toLowerCase()}`} />
          <Reveal delay={0.08}>
            <p className="mt-8 border-l-2 pl-6 font-display text-xl leading-[1.35] text-[var(--ch-heading)] md:text-[1.6rem]" style={{ borderColor: t.accent }}>
              {s.landscape.lead}
            </p>
          </Reveal>
          {s.landscape.body.map((para, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className={`text-lg leading-relaxed text-muted ${i === 0 ? 'mt-8' : 'mt-5'}`}>{para}</p>
            </Reveal>
          ))}
        </div>

        <div className="relative min-h-[460px] md:min-h-[600px] lg:col-span-6">
          <motion.div
            style={{ y: slow }}
            className="absolute top-0 right-0 w-[78%] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(14,27,44,0.5)]"
          >
            <img src={s.gallery[0]} alt="" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </motion.div>
          <motion.div
            style={{ y: fast }}
            className="absolute bottom-0 left-0 w-[52%] overflow-hidden rounded-[1.75rem] border-[6px] border-[var(--ch-surface)] shadow-[0_30px_60px_-30px_rgba(14,27,44,0.5)]"
          >
            <img src={s.gallery[1]} alt="" loading="lazy" className="aspect-square w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Challenge({ s, t }) {
  return (
    <div className="bg-[var(--ch-surface-alt)] py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SubHead t={t} label="The challenge" title="What stands in the way" />
            <Reveal delay={0.08}>
              <p className="mt-6 text-lg leading-relaxed text-muted">{s.challenge.intro}</p>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-8">
          {s.challenge.items.map(({ icon: Icon, t: title, d }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="group grid gap-5 border-t border-forest/15 py-9 sm:grid-cols-12 sm:gap-8">
                <div className="flex items-center gap-4 sm:col-span-5">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6"
                    style={{ background: t.panel, color: t.accent }}
                  >
                    <Icon size={22} />
                  </span>
                  <p className="font-display text-2xl leading-tight text-[var(--ch-heading)]">{title}</p>
                </div>
                <p className="leading-relaxed text-muted sm:col-span-7 sm:pt-1">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

function WayForward({ s, t }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.6'] })
  const line = useTransform(scrollYProgress, [0, 1], [0, 1])
  const n = s.wayForward.steps.length

  return (
    <div ref={ref} className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <SubHead t={t} label={s.wayForward.label || 'The way forward'} title={s.wayForward.label ? 'How we work' : 'What needs to be done'} />
          </div>
          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-muted">{s.wayForward.intro}</p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* Connecting line, drawn on scroll */}
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-forest/10 lg:block">
            <motion.div style={{ scaleX: line, background: t.accent }} className="h-full origin-left" />
          </div>
          <div className={`grid gap-10 sm:grid-cols-2 ${n === 5 ? 'lg:grid-cols-5' : n === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {s.wayForward.steps.map((st, i) => (
              <Reveal key={st.t} delay={i * 0.08}>
                <div className="relative">
                  <span
                    className="relative grid h-12 w-12 place-items-center rounded-full font-display text-lg ring-8 ring-[var(--ch-surface)]"
                    style={{ background: t.panel, color: t.accent }}
                  >
                    {i + 1}
                  </span>
                  <p className="mt-7 font-display text-2xl leading-tight text-[var(--ch-heading)]">{st.t}</p>
                  <p className="mt-3 leading-relaxed text-muted">{st.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <figure className="mt-24 grid items-center gap-6 md:mt-28 md:grid-cols-12">
            <span className="hidden h-px md:col-span-2 md:block" style={{ background: t.accent }} />
            <blockquote className="font-display text-2xl leading-snug font-light text-[var(--ch-heading)] italic md:col-span-10 md:text-4xl">
              {s.pullQuote}
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </div>
  )
}

function Bridge({ b, t }) {
  return (
    <div className="container-x pb-16 text-center md:pb-20">
      <motion.span
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease }}
        className="mx-auto block h-20 w-px origin-top"
        style={{ background: `linear-gradient(${t.accent}, transparent)` }}
      />
      <Reveal>
        <p className="mt-8 eyebrow text-muted">Our business in {b.sector.toLowerCase()}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mx-auto mt-5 max-w-4xl font-display text-2xl leading-snug text-[var(--ch-heading)] text-balance md:text-3xl">
          Introducing{' '}
          <span className="italic" style={{ color: t.ink }}>
            {b.name}
          </span>
        </p>
      </Reveal>
    </div>
  )
}

function CompanyFeature({ b, s, t, index }) {
  const ref = useRef(null)
  const imgY = useDrift(ref, 30)

  return (
    <div ref={ref} className="grain relative overflow-hidden text-white" style={{ background: t.panel }}>
      <LeafPattern
        className="pointer-events-none absolute -bottom-24 left-[35%] h-[520px] w-[520px]"
        style={{ color: t.accent, opacity: 0.06 }}
      />
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl" style={{ background: t.accent, opacity: 0.16 }} />

      <div className="relative grid lg:grid-cols-2">
        <div className="flex items-center px-5 py-20 md:px-10 lg:py-28 lg:pr-16 xl:pl-[max(3.5rem,calc((100vw-1600px)/2+3.5rem))]">
          <Reveal className="w-full">
            <p className="eyebrow flex items-center gap-3" style={{ color: t.muted }}>
              <span
                className="grid h-7 w-7 place-items-center rounded-full text-[0.7rem]"
                style={{ background: t.accent, color: t.onAccent }}
              >
                0{index + 1}
              </span>
              A Sarvaya Group company · {b.sector}
            </p>
            <h3 className="mt-8 font-display text-3xl leading-[1.05] font-normal text-balance md:text-[2.6rem]">{b.name}</h3>
            <p className="mt-6 font-display text-2xl leading-snug italic" style={{ color: t.accent }}>
              {b.tagline}
            </p>
            <div className="mt-8 h-px w-full bg-white/10" />

            <p className="mt-8 eyebrow" style={{ color: t.muted }}>
              About the company
            </p>
            {s.about.map((para, i) => (
              <p key={i} className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
                {para}
              </p>
            ))}
            {s.note && (
              <p className="mt-6 flex max-w-2xl gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-relaxed text-white/70">
                <Info size={17} className="mt-0.5 shrink-0" style={{ color: t.accent }} />
                {s.note}
              </p>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={b.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold whitespace-nowrap transition hover:brightness-110"
                style={{ background: t.accent, color: t.onAccent }}
              >
                Visit the website
                <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-sm" style={{ color: t.muted }}>
                {b.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[360px] overflow-hidden lg:min-h-0">
          <motion.img
            src={s.company}
            alt=""
            loading="lazy"
            style={{ y: imgY }}
            className="absolute inset-x-0 -top-[7%] h-[115%] w-full object-cover"
          />
          <div
            className="absolute inset-0 max-lg:hidden"
            style={{ background: `linear-gradient(to right, ${t.panel}, ${t.panel}33 35%, transparent 60%)` }}
          />
          <div className="absolute inset-0 lg:hidden" style={{ background: `linear-gradient(to bottom, ${t.panel}, transparent 40%)` }} />
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x py-14 md:py-20">
          <p className="eyebrow" style={{ color: t.muted }}>
            Areas of focus
          </p>
          <div
            className={`mt-8 grid gap-4 sm:grid-cols-2 ${
              s.focus.length > 4 ? 'lg:grid-cols-5' : s.focus.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
            }`}
          >
            {s.focus.map(({ icon: Icon, t: title, d }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <Icon size={24} style={{ color: t.accent }} />
                  <p className="mt-5 font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: t.muted }}>
                    {d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SectorChapter({ b, s, index, total }) {
  const t = b.theme
  return (
    <section
      id={b.slug}
      className="scroll-mt-16 bg-[var(--ch-surface)]"
      style={{
        '--ch-heading': t.heading || '#0E1B2C',
        '--ch-surface': t.surface || '#F6F7F9',
        '--ch-surface-alt': t.surfaceAlt || '#ECEFF3',
      }}
    >
      <Opener b={b} s={s} t={t} index={index} total={total} />
      <Landscape b={b} s={s} t={t} />
      <Challenge s={s} t={t} />
      <WayForward s={s} t={t} />
      <Bridge b={b} t={t} />
      <CompanyFeature b={b} s={s} t={t} index={index} />
    </section>
  )
}
