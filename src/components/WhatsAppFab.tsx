import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/data/site'

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 grid place-items-center w-16 h-16 rounded-full bg-[#25d366] text-ink sticker-sm hover:scale-110 hover:-rotate-12 transition-transform"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink border-2 border-ink animate-blink" />
    </a>
  )
}