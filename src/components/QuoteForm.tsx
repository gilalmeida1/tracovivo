import { useState } from 'react'
import { Instagram, Mail, MessageCircle, Phone, Send } from 'lucide-react'
import { contact, eventTypes, instagramLink, whatsappLink } from '@/data/site'
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
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 hover:text-sun">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-paper text-ink sticker-sm">
                  <Mail size={18} />
                </span>
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-[2.25rem] bg-paper sticker p-6 md:p-9 rotate-1">
          {status === 'sent' ? (
            <div className="text-center py-10 animate-pop">
              <p className="text-7xl" aria-hidden="true">🥳</p>
              <h3 className="font-display font-extrabold text-4xl mt-4">Recebi! Oba!</h3>
              <p className="mt-3 text-lg text-ink/80 max-w-md mx-auto">
                Seu pedido chegou direitinho. Já já te respondo com o orçamento. Quer agilizar? Me chama no WhatsApp:
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={whatsappLink(summary)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn bg-[#25d366] text-ink px-6 py-3.5"
                >
                  <MessageCircle size={18} /> Mandar no WhatsApp
                </a>
                <button onClick={() => setStatus('idle')} className="btn bg-white px-6 py-3.5">
                  Novo pedido
                </button>
              </div>
            </div>
          ) : (
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="hidden">
                <label>
                  Não preencha: <input name="bot-field" />
                </label>
              </p>

              <div>
                <h3 className="font-display font-extrabold text-3xl">Preencha e receba seu orçamento</h3>
                <p className="font-hand text-2xl text-pink">leva menos de 1 minuto ⏱️</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Seu nome *">
                  <input className="field" name="nome" required placeholder="Como posso te chamar?" autoComplete="name" />
                </Field>
                <Field label="WhatsApp *">
                  <input
                    className="field"
                    name="whatsapp"
                    required
                    inputMode="tel"
                    placeholder="(61) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(maskPhone(e.target.value))}
                    pattern=".{15,}"
                    title="Informe DDD + número"
                    autoComplete="tel"
                  />
                </Field>
              </div>

              <Field label="E-mail">
                <input className="field" type="email" name="email" placeholder="voce@email.com" autoComplete="email" />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Tipo de festa *">
                  <select className="field" name="tipo" required defaultValue="">
                    <option value="" disabled>Escolha...</option>
                    {eventTypes.map((t) => (
                      <option key={t.label} value={t.label}>{t.emoji} {t.label}</option>
                    ))}
                    <option value="Outro">✨ Outro</option>
                  </select>
                </Field>
                <Field label="Data do evento *">
                  <input className="field" type="date" name="data" required min={today} />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Local / bairro">
                  <input className="field" name="local" placeholder="Ex: Lago Sul, Águas Claras..." />
                </Field>
                <Field label="Nº de convidados">
                  <input className="field" type="number" min={1} name="convidados" placeholder="Ex: 120" />
                </Field>
              </div>

              <fieldset>
                <legend className="block font-bold mb-2">Quantas horas de desenho?</legend>
                <input type="hidden" name="horas" value={hours} />
                <div className="flex flex-wrap gap-2">
                  {hourOptions.map((o) => (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => setHours(o.value)}
                      className={`rounded-full border-[2.5px] border-ink px-4 py-2 font-bold text-sm transition-all ${
                        hours === o.value ? 'bg-sun shadow-[3px_3px_0_#1b1030] -rotate-2' : 'bg-white hover:bg-sun/40'
                      }`}
                      aria-pressed={hours === o.value}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <Field label="Conta mais sobre a festa">
                <textarea
                  className="field min-h-28"
                  name="mensagem"
                  rows={4}
                  placeholder="Tema, horário, ideias para a moldura..."
                />
              </Field>

              {status === 'error' && (
                <p className="rounded-2xl bg-tang/20 border-2 border-tang p-3 font-semibold">
                  Ops, não consegui enviar agora. Tenta de novo ou me chama no{' '}
                  <a href={whatsappLink()} className="underline" target="_blank" rel="noreferrer">WhatsApp</a>!
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn w-full bg-pink text-paper text-xl px-6 py-4 disabled:opacity-70"
              >
                {status === 'sending' ? 'Enviando... ✏️' : 'Quero meu orçamento'} <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-bold mb-1.5">{label}</span>
      {children}
    </label>
  )
}