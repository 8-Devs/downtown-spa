import { Link } from 'react-router-dom'
import { Section } from '../components/Section.jsx'
import CTA from '../components/CTA.jsx'

const pillars = [
  {
    title: 'Glow Through Menopause',
    body: 'A facial designed for the dryness, sensitivity, and dullness that arrive with hormonal change. Lifting massage, hydrating actives, and calming LED.',
    duration: '75 minutes',
  },
  {
    title: 'Menopause Clarity Session',
    body: 'A 60-minute one-on-one conversation with a trained menopause specialist. Bring your questions; leave with a plan.',
    duration: '60 minutes',
  },
  {
    title: 'TCM & Acupuncture',
    body: 'Traditional Chinese Medicine for night sweats, sleep, mood, and energy. Always tailored to the individual presentation.',
    duration: 'From 60 minutes',
  },
  {
    title: 'Perimenopause Body Work',
    body: 'Body therapies — massage, lymphatic, cupping — chosen and paced for shifting energy and tissue tone.',
    duration: 'From 60 minutes',
  },
]

const stages = [
  {
    name: 'Perimenopause',
    span: '~40s, lasts 4–10 years',
    body: 'Cycles begin to change. Symptoms can come and go — sleep disruption, anxiety, weight shifts, dry skin.',
  },
  {
    name: 'Menopause',
    span: '12 months without a period',
    body: 'The point of transition. Hot flashes, brain fog, and mood changes often peak around this stage.',
  },
  {
    name: 'Postmenopause',
    span: 'After the 12-month mark',
    body: 'Many acute symptoms ease. Care turns to bone, heart, skin, and long-term vitality.',
  },
]

export default function Menopause() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-cream-100 overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 pt-28 lg:pt-36 pb-20 lg:pb-28 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 fade-up">
            <p className="eyebrow">A Dedicated Practice</p>
            <h1 className="mt-6 font-serif text-5xl lg:text-7xl xl:text-8xl leading-[1.02] text-ink-900">
              The Menopause <em className="text-clay-700 not-italic">Spa</em>.
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-ink-700/80 max-w-2xl leading-relaxed">
              Perimenopause and menopause are not problems to be fixed. They are seasons to be supported.
              Our menopause practice combines hands-on treatments, clarity conversations, and traditional medicine —
              delivered by practitioners who have walked this themselves.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=80"
                alt="A calm treatment room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <Section>
        <p className="eyebrow">Four Ways We Help</p>
        <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-ink-900 max-w-3xl">
          Treatments and conversations designed for the change.
        </h2>
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-cream-200 border border-cream-200">
          {pillars.map((p) => (
            <article key={p.title} className="bg-cream-50 p-8 lg:p-10">
              <div className="text-xs uppercase tracking-wider2 text-clay-600">{p.duration}</div>
              <h3 className="mt-3 font-serif text-2xl lg:text-3xl text-ink-900">{p.title}</h3>
              <p className="mt-4 text-ink-700/80 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* STAGES */}
      <section className="bg-ink-900 text-cream-50">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow !text-cream-200/80">A Quick Map</p>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Where you are matters.</h2>
            <p className="mt-6 text-cream-100/85 text-lg leading-relaxed">
              Care looks different in each stage. Here is how we think about the arc — and how our treatments shift with it.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-px bg-cream-200/10">
            {stages.map((s, i) => (
              <div key={s.name} className="bg-ink-900 p-8 lg:p-10">
                <div className="font-serif text-5xl text-clay-300">0{i + 1}</div>
                <h3 className="mt-6 font-serif text-2xl">{s.name}</h3>
                <div className="mt-1 text-xs uppercase tracking-wider2 text-cream-200/60">{s.span}</div>
                <p className="mt-4 text-cream-100/80 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">Why This Practice Exists</p>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-ink-900 leading-tight">
              Honest support, real comfort.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-6 text-ink-700/85 text-lg leading-relaxed">
              <p>
                We built the Menopause Spa because too many women told us their concerns were dismissed —
                in a clinic, at a counter, even by people who loved them. Spa care should not also feel like
                a place to perform.
              </p>
              <p>
                You can come in tired, irritable, sore, foggy, or sad. Our practitioners will meet you there,
                ask the right questions, and help you choose what is most likely to help — today, this week,
                this season.
              </p>
              <p>
                Some clients want a calm room and gentle hands. Others want strategy. Many want both.
                The Menopause Clarity Session is a good place to start if you are not sure.
              </p>
            </div>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 btn-primary">
              Book a Clarity Session
            </Link>
          </div>
        </div>
      </Section>

      <CTA
        eyebrow="The Menopause Spa"
        title="A practice built around what you actually need."
        body="Call us and ask. We are happy to chat through what might be most useful — and there is no obligation to book."
      />
    </>
  )
}
