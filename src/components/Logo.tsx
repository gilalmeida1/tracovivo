export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#topo" className="flex items-center gap-2.5 group" aria-label="TraçoVivo — início">
      <span className="relative grid place-items-center w-11 h-11 rounded-2xl bg-pink sticker-sm rotate-[-8deg] group-hover:rotate-[8deg] transition-transform">
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <path d="M5 22 C 9 10, 14 26, 18 14 S 25 8, 27 12" stroke="#fff6e9" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="27" cy="12" r="3" fill="#ffd23f" stroke="#1b1030" strokeWidth="1.5" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display font-extrabold text-2xl tracking-tight ${light ? 'text-paper' : 'text-ink'}`}>
          Traço<span className="text-pink">Vivo</span>
        </span>
        {/* Mudança aqui: Seu nome agora em Azul Elétrico para dar o contraste Pop Art */}
        <span className={`block font-hand text-lg -mt-0.5 font-bold ${light ? 'text-sun' : 'text-electric'}`}>
          por Gil Almeida
        </span>
      </span>
    </a>
  )
}