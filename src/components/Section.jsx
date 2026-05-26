export function Section({ children, className = '', as: As = 'section', id }) {
  return (
    <As id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="max-w-8xl mx-auto px-6 lg:px-12">{children}</div>
    </As>
  )
}

export function PageHeader({ eyebrow, title, lede }) {
  return (
    <header className="bg-cream-100 border-b border-cream-200">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center fade-up">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 font-serif text-5xl lg:text-7xl text-ink-900">{title}</h1>
        {lede && (
          <p className="mt-6 max-w-2xl mx-auto text-ink-700/80 text-lg leading-relaxed">{lede}</p>
        )}
      </div>
    </header>
  )
}
