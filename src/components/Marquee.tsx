import { eventTypes } from '@/data/site'

export function Marquee() {
  // Duplica os itens para o loop infinito ficar suave
  const items = [...eventTypes, ...eventTypes]

  return (
    <div className="relative py-6 my-8 -rotate-2 scale-[1.03]">
      <div className="bg-ink text-paper border-y-[3px] border-ink overflow-hidden">
        <div className="flex w-max animate-marquee py-4">
          {items.map((e, i) => (
            <span
              key={i}
              className="flex items-center gap-3 px-6 font-display font-extrabold text-2xl md:text-3xl whitespace-nowrap"
            >
              <span aria-hidden="true">{e.emoji}</span>
              {e.label}
              <span className="text-sun ml-6" aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}