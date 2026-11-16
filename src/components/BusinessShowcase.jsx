import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import BusinessStack from './BusinessStack'

/*
  Our Businesses showcase.
  One full-screen stage stays pinned while you scroll through the portfolio. As you move from one
  company to the next, the stage colour melts into that company's own palette, its photograph
  fades in over the last one with a slow parallax drift, a large sector word glides behind the
  text and the introduction slides in. There are no section edges: the four companies read as one
  continuous scene. Phones get the simpler stacked cards.
*/

function useIsDesktop() {
  const q = '(min-width: 1024px)'
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches)
  useEffect(() => {
    const mq = window.matchMedia(q)
    const f = () => setM(mq.matches)
    mq.addEventListener('change', f)
    return () => mq.removeEventListener('change', f)
  }, [])
  return m
}

// Builds a scroll track for item i: `before` while waiting, `mid` while it is the active company,
// `after` once it has passed. a and b set how far (in gaps between companies) the change starts and ends.
function track(i, n, a, b, [before, mid, after]) {
  const g = 1 / (n - 1)
  const p = i * g
  const input = []
  const output = []
  if (i > 0) {
    input.push(p - a * g, p - b * g)
    output.push(before, mid)
  } else {
    input.push(0)
    output.push(mid)
  }
  if (i < n - 1) {
    input.push(p + b * g, p + a * g)
    output.push(mid, after)
  } else {
    input.push(1)
    output.push(mid)
  }
  return [input, output]
}

function Backdrop({ b, s, i, n, progress }) {
  const g = 1 / (n - 1)
  const p = i * g
  // Later photographs fade in on top of earlier ones, so there is never a gap between them.
  const opacity = useTransform(progress, i === 0 ? [0, 1] : [p - 0.58 * g, p - 0.2 * g], i === 0 ? [1, 1] : [0, 1])
  const y = useTransform(progress, [p - g, p + g], ['7%', '-7%'])
  const scale = useTransform(progress, [p - g, p, p + g], [1.18, 1.06, 1.12])
  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img src={s.company} alt="" style={{ y, scale }} className="absolute inset-0 h-full w-full object-cover" />
    </motion.div>
  )
}

function Word({ b, i, n, progress }) {
  const g = 1 / (n - 1)
  const p = i * g
  const x = useTransform(progress, [p - g, p + g], ['18%', '-18%'])
  const opacity = useTransform(progress, ...track(i, n, 0.55, 0.15, [0, 1, 0]))
  return (
    <motion.p
      style={{ x, opacity, WebkitTextStroke: `1px ${b.theme.accent}55` }}
      className="absolute bottom-[-0.12em] left-0 font-display text-[13vw] leading-none whitespace-nowrap text-transparent select-none"
    >
      {b.short}
    </motion.p>
  )
}

