import { Link } from 'react-router-dom'

export default function CTA({
  eyebrow = 'Begin Your Ritual',
  title = 'Step into a moment that is entirely yours.',
  body = 'Appointments fill quickly on weekends. Call ahead or send us a note — we’ll help you choose the right ritual.',
}) {
  return (
    <section className="bg-clay-700 text-cream-50">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow !text-cream-200/80">{eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl leading-tight">{title}</h2>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-6">
          <p className="text-cream-100/90 max-w-md leading-relaxed">{body}</p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+19058734907" className="inline-flex items-center gap-2 px-7 py-3 bg-cream-50 text-ink-900 text-sm tracking-wider2 uppercase font-medium hover:bg-cream-200 transition-colors">
              Call · 905·873·4907
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 border border-cream-50 text-cream-50 text-sm tracking-wider2 uppercase font-medium hover:bg-cream-50 hover:text-ink-900 transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
