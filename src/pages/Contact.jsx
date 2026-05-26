import { useState } from 'react'
import { PageHeader, Section } from '../components/Section.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s connect."
        lede="We’re by appointment only, but reception responds quickly to email and phone calls. Send us a note or pick up the phone — whichever feels easier."
      />

      <Section>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Info */}
          <div className="lg:col-span-5">
            <p className="eyebrow">Visit</p>
            <address className="not-italic mt-4 text-lg leading-relaxed text-ink-700">
              185 Mountainview Road North<br />
              Georgetown, Ontario<br />
              L7G 3P9
            </address>

            <div className="mt-10">
              <p className="eyebrow">Reach Us</p>
              <div className="mt-4 space-y-2">
                <a href="tel:+19058734907" className="block text-2xl font-serif text-ink-900 link-underline">
                  (905) 873-4907
                </a>
                <a href="mailto:downtownspa11@gmail.com" className="block text-ink-700 link-underline">
                  downtownspa11@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-10">
              <p className="eyebrow">Hours</p>
              <dl className="mt-4 text-ink-700 space-y-1.5">
                {[
                  ['Sun – Mon', 'Closed'],
                  ['Tuesday', '9 am – 5 pm'],
                  ['Wednesday', '10 am – late (by appt.)'],
                  ['Thursday', '10 am – late (by appt.)'],
                  ['Friday', '9 am – 5 pm'],
                  ['Saturday', '9 am – 5 pm'],
                ].map(([d, t]) => (
                  <div key={d} className="flex justify-between gap-6 border-b border-cream-200 pb-1.5">
                    <dt>{d}</dt><dd>{t}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-ink-700/70">Hours may vary — please call ahead.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream-100 p-8 lg:p-12">
              <p className="eyebrow">Send a Message</p>
              <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-ink-900">We’ll respond quickly.</h2>

              {sent ? (
                <div className="mt-8 p-6 bg-cream-50 border border-cream-300">
                  <h3 className="font-serif text-2xl text-ink-900">Message received.</h3>
                  <p className="mt-2 text-ink-700/80">Thank you — we will be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" name="name" required />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>
                  <Field label="Email" name="email" type="email" required />
                  <Field label="What can we help with?" name="subject" />
                  <div>
                    <label className="block text-xs uppercase tracking-wider2 text-clay-700 mb-2">Message</label>
                    <textarea
                      rows="5"
                      required
                      className="w-full bg-cream-50 border border-cream-300 px-4 py-3 focus:outline-none focus:border-clay-500"
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-2 w-full sm:w-auto">Send Message</button>
                </form>
              )}
            </div>

            {/* Map placeholder */}
            <div className="mt-10 aspect-[16/9] overflow-hidden bg-cream-200 relative">
              <iframe
                title="Map to Downtown Spa"
                src="https://www.google.com/maps?q=185+Mountainview+Road+North,+Georgetown,+ON&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

function Field({ label, name, type = 'text', required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-wider2 text-clay-700 mb-2">
        {label}{required && ' *'}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-cream-50 border border-cream-300 px-4 py-3 focus:outline-none focus:border-clay-500"
      />
    </div>
  )
}
