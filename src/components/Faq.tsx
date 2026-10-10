import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '@/data/site'
import { SectionTitle } from './Doodles'

export function Faq() {
  const [open, setOpen] = useState<number>(-1)

  return (
    <section id="duvidas" className="py-20 px-5">
      <div className="max-w-3xl mx-auto">
        <SectionTitle kicker="bora tirar" title="Dúvidas" />
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                style={{
                  borderRadius: '1.5rem',
                  border: '2.5px solid #1b1030',
                  boxShadow: '4px 4px 0 #1b1030',
                  backgroundColor: isOpen ? '#ffd23f' : '#ffffff',
                  marginBottom: '1rem',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    padding: '1.25rem 1.5rem',
                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: '1.125rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span>{f.q}</span>
                  <span
                    style={{
                      display: 'grid',
                      placeItems: 'center',
                      width: '2.25rem',
                      height: '2.25rem',
                      borderRadius: '9999px',
                      border: '2.5px solid #1b1030',
                      backgroundColor: isOpen ? '#ff3d7f' : '#ffd23f',
                      color: isOpen ? '#fff6e9' : '#1b1030',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      flexShrink: 0,
                    }}
                  >
                    <Plus size={18} strokeWidth={3} />
                  </span>
                </button>

                {/* Animação suave de abrir/fechar */}
                <div
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.3s ease',
                  }}
                >
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                    <p
                      style={{
                        fontSize: '1.125rem',
                        color: 'rgba(27, 16, 48, 0.85)',
                        lineHeight: 1.6,
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}