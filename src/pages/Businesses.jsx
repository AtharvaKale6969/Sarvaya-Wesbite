import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ArrowRight, ArrowDown } from 'lucide-react'
import { businesses, companyLogos } from '../data/content'
import { sectorStories } from '../data/sectors'
import { img } from '../data/images'
import { Eyebrow, PageHero, Reveal } from '../components/ui'
import GroupStrengths from '../components/GroupStrengths'

/*
  Our Businesses, in the manner of the large Indian group sites (Tata, Aditya Birla, Mahindra, Adani):
  a calm overview with key facts, a photographic mosaic of the portfolio, then an editorial profile
  of each company. One palette for the whole page; each company keeps only a small signature mark.
*/

const domain = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

// Each company's own muted palette, applied by overriding the theme variables on its tile and profile,
// so the shared classes (bg-forest, text-emerald, text-lime, bg-cream ...) take on that company's colours.
const companyVars = ({ palette: p }) => ({
  '--color-forest': p.deep,
  '--color-forest-900': p.f900,
  '--color-forest-950': p.f900,
  '--color-emerald': p.ink,
  '--color-lime': p.light,
  '--color-saffron': p.dot,
  '--color-cream': p.tint,
  '--color-sand': p.sand,
})

const goTo = (slug) => (e) => {
  e.preventDefault()
  window.history.replaceState(null, '', `#${slug}`)
  document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* Overview: a short statement and the portfolio at a glance */
function Overview() {
  const facts = [
    { n: '04', l: 'Operating companies' },
    { n: '04', l: 'Sectors served' },
    { n: '01', l: 'Philanthropic foundation' },
  ]
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>The portfolio</Eyebrow>
          <Reveal delay={0.05}>
            <p className="mt-6 font-display text-2xl leading-[1.35] text-forest md:text-[2rem]">
              Sarvaya Holdings brings together businesses in waste management, agriculture, waste to energy and
              packaged foods and beverages. <span className="text-emerald italic">Each operates independently,</span>{' '}
              guided by the standards, values and direction of one parent organisation.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <dl className="divide-y divide-forest/10 border-y border-forest/10">
            {facts.map((f, i) => (
              <Reveal key={f.l} delay={0.08 + i * 0.06}>
                <div className="flex items-baseline justify-between gap-6 py-6">
                  <dd className="font-display text-5xl leading-none font-light text-forest">{f.n}</dd>
                  <dt className="text-right text-sm font-semibold tracking-[0.08em] text-muted uppercase">{f.l}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

/* Mosaic: four large photographs, staggered, each revealing its purpose on hover */
function Mosaic() {
  const spans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7']
  return (
    <section className="bg-forest-950 py-24 text-white md:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow light>Our businesses</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-tight font-light md:text-[2.5rem]">
              Four sectors. <span className="text-lime italic">Four businesses.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            Select a business to read its profile, or visit its own website.
          </p>
        </div>

        <div className="mt-12 grid gap-2 lg:grid-cols-12">
          {businesses.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 2) * 0.08} className={spans[i]}>
              <a
                href={`#${b.slug}`}
                onClick={goTo(b.slug)}
                style={companyVars(b)}
                className="group relative block h-[23.75rem] overflow-hidden md:h-[28.75rem]"
              >
                <img
                  src={sectorStories[b.slug].company}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.06]"
                />
                {/* Shaded in the company's own deep colour */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-black/5 transition duration-700 group-hover:via-forest/65" />
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-lime transition duration-700 group-hover:scale-x-100" />

                <span className="absolute top-6 left-6 font-display text-sm text-white/70">0{i + 1}</span>
                <span className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition duration-500 group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-forest-950">
                  <ArrowUpRight size={18} />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-xs font-bold tracking-[0.16em] text-lime uppercase">{b.sector}</p>
                  <p className="mt-3 max-w-lg font-display text-[1.35rem] leading-snug text-balance md:text-[1.65rem]">{b.name}</p>
                  {/* Purpose line slides open on hover */}
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-out group-hover:grid-rows-[1fr] max-lg:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="max-w-md pt-3 text-sm leading-relaxed text-white/75">{b.tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                        Read the profile <ArrowDown size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/*
  The company's logo on a square white card, the same size for every company, anchored to the top
  inner corner of its photograph like a seal. A thin frame and an offset outline in the company's accent
  finish it. Logos live in public/logos, trimmed to the artwork. If a file is missing, the card is left out.
*/
const logos = companyLogos

function LogoBadge({ b, flip }) {
  const [failed, setFailed] = useState(false)
  if (!logos[b.slug] || failed) return null
  // Top corner of the photo, on the side facing the text: top right when the photo is on the left,
  // top left when the photo is on the right. Phones stack the photo above the text, so top right.
  const side = flip ? 'right-5 md:right-8 lg:right-auto lg:left-8' : 'right-5 md:right-8'
  return (
    <div className={`absolute top-0 z-10 -translate-y-1/2 ${side}`}>
      <span className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border border-saffron/70" />
      <div className="relative grid h-28 w-28 place-items-center rounded-2xl border border-forest/10 bg-white p-4 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.45)] md:h-36 md:w-36 md:p-5">
        <img
          src={logos[b.slug]}
          alt={`${b.short} logo`}
          onError={() => setFailed(true)}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  )
}

/* Profile: an editorial spread for one company */
function Profile({ b, i }) {
  const s = sectorStories[b.slug]
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const flip = i % 2 === 1

  return (
    <article id={b.slug} ref={ref} style={companyVars(b)} className="relative scroll-mt-20 overflow-hidden bg-cream py-20 md:py-28">
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal y={40} className={`relative mt-10 lg:col-span-6 lg:mt-0 ${flip ? 'lg:order-2 lg:col-start-7' : ''}`}>
          <div className="relative aspect-[5/4] overflow-hidden">
            <motion.img
              src={s.company}
              alt=""
              loading="lazy"
              style={{ y }}
              className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
            />
            <span className="absolute bottom-0 left-0 bg-forest px-5 py-3 font-display text-sm text-white">
              0{i + 1} <span className="text-lime">/ 0{businesses.length}</span>
            </span>
          </div>
          <LogoBadge b={b} flip={flip} />
        </Reveal>

        <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-emerald uppercase">
              <span className="h-2 w-2 rounded-full bg-saffron" />
              {b.sector}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="mt-5 font-display text-3xl leading-[1.12] text-forest text-balance md:text-[2.3rem]">{b.name}</h3>
            <p className="mt-3 font-display text-xl text-emerald italic">{b.tagline}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-muted">{s.about[1] || s.about[0]}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-9 text-xs font-bold tracking-[0.16em] text-forest/50 uppercase">Areas of focus</p>
            <ul className="mt-3 grid border-t border-forest/10 sm:grid-cols-2 sm:gap-x-8">
              {s.focus.map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-center gap-3 border-b border-forest/10 py-3.5 text-sm font-semibold text-forest">
                  <Icon size={17} strokeWidth={1.7} className="shrink-0 text-saffron" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={b.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-white transition hover:bg-forest-900"
              >
                Visit {domain(b.url)}
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                to={`/contact?company=${b.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-forest"
              >
                Make an enquiry
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  )
}

function Profiles() {
  return (
    <section className="bg-white">
      <div className="container-x pt-24 pb-14 md:pt-28">
        <div className="max-w-2xl">
          <Eyebrow>Company profiles</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-tight text-forest md:text-[2.5rem]">
            What each business <span className="text-emerald italic">does and offers.</span>
          </h2>
        </div>
      </div>
      {/* Each profile is a full-width band in its company's own colours */}
      {businesses.map((b, i) => (
        <Profile key={b.slug} b={b} i={i} />
      ))}
    </section>
  )
}

export default function Businesses() {
  return (
    <>
      <PageHero
        eyebrow="Our Businesses"
        title="Different sectors. Shared standards. Collective progress."
        intro="Four independent businesses, one parent organisation and a shared commitment to responsible growth."
        image={img.rows}
      />
      <Overview />
      <Mosaic />
      <Profiles />
      <GroupStrengths />
    </>
  )
}
