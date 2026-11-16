import { motion } from 'framer-motion'
import { ShieldCheck, Compass, HeartHandshake, Lightbulb, Sprout, Eye, Users, Target, Telescope, Globe2, Network, TrendingUp } from 'lucide-react'
import { img } from '../data/images'
import { Eyebrow, PageHero, Photo, Reveal, SectionHeading } from '../components/ui'
import LeafPattern from '../components/LeafPattern'
import NameReveal from '../components/NameReveal'
import ValuesWheel from '../components/ValuesWheel'
import GroupRole from '../components/GroupRole'
import Leadership from '../components/Leadership'

const valueList = [
  { icon: ShieldCheck, t: 'Trust', d: 'We aim to build relationships through reliability, consistency and integrity.', c: '#141A18' },
  { icon: Compass, t: 'Leadership', d: 'We believe in taking responsibility, setting direction and enabling others to grow.', c: '#08734A' },
  { icon: HeartHandshake, t: 'Human values', d: 'We respect people and recognise the importance of positive social and environmental outcomes.', c: '#F28A18' },
  { icon: Lightbulb, t: 'Innovation', d: 'We remain open to ideas, new approaches and continuous improvement.', c: '#159FC4' },
  { icon: Sprout, t: 'Growth', d: 'We seek progress that creates opportunities across our businesses and stakeholder relationships.', c: '#8CCB45' },
  { icon: Eye, t: 'Transparency', d: 'We value honest communication, clarity and accountability in the way we work.', c: '#141A18' },
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
            <div className="absolute -bottom-8 -left-4 max-w-[16.25rem] rounded-3xl bg-white p-6 shadow-[0_30px_60px_-20px_rgba(10,14,13,0.35)] md:-left-10">
              <p className="font-display text-lg leading-snug text-forest">
                “Lasting growth is achieved when businesses and people progress together.”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meaning */}
      <NameReveal />

      {/* What Sarvaya does */}
      <GroupRole />

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
                <Reveal key={t} delay={0.1 + k * 0.06} className="h-full">
                  <div className="h-full rounded-2xl border border-forest/10 bg-white p-5">
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

      {/* Values */}
      <ValuesWheel />

      {/* Leadership */}
      <Leadership />

    </>
  )
}