function Slide({ b, s, i, n, progress }) {
  const t = b.theme
  const opacity = useTransform(progress, ...track(i, n, 0.56, 0.16, [0, 1, 0]))
  const y = useTransform(progress, ...track(i, n, 0.56, 0.16, [60, 0, -60]))
  const pointerEvents = useTransform(opacity, (o) => (o > 0.5 ? 'auto' : 'none'))

  return (
    <motion.div style={{ opacity, y, pointerEvents }} className="absolute inset-0 flex flex-col justify-center pt-20">
      <p className="eyebrow flex items-center gap-4" style={{ color: t.accent }}>
        <span className="font-display text-3xl leading-none font-light tracking-normal">0{i + 1}</span>
        <span className="h-px w-10" style={{ background: t.accent }} />
        {b.sector}
      </p>
      <h3 className="mt-7 font-display text-[2.6rem] leading-[1.06] text-balance text-white xl:text-5xl">{b.name}</h3>
      <p className="mt-4 font-display text-2xl leading-snug italic" style={{ color: t.accent }}>
        {b.tagline}
      </p>
      <p className="mt-6 max-w-xl leading-relaxed text-white/75">{s.about[1] || s.about[0]}</p>

      <ul className="mt-7 flex max-w-xl flex-wrap gap-2.5">
        {s.focus.map(({ icon: Icon, t: title }) => (
          <li
            key={title}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[0.8rem] text-white/85 backdrop-blur-sm"
          >
            <Icon size={14} strokeWidth={1.9} style={{ color: t.accent }} />
            {title}
          </li>
        ))}
      </ul>

      <div className="mt-9 flex items-center gap-5">
        <a
          href={b.url}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold whitespace-nowrap transition hover:brightness-110"
          style={{ background: t.accent, color: t.onAccent }}
        >
          Visit the website
          <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <span className="text-sm text-white/50">{b.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
      </div>
    </motion.div>
  )
}

function Stage({ businesses, stories }) {
  const n = businesses.length
  const g = 1 / (n - 1)
  const ref = useRef(null)
  const { scrollYProgress: progress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  // Entry: the stage opens out from a rounded card to full screen as it arrives.
  const { scrollYProgress: entry } = useScroll({ target: ref, offset: ['start end', 'start start'] })
  const clipPath = useTransform(
    entry,
    [0, 1],
    ['inset(6% 3% 0% 3% round 2.5rem)', 'inset(0% 0% 0% 0% round 0rem)'],
  )

  // Stage colour melts from one company palette into the next between stops.
  const bgIn = [0]
  const bgOut = [businesses[0].theme.panel]
  for (let i = 0; i < n - 1; i++) {
    bgIn.push(i * g + 0.3 * g, i * g + 0.7 * g)
    bgOut.push(businesses[i].theme.panel, businesses[i + 1].theme.panel)
  }
  bgIn.push(1)
  bgOut.push(businesses[n - 1].theme.panel)
  const background = useTransform(progress, bgIn, bgOut)

  const [active, setActive] = useState(0)
  useMotionValueEvent(progress, 'change', (v) => setActive(Math.min(n - 1, Math.max(0, Math.round(v * (n - 1))))))

  const goTo = (i) => {
    const top = ref.current.getBoundingClientRect().top + window.scrollY + i * window.innerHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="relative" style={{ height: `${n * 100}vh` }}>
      {/* Anchors: /businesses#slug lands exactly where that company is fully in view. */}
      {businesses.map((b, i) => (
        <div key={b.slug} id={b.slug} className="absolute left-0 h-px w-px" style={{ top: `${i * 100}vh` }} />
      ))}

      <motion.div style={{ background, clipPath }} className="grain sticky top-0 h-screen overflow-hidden">
        {/* Photographs on the right, fading into the stage colour */}
        <div
          className="absolute inset-y-0 right-0 w-[62%]"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 38%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 38%)',
          }}
        >
          {businesses.map((b, i) => (
            <Backdrop key={b.slug} b={b} s={stories[b.slug]} i={i} n={n} progress={progress} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/35" />
        </div>

        {/* Large sector words drifting behind the text */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[16vw] overflow-hidden">
          {businesses.map((b, i) => (
            <Word key={b.slug} b={b} i={i} n={n} progress={progress} />
          ))}
        </div>

        {/* Introductions */}
        <div className="container-x relative h-full">
          <div className="relative h-full max-w-[40rem]">
            {businesses.map((b, i) => (
              <Slide key={b.slug} b={b} s={stories[b.slug]} i={i} n={n} progress={progress} />
            ))}
          </div>
        </div>

        {/* Index rail */}
        <nav className="absolute top-1/2 right-8 hidden -translate-y-1/2 xl:right-12 lg:block" aria-label="Businesses">
          <ul className="space-y-5 rounded-2xl border border-white/10 bg-black/30 px-5 py-5 backdrop-blur-md">
            {businesses.map((b, i) => {
              const on = active === i
              return (
                <li key={b.slug}>
                  <button onClick={() => goTo(i)} className="group flex items-center justify-end gap-3 text-right">
                    <span
                      className={`text-xs font-semibold tracking-[0.12em] uppercase transition ${
                        on ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                      }`}
                    >
                      {b.short}
                    </span>
                    <span
                      className="h-px transition-all duration-500"
                      style={{ width: on ? 40 : 16, background: on ? b.theme.accent : 'rgba(255,255,255,0.35)' }}
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Progress line */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/10">
          <motion.div
            style={{ scaleX: progress, background: businesses[active].theme.accent }}
            className="h-full origin-left transition-colors duration-700"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default function BusinessShowcase({ businesses, stories }) {
  const desktop = useIsDesktop()
  return desktop ? (
    <Stage businesses={businesses} stories={stories} />
  ) : (
    <div className="py-6">
      <BusinessStack businesses={businesses} stories={stories} />
    </div>
  )
}
