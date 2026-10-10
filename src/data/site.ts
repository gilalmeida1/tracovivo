// Todos os textos, contatos e dados do site estão aqui.
export const contact = {
  phoneDisplay: '(61) 99346-1625',
  whatsapp: '5561993461625',
  instagram: 'gilalmeidaart',
  email: 'contato@seuemail.com',
}

export const whatsappLink = (text = 'Oi Gil! Quero caricaturas ao vivo na minha festa ') =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`

export const instagramLink = `https://instagram.com/${contact.instagram}`

   // Caminho direto e simples que funciona localmente e na Netlify
   export const img = (file: string, w: number) => `/img/${file}`

export const nav = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#pacotes', label: 'Pacotes' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export const eventTypes = [
  { emoji: '💍', label: 'Casamentos' },
  { emoji: '🎂', label: '15 anos' },
  { emoji: '🎉', label: 'Aniversários' },
  { emoji: '💼', label: 'Corporativo' },
  { emoji: '🎓', label: 'Formaturas' },
  { emoji: '👶', label: 'Chá revelação' },
  { emoji: '🎈', label: 'Festa infantil' },
  { emoji: '💑', label: 'Bodas' },
]

export const steps = [
  {
    n: '01',
    emoji: '✍️',
    title: 'Desenho ao vivo',
    text: 'O convidado senta, faz pose e eu desenho na hora no tablet. Todo mundo assiste — vira atração da festa!',
    color: 'bg-pink',
  },
  {
    n: '02',
    emoji: '🖨️',
    title: 'Impressão na hora',
    text: 'Em poucos minutos a caricatura sai impressa em papel fotográfico, com moldura do tema do seu evento.',
    color: 'bg-sun',
  },
  {
    n: '03',
    emoji: '📲',
    title: 'Lembrança + digital',
    text: 'O convidado leva o desenho pra casa e recebe o arquivo para postar nas redes. Sua festa viraliza.',
    color: 'bg-mint',
  },
]

export const gallery = [
  { file: 'casamento.png', label: 'Casamentos', color: 'bg-pink', rotate: '-rotate-3' },
  { file: 'quinze.png', label: '15 anos', color: 'bg-grape', rotate: 'rotate-2' },
  { file: 'aniversario.png', label: 'Aniversários', color: 'bg-sun', rotate: '-rotate-1' },
  { file: 'corporativo.png', label: 'Corporativo', color: 'bg-mint', rotate: 'rotate-3' },
  { file: 'infantil.png', label: 'Festa infantil', color: 'bg-tang', rotate: '-rotate-2' },
  { file: 'familia.png', label: 'Família', color: 'bg-pink', rotate: 'rotate-1' },
]

export const packages = [
  {
    id: 'pocket',
    name: 'Pocket',
    hours: '2 horas',
    hoursValue: '2h',
    count: 'até ~30 caricaturas',
    features: [
      'Desenho digital ao vivo no tablet',
      'Impressão na hora em papel fotográfico',
      'Arquivo digital por convidado',
    ],
    featured: false,
    color: 'bg-white',
    rotate: 'md:-rotate-2',
  },
  {
    id: 'completa',
    name: 'Festa Completa',
    hours: '3 horas',
    hoursValue: '3h',
    count: 'até ~45 caricaturas',
    features: [
      'Tudo do Pocket',
      'Moldura personalizada com o tema da festa',
      'Telão com os desenhos ao vivo',
      'Galeria online para os convidados',
    ],
    featured: true,
    color: 'bg-sun',
    rotate: 'md:rotate-0',
  },
  {
    id: 'grande',
    name: 'Evento Grande',
    hours: '4h ou mais',
    hoursValue: '4h+',
    count: '60+ caricaturas',
    features: [
      'Tudo da Festa Completa',
      'Logo da empresa ou dos noivos na arte',
      'Ideal para corporativo e casamentos',
    ],
    featured: false,
    color: 'bg-white',
    rotate: 'md:rotate-2',
  },
]

export const testimonials = [
  {
    name: 'Larissa & Pedro',
    initials: 'L&P',
    event: 'Casamento · Lago Sul',
    quote: 'A fila pra caricatura não acabava! Os convidados amaram e até hoje recebo fotos dos desenhos na geladeira dos amigos.',
    color: 'bg-pink',
    rotate: '-rotate-2',
  },
  {
    name: 'Marina',
    initials: 'M',
    event: '15 anos da Júlia · Águas Claras',
    quote: 'Foi a atração da festa. A moldura com o tema ficou linda e as amigas postaram tudo no mesmo dia.',
    color: 'bg-mint',
    rotate: 'rotate-1',
  },
  {
    name: 'Equipe de RH',
    initials: 'RH',
    event: 'Confraternização · Asa Norte',
    quote: 'Profissional, pontual e super simpático(a). Engajou o time inteiro. Já queremos de novo no próximo evento.',
    color: 'bg-grape',
    rotate: '-rotate-1',
  },
]

export const faqs = [
  {
    q: 'Como funciona?',
    a: 'Eu desenho cada convidado na hora, durante a festa. É rápido (uns 5 minutinhos por desenho) e super divertido, quem tá na fila já vai se animando vendo os outros sendo desenhados!',
  },
  {
    q: 'Quanto tempo leva cada desenho?',
    a: 'Em média 5 minutos. Dá pra atender umas 12-15 pessoas por hora tranquilamente.',
  },
  {
    q: 'O que eu preciso providenciar?',
    a: 'Só uma mesinha, duas cadeiras e um ponto de luz por perto. Todo o material de desenho eu levo!',
  },
  {
    q: 'Vocês atendem fora de Brasília?',
    a: 'Atendo todo o DF e entorno. Para outras cidades, é só chamar que a gente combina o deslocamento.',
  },
  {
    q: 'Dá para personalizar com o tema da festa?',
    a: 'Dá sim! Posso adaptar o estilo do desenho, as cores e até incluir elementos do tema da sua festa.',
  },
]