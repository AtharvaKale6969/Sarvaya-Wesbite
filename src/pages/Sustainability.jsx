import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Handshake, HeartHandshake, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { img } from '../data/images'
import { businesses, companyLogos, foundation } from '../data/content'
import { sectorStories } from '../data/sectors'
import { Eyebrow, PageHero, Reveal, SectionHeading } from '../components/ui'

const story = sectorStories.philanthropy

function useDrift(ref, range) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  return useTransform(scrollYProgress, [0, 1], [range, -range])
}

// Rotating seal that marks the Foundation's non-profit status.
function Seal() {
  const text = 'SECTION 8 NON-PROFIT • PLASTROOTS FOUNDATION • '
  return (
    <div className="relative grid h-36 w-36 place-items-center rounded-full bg-forest-950/85 text-lime shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur md:h-40 md:w-40">
      <svg viewBox="0 0 100 100" className="orbit absolute inset-0 h-full w-full">
        <defs>
          <path id="seal-path" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text fill="currentColor" fontSize="7.4" letterSpacing="1.4" fontWeight="600">
          <textPath href="#seal-path">{text}</textPath>
        </text>
      </svg>
      <HeartHandshake size={30} strokeWidth={1.5} />
    </div>
  )
}

/* 1. Introducing the Foundation */
function FoundationIntro() {
  const ref = useRef(null)
  const back = useDrift(ref, 50)
  const front = useDrift(ref, 110)

  return (
    <section id="foundation" ref={ref} className="grain relative scroll-mt-16 overflow-hidden bg-forest text-white">
      <div className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-lime/10 blur-3xl" />

      <div className="container-x relative grid gap-16 py-24 md:py-32 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <Eyebrow light>Our philanthropic arm</Eyebrow>
          <Reveal delay={0.05}>
            <div className="mt-8 flex items-center gap-5 md:gap-7">
              {/* Foundation logo in a white tile with an offset coral frame */}
              <div className="relative shrink-0">
                <span className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border border-lime/60" />
                <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-white p-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] md:h-28 md:w-28 md:p-4">
                  <img src={foundation.logo} alt={`${foundation.name} logo`} className="max-h-full max-w-full object-contain" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.16em] text-white/50 uppercase">Introducing</p>
                <h2 className="mt-2 font-display text-4xl leading-[1.05] font-light md:text-[3.25rem]">{foundation.name}</h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-display text-2xl leading-snug text-lime italic md:text-[1.75rem]">{foundation.tagline}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed text-white/80">{story.about[0]}</p>
            <p className="mt-5 leading-relaxed text-white/65">{story.about[1]}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={foundation.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-semibold whitespace-nowrap text-forest-950 transition hover:brightness-110"
              >
                Visit the Foundation
                <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-sm text-white/50">plastrootsfoundation.org</span>
            </div>
          </Reveal>
        </div>

        {/* Layered photographs moving at different speeds */}
        <div className="relative min-h-[28.75rem] md:min-h-[36.25rem] lg:col-span-6">
          <motion.div
            style={{ y: back }}
            className="absolute top-0 right-0 w-[74%] overflow-hidden rounded-[2.25rem] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
          >
            <img src={img.volunteersBoxes} alt="" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </motion.div>
          <motion.div
            style={{ y: front }}
            className="absolute bottom-0 left-0 w-[50%] overflow-hidden rounded-[1.75rem] border-[6px] border-forest shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
          >
            <img src={img.kids} alt="" loading="lazy" className="aspect-square w-full object-cover" />
          </motion.div>
          <div className="absolute top-[38%] left-[34%] z-10 -translate-x-1/2 -translate-y-1/2 max-sm:hidden">
            <Seal />
          </div>
        </div>
      </div>
    </section>
  )
}

/* 1b. What the Foundation works on: an image-led showcase on the page's deepest teal. Each focus
   area is a photograph with a teal wash, its number, icon, title and line of description. The
   section is a step darker than the introduction above and is opened by a coral rule, so the two
   read as separate chapters. */
