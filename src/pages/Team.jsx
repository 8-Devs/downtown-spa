import { PageHeader, Section } from '../components/Section.jsx'
import CTA from '../components/CTA.jsx'

const team = [
  {
    name: 'Marisa Caruso',
    role: 'Owner & Esthetician',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    bio: 'Marisa has been holding this space for more than two decades. She believes a facial is a conversation as much as a treatment.',
  },
  {
    name: 'Dr. Anya Patel, D.O.',
    role: 'Osteopathic Manual Practitioner',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    bio: 'Whole-body manual osteopathy with a special interest in postural pain, pelvic health, and recovery.',
  },
  {
    name: 'Lin Wei, R.Ac',
    role: 'Acupuncturist · TCM',
    img: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80',
    bio: 'Lin trained in Beijing and has practiced in Ontario for fifteen years. Special focus on menopausal symptom management.',
  },
  {
    name: 'Jordan Reyes, RMT',
    role: 'Registered Massage Therapist',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    bio: 'Therapeutic and deep tissue with a measured, steady hand. Loved by clients with chronic neck and shoulder tension.',
  },
  {
    name: 'Hannah Bell',
    role: 'Reiki Master & Energy Practitioner',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    bio: 'Trauma-informed reiki sessions and energy-based clarity work. A quiet, grounded room.',
  },
  {
    name: 'Sophie Kang',
    role: 'Senior Esthetician',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: 'Botanical and clinical facials. Sophie is the practitioner you want for changing skin and considered colour.',
  },
]

export default function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Meet the Team"
        title="The practitioners behind every visit."
        lede="Each member of our team is selected for their craft and for the way they hold space. We are proud of the people in these rooms."
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {team.map((p) => (
            <article key={p.name} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-cream-200">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-2xl text-ink-900">{p.name}</h3>
                <div className="mt-1 text-xs uppercase tracking-wider2 text-clay-700">{p.role}</div>
                <p className="mt-4 text-ink-700/80 leading-relaxed">{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTA
        eyebrow="Find Your Practitioner"
        title="Not sure who to book with?"
        body="Call and tell us what you’re hoping for. We will recommend the practitioner who fits — never the one who has a gap."
      />
    </>
  )
}
