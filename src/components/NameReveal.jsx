import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { Pill, Reveal } from './ui'

const ease = [0.22, 1, 0.36, 1]

const notes = [
  { k: 'The word', d: 'Inspired by the Sanskrit “Sarva”: all, everyone, universal.' },
  { k: 'The idea', d: 'An inclusive outlook, creating value across businesses, people, communities and the wider environment.' },
  { k: 'Holdings', d: 'The unifying parent: distinct businesses, shared values and direction, each with its own identity.' },
]

// The two roots slide together and resolve into the full name.
export default function NameReveal() {
  const stage = useRef(null)
  const inView = useInView(stage, { margin: '-120px' })
  const [merged, setMerged] = useState(false)

  // Loop gently between the two roots and the full name while the section is on screen.
  useEffect(() => {
    if (!inView) {
      setMerged(false)
      return
    }
    let timer
    const cycle = (next) => {
      timer = setTimeout(() => {
        setMerged(next)
        cycle(!next)
      }, next ? 3200 : 4800)
    }
    cycle(true)
    return () => clearTimeout(timer)
  }, [inView])

  const part = (side) => ({
    initial: { opacity: 0, x: side * 40 },
    animate: merged ? { opacity: 0, x: side * -70, filter: 'blur(6px)' } : { opacity: 1, x: 0, filter: 'blur(0px)' },
    transition: { duration: merged ? 0.7 : 0.9, ease },
  })

  return (
    <section className="grain relative overflow-hidden bg-forest py-20 text-white md:py-[min(4rem,6vh)]">
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-saffron/10 blur-[120px]" />

      <div className="container-x relative">
        <div className="text-center">
          <Reveal>
            <Pill tone="dark">The meaning behind Sarvaya</Pill>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl leading-[1.15] font-light md:text-[2.5rem]">
              A name that <span className="text-lime italic">holds everyone.</span>
            </h2>
          </Reveal>
        </div>

        {/* Stage */}
        <div ref={stage} className="relative mx-auto mt-6 grid h-[18.75rem] max-w-4xl place-items-center md:h-[min(17rem,30vh)]">
          {/* Roots */}
          <div className="col-start-1 row-start-1 flex items-start justify-center gap-6 md:gap-12">
            <motion.div {...part(-1)} className="text-center">
              <p className="font-display text-[5.5rem] leading-none text-cream md:text-[min(7rem,13vh)]">सर्व</p>
              <p className="mt-3 font-display text-xl text-lime italic">Sarva</p>
              <p className="mt-1 text-sm text-white/60">all, everyone, universal</p>
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: merged || !inView ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="mt-10 font-display text-4xl text-white/30 md:mt-[min(3rem,5vh)] md:text-5xl"
            >
              +
            </motion.span>
            <motion.div {...part(1)} className="text-center">
              <p className="font-display text-[5.5rem] leading-none text-cream md:text-[min(7rem,13vh)]">य</p>
              <p className="mt-3 font-display text-xl text-lime italic">ya</p>
              <p className="mt-1 text-sm text-white/60">of, for, belonging to</p>
            </motion.div>
          </div>

          {/* Result */}
          <AnimatePresence>
            {merged && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.25, ease }}
                className="col-start-1 row-start-1 text-center"
              >
                <p className="font-display text-[6.5rem] leading-none text-cream md:text-[min(8rem,15vh)]">सर्वाय</p>
                <p className="mt-4 font-display text-2xl text-lime italic">Sarvaya</p>
                <p className="mt-2 text-sm font-semibold tracking-[0.2em] text-white/70 uppercase">
                  For all · Belonging to everyone
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Notes */}
        <div className="mt-12 grid overflow-hidden rounded-[1.75rem] md:mt-8 border border-white/10 md:grid-cols-3">
          {notes.map((n, i) => (
            <Reveal key={n.k} delay={i * 0.08} className="h-full">
              <div className={`h-full bg-white/[0.03] p-7 md:px-8 md:py-6 ${i > 0 ? 'border-t border-white/10 md:border-t-0 md:border-l' : ''}`}>
                <p className="eyebrow text-lime">{n.k}</p>
                <p className="mt-3 leading-relaxed text-white/75">{n.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center font-display text-2xl leading-snug md:mt-8 md:text-[1.75rem]">
            Sarvaya Holdings: <span className="text-lime italic">a parent organisation built for all.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
