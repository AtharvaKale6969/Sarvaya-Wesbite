import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Megaphone, Mic, Users, PenLine, Images, Newspaper, FlaskConical, Play, Clock } from 'lucide-react'
import { img } from '../data/images'
import { PageHero, Photo, Reveal, SectionHeading } from '../components/ui'

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

function SampleCard({ cat, i }) {
  const Icon = cat.icon
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: i * 0.04 }}
      className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_-35px_rgba(14,27,44,0.4)]"
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
        <p className="mt-6 inline-flex items-center gap-2 border-t border-forest/10 pt-4 text-sm font-semibold text-forest">
          Stories coming soon
        </p>
      </div>
    </motion.article>
  )
}

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

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Newsroom" title="What's happening across the group." />

          <Reveal>
            <div className="mt-12 flex flex-wrap gap-2">
              {[{ key: 'all', t: 'All stories' }, ...categories].map((c) => (
                <button
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    filter === c.key ? 'text-white' : 'bg-white text-forest hover:bg-forest/5'
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

      {/* Media gallery */}
      <section id="gallery" className="grain relative overflow-hidden bg-forest-950 py-28 md:py-36">
        <div className="container-x relative">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              light
              eyebrow="Media gallery"
              title="Moments that tell our story."
              intro="Photographs and videos from company activities, events, programmes and approved public engagements."
            />
          </div>
          <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
            {[
              { s: img.volunteer, c: 'md:col-span-2 md:row-span-2' },
              { s: img.teamLaptops, c: '' },
              { s: img.shetahitAlt, c: '' },
              { s: img.highFive, c: 'md:col-span-2' },
              { s: img.seedlings, c: '' },
              { s: img.geoclaimAlt, c: 'relative', video: true },
              { s: img.kids, c: 'col-span-2' },
            ].map((g, i) => (
              <Reveal key={i} delay={i * 0.04} className={`${g.c} relative`}>
                <Photo src={g.s} className="h-full rounded-[1.5rem]" />
                {g.video && (
                  <span className="pointer-events-none absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-forest">
                      <Play size={20} className="ml-0.5" />
                    </span>
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
