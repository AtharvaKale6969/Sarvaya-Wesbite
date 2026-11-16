import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ShieldCheck, Compass, HeartHandshake, Lightbulb, TrendingUp, Eye } from 'lucide-react'
import { Pill, Reveal } from './ui'

// Six values, each with its own muted tone so the wheel reads clearly without looking loud.
const values = [
  {
    t: 'Trust', icon: ShieldCheck, c: '#5b7fb5',
    line: 'Relationships built on reliability, consistency and integrity.',
    detail: 'Trust is earned over time. We aim to be the partner people can depend on: consistent in what we deliver, honest in how we deal and dependable when it matters most.',
    points: ['Keeping commitments, large and small', 'Consistency across every business', 'Integrity in every relationship'],
  },
  {
    t: 'Leadership', icon: Compass, c: '#c48a4a',
    line: 'Taking responsibility, setting direction and enabling others to grow.',
    detail: 'For us, leadership is less about position and more about responsibility. It means setting a clear direction, owning outcomes and creating room for others to step up.',
    points: ['Taking ownership of outcomes', 'Setting clear direction for each business', 'Enabling people to grow and lead'],
  },
  {
    t: 'Human values', icon: HeartHandshake, c: '#c56f6a',
    line: 'Respect for people, and care for social and environmental outcomes.',
    detail: 'People sit at the centre of everything we do. We consider how our decisions affect employees, partners, communities and the environment, not only the bottom line.',
    points: ['Dignity and respect for everyone', 'Care for communities we work with', 'Responsibility towards the environment'],
  },
  {
    t: 'Innovation', icon: Lightbulb, c: '#4f9aa0',
    line: 'Open to ideas, new approaches and continuous improvement.',
    detail: 'We stay curious. Better ideas can come from anywhere, and we encourage our businesses to question how things are done and keep improving them.',
    points: ['Openness to new ideas', 'Practical, useful solutions', 'Continuous improvement'],
  },
  {
    t: 'Growth', icon: TrendingUp, c: '#c9a24d',
    line: 'Progress that creates opportunity across businesses and relationships.',
    detail: 'We pursue growth that lasts and that is shared: progress for our businesses that also creates opportunity for employees, partners and communities.',
    points: ['Long-term, sustainable progress', 'Opportunity for people and partners', 'Responsible expansion'],
  },
  {
    t: 'Transparency', icon: Eye, c: '#8a78b8',
    line: 'Honest communication, clarity and accountability in how we work.',
    detail: 'Clarity builds confidence. We communicate openly, explain our decisions and hold ourselves accountable to the people who rely on us.',
    points: ['Honest, open communication', 'Clear and accountable decisions', 'Confidence for every stakeholder'],
  },
]

export default function ValuesWheel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive((a) => (a + 1) % values.length), 4500)
    return () => clearInterval(t)
  }, [paused])

  const v = values[active]
  const Icon = v.icon

  return (
    <section id="values" className="grain relative overflow-hidden bg-forest py-24 text-white md:py-32">
      <motion.div
        className="pointer-events-none absolute top-1/2 right-[18%] h-[30rem] w-[30rem] -translate-y-1/2 rounded-full blur-[130px]"
        animate={{ backgroundColor: v.c }}
        transition={{ duration: 1.2 }}
        style={{ opacity: 0.22 }}
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
        {/* Left: heading + legend */}
        <div className="lg:col-span-5">
          <Reveal>
            <Pill tone="dark">Our values</Pill>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl leading-[1.15] font-light md:text-[2.5rem]">
              Six principles that guide <span className="text-lime italic">every decision.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 leading-relaxed text-white/70">
              Each value shapes the way Sarvaya businesses work with customers, partners, employees and communities.
            </p>
          </Reveal>

          {/* All six panels share one grid cell, so the area always keeps the height of the longest. */}
          <div className="mt-10 grid">
            {values.map((x, i) => {
              const on = active === i
              return (
                <motion.div
                  key={x.t}
                  aria-hidden={!on}
                  initial={false}
                  animate={{ opacity: on ? 1 : 0, y: on ? 0 : 12 }}
                  transition={{ duration: 0.45 }}
                  className={`col-start-1 row-start-1 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 ${
                    on ? '' : 'pointer-events-none'
                  }`}
                  style={{ borderLeft: `3px solid ${x.c}` }}
                >
                  <p className="flex items-center gap-3 font-display text-xs tracking-[0.2em] text-white/40 uppercase">
                    <span style={{ color: x.c }}>0{i + 1}</span> / 06
                  </p>
                  <p className="mt-3 font-display text-3xl" style={{ color: x.c }}>
                    {x.t}
                  </p>
                  <p className="mt-4 leading-relaxed text-white/80">{x.detail}</p>
                  <ul className="mt-6 space-y-2.5">
                    {x.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-white/70">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: x.c }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Right: wheel */}
        <div className="lg:col-span-7">
          <div
            className="relative mx-auto aspect-square w-full max-w-[35rem]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Rings */}
            <div className="absolute inset-[6%] rounded-full border border-white/10" />
            <div className="absolute inset-[20%] rounded-full border border-dashed border-white/10" />

            {/* Arc highlight towards the active value */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
              <motion.circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                strokeWidth="0.6"
                strokeLinecap="round"
                animate={{ stroke: v.c, strokeDasharray: `${((active + 1) / values.length) * 276.5} 276.5` }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>

            {/* Nodes */}
            {values.map((x, i) => {
              const a = (i / values.length) * Math.PI * 2 - Math.PI / 2
              const on = active === i
              const NodeIcon = x.icon
              return (
                <button
                  key={x.t}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-label={x.t}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${50 + Math.cos(a) * 44}%`, top: `${50 + Math.sin(a) * 44}%` }}
                >
                  <motion.span
                    animate={{ scale: on ? 1.15 : 1, backgroundColor: on ? x.c : 'rgba(255,255,255,0.06)' }}
                    transition={{ duration: 0.4 }}
                    className="grid h-14 w-14 place-items-center rounded-full border md:h-16 md:w-16"
                    style={{ borderColor: on ? x.c : 'rgba(255,255,255,0.15)', color: on ? '#fff' : x.c }}
                  >
                    <NodeIcon size={22} strokeWidth={1.6} />
                  </motion.span>
                  <span
                    className={`absolute top-full left-1/2 mt-2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap transition ${
                      on ? 'text-white' : 'text-white/50'
                    }`}
                  >
                    {x.t}
                  </span>
                </button>
              )
            })}

            {/* Centre */}
            <div className="absolute inset-[22%] grid place-items-center rounded-full bg-white/[0.04] p-6 text-center backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={v.t}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                >
                  <span
                    className="mx-auto grid h-12 w-12 place-items-center rounded-full"
                    style={{ background: `${v.c}33`, color: v.c }}
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <p className="mt-4 font-display text-xs tracking-[0.2em] text-white/40 uppercase">
                    Value 0{active + 1}
                  </p>
                  <p className="mt-1 font-display text-3xl md:text-4xl" style={{ color: v.c }}>
                    {v.t}
                  </p>
                  <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-white/75">{v.line}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
