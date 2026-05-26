import { Link } from 'react-router-dom'
import { Section, PageHeader } from '../components/Section.jsx'
import CTA from '../components/CTA.jsx'

const categories = [
  {
    id: 'massage',
    eyebrow: 'Body',
    title: 'Massage & Bodywork',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80',
    body: 'Registered Massage Therapy in classic and integrative styles — Swedish, deep tissue, prenatal, hot stone, lymphatic drainage, and therapeutic.',
    items: [
      ['Therapeutic / Deep Tissue', 'Targeted pressure for chronic tension and recovery. 60 / 75 / 90 min.'],
      ['Relaxation Massage', 'Long, gliding strokes designed to soothe the nervous system. 60 / 75 min.'],
      ['Prenatal Massage', 'Specialised support through every trimester. 60 min.'],
      ['Hot Stone', 'Warmed basalt stones to ease deep muscular tension. 75 min.'],
      ['Lymphatic Drainage', 'Gentle rhythmic work to support detoxification & post-surgical recovery. 60 min.'],
    ],
  },
  {
    id: 'facials',
    eyebrow: 'Face',
    title: 'Facials & Skincare',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=80',
    body: 'From a 30-minute reset to a 90-minute deep ritual. Botanical, results-driven, and always tailored to your skin in this season of life.',
    items: [
      ['Signature Botanical Facial', 'Cleanse, exfoliate, massage, mask. 60 / 75 min.'],
      ['Glow Through Menopause Facial', 'Calming, lifting, and hydrating for changing skin. 75 min.'],
      ['Anti-Ageing Ritual', 'Targeted peptides, LED, and lifting massage. 90 min.'],
      ['Express Renewal', 'A lunch-break refresh: cleanse, peel, treat. 30 min.'],
      ['Brows & Lashes', 'Tinting, lifts, and shaping for an effortless eye.'],
    ],
  },
  {
    id: 'holistic',
    eyebrow: 'Holistic',
    title: 'Osteopathy, Acupuncture & Reiki',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80',
    body: 'Hands-on holistic practitioners working alongside our spa team. Manual therapy, traditional Chinese medicine, and energy work — chosen by you.',
    items: [
      ['Osteopathy', 'Whole-body manual therapy for pain, posture, and function.'],
      ['Acupuncture', 'TCM diagnosis with fine-needle treatment.'],
      ['Reiki Energy Healing', 'Gentle, clothed sessions for nervous system support.'],
      ['Cupping & Tui Na', 'Traditional adjuncts to acupuncture treatment.'],
    ],
  },
  {
    id: 'hands-feet',
    eyebrow: 'Polish',
    title: 'Hand & Foot Care',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=80',
    body: 'Manicures and pedicures with care — botanical soaks, considered colour, and clean technique.',
    items: [
      ['Spa Manicure', 'Shape, cuticle, massage, polish. 45 min.'],
      ['Spa Pedicure', 'Soak, exfoliation, callus care, massage, polish. 60 min.'],
      ['Express Polish Change', '15 min refresh.'],
    ],
  },
  {
    id: 'hair-removal',
    eyebrow: 'Smooth',
    title: 'Hair Removal',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80',
    body: 'Soft-touch waxing with high-grade waxes for sensitive skin.',
    items: [
      ['Brow / Lip / Chin'],
      ['Underarm / Half Arm / Full Arm'],
      ['Half Leg / Full Leg'],
      ['Bikini / Brazilian'],
      ['Back / Chest'],
    ],
  },
  {
    id: 'colour-analysis',
    eyebrow: 'Discover',
    title: 'Colour Analysis',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80',
    body: 'A personalised seasonal palette session — discover the colours that make you look rested, vivid, and like yourself again.',
    items: [
      ['Full Seasonal Analysis (12-Tone)', '90 min. Includes printed palette.'],
      ['Palette Refresh', 'Returning clients — quick re-confirmation. 30 min.'],
    ],
  },
  {
    id: 'mens',
    eyebrow: 'For Him',
    title: 'Men’s Spa',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=80',
    body: 'A curated set of treatments built for male skin and physiology — no fuss, all effect.',
    items: [
      ['Gentlemen’s Facial', 'Deep cleanse, shave-friendly exfoliation. 60 min.'],
      ['Sports Massage', 'Recovery-focused deep tissue. 60 / 90 min.'],
      ['Back, Neck & Shoulder Reset', '45 min targeted treatment.'],
    ],
  },
]

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Treatments & Rituals"
        title="Services"
        lede="Therapeutic, restorative, beautifying. Each treatment is designed and delivered by a practitioner — never a script. Below is the full menu; please call for pricing as it varies by practitioner and length."
      />

      {/* Quick nav */}
      <nav className="bg-cream-50 border-b border-cream-200 sticky top-20 lg:top-24 z-30 backdrop-blur">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 overflow-x-auto">
          <ul className="flex gap-6 py-4 text-xs uppercase tracking-wider2 text-ink-700 whitespace-nowrap">
            {categories.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="hover:text-clay-700 transition-colors">{c.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {categories.map((c, i) => (
        <Section key={c.id} id={c.id} className={i % 2 === 1 ? 'bg-cream-100' : ''}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <p className="eyebrow">{c.eyebrow}</p>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-ink-900">{c.title}</h2>
              <p className="mt-6 text-ink-700/80 text-lg leading-relaxed">{c.body}</p>
              <ul className="mt-10 divide-y divide-cream-200 border-y border-cream-200">
                {c.items.map((item, idx) => {
                  const [title, desc] = Array.isArray(item) ? item : [item, null]
                  return (
                    <li key={idx} className="py-5 flex gap-6">
                      <span className="font-serif text-xl text-clay-600 mt-0.5 w-10 shrink-0">0{idx + 1}</span>
                      <div>
                        <h3 className="font-medium text-ink-900">{title}</h3>
                        {desc && <p className="mt-1 text-sm text-ink-700/75 leading-relaxed">{desc}</p>}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <CTA
        title="Not sure where to start?"
        body="Tell us how you’re feeling — tired, achy, dull, anxious — and we’ll match you with the practitioner and treatment that fits."
      />
    </>
  )
}
