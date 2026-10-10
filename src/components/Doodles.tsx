// Pequenos enfeites SVG desenhados à mão, usados em várias seções.
export function Squiggle({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 12 C 20 2, 30 20, 50 10 S 80 2, 100 10 S 130 20, 150 10 S 180 2, 198 10"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Star({ className = '', color = '#ffd23f' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 2 L24 15 L38 16 L27 24 L31 38 L20 30 L9 38 L13 24 L2 16 L16 15 Z"
        fill={color}
        stroke="#1b1030"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Sparkle({ className = '', color = '#ff3d7f' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M20 0 C22 14, 26 18, 40 20 C26 22, 22 26, 20 40 C18 26, 14 22, 0 20 C14 18, 18 14, 20 0 Z" fill={color} />
    </svg>
  )
}

export function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} fill="none" aria-hidden="true">
      <path
        d="M6 10 C 40 4, 80 20, 96 60"
        stroke="#1b1030"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="2 10"
      />
      <path d="M80 54 L97 64 L104 44" stroke="#1b1030" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SectionTitle({ kicker, title, light = false }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="text-center mb-14 reveal">
      <p className={`font-hand text-3xl md:text-4xl -rotate-2 ${light ? 'text-sun' : 'text-pink'}`}>{kicker}</p>
      <h2
        className={`font-display font-extrabold text-5xl md:text-7xl tracking-tight leading-none mt-1 ${
          light ? 'text-paper' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      <Squiggle className="w-40 h-5 mx-auto mt-4" color={light ? '#ffd23f' : '#ff3d7f'} />
    </div>
  )
}