import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '@/data/site'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 pt-3">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-300 ${
          scrolled ? 'bg-paper/95 backdrop-blur sticker-sm' : 'bg-transparent border-[2.5px] border-transparent'
        }`}
      >
        <Logo />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-full font-semibold hover:bg-sun hover:-rotate-2 transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#orcamento" className="btn bg-pink text-paper px-5 py-2.5 hidden sm:inline-flex">
            Pedir orçamento ✨
          </a>
          <button
            className="lg:hidden grid place-items-center w-11 h-11 rounded-full bg-sun sticker-sm"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="lg:hidden max-w-6xl mx-auto mt-3 rounded-3xl bg-paper sticker p-4 flex flex-col gap-1 animate-pop"
          aria-label="Menu móvel"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-2xl font-bold text-lg hover:bg-sun"
            >
              {item.label}
            </a>
          ))}
          <a href="#orcamento" onClick={() => setOpen(false)} className="btn bg-pink text-paper px-5 py-3 mt-2">
            Pedir orçamento ✨
          </a>
        </nav>
      )}
    </header>
  )
}