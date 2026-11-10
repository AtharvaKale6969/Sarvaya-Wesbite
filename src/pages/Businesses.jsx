import { businesses } from '../data/content'
import { img } from '../data/images'
import { Eyebrow, PageHero, Reveal, SectionHeading } from '../components/ui'
import LeafPattern from '../components/LeafPattern'
import SectorChapter from '../components/SectorChapter'
import EnquiryBand from '../components/EnquiryBand'
import { sectorStories } from '../data/sectors'

export default function Businesses() {
  return (
    <>
      <PageHero
        title="Different sectors. Shared standards. Collective progress."
        intro="Sarvaya brings together businesses operating in different sectors. Each has its own area of expertise, operating identity and customer focus."
        image={img.rows}
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="The portfolio"
              title="Four sectors that matter. Four businesses that serve them."
            />
          </div>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pt-12">
            <p className="text-lg leading-relaxed text-muted">
              The group connection is expressed through shared values: trust in relationships, transparency in
              engagement, innovation in approach and a commitment to responsible growth.
            </p>
          </Reveal>
        </div>

        {/* Quick index */}
        <div className="container-x mt-14">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-forest/10 bg-forest/10 sm:grid-cols-2 lg:grid-cols-4">
            {businesses.map((b, i) => (
              <a key={b.slug} href={`#${b.slug}`} className="group bg-cream p-6 transition hover:bg-white">
                <span className="font-display text-sm text-saffron">0{i + 1}</span>
                <p className="mt-3 font-display text-xl text-forest">{b.sector}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: b.accent }} />
                  {b.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        {businesses.map((b, i) => (
          <SectorChapter key={b.slug} b={b} s={sectorStories[b.slug]} index={i} total={businesses.length} />
        ))}
      </div>

      {/* How the group connects */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="grain relative overflow-hidden rounded-[2.5rem] bg-forest-950 p-10 md:p-16">
              <LeafPattern className="absolute -right-10 -bottom-10 h-80 w-80 text-lime/10" />
              <div className="relative grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <Eyebrow light>How the group connects</Eyebrow>
                  <p className="mt-6 font-display text-3xl leading-snug font-light text-white md:text-4xl">
                    Each business retains its own identity and focus, while the Sarvaya umbrella represents a shared
                    commitment.
                  </p>
                </div>
                <div className="relative mx-auto aspect-square w-full max-w-[420px]">
                  <div className="absolute inset-[30%] grid place-items-center rounded-full bg-cream text-center shadow-[0_0_80px_rgba(201,168,106,0.35)]">
                    <img src="/sarvaya-logo.png" alt="Sarvaya" className="h-16 w-auto" />
                  </div>
                  {/* Orbit: the dashed ring and pills rotate together; each pill counter-rotates to stay upright */}
                  <div className="orbit absolute inset-0">
                    <div className="absolute inset-[10%] rounded-full border border-dashed border-white/20" />
                    {['Trust', 'Clear communication', 'Responsible conduct', 'Innovation', 'Progress'].map((w, i, arr) => {
                      const a = (i / arr.length) * Math.PI * 2 - Math.PI / 2
                      return (
                        <span
                          key={w}
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{ left: `${50 + Math.cos(a) * 40}%`, top: `${50 + Math.sin(a) * 40}%` }}
                        >
                          <span className="orbit-reverse block rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white backdrop-blur">
                            {w}
                          </span>
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <EnquiryBand />
    </>
  )
}
