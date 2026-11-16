import { forwardRef, useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Megaphone, Mic, Users, PenLine, Newspaper, FlaskConical, Play, X, ChevronLeft, ChevronRight, Maximize2, ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { img } from '../data/images'
import { Eyebrow, PageHero, Photo, Reveal, SectionHeading } from '../components/ui'

const categories = [
  {
    key: 'updates',
    icon: Megaphone,
    t: 'Company updates',
    d: 'Official announcements and updates from Sarvaya Holdings and its associated businesses. Each post identifies the organisation responsible and includes the date and relevant details.',
    image: img.office,
  },
  {
    key: 'leadership',
    icon: Mic,
    t: 'Leadership perspectives',
    d: 'Thoughts from Directors and board members on leadership, entrepreneurship, responsible business, innovation and the values guiding Sarvaya.',
    image: img.presenter,
  },
  {
    key: 'family',
    icon: Users,
    t: 'The Sarvaya family',
    d: 'Team moments, employee stories, celebrations, internal activities and milestones shared by the Sarvaya family.',
    image: img.teamSmiling,
  },
  {
    key: 'blogs',
    icon: PenLine,
    t: 'Blogs & member stories',
    d: 'Articles and first-person perspectives from group members on professional experiences, learnings, industry observations and ideas.',
    image: img.meetingTable,
  },
  {
    key: 'news',
    icon: Newspaper,
    t: 'News',
    d: 'News articles covering the positive impact and achievements of Sarvaya group companies.',
    image: img.towers,
  },
  {
    key: 'research',
    icon: FlaskConical,
    t: 'Technology & research',
    d: 'Updates on the technologies and research our companies are involved in, or planning to be, showing where the group is heading.',
    image: img.lab,
  },
]

const SampleCard = forwardRef(function SampleCard({ cat, i }, ref) {
  const Icon = cat.icon
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: i * 0.04 }}
      className="group overflow-hidden rounded-[2rem] border border-sand/50 bg-sand/[0.12] shadow-[0_20px_60px_-40px_rgba(58,30,42,0.45)]"
    >
      <div className="relative">
        <Photo src={cat.image} className="aspect-[16/10]" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-bold tracking-[0.12em] text-forest uppercase backdrop-blur">
          <Icon size={12} /> {cat.t}
        </span>
      </div>
      <div className="p-7">
        <h3 className="font-display text-2xl leading-snug text-forest">{cat.t}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{cat.d}</p>
        <p className="mt-6 inline-flex items-center gap-2 border-t border-sand/60 pt-4 text-sm font-semibold text-forest">
          Stories coming soon
        </p>
      </div>
    </motion.article>
  )
})

