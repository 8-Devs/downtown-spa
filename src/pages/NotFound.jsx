import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-5xl lg:text-7xl text-ink-900">This page is on retreat.</h1>
        <p className="mt-6 text-ink-700/80 text-lg max-w-xl mx-auto">
          The page you’re looking for doesn’t exist — let’s get you back to somewhere peaceful.
        </p>
        <Link to="/" className="mt-10 inline-flex btn-primary">Return Home</Link>
      </div>
    </section>
  )
}
