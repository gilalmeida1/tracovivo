import { Check } from 'lucide-react'
import { packages } from '@/data/site'
import { SectionTitle } from './Doodles'

export function Packages({ onPick }: { onPick: (hours: string) => void }) {
  return (
    <section id="pacotes" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="escolha o seu" title="Pacotes" />
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 items-center">
          {packages.map((p, i) => (
            <article
              key={p.id}
              className={`reveal relative rounded-[2rem] ${p.color} sticker p-7 ${p.rotate} hover:rotate-0 hover:-translate-y-2 transition-transform ${
                p.featured ? 'md:scale-105 md:py-10 z-10' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p.featured && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-pink text-paper sticker-sm px-4 py-1.5 font-extrabold text-sm rotate-[-3deg] animate-wiggle">
                  ⭐ O mais pedido
                </span>
              )}
              <h3 className="font-display font-extrabold text-3xl">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display font-extrabold text-5xl">{p.hours}</span>
              </div>
              <p className="font-hand text-2xl text-grape">{p.count}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 font-medium">
                    <span className="shrink-0 grid place-items-center w-6 h-6 rounded-full bg-mint border-2 border-ink mt-0.5">
                      <Check size={14} strokeWidth={3.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onPick(p.hoursValue)}
                className={`btn w-full mt-8 px-6 py-3.5 ${p.featured ? 'bg-pink text-paper' : 'bg-ink text-paper'}`}
              >
                Pedir orçamento
              </button>
            </article>
          ))}
        </div>
        <p className="text-center mt-10 font-hand text-2xl text-ink/70">
          Valores sob consulta — cada festa é única, o orçamento também. 😉
        </p>
      </div>
    </section>
  )
}