function FoundationFocus() {
  const story = sectorStories.philanthropy
  return (
    <section className="grain relative overflow-hidden bg-forest-950 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-forest/60 blur-3xl" />

      <div className="container-x relative py-24 md:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow light>What the Foundation works on</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-[2.5rem] leading-[1.08] font-light">
              Six areas, one goal: <span className="text-lime italic">thriving communities.</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-white/65 lg:col-span-5 lg:justify-self-end">
            From awareness on the ground to livelihoods for women, the Foundation works where people and the environment
            meet, alongside local bodies and rural communities.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {story.focus.map(({ icon: Icon, image, t, d }, i) => (
            <Reveal key={t} delay={(i % 3) * 0.08} className="h-full">
              <article className="group relative isolate flex h-[22rem] flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 shadow-[0_40px_80px_-50px_rgba(0,0,0,0.9)] md:h-[26rem]">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                {/* Teal wash: light at the top so the photo shows, deep at the bottom for the text */}
                <span className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest/10" />
                <span className="absolute inset-0 -z-10 bg-forest/25 mix-blend-multiply transition duration-700 group-hover:opacity-0" />

                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-forest-950/40 text-lime backdrop-blur-md transition duration-500 group-hover:border-lime group-hover:bg-lime group-hover:text-forest-950">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <span className="font-display text-sm tracking-[0.2em] text-white/70">0{i + 1} / 06</span>
                </div>

                <div>
                  <span className="block h-0.5 w-10 bg-lime transition-all duration-700 group-hover:w-24" />
                  <h3 className="mt-5 font-display text-2xl leading-snug">{t}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">{d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 2. Why it matters */
function WhyItMatters() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow="Why it matters" title={story.landscape.lead} />
            {story.landscape.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className={`leading-relaxed text-muted ${i ? 'mt-4' : 'mt-8'}`}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="space-y-5 lg:col-span-7">
          {story.challenge.items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_24px_50px_-35px_rgba(15,59,62,0.5)] md:p-10">
                <span className="absolute top-0 left-0 h-full w-1 bg-saffron transition-all duration-500 group-hover:w-2" />
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-forest text-lime">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.16em] text-emerald uppercase">Challenge 0{i + 1}</p>
                    <p className="mt-2 font-display text-2xl leading-snug text-forest">{t}</p>
                    <p className="mt-3 leading-relaxed text-muted">{d}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 3. How the Foundation works */
function Approach() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.6'] })
  const line = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading className="lg:col-span-7" eyebrow={story.wayForward.label} title="From awareness to action on the ground." />
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted">{story.wayForward.intro}</p>
          </Reveal>
        </div>
        <div className="relative mt-16">
          <div className="absolute top-7 right-0 left-0 hidden h-px bg-forest/10 lg:block">
            <motion.div style={{ scaleX: line }} className="h-full origin-left bg-saffron" />
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {story.wayForward.steps.map((st, i) => (
              <Reveal key={st.t} delay={i * 0.08}>
                <span className="relative grid h-14 w-14 place-items-center rounded-full bg-forest font-display text-xl text-lime ring-8 ring-white">
                  {i + 1}
                </span>
                <p className="mt-7 font-display text-2xl leading-tight text-forest">{st.t}</p>
                <p className="mt-3 leading-relaxed text-muted">{st.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* 4. Quote over a parallax photograph */
function QuoteBand() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  return (
    <section ref={ref} className="relative isolate overflow-hidden py-32 text-white md:py-44">
      <motion.img src={img.lake} alt="" style={{ y }} className="absolute inset-0 -z-20 h-[130%] w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest/75 to-forest/40" />
      <div className="container-x">
        <Reveal>
          <span className="block h-px w-16 bg-lime" />
          <blockquote className="mt-8 max-w-4xl font-display text-3xl leading-snug font-light italic md:text-[2.75rem]">
            {story.pullQuote}
          </blockquote>
          <p className="mt-6 text-sm font-semibold tracking-[0.16em] text-lime uppercase">{foundation.name}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* 5. Responsibility across the group's businesses */
const groupImpact = {
  plastroots: 'Recovers plastic and industrial scrap, returning it to industry as recycled granules and Refuse Derived Fuel instead of sending it to landfill.',
  shetahit: 'Promotes organic farming practices that reduce chemical inputs and help restore soil health for farmers.',
  geoclaim: 'Turns waste into biomass fuel, RDF and biogas, supporting the move to renewable, sustainable energy.',
  flowup: 'Uses fully recyclable bottles and serves a focused local area, keeping distribution distances short.',
}

function AcrossTheGroup() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Responsibility across the group"
          title="Sustainability built into the businesses themselves."
          intro="Beyond the Foundation, each Sarvaya business carries responsibility into its own day-to-day work."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businesses.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.07}>
              <Link
                to={`/businesses#${b.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_50px_-35px_rgba(15,59,62,0.45)] transition duration-500 hover:-translate-y-1.5"
              >
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={sectorStories[b.slug].company}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent" />
                  </div>
                  {/* Company logo on a white card, straddling the photo's lower edge */}
                  <span className="absolute bottom-0 left-6 grid h-20 w-20 translate-y-1/2 place-items-center rounded-2xl border border-forest/10 bg-white p-2.5 shadow-[0_16px_34px_-18px_rgba(0,0,0,0.45)]">
                    <img src={companyLogos[b.slug]} alt={`${b.short} logo`} className="max-h-full max-w-full object-contain" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-6 pt-14 pb-6">
                  <p className="text-[0.68rem] font-bold tracking-[0.14em] text-emerald uppercase">{b.sector}</p>
                  <p className="mt-2 font-display text-xl leading-snug text-forest">{b.name}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{groupImpact[b.slug]}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald">
                    Explore the business <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 6. Get involved */
function GetInvolved() {
  const ways = [
    { icon: Building2, t: 'CSR partnerships', d: 'Work with the Foundation on programmes aligned with your CSR goals.' },
    { icon: Handshake, t: 'Community collaboration', d: 'Schools, local bodies and organisations can partner on initiatives.' },
    { icon: HeartHandshake, t: 'Volunteer and support', d: 'Take part in awareness drives and community activities.' },
  ]
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="grain relative overflow-hidden rounded-[2.5rem] bg-forest-950 p-8 text-white md:p-14">
          <div className="relative grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow light>Get involved</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-tight font-light md:text-[2.5rem]">
                Be part of the <span className="text-lime italic">change on the ground.</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-forest-950 transition hover:brightness-110"
                >
                  Start a conversation <ArrowRight size={16} />
                </Link>
                <a
                  href={foundation.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10"
                >
                  Foundation website <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <div className="grid gap-4 lg:col-span-7">
              {ways.map(({ icon: Icon, t, d }, i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <div className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.08]">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime/15 text-lime">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="font-display text-xl">{t}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">{d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability & Impact"
        title="Progress that considers people and the planet."
        intro="Responsibility, care, community engagement and positive impact: the human side of the Sarvaya group."
        image={img.forest}
      />
      <FoundationIntro />
      <FoundationFocus />
      <WhyItMatters />
      <Approach />
      <QuoteBand />
      <AcrossTheGroup />
      <GetInvolved />
    </>
  )
}
