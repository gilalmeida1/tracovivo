const palette = ['#ff3d7f', '#ffd23f', '#00c2a8', '#7b4dff', '#ff8a3d']

export function burstConfetti(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 90) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span')
    const size = 6 + Math.random() * 8
    Object.assign(el.style, {
      position: 'fixed',
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${size * (Math.random() > 0.5 ? 1 : 0.45)}px`,
      background: palette[i % palette.length],
      borderRadius: Math.random() > 0.6 ? '999px' : '2px',
      pointerEvents: 'none',
      zIndex: '100',
    })
    document.body.appendChild(el)
    const angle = Math.random() * Math.PI * 2
    const velocity = 180 + Math.random() * 320
    const dx = Math.cos(angle) * velocity
    const dy = Math.sin(angle) * velocity - 200
    el.animate(
      [
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy + 500}px) rotate(${Math.random() * 720}deg)`, opacity: 0 },
      ],
      { duration: 1400 + Math.random() * 900, easing: 'cubic-bezier(.2,.7,.4,1)' },
    ).onfinish = () => el.remove()
  }
}