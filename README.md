# Lady-J Homepage Clone

Clone fiel da homepage do site [Lady-J.it](https://www.lady-j.it/) - O talent show para DJs mulheres que está revolucionando a cena da música eletrônica italiana.

## 🎵 Sobre o Projeto

Este é um clone completo e responsivo da homepage oficial do Lady-J, desenvolvido com as mais modernas tecnologias web para replicar fielmente o design, animações e experiência do usuário do site original.

## ✨ Características do Site

### 🎯 Conceito
Lady-J é um talent show inovador focado em empoderar mulheres DJs, oferecendo mentorship com profissionais experientes e oportunidades reais de crescimento na indústria da música eletrônica.

### 🌟 Principais Seções
- **Hero Section** - Texto animado "ARE YOU READY FOR THE SUMMER EDITION?"
- **Estatísticas** - +50K interações, +2K tracks, +250K pessoas
- **DJs Grid** - Showcase das participantes com sistema de votação
- **Tutors Section** - Art Director Tommy Vee + equipe de mentores
- **Timeline** - Processo em 5 etapas (Recruiting → Casting → Training → Storytelling → Live Events)
- **Eventos** - Tour pelos beach clubs mais exclusivos da Itália
- **News** - Últimas notícias e atualizações
- **Partners** - Sponsors e parceiros técnicos

## 🛠 Stack Tecnológica

- ⚛️ **React 18** - Latest React version
- ⚡ **Next.js 15** - React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework com configuração customizada
- 🏗️ **TypeScript** - Static type checking
- ✨ **ESLint** - Code linting
- 📁 **Organized src/ structure** - Clean project organization

## 🎨 Design Features

### Paleta de Cores Lady-J
- **Primary Pink**: `#FF0080` - Cor principal vibrante
- **Purple**: `#8B00FF` - Gradientes e acentos
- **Neon Cyan**: `#00FFFF` - Destaques especiais
- **Dark Background**: `#0A0A0A` - Fundo principal
- **Gray Surfaces**: `#1A1A1A` - Cards e superfícies

### Animações e Efeitos
- 🌀 **Texto animado** com efeito de digitação
- 💫 **Elementos flutuantes** com animação contínua
- ✨ **Hover effects** sofisticados nos cards
- 🎭 **Gradientes neon** dinâmicos
- 📱 **Transições suaves** entre seções

### Responsividade
- 📱 **Mobile-first** design approach
- 💻 **Desktop enhancements** com layouts expandidos
- 🖥️ **Large screen optimization** para monitores 4K
- 🎯 **Touch-friendly** interface elements

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3001](http://localhost:3001) no seu navegador para ver o resultado.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx          # Homepage principal
│   ├── layout.tsx        # Layout global
│   └── globals.css       # Estilos globais customizados
└── components/
    ├── Navbar.tsx        # Navegação com scroll animado
    ├── HeroSection.tsx   # Seção hero com texto animado
    ├── StatsSection.tsx  # Estatísticas da primeira edição
    ├── DJsGrid.tsx       # Grid das DJs participantes
    ├── TutorsSection.tsx # Art Director e tutors
    ├── TimelineSection.tsx # Como funciona (5 fases)
    ├── EventsSection.tsx # Beach clubs e eventos
    ├── NewsSection.tsx   # Últimas notícias
    ├── PartnersSection.tsx # Sponsors e parceiros
    ├── AboutSection.tsx  # Story (opcional)
    └── Footer.tsx        # Rodapé completo
```

## 🎯 Componentes Principais

### 🏠 `HeroSection`
- Texto animado com efeito de digitação
- Partículas flutuantes de fundo
- Call-to-actions com hover effects
- Indicador de scroll animado

### 📊 `StatsSection`
- Cards com números impressionantes
- Animações on-scroll
- Cores temáticas diferenciadas
- Layout responsivo

### 👩‍🎤 `DJsGrid`
- Grid responsivo das participantes
- Sistema de votação integrado
- Links para redes sociais
- Hover effects sofisticados

### 🎓 `TutorsSection`
- Destaque para Art Director Tommy Vee
- Grid dos tutors profissionais
- Informações de especialidade
- Design em cards elegantes

### 📅 `TimelineSection`
- 5 fases do processo Lady-J
- Indicadores de progresso
- Cards informativos detalhados
- Design cronológico visual

### 🏖️ `EventsSection`
- Beach clubs parceiros
- Datas e localizações
- Features especiais de cada evento
- Integration com 105 Summer Festival

## 🎨 Customizações Tailwind

### Cores Customizadas
```css
'ladyj-pink': '#FF0080'      // Rosa vibrante principal
'ladyj-purple': '#8B00FF'    // Roxo para gradientes  
'ladyj-neon': '#00FFFF'      // Ciano neon para destaques
'ladyj-dark': '#0A0A0A'      // Preto profundo de fundo
'ladyj-gray': '#1A1A1A'      // Cinza para cards
'ladyj-accent': '#FF6B9D'    // Rosa claro para acentos
```

### Animações Personalizadas
```css
animate-float         // Flutuação suave contínua
animate-glow          // Efeito de brilho pulsante
animate-slide-in      // Entrada deslizante
animate-scroll-text   // Texto em scroll horizontal
```

### Gradientes Especiais
```css
bg-gradient-neon      // Gradiente rosa → roxo → ciano
bg-gradient-dark      // Gradiente escuro suave
```

## 📱 Funcionalidades Implementadas

- ✅ **Navegação suave** entre seções (smooth scroll)
- ✅ **Menu mobile** responsivo com animação
- ✅ **Texto animado** no hero com efeito typewriter
- ✅ **Partículas flutuantes** decorativas
- ✅ **Cards interativos** com hover effects
- ✅ **Sistema de votação** das DJs (UI mockup)
- ✅ **Timeline visual** do processo
- ✅ **Grid responsivo** para todos os layouts
- ✅ **Footer completo** com links e newsletter
- ✅ **Animations on scroll** (intersection observer)
- ✅ **Custom scrollbar** com tema Lady-J

## 🎯 Fidelidade ao Original

Este clone mantém:
- ✅ **Estrutura visual** idêntica ao site original
- ✅ **Paleta de cores** oficial
- ✅ **Tipografia** e hierarquia de texto
- ✅ **Layout responsivo** para todos os dispositivos
- ✅ **Animações** e efeitos visuais
- ✅ **Conteúdo real** extraído do site oficial
- ✅ **Funcionalidades interativas** (navegação, hovers, etc.)

## 🛠 Dados Mockados

O projeto inclui dados realistas para:
- 👩‍🎤 **DJs participantes** com nomes, percentuais e links
- 🎓 **Tutors** com especialidades e experiência
- 📅 **Eventos** com datas, locais e características
- 📰 **Notícias** com conteúdo real do site
- 🤝 **Parceiros** com logos e categorias
- 🏆 **Estatísticas** da primeira edição

This project uses:
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize fonts
- [Tailwind CSS](https://tailwindcss.com/) extensively customized for Lady-J branding

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
