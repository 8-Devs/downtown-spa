import { Link } from 'react-router-dom'

export default function ServiceCard({ icon, title, blurb, to, image }) {
  return (
    <Link
      to={to}
      className="group block bg-cream-100 hover:bg-cream-200 transition-colors duration-300 p-8 lg:p-10"
    >
      {image ? (
        <div className="aspect-[4/3] mb-6 overflow-hidden bg-cream-200">
          <img src={image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ) : icon ? (
        <div className="w-12 h-12 mb-6 text-clay-600">{icon}</div>
      ) : null}
      <h3 className="font-serif text-2xl lg:text-3xl text-ink-900">{title}</h3>
      <p className="mt-3 text-ink-700/80 leading-relaxed text-[0.95rem]">{blurb}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider2 text-clay-700">
        Explore
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  )
}
