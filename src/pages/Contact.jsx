import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { img } from '../data/images'
import { businesses } from '../data/content'
import { PageHero, Reveal, SectionHeading } from '../components/ui'

const enquiryTypes = ['General enquiry', 'Business partnership', 'Investor relations', 'Media', 'Careers', 'CSR & sustainability', 'Other']

function Field({ label, optional, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-forest">
        {label}
        {optional && <span className="text-xs font-normal text-muted">(optional)</span>}
      </span>
      {children}
    </label>
  )
}

const inputCls =
  'w-full rounded-2xl border border-forest/15 bg-cream px-4 py-3.5 text-ink outline-none transition placeholder:text-muted/60 focus:border-emerald focus:bg-white focus:ring-4 focus:ring-emerald/10'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [params] = useSearchParams()
  const preselectedType = params.get('type') === 'investor' ? 'Investor relations' : ''
  const preselected = businesses.find((b) => b.slug === params.get('company'))?.name ?? ''

  const onSubmit = (e) => {
    e.preventDefault()
    // Front-end only for now. Connect to the approved corporate email or form service before launch.
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Every connection begins with a conversation."
        intro="Whether you wish to connect with Sarvaya Holdings, explore a business relationship or reach one of our companies, we welcome your enquiry."
        image={img.lake}
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          {/* Left: details */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Connect with Sarvaya"
              title="We value open communication."
              intro="We aim to direct every enquiry to the appropriate team. For corporate communication, group-level enquiries and general information:"
            />
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-3">
                {[
                  { i: MapPin, t: 'Corporate address', v: '[Corporate address]' },
                  { i: Phone, t: 'Phone', v: '[Official phone number]' },
                  { i: Mail, t: 'Email', v: '[Corporate email address]' },
                ].map(({ i: Icon, t, v }) => (
                  <li key={t} className="flex items-center gap-4 rounded-2xl bg-white p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-lime">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs font-bold tracking-[0.14em] text-muted uppercase">{t}</span>
                      <span className="mt-0.5 block font-semibold text-forest">{v}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-12 eyebrow text-emerald">Business enquiries</p>
              <ul className="mt-5 divide-y divide-forest/10 rounded-2xl border border-forest/10 bg-white">
                {businesses.map((b) => (
                  <li key={b.slug} className="flex items-start justify-between gap-4 p-5">
                    <span>
                      <span className="flex items-center gap-2 font-semibold text-forest">
                        <span className="h-2 w-2 rounded-full" style={{ background: b.accent }} /> {b.name}
                      </span>
                      <span className="mt-1 block pl-4 text-sm text-muted">[Contact details]</span>
                    </span>
                    <a
                      href={b.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${b.name} website`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream text-forest transition hover:bg-forest hover:text-white"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal y={40}>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_40px_100px_-50px_rgba(14,27,44,0.45)] md:p-12">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-lime/20 blur-3xl" />
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="relative flex min-h-[520px] flex-col items-center justify-center text-center"
                    >
                      <CheckCircle2 size={56} className="text-emerald" />
                      <p className="mt-6 font-display text-3xl text-forest">Thank you for reaching out.</p>
                      <p className="mt-3 max-w-sm text-muted">
                        Your enquiry has been noted. Our team will direct it to the appropriate business.
                      </p>
                      <button
                        onClick={() => setSent(false)}
                        className="mt-8 rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest hover:bg-forest hover:text-white"
                      >
                        Send another enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="relative">
                      <p className="font-display text-3xl text-forest">Send us an enquiry</p>
                      <p className="mt-2 text-sm text-muted">Fields marked optional can be left blank.</p>
                      <div className="mt-8 grid gap-5 md:grid-cols-2">
                        <Field label="Name">
                          <input required name="name" className={inputCls} placeholder="Your full name" />
                        </Field>
                        <Field label="Organisation" optional>
                          <input name="organisation" className={inputCls} placeholder="Company or institution" />
                        </Field>
                        <Field label="Email">
                          <input required type="email" name="email" className={inputCls} placeholder="you@example.com" />
                        </Field>
                        <Field label="Phone" optional>
                          <input type="tel" name="phone" className={inputCls} placeholder="+91" />
                        </Field>
                        <Field label="Enquiry type">
                          <select required name="type" defaultValue={preselectedType} className={inputCls}>
                            <option value="" disabled>
                              Select an option
                            </option>
                            {enquiryTypes.map((t) => (
                              <option key={t}>{t}</option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Company of interest">
                          <select required name="company" defaultValue={preselected} className={inputCls}>
                            <option value="" disabled>
                              Select a company
                            </option>
                            <option>Sarvaya Holdings (group level)</option>
                            {businesses.map((b) => (
                              <option key={b.slug}>{b.name}</option>
                            ))}
                          </select>
                        </Field>
                        <div className="md:col-span-2">
                          <Field label="Message">
                            <textarea
                              required
                              name="message"
                              rows={5}
                              className={`${inputCls} resize-none`}
                              placeholder="How can we help?"
                            />
                          </Field>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-emerald px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(14,27,44,0.6)] transition hover:bg-forest"
                      >
                        Send enquiry
                        <Send size={16} className="transition group-hover:translate-x-0.5" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
