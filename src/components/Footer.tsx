import { Instagram, MessageCircle } from 'lucide-react'
import { instagramLink, whatsappLink } from '@/data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-ink text-paper px-5 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Logo light />
          <p className="text-paper/70 text-center md:text-left">
            Caricaturas digitais ao vivo para festas · Brasília - DF
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center w-12 h-12 rounded-full bg-[#25d366] text-ink border-[2.5px] border-paper hover:-rotate-12 transition-transform"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center w-12 h-12 rounded-full bg-pink text-paper border-[2.5px] border-paper hover:rotate-12 transition-transform"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
      <p className="max-w-6xl mx-auto mt-10 pt-6 border-t border-paper/15 text-sm text-paper/50 text-center md:text-left">
        © {new Date().getFullYear()} TraçoVivo · Gil Almeida — feito com muito traço e confete ✨
      </p>
    </footer>
  )
}