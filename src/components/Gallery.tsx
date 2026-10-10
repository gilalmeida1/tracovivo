import { useEffect, useState } from 'react'
import { Instagram, X } from 'lucide-react'
import { gallery, img, instagramLink, contact } from '@/data/site'
import { SectionTitle } from './Doodles'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((a) => (a === null ? a : (a + 1) % gallery.length))
      if (e.key === 'ArrowLeft') setActive((a) => (a === null ? a : (a - 1 + gallery.length) % gallery.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section id="galeria" className="py-20 px-5 bg-grape relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#fff6e9 1.5px, transparent 1.5px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <SectionTitle kicker="tem pra todo tipo de festa" title="Galeria de sorrisos" light />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {gallery.map((g, i) => (
            <button
              key={g.file}
              onClick={() => setActive(i)}
              className={`reveal group text-left rounded-[1.75rem] bg-paper p-2.5 sticker ${g.rotate} hover:rotate-0 hover:scale-[1.04] hover:z-10 transition-transform duration-300 cursor-zoom-in`}
              aria-label={`Ampliar caricatura: ${g.label}`}
            >
              <div className="overflow-hidden rounded-[1.3rem] bg-white">
                <img
                  src={img(g.file, 600)}
                  alt={`Caricatura digital — ${g.label}`}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span
                className={`inline-block mt-3 mb-1 ml-1 rounded-full ${g.color} border-[2.5px] border-ink px-3 py-1 font-extrabold text-sm md:text-base`}
              >
                {g.label}
              </span>
            </button>
          ))}
        </div>
        <div className="text-center mt-14">
          <a href={instagramLink} target="_blank" rel="noreferrer" className="btn bg-sun text-ink text-lg px-7 py-4">
            <Instagram size={20} /> Veja mais no @{contact.instagram}
          </a>
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-ink/85 backdrop-blur-sm grid place-items-center p-5"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={gallery[active].label}
        >
          <div className="relative max-w-2xl w-full animate-pop" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-[2rem] bg-paper p-3 sticker -rotate-1">
              <img
                src={img(gallery[active].file, 1200)}
                alt={`Caricatura digital — ${gallery[active].label}`}
                className="w-full rounded-[1.5rem] max-h-[75vh] object-contain bg-white"
              />
              <p className="font-hand text-4xl text-center mt-2">{gallery[active].label} ✨</p>
            </div>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-4 -right-4 grid place-items-center w-12 h-12 rounded-full bg-pink text-paper sticker-sm"
              aria-label="Fechar"
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}