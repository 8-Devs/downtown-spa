import { Link } from 'react-router-dom'
import { Section, PageHeader } from '../components/Section.jsx'
import CTA from '../components/CTA.jsx'

const values = [
  {
    title: 'Real care, not theatre',
    body: 'Spa should not be performative. We choose treatments that actually help — and tell you when they won’t.',
  },
  {
    title: 'Practitioner-led, always',
    body: 'No menu reading from a script. Our RMTs, estheticians, and holistic practitioners build each visit around you.',
  },
  {
    title: 'Holistic, integrated, modern',
    body: 'Centuries-old practices alongside well-studied modern modalities. We bring you the best of both.',
  },
  {
    title: 'A place to exhale',
    body: 'Quiet rooms, soft lighting, no rushing. Twenty minutes early is welcome; we’ll make you tea.',
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A quiet anchor in downtown Georgetown."
        lede="Downtown Spa & Relaxation Centre has been part of Halton Hills for more than two decades. We blend Registered Massage Therapy, holistic skincare, and energy medicine — with the same intent we had on day one."
      />

      {/* Story */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80"
                alt="Inside the spa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-ink-900 leading-tight">
              Built on the belief that wellness is everyday work.
            </h2>
            <div className="mt-8 space-y-6 text-ink-700/85 text-lg leading-relaxed">
              <p>
                We opened our doors over twenty years ago with a small team and a clear idea — that good spa care
                should feel like an honest practice, not a luxury performance. That idea hasn’t changed.
              </p>
              <p>
                Over the years we have expanded into menopause-focused care, hosted holistic practitioners in
                osteopathy and TCM, and added a dedicated Wellness Room for light and energy therapies. Each
                addition has been chosen by someone on our team who personally vouches for it.
              </p>
              <p>
                What you’ll find here today is the same as what you’d have found here a decade ago: a quiet
                building, people who recognise you, and treatments delivered with intent.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <section className="bg-cream-100">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-ink-900">Four principles that shape every visit.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-px bg-cream-200">
            {values.map((v, i) => (
              <div key={v.title} className="bg-cream-100 p-8 lg:p-10">
                <div className="font-serif text-clay-600 text-3xl">0{i + 1}</div>
                <h3 className="mt-4 font-serif text-2xl lg:text-3xl text-ink-900">{v.title}</h3>
                <p className="mt-3 text-ink-700/80 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">Meet the Team</p>
            <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-ink-900">The people in the rooms.</h2>
            <p className="mt-6 text-ink-700/80 text-lg leading-relaxed max-w-lg">
              RMTs, estheticians, osteopaths, acupuncturists, and Reiki masters. They’re also runners, mothers,
              gardeners, and the kind of neighbours who remember your name.
            </p>
            <Link to="/team" className="mt-8 btn-outline">Meet our practitioners</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80',
            ].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA
        eyebrow="Come Visit"
        title="The door is open."
        body="We are by appointment, but happy to chat through what might be most useful. Call or write — we’ll respond quickly."
      />
    </>
  )
}