export default function Media() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? categories : categories.filter((c) => c.key === filter)

  return (
    <>
      <PageHero
        eyebrow="Media & News"
        title="Stories, perspectives and moments from Sarvaya."
        intro="A people-centred space for official updates, leadership perspectives and stories from across the Sarvaya family."
        image={img.openOffice}
      />

      {/* Newsroom: white, so it separates clearly from the burgundy hero and gallery. Lilac Luster
          carries the detail: the accent rule, the filter pills and a soft lilac tint on the cards. */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Newsroom" title="What's happening across the group." />

          <Reveal>
            <div className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:-mx-10 md:px-10 xl:mx-0 xl:flex-wrap xl:overflow-visible xl:px-0">
              {[{ key: 'all', t: 'All stories' }, ...categories].map((c) => (
                <button
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition ${
                    filter === c.key ? 'text-white' : 'bg-sand/25 text-forest hover:bg-sand/45'
                  }`}
                >
                  {filter === c.key && (
                    <motion.span layoutId="media-pill" className="absolute inset-0 rounded-full bg-forest" />
                  )}
                  <span className="relative">{c.t}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((c, i) => (
                <SampleCard key={c.key} cat={c} i={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <MediaGallery />
    </>
  )
}

/* ------------------------------------------------------------------------------------------------
   Media gallery: films first, then one chapter for each photo collection. Every item opens in a
   lightbox that steps through its own collection. All photographs are placeholders: replace them
   with approved Sarvaya images and add real film links before launch.
------------------------------------------------------------------------------------------------ */
const collections = [
  {
    key: 'community',
    t: 'Community',
    d: 'Programmes, volunteering and awareness work alongside the communities we serve.',
    items: [
      { s: img.volunteer, t: 'Community volunteering', d: 'Colleagues giving time to local causes.' },
      { s: img.kids, t: 'Programmes for children', d: 'Health, hygiene and education initiatives.' },
      { s: img.focusAwareness, t: 'Awareness workshops', d: 'Information, education and communication on the ground.' },
    ],
  },
  {
    key: 'people',
    t: 'Our people',
    d: 'The teams, leaders and everyday moments that make up the Sarvaya family.',
    items: [
      { s: img.teamLaptops, t: 'Working together', d: 'Teams across the group collaborating on shared goals.' },
      { s: img.highFive, t: 'Team milestones', d: 'Celebrating the moments that move us forward.' },
      { s: img.presenter, t: 'Leadership sessions', d: 'Directors sharing perspectives with teams.' },
    ],
  },
  {
    key: 'field',
    t: 'On the ground',
    d: 'Farms, sites and the field work behind each of our businesses.',
    items: [
      { s: img.focusWaste, t: 'Waste segregation', d: 'Responsible collection, segregation and processing.' },
      { s: img.shetahitAlt, t: 'On the farm', d: 'Field visits and on-ground support for farmers.' },
      { s: img.seedlings, t: 'Plantation and nurseries', d: 'Growing greener villages, one sapling at a time.' },
    ],
  },
]

const films = [
  { s: img.focusRural, t: 'The Foundation in the field', d: 'Working alongside rural communities and local bodies.', film: true },
  { s: img.geoclaimAlt, t: 'Inside a project site', d: 'A closer look at how our projects take shape.', film: true },
  { s: img.windHills, t: 'Clean energy, explained', d: 'How waste can become a source of renewable energy.', film: true },
]

function PlayButton({ big = false }) {
  return (
    <span className="pointer-events-none absolute inset-0 grid place-items-center">
      <span
        className={`relative grid place-items-center rounded-full bg-white/95 text-forest shadow-xl transition duration-500 group-hover:scale-110 ${
          big ? 'h-16 w-16 md:h-20 md:w-20' : 'h-12 w-12 md:h-14 md:w-14'
        }`}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-white/40 [animation-duration:2.4s]" />
        <Play size={big ? 24 : 18} className="relative ml-0.5" fill="currentColor" />
      </span>
    </span>
  )
}

function GalleryTile({ item, onOpen, className = '', big = false, delay = 0 }) {
  return (
    <Reveal delay={delay} className={className}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${item.t}`}
        className="group relative isolate block h-full w-full overflow-hidden rounded-[1.5rem] text-left focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none"
      >
        <img
          src={item.s}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent opacity-75 transition duration-500 group-hover:opacity-100" />
        <span className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-forest opacity-0 transition duration-500 group-hover:opacity-100 md:top-4 md:right-4">
          <Maximize2 size={14} />
        </span>
        {item.film && <PlayButton big={big} />}
        <span className={`absolute inset-x-0 bottom-0 ${big ? 'p-6 md:p-8' : 'p-4 md:p-5'}`}>
          <span className="block h-0.5 w-8 bg-lime transition-all duration-500 group-hover:w-16" />
          <span className={`mt-3 block font-display leading-snug text-white ${big ? 'text-xl sm:text-2xl md:text-3xl' : 'text-base md:text-xl'}`}>
            {item.t}
          </span>
          <span
            className={`mt-1 text-sm text-white/75 ${
              big ? 'block' : 'hidden max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-12 group-hover:opacity-100 md:block'
            }`}
          >
            {item.d}
          </span>
        </span>
      </button>
    </Reveal>
  )
}

/* Chapter heading shared by the films and each photo collection */
function ChapterHead({ n, t, d, onView }) {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-sm tracking-[0.2em] text-lime">{n}</span>
          <h3 className="font-display text-3xl leading-tight font-light text-white md:text-[2.25rem]">{t}</h3>
        </div>
        <p className="mt-3 max-w-xl leading-relaxed text-white/65">{d}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <button
          type="button"
          onClick={onView}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-lime hover:bg-lime hover:text-forest-950"
        >
          View {t === 'Films' ? 'films' : 'collection'}
          <ArrowRight size={15} className="transition group-hover:translate-x-1" />
        </button>
      </Reveal>
    </div>
  )
}

// Three layouts, so each collection has its own rhythm
const layouts = [
  // large left, two stacked right
  ['col-span-2 md:col-span-7 md:row-span-2', 'md:col-span-5', 'md:col-span-5'],
  // three tall portraits
  ['col-span-2 md:col-span-4 md:row-span-2', 'md:col-span-4 md:row-span-2', 'md:col-span-4 md:row-span-2'],
  // two stacked left, large right
  [
    'col-span-2 md:col-span-7 md:col-start-6 md:row-span-2 md:row-start-1',
    'md:col-span-5 md:col-start-1 md:row-start-1',
    'md:col-span-5 md:col-start-1 md:row-start-2',
  ],
]

function Lightbox({ items, index, onClose, onStep }) {
  const item = items[index]
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onStep(1)
      if (e.key === 'ArrowLeft') onStep(-1)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, onStep])

  const film = item.film
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.t}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col bg-forest-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 py-4 text-white md:px-8">
        <span className="text-sm tracking-[0.2em] text-white/60">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <button type="button" onClick={onClose} aria-label="Close" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-forest">
          <X size={18} />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-24" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.figure
            key={item.s}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="relative flex max-h-full w-full max-w-5xl flex-col"
          >
            <div className="relative min-h-0 overflow-hidden rounded-[1.5rem]">
              <img src={item.s} alt={item.t} className="max-h-[62vh] w-full object-cover" />
              {film && (
                <span className="absolute inset-0 grid place-items-center bg-forest-950/35">
                  <span className="flex flex-col items-center gap-3 text-white">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-forest">
                      <Play size={22} className="ml-0.5" fill="currentColor" />
                    </span>
                    <span className="text-sm font-semibold tracking-[0.14em] uppercase">Film coming soon</span>
                  </span>
                </span>
              )}
            </div>
            <figcaption className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-white">
              <span className="font-display text-2xl">{item.t}</span>
              <span className="text-xs font-bold tracking-[0.16em] text-lime uppercase">{film ? 'Film' : 'Photograph'}</span>
              <span className="w-full text-white/65">{item.d}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <button type="button" onClick={() => onStep(-1)} aria-label="Previous" className="absolute top-1/2 left-2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-forest md:left-8 md:grid">
          <ChevronLeft size={20} />
        </button>
        <button type="button" onClick={() => onStep(1)} aria-label="Next" className="absolute top-1/2 right-2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-forest md:right-8 md:grid">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Thumbnail strip (also the way to move between items on phones) */}
      <div className="flex gap-2 overflow-x-auto px-4 py-5 md:justify-center" onClick={(e) => e.stopPropagation()}>
        {items.map((g, k) => (
          <button
            key={g.s}
            type="button"
            onClick={() => onStep(k - index)}
            aria-label={`Show ${g.t}`}
            className={`h-12 w-16 shrink-0 overflow-hidden rounded-lg transition md:h-14 md:w-20 ${k === index ? 'ring-2 ring-lime' : 'opacity-45 hover:opacity-90'}`}
          >
            <img src={g.s} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

function MediaGallery() {
  // open = { items, index } for the collection being viewed in the lightbox
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  const step = useCallback(
    (n) => setOpen((o) => (o === null ? o : { ...o, index: (o.index + n + o.items.length) % o.items.length })),
    [],
  )
  const view = (items, index = 0) => setOpen({ items, index })

  return (
    <>
      {/* Films */}
      <section id="gallery" className="grain relative overflow-hidden bg-forest-950 py-24 md:py-32">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-emerald/20 blur-3xl" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Media gallery"
            title={<>Moments that tell <span className="text-lime italic">our story.</span></>}
            intro="Films and photographs from company activities, events, programmes and approved public engagements."
          />

          <div className="mt-16 border-t border-white/10 pt-12">
            <ChapterHead n="01" t="Films" d="Short films on our work, our people and the places we serve." onView={() => view(films)} />
            <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:gap-5">
              <GalleryTile item={films[0]} big onOpen={() => view(films, 0)} className="aspect-[4/5] sm:aspect-[16/10] lg:col-span-8 lg:aspect-auto lg:h-[34rem]" />
              <div className="grid grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-1 lg:gap-5">
                {films.slice(1).map((f, k) => (
                  <GalleryTile key={f.t} item={f} delay={0.08 * (k + 1)} onOpen={() => view(films, k + 1)} className="h-44 sm:h-56 lg:h-auto" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo collections, each its own chapter */}
      <section className="relative overflow-hidden bg-forest py-24 md:py-32">
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-saffron/10 blur-3xl" />
        <div className="container-x relative space-y-20 md:space-y-28">
          {collections.map((c, ci) => (
            <div key={c.key} className={ci ? 'border-t border-white/10 pt-16 md:pt-20' : ''}>
              <ChapterHead n={String(ci + 2).padStart(2, '0')} t={c.t} d={c.d} onView={() => view(c.items)} />
              <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-12 md:auto-rows-[220px] md:gap-5">
                {c.items.map((item, k) => (
                  <GalleryTile
                    key={item.t}
                    item={item}
                    delay={k * 0.06}
                    onOpen={() => view(c.items, k)}
                    className={layouts[ci % layouts.length][k]}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Media enquiries */}
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-forest-950/40 p-8 md:flex-row md:items-center md:p-10">
              <div>
                <Eyebrow light>For the press</Eyebrow>
                <p className="mt-4 max-w-xl text-white/70">
                  Need approved images, logos or a statement from Sarvaya Holdings? Our corporate office handles all media
                  enquiries.
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-forest transition hover:bg-lime hover:text-forest-950"
              >
                Media enquiries
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <AnimatePresence>
        {open !== null && <Lightbox items={open.items} index={open.index} onClose={close} onStep={step} />}
      </AnimatePresence>
    </>
  )
}
