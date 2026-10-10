import { steps } from '@/data/site'
import { SectionTitle } from './Doodles'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="simples assim" title="Como funciona" />
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((s, i) => (
            <article
              key={s.n}
              className={`reveal relative rounded-[2rem] bg-white sticker p-7 pt-10 hover:-translate-y-2 hover:rotate-1 transition-transform ${
                i === 1 ? 'md:mt-10' : ''
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span
                className={`absolute -top-7 left-6 grid place-items-center w-16 h-16 rounded-2xl ${s.color} sticker-sm font-display font-extrabold text-2xl -rotate-6`}
              >
                {s.n}
              </span>
              <span className="absolute top-5 right-6 text-4xl animate-wiggle" aria-hidden="true">
                {s.emoji}
              </span>
              <h3 className="font-display font-extrabold text-3xl mt-4">{s.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink/80">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}