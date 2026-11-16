import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { businesses } from '../data/content'
import { Button, Reveal } from './ui'

/*
  Closing section of Our Businesses: how the businesses connect. One chain runs from a drinks bottle to
  the field: packaging is recovered, non-recyclable waste becomes fuel, and biogas residue returns to the
  soil. A gold point travels the rail to show the flow.
*/

const order = ['flowup', 'plastroots', 'geoclaim', 'shetahit']
const chain = order.map((s) => businesses.find((b) => b.slug === s))

const links = [
  {
    t: 'Packaging is recovered',
    d: 'Bottles and packaging from Flowup Drinks fall under extended producer responsibility, which Plastroots helps manage through collection and recycling.',
  },
  {
    t: 'Waste becomes fuel',
    d: 'Material that cannot be recycled is processed into refuse derived fuel and biomass, the feedstock for Geoclaim Energy’s clean fuels and power.',
  },
  {
    t: 'Energy returns to the soil',
    d: 'Biogas plants leave behind nutrient rich organic slurry, the kind of input that supports the organic farming Shetahit works to promote.',
  },
]

function Station({ b, i }) {
  return (
    <div className="text-center">
      <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-forest-950">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: b.palette.light }} />
        <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-saffron text-[0.62rem] font-bold text-forest-950">
          {i + 1}
        </span>
      </span>
      <p className="mt-5 text-[0.68rem] font-bold tracking-[0.16em] text-white/45 uppercase">{b.sector}</p>
      <p className="mt-1.5 font-display text-lg leading-snug">{b.short}</p>
    </div>
  )
}

export default function GroupChain() {
  return (
    <section className="grain relative overflow-hidden bg-forest py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -top-40 right-0 h-[34rem] w-[34rem] rounded-full bg-saffron/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-lime">
                <span className="h-px w-8 bg-saffron" /> Stronger together
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-3xl leading-[1.15] font-light md:text-[2.5rem]">
                Where our businesses <span className="text-lime italic">meet.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6 lg:self-end">
            <p className="text-lg leading-relaxed text-white/70">
              Each company runs independently, yet their work connects. What one business leaves behind, another can
              put to use, forming one chain from the bottle to the field.
            </p>
          </Reveal>
        </div>

        {/* Desktop rail */}
        <Reveal y={30} className="hidden lg:block">
          <div className="relative mt-20">
            <span className="absolute top-7 right-[12.5%] left-[12.5%] h-px bg-white/15" />
            <motion.span
              className="absolute top-7 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron shadow-[0_0_14px_4px_rgba(201,162,77,0.45)]"
              animate={{ left: ['12.5%', '87.5%'], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', times: [0, 0.08, 0.92, 1] }}
            />
            <div className="relative grid grid-cols-4">
              {chain.map((b, i) => (
                <Station key={b.slug} b={b} i={i} />
              ))}
            </div>
          </div>
          <div className="mt-14 grid grid-cols-8 gap-6">
            {links.map((l, i) => (
              <div
                key={l.t}
                className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                style={{ gridColumnStart: 2 + i * 2 }}
              >
                <p className="text-[0.68rem] font-bold tracking-[0.16em] text-lime uppercase">0{i + 1}</p>
                <p className="mt-2 font-display text-lg">{l.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{l.d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Phone and tablet: vertical chain */}
        <ol className="mt-14 lg:hidden">
          {chain.map((b, i) => (
            <li key={b.slug}>
              <Reveal>
                <Station b={b} i={i} />
              </Reveal>
              {links[i] && (
                <Reveal>
                  <div className="my-6 flex flex-col items-center text-center">
                    <ArrowDown size={18} className="text-saffron" />
                    <div className="mt-4 max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <p className="font-display text-lg">{links[i].t}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">{links[i].d}</p>
                    </div>
                    <ArrowDown size={18} className="mt-4 text-saffron" />
                  </div>
                </Reveal>
              )}
            </li>
          ))}
        </ol>

        {/* Slim closing line */}
        <Reveal>
          <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
            <p className="font-display text-xl leading-snug md:text-2xl">
              Want to work with one of our businesses? <span className="text-lime italic">We will route you to the right team.</span>
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button to="/contact" variant="accent">
                Make an enquiry
              </Button>
              <Button to="/careers" variant="ghost">
                Explore careers
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
