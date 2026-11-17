import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles, GraduationCap, Handshake, TrendingUp, Search, MapPin, Briefcase, ArrowUpRight, Compass, FileText, MessagesSquare, ListChecks, BadgeCheck, ShieldCheck,
} from 'lucide-react'
import { img } from '../data/images'
import { businesses, companyLogos } from '../data/content'
import { Eyebrow, PageHero, Photo, Reveal, SectionHeading } from '../components/ui'

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
              intro="Our businesses work across waste management, agriculture, waste to energy and machinery, and packaged foods and beverages. Explore current openings across Sarvaya Holdings and its associated businesses."
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

      <Culture />
      <Showcase />
      <CareerPaths />
      <GrowthPath />

      {/* Openings */}
      <section id="openings" className="bg-sand py-28 md:py-36">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Current openings" title="Open positions" />
            <div className="grid gap-2 sm:grid-cols-2 sm:[&>*:first-child]:col-span-2 md:flex md:flex-wrap md:justify-end">
              {['All companies', ...businesses.map((b) => b.name)].map((c, i) => (
                <span
                  key={c}
                  className={`rounded-full px-4 py-2 text-center text-sm font-semibold ${i === 0 ? 'bg-forest text-white' : 'bg-white text-forest/70'}`}
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
                <ul className="mt-5 grid gap-x-4 gap-y-3 text-sm text-forest sm:grid-cols-2 sm:[&>li:last-child]:col-span-2">
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

          <HiringSteps />
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------------------------------------
   Workplace culture: four pillars, each a photograph that opens up on hover.
   Photographs are placeholders: replace them with approved images of Sarvaya teams before launch.
------------------------------------------------------------------------------------------------ */
const pillars = [
  { t: 'Ownership from day one', d: 'Take responsibility early, with the support you need to see your ideas through.', image: img.meetingTable },
  { t: 'Learning by doing', d: 'Grow through real work, guidance from experienced colleagues and new challenges.', image: img.lab },
  { t: 'One group, many teams', d: 'Work alongside people from different businesses, sectors and disciplines.', image: img.highFive },
  { t: 'Work with purpose', d: 'Contribute to businesses that create value for people, communities and the environment.', image: img.farmerPlanting },
]

function Culture() {
  return (
    <section className="grain relative overflow-hidden bg-forest py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-lime/10 blur-3xl" />
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow light>Life at Sarvaya</Eyebrow>
            <h2 className="mt-5 font-display text-[2.5rem] leading-[1.08] font-light">
              A workplace built on <span className="text-lime italic">ownership and purpose.</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-white/70 lg:col-span-5 lg:justify-self-end">
            Across every Sarvaya business, the same culture holds: people are trusted, ideas are heard and good work is
            done for the right reasons.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08} className="h-full">
              <article className="group relative isolate flex h-[24rem] flex-col justify-end overflow-hidden rounded-[1.75rem] p-7 md:h-[28rem]">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/5" />
                <span className="absolute top-6 left-7 font-display text-sm tracking-[0.2em] text-white/75">0{i + 1}</span>
                <span className="block h-0.5 w-10 bg-lime transition-all duration-700 group-hover:w-24" />
                <h3 className="mt-5 font-display text-2xl leading-snug">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{p.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------------------------------
   Showcase: a slow, continuous strip of everyday moments. Pauses on hover.
------------------------------------------------------------------------------------------------ */
const moments = [
  { s: img.teamSmiling, t: 'Team moments' },
  { s: img.presenter, t: 'Leadership sessions' },
  { s: img.focusAwareness, t: 'Workshops and learning' },
  { s: img.volunteer, t: 'Giving back' },
  { s: img.shetahitAlt, t: 'Out in the field' },
  { s: img.highFive, t: 'Celebrating milestones' },
  { s: img.meetingTable, t: 'Ideas at the table' },
  { s: img.focusWaste, t: 'On site' },
]

function Showcase() {
  return (
    <section className="overflow-hidden bg-white py-24 md:py-28">
      <div className="container-x flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading eyebrow="Inside the Sarvaya family" title={<>Every day, <span className="text-emerald italic">something to be proud of.</span></>} />
        <Reveal>
          <p className="max-w-sm leading-relaxed text-muted">
            Learning sessions, field visits, celebrations and community work: a glimpse of life across the group.
          </p>
        </Reveal>
      </div>

      <div className="group/strip relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-32" />
        <div className="animate-marquee flex w-max gap-5 [animation-duration:60s] group-hover/strip:[animation-play-state:paused]">
          {[...moments, ...moments].map((m, i) => (
            <figure
              key={i}
              aria-hidden={i >= moments.length}
              className={`group relative shrink-0 overflow-hidden rounded-[1.5rem] ${
                i % 2 ? 'h-64 w-52 md:h-80 md:w-64' : 'h-64 w-80 md:h-80 md:w-[26rem]'
              }`}
            >
              <img src={m.s} alt="" loading="lazy" className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/80 to-transparent p-5 pt-12 font-display text-lg text-white">
                {m.t}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------------------------------
   Career paths: the four businesses and the kinds of work each one involves.
------------------------------------------------------------------------------------------------ */
const areas = {
  plastroots: ['Operations', 'EPR compliance', 'Recycling', 'Business development'],
  shetahit: ['Agri supply', 'Farm consulting', 'Field operations', 'Sales'],
  geoclaim: ['Project engineering', 'Plant & machinery', 'Energy', 'Operations'],
  flowup: ['Production', 'Quality', 'Distribution', 'Marketing'],
}

function CareerPaths() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Where you could work"
          title={<>Four businesses. <span className="text-emerald italic">Many paths.</span></>}
          intro="Each Sarvaya business has its own work, teams and expertise. These are some of the areas where people contribute."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {businesses.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 2) * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-[2rem] border border-forest/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(46,35,71,0.5)] md:p-9">
                <div className="flex items-start gap-5">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-forest/10 bg-white p-2.5 md:h-20 md:w-20">
                    <img src={companyLogos[b.slug]} alt={`${b.short} logo`} className="max-h-full max-w-full object-contain" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-[0.14em] text-emerald uppercase">{b.sector}</p>
                    <h3 className="mt-2 font-display text-xl leading-snug text-forest md:text-2xl">{b.name}</h3>
                  </div>
                </div>
                <div className="mt-7 grid grid-cols-2 gap-2">
                  {areas[b.slug].map((a) => (
                    <span key={a} className="rounded-full bg-sand/60 px-3 py-2 text-center text-sm font-medium text-forest">
                      {a}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/businesses#${b.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-forest transition group-hover:text-emerald"
                >
                  Explore the business
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------------------------------
   Growth path: how a career can develop within the group.
------------------------------------------------------------------------------------------------ */
const stages = [
  { icon: Compass, t: 'Start with purpose', d: 'Get to know the group, its values and the business you join.' },
  { icon: GraduationCap, t: 'Learn on the job', d: 'Build skills through real responsibilities and guidance from colleagues.' },
  { icon: Sparkles, t: 'Take ownership', d: 'Lead pieces of work, bring ideas forward and see them through.' },
  { icon: TrendingUp, t: 'Grow with the group', d: 'As the group grows, so do the opportunities to take on more.' },
]

function GrowthPath() {
  const [active, setActive] = useState(0)
  return (
    <section className="grain relative overflow-hidden bg-forest-950 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-emerald/25 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading light eyebrow="Grow with us" title={<>A career that <span className="text-lime italic">grows with you.</span></>} />

        <div className="relative mt-16">
          {/* Connecting rail (desktop) */}
          <div className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-white/15 lg:block">
            <div
              className="h-full bg-lime transition-all duration-700"
              style={{ width: `${(active / (stages.length - 1)) * 100}%` }}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {stages.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.08} className="h-full">
                <div
                  onMouseEnter={() => setActive(i)}
                  className="group relative h-full rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:border-lime/40 hover:bg-white/[0.06] lg:border-0 lg:bg-transparent lg:p-0 lg:text-center lg:hover:bg-transparent"
                >
                  <span
                    className={`relative z-10 grid h-14 w-14 place-items-center rounded-full border transition duration-500 lg:mx-auto ${
                      i <= active ? 'border-lime bg-lime text-forest-950' : 'border-white/25 bg-forest-950 text-lime'
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <p className="mt-6 text-xs font-bold tracking-[0.18em] text-white/50 uppercase">Stage 0{i + 1}</p>
                  <h3 className="mt-2 font-display text-2xl">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65 lg:mx-auto lg:max-w-[16rem]">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------------------------------
   Hiring steps: what to expect after applying.
------------------------------------------------------------------------------------------------ */
const steps = [
  { icon: FileText, t: 'Apply', d: 'Find a role that fits you and apply through the official route listed with the vacancy.' },
  { icon: ListChecks, t: 'Review', d: 'Our team reads every application and shortlists the profiles that match the role.' },
  { icon: MessagesSquare, t: 'Interviews', d: 'Meet HR and the hiring team, with an assessment where the role needs one.' },
  { icon: BadgeCheck, t: 'Offer and onboarding', d: 'Receive your offer, complete document checks and join the Sarvaya family.' },
]

function HiringSteps() {
  return (
    <div className="mt-20">
      <Reveal>
        <p className="eyebrow text-emerald">How hiring works</p>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, t, d }, i) => (
          <Reveal key={t} delay={i * 0.06} className="h-full">
            <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-white p-7">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-forest text-lime">
                <Icon size={20} strokeWidth={1.7} />
              </span>
              <p className="mt-6 font-display text-xl text-forest">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <div className="mt-6 flex items-start gap-4 rounded-[1.5rem] border border-forest/15 bg-white/60 p-5 md:items-center md:p-6">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-lime">
            <ShieldCheck size={18} strokeWidth={1.7} />
          </span>
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-semibold text-forest">A note on recruitment fraud. </span>
            Sarvaya Holdings Private Limited never asks for money at any stage of hiring. Offers come only from official
            company email addresses.
          </p>
        </div>
      </Reveal>
    </div>
  )
}
