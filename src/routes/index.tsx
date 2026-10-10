import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { HowItWorks } from '@/components/HowItWorks'
import { Gallery } from '@/components/Gallery'
import { DoodlePad } from '@/components/DoodlePad'
import { Packages } from '@/components/Packages'
import { Testimonials } from '@/components/Testimonials'
import { Faq } from '@/components/Faq'
import { QuoteForm } from '@/components/QuoteForm'
import { Footer } from '@/components/Footer'
import { WhatsAppFab } from '@/components/WhatsAppFab'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [hours, setHours] = useState('')

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const pickPackage = (h: string) => {
    setHours(h)
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <Gallery />
        <DoodlePad />
        <Packages onPick={pickPackage} />
        <Testimonials />
        <Faq />
        <QuoteForm hours={hours} setHours={setHours} />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}