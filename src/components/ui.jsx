import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react'
import LeafPattern from './LeafPattern'

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </M>
  )
}

// Small rounded label used as a premium section tag.
export function Pill({ children, tone = 'light', className = '' }) {
  const tones = {
    light: 'border-emerald/20 bg-emerald/[0.07] text-emerald',
    dark: 'border-white/15 bg-white/[0.07] text-lime',
  }
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.18em] uppercase ${tones[tone]} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${tone === 'dark' ? 'bg-lime' : 'bg-emerald'}`} />
      {children}
    </span>
  )
}

// Section that slides up over the previous one with a small parallax as it enters.
export function Layer({ children, className = '', as = 'section', id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.35'] })
  const y = useTransform(scrollYProgress, [0, 1], [70, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.985, 1])
  const M = motion[as]
  return (
    <M
      ref={ref}
      id={id}
      style={{ y, scale }}
      className={`relative -mt-10 rounded-t-[2.5rem] shadow-[0_-30px_60px_-30px_rgba(0,0,0,0.35)] md:-mt-14 md:rounded-t-[3rem] ${className}`}
    >
      {children}
    </M>
  )
}

export function Eyebrow({ children, light = false, className = '' }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${light ? 'text-lime' : 'text-emerald'} ${className}`}>
      <span className={`h-px w-8 ${light ? 'bg-lime' : 'bg-saffron'}`} />
      {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, intro, light = false, center = false, className = '' }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow light={light} className={center ? 'justify-center' : ''}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-5 font-display text-3xl leading-[1.08] font-normal text-balance md:text-[2.5rem] ${
            light ? 'text-white' : 'text-forest'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className={`mt-6 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-muted'}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  )
}

export function Button({ to, href, children, variant = 'primary', className = '' }) {
  const styles = {
    primary: 'bg-forest text-white hover:bg-emerald shadow-[0_10px_30px_-12px_rgba(14,27,44,0.6)]',
    light: 'bg-white text-forest hover:bg-lime',
    ghost: 'border border-white/40 text-white hover:bg-white hover:text-forest',
    outline: 'border border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-white',
    accent: 'bg-saffron text-forest-950 hover:bg-lime',
  }
  const cls = `group inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${styles[variant]} ${className}`
  const Icon = href ? ArrowUpRight : ArrowRight
  const inner = (
    <>
      {children}
      <Icon size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </>
  )
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    )
  return (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  )
}

export function PageHero({ eyebrow, title, intro, image, children }) {
  return (
    <section className="grain relative isolate flex min-h-[78vh] items-end overflow-hidden bg-forest-950 pt-32 pb-16 md:pb-24">
      <img
        src={image}
        alt=""
        className="animate-slowzoom absolute inset-0 -z-20 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/80 to-transparent" />
      <LeafPattern className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-[460px] w-[460px] text-lime/[0.06]" />
      <div className="container-x w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="max-w-4xl"
        >
          {eyebrow && (
            <p className="eyebrow mb-6 flex items-center gap-3 text-lime">
              <span className="h-px w-8 bg-saffron" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl leading-[1.02] font-light text-white text-balance md:text-[3.6rem]">
            {title}
          </h1>
          {intro && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{intro}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  )
}

// Clearly-marked slot for content still awaiting approval.
export function Placeholder({ title = 'Content to be added', children, light = false, className = '' }) {
  return (
    <div
      className={`relative rounded-3xl border-2 border-dashed p-7 ${
        light ? 'border-white/20 bg-white/[0.04] text-white/70' : 'border-forest/20 bg-white/60 text-muted'
      } ${className}`}
    >
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-[0.14em] uppercase ${
          light ? 'bg-saffron/20 text-saffron' : 'bg-saffron/15 text-[#b85f00]'
        }`}
      >
        <Clock size={12} /> Awaiting approval
      </span>
      <p className={`mt-4 font-display text-xl ${light ? 'text-white' : 'text-forest'}`}>{title}</p>
      {children && <div className="mt-2 text-sm leading-relaxed">{children}</div>}
    </div>
  )
}

export function Photo({ src, alt = '', className = '', imgClassName = '' }) {
  return (
    <div className={`group relative overflow-hidden bg-sand ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105 ${imgClassName}`}
      />
    </div>
  )
}

export function CtaBand({ title, text, primary, secondary }) {
  return (
    <section className="container-x py-24">
      <Reveal>
        <div className="grain relative overflow-hidden rounded-[2.5rem] bg-forest px-8 py-16 md:px-16 md:py-20">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald/60 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-sky/25 blur-3xl" />
          <LeafPattern className="absolute -bottom-10 right-6 h-72 w-72 text-white/[0.06]" />
          <div className="relative max-w-2xl">
            <h3 className="font-display text-3xl leading-tight font-light text-white md:text-4xl">{title}</h3>
            {text && <p className="mt-5 text-lg leading-relaxed text-white/70">{text}</p>}
            <div className="mt-9 flex flex-wrap gap-3">
              {primary && (
                <Button to={primary.to} variant="accent">
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button to={secondary.to} variant="ghost">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
