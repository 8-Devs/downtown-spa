import { PageHeader, Section } from '../components/Section.jsx'
import CTA from '../components/CTA.jsx'

const denominations = [50, 100, 150, 200, 300, 500]

export default function GiftCards() {
  return (
    <>
      <PageHeader
        eyebrow="Gift Cards"
        title="A gift that makes someone exhale."
        lede="Our gift cards are accepted toward any service, course, or product. Purchase by phone, email, or in person — we’ll mail it, hold it, or email a digital version."
      />

      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607008829749-c0f284a49841?auto=format&fit=crop&w=1200&q=80"
                alt="Hand-wrapped gift card"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="eyebrow">Denominations</p>
            <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-ink-900">Pick an amount, or a treatment.</h2>
            <p className="mt-6 text-ink-700/80 text-lg leading-relaxed">
              Gift cards can be purchased in any amount, or you can gift a specific treatment — a facial, a 90-minute
              massage, a series of CollagenTex sessions, even a Menopause Clarity Session.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {denominations.map((d) => (
                <div key={d} className="border border-cream-300 bg-cream-100 p-6 text-center hover:border-clay-500 transition-colors">
                  <div className="font-serif text-3xl text-ink-900">${d}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider2 text-clay-700">CAD</div>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-3 text-ink-700/85 leading-relaxed">
              <div className="flex gap-3"><span className="text-clay-600">›</span> Hand-wrapped in our signature paper at no extra cost.</div>
              <div className="flex gap-3"><span className="text-clay-600">›</span> Digital cards available — sent same day.</div>
              <div className="flex gap-3"><span className="text-clay-600">›</span> Never expires.</div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="tel:+19058734907" className="btn-primary">Purchase by Phone</a>
              <a href="mailto:downtownspa11@gmail.com" className="btn-outline">Email Us</a>
            </div>
          </div>
        </div>
      </Section>

      <CTA
        eyebrow="Need It Today?"
        title="Digital gift cards delivered within hours."
        body="Email us with the recipient’s name and a short note. We’ll send a digital card you can forward."
      />
    </>
  )
}
