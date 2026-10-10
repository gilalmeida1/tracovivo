import { useEffect, useRef, useState } from 'react'
import { Eraser } from 'lucide-react'

const colors = ['#1b1030', '#ff3d7f', '#00c2a8', '#7b4dff', '#ff8a3d']

export function DoodlePad() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const last = useRef<{ x: number; y: number } | null>(null)
  const [color, setColor] = useState(colors[1])
  const [hasDrawn, setHasDrawn] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * ratio
      canvas.height = canvas.offsetHeight * ratio
      canvas.getContext('2d')?.scale(ratio, ratio)
      setHasDrawn(false)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  const point = (e: React.PointerEvent) => ({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
  const onDown = (e: React.PointerEvent) => {
    drawing.current = true
    last.current = point(e)
    canvasRef.current?.setPointerCapture(e.pointerId)
    setHasDrawn(true)
  }
  const onMove = (e: React.PointerEvent) => {
    if (!drawing.current || !last.current) return
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const p = point(e)
    ctx.strokeStyle = color
    ctx.lineWidth = e.pressure && e.pointerType === 'pen' ? 2 + e.pressure * 8 : 5
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.moveTo(last.current.x, last.current.y)
    ctx.lineTo(p.x, p.y)
    ctx.stroke()
    last.current = p
  }
  const onUp = () => {
    drawing.current = false
    last.current = null
  }
  const clear = () => {
    const canvas = canvasRef.current
    canvas?.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height)
    setHasDrawn(false)
  }

  return (
    <section className="py-16 px-5">
      <div className="reveal max-w-5xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-8 items-center rounded-[2.5rem] bg-sun sticker p-7 md:p-10">
        <div>
          <p className="font-hand text-3xl text-grape -rotate-2">pausa pra brincar</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-none mt-1">Arrisca um traço?</h2>
          <p className="mt-4 text-lg text-ink/80">
            Rabiscar aqui com o dedo ou o mouse. Na festa, quem desenha sou eu, e o resultado vai pra parede da galera. 😄
          </p>
          <div className="flex items-center gap-2 mt-6">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-10 h-10 rounded-full border-[3px] border-ink transition-transform ${
                  color === c ? 'scale-125 -rotate-12 shadow-[3px_3px_0_#1b1030]' : 'hover:scale-110'
                }`}
                style={{ background: c }}
                aria-label={`Cor ${c}`}
              />
            ))}
            <button
              onClick={clear}
              className="ml-2 grid place-items-center w-10 h-10 rounded-full bg-white border-[3px] border-ink hover:rotate-12 transition-transform"
              aria-label="Limpar desenho"
            >
              <Eraser size={18} />
            </button>
          </div>
        </div>
        <div className="relative rounded-[1.75rem] bg-white sticker-sm overflow-hidden">
          <canvas
            ref={canvasRef}
            className="block w-full h-64 md:h-72 touch-none cursor-crosshair"
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerLeave={onUp}
            aria-label="Área de desenho"
          />
          {!hasDrawn && (
            <p className="absolute inset-0 grid place-items-center pointer-events-none font-hand text-4xl text-ink/30">
              desenhe aqui ✏️
            </p>
          )}
        </div>
      </div>
    </section>
  )
}