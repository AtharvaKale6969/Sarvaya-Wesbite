import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import LeafPattern from './LeafPattern'

/*
  Our Businesses: each company is one self-contained card. On large screens the cards pin and
  stack on top of each other as you scroll, the earlier ones easing back slightly, so the whole
  portfolio reads as one deck. On phones they simply follow one another.
*/
function Card({ b, s, i, total, progress }) {
  const t = b.theme
  // Card i shrinks a little once later cards begin to cover it.
  const start = i / total
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - 1 - i) * 0.035])

  return (
    <>
      {/* Anchor sits in normal flow, so /businesses#slug lands on the right card. */}
      <div
        id={b.slug}
        className={i ? 'mt-6 lg:mt-[18vh]' : ''}
        style={{ scrollMarginTop: `calc(6rem + ${i * 1.25}rem)` }}
      />
      <div className="lg:sticky" style={{ top: `calc(6rem + ${i * 1.25}rem)` }}>
        <motion.article
          style={{ scale, background: t.panel }}
          className="grain relative origin-top overflow-hidden rounded-[2rem] text-white shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.45)] md:rounded-[2.5rem] lg:h-[calc(100vh-9rem)] lg:max-h-[700px] lg:min-h-[560px]"
        >
          <LeafPattern
            className="pointer-events-none absolute -bottom-24 left-[40%] h-[440px] w-[440px]"
            style={{ color: t.accent, opacity: 0.06 }}
          />
          <div
            className="pointer-events-none absolute -top-40 -left-40 h-[26rem] w-[26rem] rounded-full blur-3xl"
            style={{ background: t.accent, opacity: 0.14 }}
          />

          <div className="relative grid h-full lg:grid-cols-12">
            {/* Text */}
            <div className="flex flex-col p-7 sm:p-10 lg:col-span-7 lg:p-12 xl:p-14">
              <div className="flex items-center gap-4">
                <span className="font-display text-4xl leading-none font-light" style={{ color: t.accent }}>
                  0{i + 1}
                </span>
                <span className="h-9 w-px bg-white/20" />
                <span className="eyebrow leading-relaxed" style={{ color: t.muted }}>
                  {b.sector}
                </span>
              </div>

              <h3 className="mt-7 font-display text-3xl leading-[1.08] text-balance md:text-[2.4rem]">{b.name}</h3>
              <p className="mt-3 font-display text-xl leading-snug italic md:text-2xl" style={{ color: t.accent }}>
                {b.tagline}
              </p>
              <p className="mt-5 max-w-2xl leading-relaxed text-white/75">{s.about[1] || s.about[0]}</p>

              <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {s.focus.map(({ icon: Icon, t: title }) => (
                  <li key={title} className="flex items-center gap-3 text-sm text-white/85">
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                      style={{ background: `${t.accent}1f`, color: t.accent }}
                    >
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                    {title}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-auto lg:pt-8">
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
                <span className="text-sm" style={{ color: t.muted }}>
                  {b.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="relative min-h-[240px] sm:min-h-[320px] lg:col-span-5 lg:min-h-0">
              <img src={s.company} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div
                className="absolute inset-0 max-lg:hidden"
                style={{ background: `linear-gradient(to right, ${t.panel}, ${t.panel}55 30%, transparent 65%)` }}
              />
              <div
                className="absolute inset-0 lg:hidden"
                style={{ background: `linear-gradient(to bottom, ${t.panel}, transparent 45%)` }}
              />
              <span
                className="absolute right-6 bottom-6 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-white/85 uppercase backdrop-blur"
              >
                {i + 1} of {total}
              </span>
            </div>
          </div>
        </motion.article>
      </div>
    </>
  )
}

export default function BusinessStack({ businesses, stories }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <section>
      <div ref={ref} className="container-x">
        {businesses.map((b, i) => (
          <Card key={b.slug} b={b} s={stories[b.slug]} i={i} total={businesses.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}
