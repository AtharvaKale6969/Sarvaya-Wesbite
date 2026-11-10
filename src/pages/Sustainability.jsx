import { Recycle, Leaf, Droplets, Factory, Users, Megaphone, Tractor, Handshake } from 'lucide-react'
import { img } from '../data/images'
import { Eyebrow, PageHero, Photo, Reveal, SectionHeading } from '../components/ui'
import LeafPattern from '../components/LeafPattern'

const themes = [
  { icon: Leaf, t: 'Environmental responsibility', c: '#08734A' },
  { icon: Recycle, t: 'Recycling', c: '#8CCB45' },
  { icon: Droplets, t: 'Resource conservation', c: '#159FC4' },
  { icon: Factory, t: 'Sustainable business practices', c: '#F28A18' },
]

const foundationAreas = [
  { icon: Users, t: 'Community development' },
  { icon: Megaphone, t: 'Environmental awareness programmes' },
  { icon: Tractor, t: 'Rural engagement' },
  { icon: Handshake, t: 'CSR partnerships' },
]

export default function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability & Impact"
        title="Progress that considers people and the planet."
        intro="Responsibility, care, community engagement and positive impact: the human side of the Sarvaya group."
        image={img.forest}
      />

      {/* Approach */}
      <section className="py-28 md:py-36">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal y={50}>
            <div className="relative">
              <Photo src={img.handsPlant} className="aspect-[5/6] rounded-[2.5rem]" />
              <Photo
                src={img.soil}
                className="absolute -right-4 -bottom-10 hidden aspect-square w-48 rounded-[1.75rem] border-8 border-cream md:block lg:-right-10"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Our approach to responsibility" title="Growth is meaningful when it considers more than business outcomes." />
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-muted">
                At Sarvaya, we believe responsible progress includes respect for people, care for the environment and
                awareness of the communities connected to our work. Through our business activities and associated
                initiatives, we aim to support practical action and positive change.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-sand py-28 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="Sustainability initiatives"
            title="Practical action across the group."
            intro="The group's sustainability-related work includes environmental responsibility, recycling, resource conservation and sustainable business practices. Each activity is attributed to the company or organisation responsible for it."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map(({ icon: Icon, t, c }, i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="h-full rounded-[1.75rem] bg-white p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl text-white" style={{ background: c }}>
                    <Icon size={22} />
                  </span>
                  <p className="mt-6 font-display text-xl leading-snug text-forest">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[img.solar, img.oceanPlastic, img.lake].map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <Photo src={src} className="aspect-[4/3] rounded-[1.75rem]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plastroots Foundation */}
      <section id="foundation" className="grain relative overflow-hidden bg-forest py-28 md:py-36">
        <LeafPattern className="pointer-events-none absolute -left-24 -bottom-24 h-[520px] w-[520px] text-white/[0.04]" />
        <div className="container-x relative grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow light>Philanthropy & social development</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] font-light text-white md:text-5xl">
                Plastroots Foundation
              </h2>
              <span className="mt-5 inline-block rounded-full border border-lime/40 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-lime uppercase">
                Independently registered Section 8 non-profit
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-white/75">
                Plastroots Foundation is an independently registered Section 8 non-profit organisation associated with
                the group's philanthropic and social-development initiatives. It maintains its own organisational
                identity and carries out community-focused work.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                Its work reflects the importance of human values, participation and shared responsibility.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {foundationAreas.map(({ icon: Icon, t }, i) => (
                <Reveal key={t} delay={0.1 + i * 0.05}>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white">
                    <Icon size={20} className="shrink-0 text-lime" />
                    <span className="text-sm font-semibold">{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <Reveal y={50}>
              <div className="grid grid-cols-2 gap-4">
                <Photo src={img.volunteer} className="aspect-[3/4] rounded-[1.75rem]" />
                <Photo src={img.volunteersBoxes} className="mt-12 aspect-[3/4] rounded-[1.75rem]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* People & communities */}
      <section className="py-28 md:py-36">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="People and communities"
              title="Positive impact begins with people."
              intro="Community participation, awareness programmes, learning activities and partnerships that support social and environmental responsibility."
            />
            <Reveal>
              <Photo src={img.kids} className="aspect-[16/11] rounded-[2.5rem]" />
            </Reveal>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { t: 'Community participation', d: 'Involving local communities in initiatives that affect their surroundings and well-being.' },
              { t: 'Awareness programmes', d: 'Encouraging responsible habits around waste, resources and the environment.' },
              { t: 'Learning & partnerships', d: 'Working with partners on activities that build knowledge and shared responsibility.' },
            ].map(({ t, d }, i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="h-full rounded-[1.5rem] border border-ink/10 bg-white p-7">
                  <span className="font-display text-sm text-ink/30">0{i + 1}</span>
                  <p className="mt-4 font-display text-xl text-forest">{t}</p>
                  <p className="mt-2 leading-relaxed text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
