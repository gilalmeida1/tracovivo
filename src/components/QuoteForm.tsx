import { useState } from 'react'
import { Instagram, Mail, MessageCircle, Phone, Send } from 'lucide-react'
import { contact, instagramLink, whatsappLink } from '@/data/site'
import { burstConfetti } from './Confetti'
import { Sparkle, Star } from './Doodles'

// Deve bater com o formulário escondido em public/__forms.html
const FORM_NAME = 'orcamento'

const hourOptions = [
  { value: '', label: 'Ainda não sei' },
  { value: '2h', label: '2 horas (Pocket)' },
  { value: '3h', label: '3 horas (Festa Completa)' },
  { value: '4h+', label: '4 horas ou mais (Evento Grande)' },
]

function maskPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 3) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7)}`
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function QuoteForm({ hours, setHours }: { hours: string; setHours: (h: string) => void }) {
  const [status, setStatus] = useState<Status>('idle')
  const [phone, setPhone] = useState('')
  const [summary, setSummary] = useState('')
  const today = new Date().toISOString().slice(0, 10)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      const date = String(data.get('data') || '')
      const prettyDate = date ? date.split('-').reverse().join('/') : ''
      setSummary(
        `Oi Gil! Acabei de pedir orçamento pelo site 🎉
Nome: ${data.get('nome')}
Festa: ${data.get('tipo')}
Data: ${prettyDate}
Local: ${data.get('local') || '-'}`,
      )
      setStatus('sent')
      const btn = form.querySelector('button[type=submit]')?.getBoundingClientRect()
      burstConfetti(btn ? btn.left + btn.width / 2 : undefined, btn ? btn.top : undefined, 120)
      form.reset()
      setPhone('')
      setHours('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="orcamento" className="py-20 px-5 bg-pink relative overflow-clip">
      <Star className="absolute top-10 right-[8%] w-14 h-14 animate-wiggle" />
      <Sparkle className="absolute bottom-16 left-[5%] w-10 h-10 animate-floaty" color="#ffd23f" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div className="text-paper lg:sticky lg:top-28">
          <span className="text-6xl inline-block animate-wiggle" aria-hidden="true">🎉</span>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl leading-[0.95] mt-4">
            Bora deixar sua <span className="text-sun">festa inesquecível?</span>
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-paper/90">
            Conta os detalhes do evento e eu te mando o orçamento. As datas voam —{' '}
            <span className="font-hand text-3xl text-sun">principalmente em fim de ano!</span>
          </p>
          <ul className="mt-8 space-y-3 text-lg font-bold">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-sun">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-paper text-ink sticker-sm">
                  <Phone size={18} />
                </span>
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={instagramLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-sun">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-paper text-ink sticker-sm">
                  <Instagram size={18} />
                </span>
                @{contact.instagram}
              </a>
            </li>
            <li></li>