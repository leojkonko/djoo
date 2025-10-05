'use client'

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Scelte le Lady-J 2025!',
      date: '19 Maggio 2025',
      excerpt: 'Chiusi i casting del 13 maggio, sono state scelte le 5 Lady-J che si contenderanno i 3 posti disponibili per le finali del nostro talent...',
      content: 'Chiusi i casting del 13 maggio, sono state scelte le 5 Lady-J che si contenderanno i 3 posti disponibili per le finali del nostro talent, che le vedranno protagoniste di 3 eventi pazzeschi nelle location di Ibiza, Mykonos e St Tropez! A breve potrete votare la vostra Lady-J preferita registrandovi al sito Lady-J.it e distribuire i 5 voti a disposizione a chi vorrete voi. Don\'t miss it!',
      category: 'CASTING'
    },
    {
      id: 2,
      title: '105 Summer Festival 2025',
      date: '11 Marzo 2025',
      excerpt: 'L\'estate 2025 si accende con il 105 Summer Festival, il tour che porta la musica live nelle piazze più belle d\'Italia!',
      content: 'L\'estate 2025 si accende con il 105 Summer Festival, il tour che porta la musica live nelle piazze più belle d\'Italia! Un evento imperdibile per gli amanti delle hit del momento, un\'occasione unica per le nostre DJ emergenti di dominare il palco! Dopo il successo delle edizioni passate, il festival torna con una lineup esplosiva e tappe che promettono serate indimenticabili.',
      category: 'FESTIVAL'
    },
    {
      id: 3,
      title: 'Al via la fase di Recruiting!',
      date: '23 Febbraio 2025',
      excerpt: 'Dal 1 marzo 2025 inizierà la fase di recruiting per la ricerca delle nostre nuove Lady-J.',
      content: 'Dal 1 marzo 2025 inizierà la fase di recruiting per la ricerca delle nostre nuove Lady-J. Un\'opportunità unica per entrare nel mondo della musica elettronica supportate dai migliori professionisti del settore. Invia la tua candidatura!',
      category: 'RECRUITING'
    },
    {
      id: 4,
      title: 'I nuovi Tutors',
      date: '20 Febbraio 2025',
      excerpt: 'A breve vi sveleremo chi saranno i Tutors di questa edizione di Lady-J!',
      content: 'A breve vi sveleremo chi saranno i Tutors di questa edizione di Lady-J! Un team di professionisti d\'eccellenza pronti a guidare le nostre aspiranti DJ verso il successo. Preparatevi a scoprire nomi che hanno fatto la storia della musica elettronica italiana.',
      category: 'TUTORS'
    }
  ]

  const categoryColors = {
    'CASTING': 'ladyj-pink',
    'FESTIVAL': 'ladyj-neon',
    'RECRUITING': 'ladyj-purple',
    'TUTORS': 'ladyj-accent'
  }

  return (
    <section id="news" className="py-20 bg-ladyj-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-neon rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-ladyj-pink rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
            ULTIME{' '}
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              NEWS
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Rimani aggiornata su tutte le novità del mondo Lady-J
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {news.map((article, index) => (
            <div
              key={article.id}
              className={`group bg-ladyj-gray rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-ladyj-pink/20 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Article Header */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-${categoryColors[article.category as keyof typeof categoryColors]}/20 text-${categoryColors[article.category as keyof typeof categoryColors]}`}>
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {article.date}
                  </span>
                </div>

                <h3 className={`font-display font-bold text-white mb-4 group-hover:text-ladyj-pink transition-colors duration-300 ${
                  index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}>
                  {article.title}
                </h3>

                <p className={`text-gray-300 leading-relaxed mb-6 ${
                  index === 0 ? 'text-base' : 'text-sm'
                }`}>
                  {index === 0 ? article.content : article.excerpt}
                </p>

                <button className="bg-gradient-neon text-ladyj-dark px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300">
                  LEGGI TUTTO
                </button>
              </div>

              {/* Decorative bottom border */}
              <div className={`h-1 bg-${categoryColors[article.category as keyof typeof categoryColors]} group-hover:h-2 transition-all duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-neon rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-black text-ladyj-dark mb-4">
              📧 Non perdere nessuna news!
            </h3>
            <p className="text-ladyj-dark/80 mb-6">
              Iscriviti alla newsletter per ricevere tutti gli aggiornamenti 
              su casting, eventi e novità del mondo Lady-J.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-grow px-4 py-3 rounded-full border-0 text-ladyj-dark placeholder-ladyj-dark/60 focus:outline-none focus:ring-2 focus:ring-ladyj-dark"
              />
              <button className="bg-ladyj-dark text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 hover:bg-ladyj-gray">
                ISCRIVITI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection