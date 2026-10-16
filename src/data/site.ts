export const siteName = 'TraçoVivo — Caricaturas ao vivo em Brasília'
export const siteDescription =
  'Caricaturas desenhadas a lápis, na hora, durante a sua festa. Cada convidado leva sua arte exclusiva — a lembrancinha que ninguém joga fora. Casamentos, 15 anos, aniversários e eventos corporativos em Brasília - DF.'

export const whatsappNumber = '5561993461625'
export const whatsappLink = () => `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20caricaturas%20ao%20vivo.`

// ✅ Links e Contatos (que a Galeria e o Footer precisam)
export const instagramLink = 'https://instagram.com/gilalmeidaart'
export const contact = {
  phone: '(61) 99346-1625',
  email: 'contato@gilalmeidaarte.com.br',
  instagram: '@gilalmeidaart'
}

export const nav = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#pacotes', label: 'Pacotes' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#duvidas', label: 'Dúvidas' },
]

// ✅ Para o Marquee (faixa de texto)
export const eventTypes = ['Casamentos', '15 Anos', 'Aniversários', 'Corporativo', 'Festas Infantis', 'Família']

// ✅ Para o "Como Funciona"
export const steps = [
  {
    step: '01',
    icon: '✏️',
    title: 'Desenho ao vivo',
    description: 'O convidado senta, faz pose e eu desenho na hora, a lápis, no papel. Todo mundo assiste e se diverte — vira a atração da festa!',
  },
  {
    step: '02',
    icon: '🎁',
    title: 'Arte exclusiva',
    description: 'Em poucos minutos, a caricatura é finalizada e entregue diretamente ao convidado, como uma lembrança física, única e cheia de alma.',
  },
  {
    step: '03',
    icon: '💛',
    title: 'Lembrança eterna',
    description: 'Diferente de fotos que se perdem no celular, o desenho a lápis é uma recordação tangível e especial que ninguém joga fora.',
  },
]

export const packages = [
  {
    name: 'Pocket',
    duration: '2 horas',
    price: 'Sob consulta',
    features: [
      'Desenho a lápis no papel',
      'Até 20-25 convidados',
      'Ideal para churrascos e reuniões menores',
      'Deslocamento incluso no DF',
    ],
    color: 'bg-mint',
    highlight: false,
  },
  {
    name: 'Festa Completa',
    duration: '3 horas',
    price: 'Sob consulta',
    features: [
      'Desenho a lápis no papel',
      'Até 35-40 convidados',
      'Perfeito para aniversários e 15 anos',
      'Deslocamento incluso no DF',
      'Opção de tema personalizado',
    ],
    color: 'bg-pink',
    highlight: true,
  },
  {
    name: 'Evento Grande',
    duration: '4 horas ou mais',
    price: 'Sob consulta',
    features: [
      'Desenho a lápis no papel',
      'Até 50+ convidados',
      'Ideal para casamentos e corporativo',
      'Deslocamento incluso no DF',
      'Opção de tema personalizado',
    ],
    color: 'bg-sun',
    highlight: false,
  },
]

export const gallery = [
  { file: 'casamento.png', label: 'Casamentos', color: 'bg-pink', rotate: '-rotate-3' },
  { file: 'quinze.png', label: '15 Anos', color: 'bg-mint', rotate: 'rotate-2' },
  { file: 'aniversario.png', label: 'Aniversários', color: 'bg-sun', rotate: '-rotate-2' },
  { file: 'corporativo.png', label: 'Corporativo', color: 'bg-grape', rotate: 'rotate-3' },
  { file: 'infantil.png', label: 'Infantil', color: 'bg-tang', rotate: '-rotate-1' },
  { file: 'familia.png', label: 'Família', color: 'bg-pink', rotate: 'rotate-1' },
]

export const testimonials = [
  {
    name: 'Mariana S.',
    role: 'Noiva',
    text: 'Foi a atração principal do casamento! Os convidados amaram receber o desenho a lápis, é muito mais especial e pessoal que uma foto comum.',
  },
  {
    name: 'Carlos E.',
    role: 'Aniversariante',
    text: 'O Gil tem um traço incrível e faz todo mundo rir na hora da pose. A lembrança no papel ficou linda e todo mundo quis levar a sua!',
  },
  {
    name: 'Fernanda L.',
    role: 'Organizadora de Eventos',
    text: 'Contratamos para um evento corporativo e foi um sucesso absoluto. Profissionalismo, pontualidade e arte de verdade.',
  },
]

export const faqs = [
  {
    q: 'Como funciona?',
    a: 'Eu desenho cada convidado na hora, a lápis, durante a festa. É rápido (uns 5 minutinhos por desenho) e super divertido — quem tá na fila já vai se animando vendo os outros sendo desenhados!',
  },
  {
    q: 'Quanto tempo leva cada desenho?',
    a: 'Em média 5 minutos. Dá pra atender umas 12 a 15 pessoas por hora tranquilamente.',
  },
  {
    q: 'O que eu preciso providenciar?',
    a: 'Só uma mesinha, duas cadeiras e um ponto de luz por perto. Todo o material de desenho (lápis, papel, prancheta) eu levo!',
  },
  {
    q: 'Vocês atendem fora de Brasília?',
    a: 'Atendo todo o DF e entorno. Para outras cidades, é só chamar que a gente combina o deslocamento.',
  },
  {
    q: 'Dá para personalizar com o tema da festa?',
    a: 'Dá sim! Posso adaptar o estilo do desenho, usar papéis coloridos ou incluir pequenos elementos do tema da sua festa no traço.',
  },
]

// Função para caminhos de imagem
export const img = (file: string, w: number) => `/img/${file}`