import { Link } from 'react-router-dom'
import { Section } from '../components/Section.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTA from '../components/CTA.jsx'

const signatureServices = [
  {
    to: '/services#massage',
    title: 'Massage & Bodywork',
    blurb: 'Therapeutic, deep tissue, and relaxation massage tailored to release tension and restore balance.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
  },
  {
    to: '/services#facials',
    title: 'Facials & Skincare',
    blurb: 'Botanical and result-driven facials — from gentle ritual to clinical-grade rejuvenation.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
  },
  {
    to: '/menopause',
    title: 'Menopause Spa',
    blurb: 'A dedicated suite of treatments and clarity sessions for the change — honest support, real comfort.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
  },
  {
    to: '/wellness',
    title: 'Wellness Room',
    blurb: 'CollagenTex, SEQEX, and Vitamin-D therapy — gentle technologies that meet ancient wisdom.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80',
  },
]

const testimonials = [
  {
    quote: 'I leave Downtown Spa feeling like a different person — softer, calmer, and able to breathe again. The team treats you like family.',
    name: 'Eliza P.',
    role: 'Client since 2019',
  },
  {
    quote: 'The menopause clarity session was the first time someone took the time to actually listen. I cannot recommend it enough.',
    name: 'Sandra M.',
    role: 'Georgetown',
  },
  {
    quote: 'A neighbourhood gem. Their osteopath and reiki room are easily the best I have experienced in the GTA.',
    name: 'Allison K.',
    role: 'Halton Hills',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
            alt="Quiet spa interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/70 via-ink-900/40 to-clay-700/40" />
        </div>
        <div className="relative max-w-8xl mx-auto px-6 lg:px-12 pt-32 lg:pt-48 pb-28 lg:pb-44">
          <div className="max-w-3xl text-cream-50 fade-up">
            <p className="eyebrow !text-cream-200/90">Georgetown · Halton Hills</p>
            <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05]">
              Restore.<br />
              Maintain.<br />
              <span className="italic text-clay-300">Glow.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg lg:text-xl text-cream-100/90 leading-relaxed">
              A holistic day spa where ritual meets modern wellness — massage, facials,
              menopause-focused care, and energy &amp; light therapies, all in one calm space.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="tel:+19058734907" className="btn-primary !bg-cream-50 !text-ink-900 hover:!bg-cream-200">Book by Phone</a>
              <Link to="/services" className="btn-outline !border-cream-50 !text-cream-50 hover:!bg-cream-50 hover:!text-ink-900">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME / INTRO */}
      <Section className="!py-20 lg:!py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">Welcome</p>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-ink-900 leading-tight">
              A sanctuary tucked into downtown Georgetown.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-ink-700/80 text-lg leading-relaxed">
              Downtown Spa &amp; Relaxation Centre has been a quiet anchor in Halton Hills for over two decades.
              We blend Registered Massage Therapy, holistic skincare, and energy medicine with newer modalities
              like CollagenTex light therapy and SEQEX — so every visit can be as practical or as transformative
              as you need it to be.
            </p>
            <p className="mt-6 text-ink-700/80 text-lg leading-relaxed">
              Our practitioners are RMTs, estheticians, osteopaths, acupuncturists, and Reiki masters.
              They are also, more importantly, the kind of people you want in the room when you are tired.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-ink-900 link-underline">
              Read our story →
            </Link>
          </div>
        </div>
      </Section>

      {/* SIGNATURE SERVICES */}
      <Section className="!pt-0 bg-cream-50">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="eyebrow">Signature Services</p>
            <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-ink-900">The four pillars of our care.</h2>
          </div>
          <Link to="/services" className="text-sm tracking-wider2 uppercase text-clay-700 link-underline">
            View all services →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {signatureServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      {/* MENOPAUSE FEATURE */}
      <section className="bg-cream-100">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">A Practice We Are Proud Of</p>
            <h2 className="mt-4 font-serif text-4xl lg:text-6xl text-ink-900 leading-tight">
              The Menopause Spa — <em className="text-clay-700 not-italic font-normal">because the change deserves care.</em>
            </h2>
            <p className="mt-6 text-ink-700/80 text-lg leading-relaxed">
              Perimenopause and menopause are often dismissed. We built a dedicated suite of treatments,
              clarity sessions, and Traditional Chinese Medicine support to do the opposite. Honest conversation,
              real comfort, and treatments that meet you where you are.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              {[
                'Glow Through Menopause facial',
                'Menopause Clarity Sessions',
                'TCM &amp; acupuncture support',
                'Perimenopause body therapies',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-clay-600 shrink-0" />
                  <span className="text-ink-700" dangerouslySetInnerHTML={{__html: t}} />
                </div>
              ))}
            </div>
            <Link to="/menopause" className="mt-10 btn-primary">Discover the Menopause Spa</Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=80"
                alt="Menopause spa treatment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS ROOM FEATURE */}
      <section className="bg-ink-900 text-cream-50">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
              alt="Light therapy in the wellness room"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow !text-cream-200/80">The Wellness Room</p>
            <h2 className="mt-4 font-serif text-4xl lg:text-6xl leading-tight">
              Gentle technologies. <span className="italic text-clay-300">Quiet results.</span>
            </h2>
            <p className="mt-6 text-cream-100/85 text-lg leading-relaxed">
              Our Wellness Room hosts modalities that complement our hands-on treatments — CollagenTex
              red-light therapy for skin and cellular renewal, SEQEX magnetic ion cyclotron sessions,
              and supervised Vitamin-D therapy.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                ['CollagenTex', 'Red & near-infrared light for collagen, mood, and recovery.'],
                ['SEQEX', 'Personalised pulsed-electromagnetic field sessions.'],
                ['Vitamin-D', 'Safe, calibrated UVB exposure on guidance.'],
              ].map(([h, b]) => (
                <div key={h} className="border-t border-cream-200/20 pt-5">
                  <h4 className="font-serif text-xl">{h}</h4>
                  <p className="mt-2 text-sm text-cream-100/75 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
            <Link to="/wellness" className="mt-10 inline-flex items-center gap-2 px-7 py-3 border border-cream-50 text-cream-50 text-sm tracking-wider2 uppercase font-medium hover:bg-cream-50 hover:text-ink-900 transition-colors">
              Step into the Wellness Room
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section>
        <div className="text-center mb-14">
          <p className="eyebrow">Client Love</p>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-ink-900">Words from those who keep coming back.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-cream-100 p-8 lg:p-10 flex flex-col">
              <div className="font-serif text-3xl text-clay-600 leading-none">“</div>
              <blockquote className="mt-2 text-ink-700 leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-cream-200">
                <div className="font-medium text-ink-900">{t.name}</div>
                <div className="text-sm text-ink-700/70">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/testimonials" className="text-sm tracking-wider2 uppercase text-clay-700 link-underline">
            Read more reviews →
          </Link>
        </div>
      </Section>

      {/* GIFT CARD STRIP */}
      <section className="border-y border-cream-200 bg-cream-100">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-14 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="text-center md:text-left">
            <p className="eyebrow">Gift Cards</p>
            <h3 className="mt-2 font-serif text-2xl lg:text-3xl text-ink-900">
              The kind of gift that makes someone exhale.
            </h3>
          </div>
          <Link to="/gift-cards" className="btn-primary">Purchase a Gift Card</Link>
        </div>
      </section>

      <CTA />
    </>
  )
}
