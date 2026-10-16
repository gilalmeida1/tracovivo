import { testimonials } from '@/data/site'
import { SectionTitle, Star } from './Doodles'

// Paleta de cores para os círculos das iniciais
const avatarColors = ['bg-pink', 'bg-electric', 'bg-grape', 'bg-tang', 'bg-mint']

// Função para gerar iniciais a partir do nome (ex: "Mariana S." → "MS")
function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2)
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 px-5 bg-mint relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="quem já viveu" title="Festa que vira história" />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal relative rounded-[2rem] bg-paper sticker p-7 pt-12 hover:rotate-0 transition-transform`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="absolute -top-8 left-6 font-display font-extrabold text-8xl text-pink leading-none" aria-hidden="true">
                "
              </span>
              <div className="flex gap-1 mb-3" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-5 h-5" />
                ))}
              </div>
              
              {/* ✅ Ajustado: t.text em vez de t.quote */}
              <blockquote className="text-lg leading-relaxed font-medium">{t.text}</blockquote>
              
              <figcaption className="flex items-center gap-3 mt-6">
                <span
                  className={`grid place-items-center w-12 h-12 rounded-full ${avatarColors[i % avatarColors.length]} text-paper border-[2.5px] border-ink font-extrabold text-sm`}
                >
                  {/* ✅ Gerado automaticamente a partir do nome */}
                  {getInitials(t.name)}
                </span>
                <span>
                  <span className="block font-extrabold">{t.name}</span>
                  {/* ✅ Ajustado: t.role em vez de t.event */}
                  <span className="block text-sm text-ink/60">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}