import { ShieldCheck, Compass, HeartHandshake, Users } from 'lucide-react'
import { Button, Reveal } from './ui'

/*
  Closing section of Our Businesses: what the holding company brings to every business it holds.
  Each company runs independently; the group provides common standards and a long-term view.
*/

const strengths = [
  {
    icon: ShieldCheck,
    t: 'Governance',
    d: 'Clear oversight, sound controls and responsible decision making across every company in the group.',
  },
  {
    icon: Compass,
    t: 'Long-term direction',
    d: 'Patient, considered support that helps each business plan carefully and build for the long run.',
  },
  {
    icon: HeartHandshake,
    t: 'Shared values',
    d: 'Trust, integrity and care for people guide how every business works with customers and partners.',
  },
  {
    icon: Users,
    t: 'People and leadership',
    d: 'Developing talent and leaders who can grow with their business and with the group.',
  },
]

export default function GroupStrengths() {
  return (
    <section className="grain relative overflow-hidden bg-forest py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -top-40 right-0 h-[34rem] w-[34rem] rounded-full bg-saffron/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-lime">
                  <span className="h-px w-8 bg-saffron" /> The group behind each business
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-3xl leading-[1.15] font-light md:text-[2.5rem]">
                  One group. <span className="text-lime italic">Shared strengths.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
                  Each company runs independently, with its own team, brand and focus. Sarvaya Holdings Private Limited
                  brings them together under common standards and a shared long-term vision.
                </p>
              </Reveal>
            </div>
          </div>

          <ul className="lg:col-span-7">
            {strengths.map(({ icon: Icon, t, d }, i) => (
              <Reveal as="li" key={t} delay={i * 0.06}>
                <div className="group relative flex gap-5 border-t border-white/10 py-8 md:gap-7 md:py-10">
                  <span className="absolute top-0 left-0 h-px w-0 bg-lime transition-all duration-700 group-hover:w-full" />
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-lime transition duration-500 group-hover:border-lime group-hover:bg-lime group-hover:text-forest-950">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="font-display text-xl md:text-2xl">{t}</p>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/60 md:text-base">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Slim closing line */}
        <Reveal>
          <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
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
