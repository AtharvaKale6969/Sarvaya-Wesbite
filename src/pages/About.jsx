import { motion } from 'framer-motion'
import { ShieldCheck, Compass, HeartHandshake, Lightbulb, Sprout, Eye, Users, Target, Telescope } from 'lucide-react'
import { img } from '../data/images'
import { Eyebrow, PageHero, Photo, Reveal, SectionHeading } from '../components/ui'
import LeafPattern from '../components/LeafPattern'

const valueList = [
  { icon: ShieldCheck, t: 'Trust', d: 'We aim to build relationships through reliability, consistency and integrity.', c: '#0E1B2C' },
  { icon: Compass, t: 'Leadership', d: 'We believe in taking responsibility, setting direction and enabling others to grow.', c: '#08734A' },
  { icon: HeartHandshake, t: 'Human values', d: 'We respect people and recognise the importance of positive social and environmental outcomes.', c: '#F28A18' },
  { icon: Lightbulb, t: 'Innovation', d: 'We remain open to ideas, new approaches and continuous improvement.', c: '#159FC4' },
  { icon: Sprout, t: 'Growth', d: 'We seek progress that creates opportunities across our businesses and stakeholder relationships.', c: '#8CCB45' },
  { icon: Eye, t: 'Transparency', d: 'We value honest communication, clarity and accountability in the way we work.', c: '#0E1B2C' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A shared vision, built on values."
        intro="The parent organisation bringing together a portfolio of businesses with distinct areas of focus and a shared commitment to responsible progress."
        image={img.towers}
      />

      {/* Who we are */}
      <section className="py-28 md:py-36">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="One parent organisation. Many paths to progress." />
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-muted">
                Sarvaya Holdings Private Limited is the parent organisation bringing together a portfolio of
                businesses with distinct areas of focus and a shared commitment to responsible progress. The name
                Sarvaya reflects an inclusive outlook, one that recognises the importance of people, partnerships and
                the wider impact of business.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                We believe a strong group is built not only through business activity, but through the values that
                guide it. Trust, transparency, leadership, human values, innovation and growth form the foundation of
                the Sarvaya approach.
              </p>
            </Reveal>
          </div>
          <Reveal y={50} className="relative">
            <Photo src={img.meetingTable} className="aspect-[4/5] rounded-[2.5rem]" />
            <div className="absolute -bottom-8 -left-4 max-w-[260px] rounded-3xl bg-white p-6 shadow-[0_30px_60px_-20px_rgba(14,27,44,0.35)] md:-left-10">
              <p className="font-display text-lg leading-snug text-forest">
                “Lasting growth is achieved when businesses and people progress together.”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meaning */}
      <section className="grain relative overflow-hidden bg-sand py-28 md:py-36">
        <LeafPattern className="pointer-events-none absolute -right-20 -bottom-20 h-[500px] w-[500px] text-forest/[0.04]" />
        <div className="container-x relative">
          <SectionHeading center eyebrow="The meaning behind Sarvaya" title="A name that holds everyone." />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-[2rem] bg-white p-10 md:p-12">
              <p className="font-display text-5xl text-emerald">सर्व</p>
              <p className="mt-2 eyebrow text-saffron">Sarva</p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Inspired by the Sanskrit word “Sarva”, meaning all, everyone or universal. It expresses an inclusive
                outlook: creating value across businesses, people, communities and the wider environment.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[2rem] bg-forest p-10 text-white md:p-12">
              <p className="font-display text-5xl text-lime">Holdings</p>
              <p className="mt-2 eyebrow text-white/50">The unifying parent</p>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Represents the role of a unifying parent organisation, bringing distinct businesses together through
                common values and direction, while allowing each company to develop its own identity and expertise.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 md:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Photo src={img.presenter} className="aspect-square rounded-[2.5rem]" />
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <SectionHeading eyebrow="Our philosophy" title="Strength in each business. Connection through purpose." />
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-muted">
                We encourage each business to develop its strengths while remaining connected to a common purpose. We
                value clear communication, responsible decision-making, collaboration and an entrepreneurial mindset.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { i: Users, t: 'Collaboration' },
                { i: Target, t: 'Responsible decisions' },
                { i: Telescope, t: 'Entrepreneurial mindset' },
              ].map(({ i: Icon, t }, k) => (
                <Reveal key={t} delay={0.1 + k * 0.06}>
                  <div className="rounded-2xl border border-forest/10 bg-white p-5">
                    <Icon className="text-emerald" size={22} />
                    <p className="mt-3 font-semibold text-forest">{t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <blockquote className="mt-10 border-l-2 border-saffron pl-6 font-display text-xl leading-relaxed text-forest">
                We see leadership as the ability to take ownership, support people and create an environment where
                ideas can become meaningful action.
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="grain relative overflow-hidden bg-forest-950 py-28 md:py-36">
        <img src={img.forest} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="container-x relative grid gap-6 lg:grid-cols-2">
          {[
            {
              k: 'Our vision',
              t: 'To build a trusted and forward-looking group of businesses that grows through innovation, responsible leadership and shared value creation, contributing positively to people, industries and communities.',
              c: 'text-lime',
            },
            {
              k: 'Our mission',
              t: 'To bring diverse businesses together under a common purpose; encourage transparent and accountable practices; nurture entrepreneurial thinking; and pursue growth while keeping human values at the centre.',
              c: 'text-saffron',
            },
          ].map((b, i) => (
            <Reveal key={b.k} delay={i * 0.1}>
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.05] p-10 backdrop-blur-md md:p-14">
                <p className={`eyebrow ${b.c}`}>{b.k}</p>
                <p className="mt-6 font-display text-2xl leading-snug font-light text-white md:text-3xl">{b.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-28 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our values"
            title="Six principles that guide every decision."
            intro="Each value shapes the way Sarvaya businesses work with customers, partners, employees and communities."
          />
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {valueList.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="group relative h-full overflow-hidden rounded-[2rem] border border-forest/10 bg-white p-8"
                >
                  <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-forest opacity-[0.05] transition-transform duration-700 group-hover:scale-[2.4]" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-forest text-lime">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <p className="relative mt-8 font-display text-2xl text-forest">{t}</p>
                  <p className="relative mt-3 leading-relaxed text-muted">{d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-sand py-28 md:py-36">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Leadership"
                title="Vision, responsibility and the ability to bring people together."
                intro="Leadership at Sarvaya is rooted in vision, responsibility and the ability to bring people together."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { t: 'Take ownership', d: 'Leaders at Sarvaya take responsibility for outcomes and for the people who deliver them.' },
                  { t: 'Set clear direction', d: 'Each business is given a clear purpose, while the group provides a common direction.' },
                  { t: 'Support people', d: 'Good leadership creates an environment where people can contribute and grow in confidence.' },
                  { t: 'Turn ideas into action', d: 'We encourage an entrepreneurial mindset, so that ideas become meaningful, responsible action.' },
                ].map((x, i) => (
                  <Reveal key={x.t} delay={i * 0.06}>
                    <div className="h-full rounded-[1.5rem] border border-ink/10 bg-white p-7">
                      <span className="font-display text-sm text-ink/30">0{i + 1}</span>
                      <p className="mt-4 font-display text-xl text-forest">{x.t}</p>
                      <p className="mt-2 leading-relaxed text-muted">{x.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
