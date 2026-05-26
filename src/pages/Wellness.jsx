import { Link } from 'react-router-dom'
import { Section, PageHeader } from '../components/Section.jsx'
import CTA from '../components/CTA.jsx'

const modalities = [
  {
    id: 'collagentex',
    name: 'CollagenTex',
    tag: 'Red & Near-Infrared Light',
    image: 'https://images.unsplash.com/photo-1556909114-44e3e9399a2c?auto=format&fit=crop&w=1400&q=80',
    blurb: 'Photobiomodulation using a calibrated mix of red and near-infrared light. Supports collagen production, mood, and recovery.',
    bullets: [
      'Boosts collagen and elastin in skin',
      'Eases muscular soreness post-exercise',
      'Used adjunct to facials & body work',
      'Sessions: 12 / 20 / 30 minutes',
    ],
  },
  {
    id: 'seqex',
    name: 'SEQEX',
    tag: 'Pulsed Electromagnetic Field',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80',
    blurb: 'A personalised ion-cyclotron resonance session. SEQEX delivers low-intensity electromagnetic frequencies tuned to your body.',
    bullets: [
      'Personalised frequency mapping (T-Scan)',
      'Reported benefits: sleep, energy, recovery',
      'Sessions: 30 / 45 minutes',
      'Recommended in courses of 10–20',
    ],
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin-D Therapy',
    tag: 'Calibrated UVB',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80',
    blurb: 'Short, supervised UVB exposure for clients seeking vitamin-D support during long Ontario winters. Conducted on practitioner guidance only.',
    bullets: [
      'Brief, supervised sessions',
      'Skin-type assessed before first visit',
      'Always paired with skin protection guidance',
      'Sessions: from 3 minutes',
    ],
  },
]

export default function Wellness() {
  return (
    <>
      <PageHeader
        eyebrow="The Wellness Room"
        title="Gentle technologies. Quiet results."
        lede="A separate room within our spa dedicated to non-touch modalities that complement our hands-on care. Each modality is offered as a standalone service or paired with a facial or massage."
      />

      {/* Intro */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">Why a Separate Room</p>
            <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-ink-900">A practice on the edge of clinical & calm.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-ink-700/80 text-lg leading-relaxed">
              The Wellness Room exists because some of the most effective tools we offer don’t need hands —
              they need stillness. We have given them their own quiet space, with a single client at a time
              and a practitioner on hand.
            </p>
            <p className="mt-6 text-ink-700/80 text-lg leading-relaxed">
              These modalities are well-studied, gentle, and most rewarding in a course rather than a one-off.
              We will be honest with you about that.
            </p>
          </div>
        </div>
      </Section>

      {modalities.map((m, i) => (
        <section key={m.id} id={m.id} className={i % 2 === 0 ? 'bg-cream-100' : 'bg-cream-50'}>
          <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="text-xs uppercase tracking-wider2 text-clay-600">{m.tag}</div>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-ink-900">{m.name}</h2>
              <p className="mt-5 text-ink-700/85 text-lg leading-relaxed">{m.blurb}</p>
              <ul className="mt-8 space-y-3">
                {m.bullets.map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-clay-600 shrink-0" />
                    <span className="text-ink-700">{b}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+19058734907" className="mt-10 btn-outline">Book {m.name}</a>
            </div>
          </div>
        </section>
      ))}

      <CTA
        eyebrow="The Wellness Room"
        title="Try a single session, or commit to a course."
        body="Most clients see the best results from a series. Call us and we will outline what is reasonable — and what isn’t."
      />
    </>
  )
}
