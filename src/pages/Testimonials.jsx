import { PageHeader, Section } from '../components/Section.jsx'
import CTA from '../components/CTA.jsx'

const reviews = [
  {
    quote: 'I leave Downtown Spa feeling like a different person — softer, calmer, and able to breathe again. The team treats you like family.',
    name: 'Eliza P.', role: 'Client since 2019',
  },
  {
    quote: 'The menopause clarity session was the first time someone took the time to actually listen. I cannot recommend it enough.',
    name: 'Sandra M.', role: 'Georgetown',
  },
  {
    quote: 'A neighbourhood gem. Their osteopath and reiki room are easily the best I have experienced in the GTA.',
    name: 'Allison K.', role: 'Halton Hills',
  },
  {
    quote: 'I drive in from Mississauga every six weeks. It’s worth every minute. Sophie is a magician with skincare.',
    name: 'Priya D.', role: 'Returning client',
  },
  {
    quote: 'My partner gifted me a CollagenTex course for my birthday. I sleep better than I have in years.',
    name: 'Brenda L.', role: 'Wellness Room regular',
  },
  {
    quote: 'Calm, professional, and quietly excellent. They don’t oversell — which is exactly why I trust them.',
    name: 'Marcus J.', role: 'Acton',
  },
  {
    quote: 'I’ve been a client for ten years. Marisa and the team have walked with me through every season of my life.',
    name: 'Diane R.', role: 'Long-time client',
  },
  {
    quote: 'The TCM sessions with Lin have transformed my sleep and energy. Highly recommend if you’re in perimenopause.',
    name: 'Karen W.', role: 'Brampton',
  },
  {
    quote: 'I was nervous about my first massage and Jordan made the whole experience easy. Thoughtful and skilled.',
    name: 'Samantha O.', role: 'First-time client',
  },
]

export default function Testimonials() {
  return (
    <>
      <PageHeader
        eyebrow="Client Love"
        title="Real words from real clients."
        lede="We are quietly proud of the relationships we’ve built over the last two decades. Here are a few of them."
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure key={i} className="bg-cream-100 p-8 lg:p-10">
              <div className="font-serif text-3xl text-clay-600 leading-none">“</div>
              <blockquote className="mt-3 text-ink-700 leading-relaxed">{r.quote}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-cream-200">
                <div className="font-medium text-ink-900">{r.name}</div>
                <div className="text-sm text-ink-700/70">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  )
}
