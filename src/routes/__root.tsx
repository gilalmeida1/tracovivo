import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import '../styles.css'

const siteName = 'TraçoVivo — Caricaturas ao vivo em Brasília'
const siteDescription =
  'Caricaturas desenhadas a lápis, na hora, durante a sua festa. Cada convidado leva sua arte exclusiva — a lembrancinha que ninguém joga fora. Casamentos, 15 anos, aniversários e eventos corporativos em Brasília - DF.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteName },
      { name: 'description', content: siteDescription },
      { property: 'og:title', content: siteName },
      { property: 'og:description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'theme-color', content: '#ff3d7f' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Caveat:wght@600;700&display=swap',
      },
      // AQUI está a mágica: o favicon agora é o seu logo!
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      // Fallback para navegadores antigos
      { rel: 'icon', href: '/favicon.svg' },
      // Para quando alguém salvar o site no celular (ícone da home screen)
      { rel: 'apple-touch-icon', href: '/favicon.svg' },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="font-display font-extrabold text-6xl text-pink mb-4">404</h1>
      <p className="text-xl text-ink/80 mb-8">Ops! Essa página não existe.</p>
      <Link to="/" className="btn bg-pink text-paper px-6 py-3">
        Voltar para o início
      </Link>
    </div>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}