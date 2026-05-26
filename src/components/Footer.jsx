import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink-900 text-cream-100 mt-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="font-serif text-3xl">
            Downtown <span className="italic text-clay-400">Spa</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream-200/80 max-w-xs">
            A holistic day spa in Georgetown, Ontario. Massage, facials, menopause-focused care, and energy &amp; light therapies — designed to restore, maintain, and let you glow.
          </p>
          <div className="mt-6 flex gap-4">
            <Social href="https://www.facebook.com/TheDowntownSpa/" label="Facebook">
              <path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.8 1.9-1.8H17V2.1C16.6 2 15.4 2 14 2c-2.9 0-4.9 1.8-4.9 5v3H6v4h3v8h4z"/>
            </Social>
            <Social href="https://instagram.com/downtown_spa/" label="Instagram">
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.6.2-2 .4-.5.2-.9.4-1.2.7-.3.3-.6.7-.7 1.2-.2.4-.3.9-.4 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.6.4 2 .2.5.4.9.7 1.2.3.3.7.6 1.2.7.4.2.9.3 2 .4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.6-.2 2-.4.5-.2.9-.4 1.2-.7.3-.3.6-.7.7-1.2.2-.4.3-.9.4-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.6-.4-2-.2-.5-.4-.9-.7-1.2-.3-.3-.7-.6-1.2-.7-.4-.2-.9-.3-2-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1A4.9 4.9 0 1 1 12 17a4.9 4.9 0 0 1 0-9.9zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-2A1.2 1.2 0 1 1 17 8.3a1.2 1.2 0 0 1 .1-1.2z"/>
            </Social>
            <Social href="https://www.youtube.com/channel/UCjtIfU60-JVYwHFQMbfsTpg" label="YouTube">
              <path d="M22 12s0-3.2-.4-4.8a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12zm-12 3V9l5 3-5 3z"/>
            </Social>
          </div>
        </div>

        {/* Visit */}
        <div>
          <h4 className="eyebrow !text-cream-200/70">Visit</h4>
          <address className="not-italic mt-4 text-sm leading-relaxed text-cream-200/80">
            185 Mountainview Road North<br />
            Georgetown, Ontario L7G 3P9
          </address>
          <a href="tel:+19058734907" className="block mt-4 text-cream-100 link-underline">(905) 873-4907</a>
          <a href="mailto:downtownspa11@gmail.com" className="block mt-1 text-cream-100 link-underline">downtownspa11@gmail.com</a>
        </div>

        {/* Hours */}
        <div>
          <h4 className="eyebrow !text-cream-200/70">Hours</h4>
          <dl className="mt-4 text-sm leading-relaxed text-cream-200/80 space-y-1">
            <Row d="Sun – Mon" t="Closed" />
            <Row d="Tuesday" t="9 am – 5 pm" />
            <Row d="Wed – Thu" t="10 am – late (by appt.)" />
            <Row d="Friday" t="9 am – 5 pm" />
            <Row d="Saturday" t="9 am – 5 pm" />
          </dl>
          <p className="mt-3 text-xs text-cream-200/60">By appointment only — please call ahead.</p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="eyebrow !text-cream-200/70">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['/services', 'All Services'],
              ['/menopause', 'Menopause Spa'],
              ['/wellness', 'Wellness Room'],
              ['/gift-cards', 'Gift Cards'],
              ['/testimonials', 'Client Love'],
              ['/about', 'About'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link to={href} className="text-cream-100 link-underline">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-200/10">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-6 text-xs text-cream-200/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {year} Downtown Spa &amp; Relaxation Centre. All rights reserved.</p>
          <p>Georgetown · Halton Hills · Ontario</p>
        </div>
      </div>
    </footer>
  )
}

function Row({ d, t }) {
  return (
    <div className="flex justify-between gap-4">
      <dt>{d}</dt><dd>{t}</dd>
    </div>
  )
}

function Social({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
       className="inline-flex items-center justify-center w-9 h-9 border border-cream-200/20 rounded-full text-cream-100 hover:bg-cream-100 hover:text-ink-900 transition-colors">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">{children}</svg>
    </a>
  )
}
