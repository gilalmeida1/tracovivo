import { MessageCircle } from 'lucide-react'
import { img, whatsappLink } from '@/data/site'
import { Arrow, Sparkle, Star } from './Doodles'

export function Hero() {
  return (
    <section id="topo" className="relative pt-32 md:pt-36 pb-16 px-5 overflow-hidden">
      <Sparkle className="absolute top-28 left-[6%] w-8 h-8 animate-wiggle" color="#00c2a8" />
      <Star className="absolute bottom-24 left-[44%] w-10 h-10 animate-floaty hidden md:block" color="#ff8a3d" />
      {/* Brilho agora em Azul Elétrico */}
      <Sparkle className="absolute top-40 right-[4%] w-6 h-6 animate-wiggle" color="#0044ff" />
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3 mb-6 animate-pop">
            <span className="inline-flex items-center gap-2 rounded-full bg-white sticker-sm px-4 py-1.5 font-bold text-sm">
              📍 Festas em Brasília - DF
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-3 py-1.5 font-extrabold text-sm tracking-widest">
              <span className="w-2.5 h-2.5 rounded-full bg-pink animate-blink" /> VIVO
            </span>
          </div>
          <h1 className="font-display font-extrabold text-[3.4rem] leading-[0.92] sm:text-7xl lg:text-[5.6rem] tracking-tight">
            Seus convidados <br />
            <span className="relative inline-block text-pink">
              viram arte
              <svg
                viewBox="0 0 300 30"
                className="absolute -bottom-3 left-0 w-full h-5"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="draw-path"
                  d="M4 18 C 60 4, 120 28, 180 14 S 270 6, 296 16"
                  stroke="#ffd23f"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            {/* Mudança aqui: Selo "ao vivo" agora em Azul Elétrico (bg-electric) com texto branco (text-paper) */}
            <span className="inline-block bg-electric text-paper px-3 rounded-2xl sticker-sm -rotate-2 mt-3">ao vivo.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl max-w-xl leading-relaxed text-ink/85">
            Caricaturas desenhadas <strong>a lápis</strong>, na hora, durante a sua festa. Cada convidado leva
            a sua <span className="marker font-semibold">arte exclusiva</span> — a lembrancinha que ninguém joga fora.
          </p>
          <p className="font-hand text-3xl text-grape mt-3 -rotate-1">A lembrancinha que ninguém joga fora. 💛</p>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a href="#orcamento" className="btn bg-pink text-paper text-lg px-7 py-4">
              Quero na minha festa! 🎉
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="btn bg-[#25d366] text-ink text-lg px-6 py-4"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm font-semibold text-ink/60">
            Casamentos, 15 anos, aniversários e eventos corporativos
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <Arrow className="absolute -left-20 top-6 w-28 hidden xl:block -scale-x-100 rotate-[200deg]" />
          <div className="relative rounded-[2rem] bg-white p-3 sticker rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src={img('hero.png', 1000)}
              alt="Artista desenhando caricatura ao vivo durante uma festa"
              width={1000}
              height={1000}
              className="rounded-[1.5rem] w-full aspect-square object-cover"
              fetchPriority="high"
            />
          </div>
          <div
            className="absolute -top-6 -left-4 md:-left-10 rounded-2xl bg-sun sticker-sm px-4 py-3 animate-floaty"
            style={{ '--r': '-8deg' } as React.CSSProperties}
          >
            <p className="font-display font-extrabold text-3xl leading-none">~5 min</p>
            <p className="font-hand text-xl leading-none">por desenho</p>
          </div>
          <div
            className="absolute -bottom-10 -right-2 md:-right-8 w-36 md:w-44 rounded-2xl bg-white p-2 sticker-sm animate-floaty"
            style={{ '--r': '6deg', animationDelay: '1.2s' } as React.CSSProperties}
          >
            <img
              src={img('casamento.png', 360)}
              alt="Exemplo de caricatura de casal de noivos"
              width={360}
              height={360}
              className="rounded-xl aspect-square object-cover"
            />
            <p className="font-hand text-xl text-center leading-none mt-1">pronto! ✨</p>
          </div>
        </div>
      </div>
    </section>
  )
}