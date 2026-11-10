import { Sparkles, GraduationCap, Handshake, TrendingUp, Search, Inbox, MapPin, Briefcase } from 'lucide-react'
import { img } from '../data/images'
import { businesses } from '../data/content'
import { PageHero, Photo, Reveal, SectionHeading } from '../components/ui'

// Add active vacancies here. Each one needs: company, role, location, type, responsibilities, skills, apply.
const openings = []

const traits = [
  { icon: Sparkles, t: 'Initiative', d: 'Take ownership and move ideas into action.' },
  { icon: Handshake, t: 'Collaboration', d: 'Work across teams and businesses with trust.' },
  { icon: GraduationCap, t: 'Continuous learning', d: 'Grow your skills through meaningful work.' },
  { icon: TrendingUp, t: 'Responsibility', d: 'Contribute to progress that matters.' },
]

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Find your place in the Sarvaya journey."
        intro="We welcome individuals who are eager to learn, contribute, take responsibility and grow through meaningful work."
        image={img.teamLaptops}
      />

      <section className="py-28 md:py-36">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Opportunities to grow"
              title="Many businesses. Many ways to contribute."
              intro="Our businesses work across waste management, agriculture, renewable energy and biomass, and beverages. Explore current openings across Sarvaya Holdings and its associated businesses."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {traits.map(({ icon: Icon, t, d }, i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-forest/10 bg-white p-5">
                    <Icon size={22} className="text-saffron" />
                    <p className="mt-3 font-semibold text-forest">{t}</p>
                    <p className="mt-1 text-sm text-muted">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal y={50}>
            <div className="grid grid-cols-5 gap-4">
              <Photo src={img.teamSmiling} className="col-span-3 aspect-[3/4] rounded-[2rem]" />
              <div className="col-span-2 flex flex-col gap-4">
                <Photo src={img.highFive} className="aspect-square rounded-[1.5rem]" />
                <Photo src={img.lab} className="aspect-square rounded-[1.5rem]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="bg-sand py-28 md:py-36">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Current openings" title="Open positions" />
            <div className="flex flex-wrap gap-2">
              {['All companies', ...businesses.map((b) => b.name)].map((c, i) => (
                <span
                  key={c}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${i === 0 ? 'bg-forest text-white' : 'bg-white text-forest/70'}`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {openings.length === 0 ? (
            <Reveal>
              <div className="mt-12 flex flex-col items-center rounded-[2.5rem] border-2 border-dashed border-forest/15 bg-white/70 px-8 py-20 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-forest/5 text-emerald">
                  <Search size={28} />
                </span>
                <p className="mt-6 font-display text-3xl text-forest">There are currently no open positions.</p>
                <p className="mt-3 max-w-md text-muted">Please check this page for future opportunities.</p>
              </div>
            </Reveal>
          ) : (
            <div className="mt-12 space-y-4">
              {openings.map((o) => (
                <div key={o.role} className="rounded-3xl bg-white p-7">
                  <p className="text-xs font-bold tracking-[0.14em] text-emerald uppercase">{o.company}</p>
                  <p className="mt-2 font-display text-2xl text-forest">{o.role}</p>
                  <p className="mt-2 flex gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {o.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {o.type}</span>
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] bg-white p-8">
                <p className="eyebrow text-emerald">Every vacancy will include</p>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-forest">
                  {['Hiring company', 'Role', 'Location', 'Key responsibilities', 'Required skills', 'Employment type', 'Application process'].map((x) => (
                    <li key={x} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-saffron" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-[2rem] bg-forest p-8 text-white">
                <p className="eyebrow text-lime">How to apply</p>
                <p className="mt-4 font-display text-2xl leading-snug">Apply through the route listed with each vacancy.</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Every opening names the hiring company and its official application channel. We only accept applications
                  through these monitored routes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </>
  )
}
