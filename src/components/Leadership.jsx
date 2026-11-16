import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Plus, UserRound, X } from 'lucide-react'
import { businesses } from '../data/content'
import { founder, defaultBio, initials, leadershipGroups } from '../data/leadership'
import { Eyebrow, Reveal } from './ui'

/*
  Leadership on About, in the manner of the large group sites: a Founder feature with a message, then the
  leadership team as framed portraits, grouped by tabs. A gold frame slides into place on hover and
  selecting anyone opens their profile. Until real photographs are supplied, each frame shows the
  person's initials, or a quiet placeholder figure.
*/

const companyOf = (slug) => businesses.find((b) => b.slug === slug)

// Portrait artwork: the photograph when there is one, otherwise initials or a placeholder figure.
function PortraitArt({ p, dark = false, big = false }) {
  if (p.photo) return <img src={p.photo} alt={p.name} className="h-full w-full object-cover object-top" />
  const ini = initials(p)
  return (
    <div
      className={`grain relative grid h-full w-full place-items-center ${
        dark ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.02]' : 'bg-gradient-to-b from-white to-sand'
      }`}
    >
      {ini ? (
        <span className={`font-display font-light ${big ? 'text-8xl md:text-9xl' : 'text-6xl'} ${dark ? 'text-lime/80' : 'text-forest/30'}`}>
          {ini}
        </span>
      ) : (
        <UserRound strokeWidth={0.8} className={`${big ? 'h-40 w-40' : 'h-1/2 w-1/2'} ${dark ? 'text-white/20' : 'text-forest/15'}`} />
      )}
    </div>
  )
}

/* Profile drawer */
function Profile({ person, onClose }) {
  useEffect(() => {
    if (!person) return
    const esc = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', esc)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', esc)
      document.body.style.overflow = prev
    }
  }, [person, onClose])

  return (
    <AnimatePresence>
      {person && (
        <motion.div className="fixed inset-0 z-[120]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm" onClick={onClose} />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={person.name}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 flex w-full max-w-[540px] flex-col overflow-y-auto bg-cream"
          >
            <div className="relative aspect-[4/3.4] shrink-0 overflow-hidden bg-forest">
              <PortraitArt p={person} dark big />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close profile"
                className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-forest transition hover:bg-white"
              >
                <X size={18} />
              </button>
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="font-display text-3xl leading-tight">{person.name}</p>
                <p className="mt-1 text-sm text-white/80">{person.companyName ? `${person.title}, ${person.companyName}` : person.title}</p>
              </div>
            </div>
            <div className="flex-1 p-8 md:p-10">
              <span className="block h-px w-12 bg-saffron" />
              {(person.bio || defaultBio(person)).map((p, i) => (
                <p key={i} className="mt-5 leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* Framed portrait card */
function Portrait({ p, i, onOpen }) {
  const c = p.company && companyOf(p.company)
  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen({ ...p, companyName: c?.name })}
      className="group text-left"
    >
      <div className="relative">
        {/* Offset gold frame that slides into place on hover */}
        <span className="absolute inset-0 translate-x-2 translate-y-2 rounded-[1.75rem] border sm:translate-x-3 sm:translate-y-3 border-saffron/50 transition duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-saffron" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-forest/10 bg-sand">
          <div className="h-full w-full transition duration-[1.2s] ease-out group-hover:scale-105">
            <PortraitArt p={p} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest/25 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
          <span className="absolute right-4 bottom-4 inline-flex translate-y-3 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-forest opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <Plus size={14} /> View profile
          </span>
        </div>
      </div>
      <p className="mt-6 font-display text-lg leading-snug text-forest sm:mt-7 sm:text-xl">{p.name}</p>
      <p className="mt-1 text-sm text-muted">{p.title}</p>
      {c && (
        <p className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-forest/70">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.theme.accent }} />
          {c.short}
        </p>
      )}
    </motion.button>
  )
}

export default function Leadership() {
  const [tab, setTab] = useState(0)
  const [open, setOpen] = useState(null)
  const group = leadershipGroups[tab]
  const close = useCallback(() => setOpen(null), [])

  return (
    <section id="leadership">
      {/* Founder feature */}
      <div className="relative overflow-hidden bg-white py-24 text-forest md:py-32">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-saffron/10 blur-3xl" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal y={40} className="lg:col-span-5">
            <div className="relative mx-auto max-w-[26.25rem]">
              {/* Arched portrait with an offset gold arch behind it */}
              <span className="absolute inset-0 -translate-x-4 translate-y-4 rounded-t-full rounded-b-[2rem] border border-saffron/60" />
              <div className="grain relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-forest shadow-[0_40px_80px_-40px_rgba(31,42,68,0.55)]">
                <PortraitArt p={founder} dark big />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Eyebrow>Leadership</Eyebrow>
            <Reveal delay={0.05}>
              <p className="mt-6 text-xs font-bold tracking-[0.18em] text-muted uppercase">From the Founder</p>
              <p className="mt-6 font-display text-2xl leading-[1.4] font-light md:text-[2.1rem]">
                {founder.message}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
                <div className="border-l-2 border-saffron pl-5">
                  <p className="font-display text-2xl">{founder.name}</p>
                  <p className="mt-1 text-sm text-muted">{founder.title}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(founder)}
                  className="group inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold transition hover:bg-forest hover:text-white"
                >
                  View profile
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Leadership team */}
      <div className="bg-cream py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Eyebrow>Our leadership team</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight text-forest md:text-[2.5rem]">
                The people who <span className="text-emerald italic">lead the way.</span>
              </h2>
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-3 gap-1 rounded-2xl border border-forest/10 bg-white p-1.5 sm:flex sm:flex-wrap sm:rounded-full">
              {leadershipGroups.map((g, i) => (
                <button
                  key={g.key}
                  type="button"
                  onClick={() => setTab(i)}
                  className={`relative rounded-xl px-2 py-2.5 text-center text-[0.8rem] leading-tight font-semibold transition sm:rounded-full sm:px-5 sm:text-sm ${
                    tab === i ? 'text-white' : 'text-forest/70 hover:text-forest'
                  }`}
                >
                  {tab === i && (
                    <motion.span layoutId="leader-tab" className="absolute inset-0 rounded-xl bg-forest sm:rounded-full" transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} />
                  )}
                  <span className="relative">{g.label}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={group.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4"
            >
              {group.people.map((p, i) => (
                <Portrait key={`${p.title}-${i}`} p={p} i={i} onOpen={setOpen} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Profile person={open} onClose={close} />
    </section>
  )
}
