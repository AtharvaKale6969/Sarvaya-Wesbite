import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Info } from 'lucide-react'
import { Reveal } from './ui'
import LeafPattern from './LeafPattern'

// Gentle parallax: the element drifts `range` px across its own pass through the viewport.
function useDrift(ref, range = 60) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  return useTransform(scrollYProgress, [0, 1], [range, -range])
}

function Opener({ b, s, t, index, total }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const textY = useTransform(scrollYProgress, [0.3, 1], [0, -80])

  return (
    <div ref={ref} className="grain relative isolate flex min-h-[64vh] items-end overflow-hidden" style={{ background: t.panel }}>
      <motion.img src={s.opener} alt="" style={{ y }} className="absolute inset-0 -z-20 h-[124%] w-full object-cover" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: `linear-gradient(to top, ${t.panel} 0%, ${t.panel}cc 35%, ${t.panel}40 100%)` }}
      />
      <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(to right, ${t.panel}b3, transparent 70%)` }} />

      <motion.div style={{ y: textY }} className="container-x w-full pb-16 md:pb-20">
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
        <Reveal delay={0.22}>
          <p className="mt-5 max-w-xl leading-relaxed text-white/65">{s.landscape.lead}</p>
        </Reveal>
      </motion.div>
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
              {b.kicker || `A Sarvaya Group company · ${b.sector}`}
            </p>
            <h3 className="mt-8 font-display text-3xl leading-[1.05] font-normal text-balance md:text-[2.6rem]">{b.name}</h3>
            {b.badge && (
              <span
                className="mt-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.08em] uppercase"
                style={{ borderColor: `${t.accent}55`, color: t.accent }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: t.accent }} />
                {b.badge}
              </span>
            )}
            <p className="mt-6 font-display text-2xl leading-snug italic" style={{ color: t.accent }}>
              {b.tagline}
            </p>
            <div className="mt-8 h-px w-full bg-white/10" />

            <p className="mt-8 eyebrow" style={{ color: t.muted }}>
              {b.aboutLabel || 'About the company'}
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
              s.focus.length === 6 ? 'lg:grid-cols-3' : s.focus.length > 4 ? 'lg:grid-cols-5' : s.focus.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
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
        '--ch-heading': t.heading || '#141A18',
        '--ch-surface': t.surface || '#F8F8F2',
        '--ch-surface-alt': t.surfaceAlt || '#EEF0E8',
      }}
    >
      <Opener b={b} s={s} t={t} index={index} total={total} />
      <CompanyFeature b={b} s={s} t={t} index={index} />
    </section>
  )
}
