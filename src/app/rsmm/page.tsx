"use client";

import PublicoAlvo from "@/components/PublicoAlvo";
import VideoBanner from "@/components/VideoBanner";
import Accordion from "@/components/Accordion";

export default function RSMMPage() {
  const accordionItems = [
    {
      title: "INTRODUÇÃO",
      content: (
        <div className="space-y-5 text-lg">
          <p>
            O <span className="font-bold">RSMM</span> nasce da necessidade de
            criação de um projeto arrojado, voltado para o fortalecimento do
            mercado da moda e para o reposicionamento de Lajeado como uma cidade
            conectada à inovação, criatividade e negócios. O evento tem como
            missão impulsionar o lançamento de coleções – de estilistas
            renomados, marcas consolidadas ou novos criadores – e, ao mesmo
            tempo, resgatar o glamour e a força conceitual dos eventos de moda,
            que perderam protagonismo nos últimos anos.
          </p>
          <p>
            Mais do que um desfile, o <span className="font-bold">RSMM</span> é
            uma plataforma de negócios. O evento abre espaço para marcas de
            diversos segmentos promoverem suas identidades, gerarem conexões e
            ampliarem oportunidades comerciais. A proposta é conectar moda,
            branding e mercado em uma experiência única, onde a estética
            encontra a estratégia.
          </p>
          <p>
            Além disso, o evento é um catalisador de desenvolvimento cultural,
            econômico e turístico para Lajeado e região. A cada edição,
            espera-se movimentar a economia local com aumento de fluxo
            hoteleiro, ativações comerciais, mídia espontânea, ocupação criativa
            de espaços urbanos e valorização do talento regional.
          </p>
          <p>
            As edições do evento serão realizadas na cidade de Lajeado – RS,
            sempre alinhadas ao calendário nacional da moda, reforçando a
            vocação do município como polo estratégico de tendências e negócios
            criativos no Sul do Brasil.
          </p>
        </div>
      ),
    },
    {
      title: "MISSÃO",
      content: (
        <div className="space-y-5 text-lg">
          <p>
            O RSMM é um evento brasileiro sediado na cidade de Lajeado, no
            coração do Rio Grande do Sul, que atua como ponte entre moda,
            negócios e cultura. Sua missão vai além de promover coleções e
            estilistas: o evento busca impulsionar a economia criativa, fomentar
            o turismo regional e posicionar Lajeado como um polo estratégico de
            inovação, estilo e oportunidades comerciais.
          </p>
          <p>
            O evento tem como objetivo lançar e fortalecer marcas e produtos –
            tanto da moda quanto de segmentos complementares –, ampliando a
            visibilidade de profissionais, empresas e ideias que se destacam no
            cenário competitivo atual. Sua estrutura contempla desfiles de alto
            nível, showrooms de marcas, ativações de experiências, ações de
            networking e presença de formadores de opinião.
          </p>
          <p>
            Além da estética e do glamour, o RSMM abraça a força do business
            como motor de transformação. Atua também com excelência em produção
            de eventos, desenvolvimento de conceito de marca, curadoria de
            imagem, e estratégias de posicionamento de mercado.
          </p>
          <p>
            Valorizamos o atendimento humano e personalizado, o respeito à livre
            concorrência, o desenvolvimento local e a responsabilidade social e
            ambiental. O evento se posiciona como uma vitrine de oportunidades,
            onde estilo e estratégia caminham juntos para transformar ideias em
            resultados reais.
          </p>
        </div>
      ),
    },
    {
      title: "FINALIDADE DO EVENTO",
      variant: "white" as const,
      content: (
        <div className="max-w-7xl mx-auto">
          <div className="space-y-5 text-lg">
            <p>
              O RSMM tem como finalidade lançar tendências, ditar conceitos,
              promover marcas e profissionais, além de valorizar a moda autoral
              e comercial da região. O evento busca não apenas fortalecer a
              imagem de marcas já estabelecidas, mas também abrir espaço para
              novos talentos e negócios, promovendo conexões reais entre moda,
              cultura e economia.
            </p>
            <p>
              Além disso, o evento impulsiona o turismo e a movimentação
              cultural e econômica da cidade de{" "}
              <span className="font-bold">Lajeado e região</span>, criando um
              ambiente fértil para novos negócios e parcerias estratégicas.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "ESTRATÉGIA DO EVENTO",
      variant: "white" as const,
      content: (
        <div className="max-w-7xl mx-auto">
          <div className="space-y-5 text-lg">
            <p>
              A estratégia central do evento é consolidar-se como uma{" "}
              <span className="font-bold">boutique fashion business</span>,
              oferecendo um formato diferenciado dentro do setor de moda. A ideia
              é atrair marcas, lojistas e profissionais que veem o evento como uma
              plataforma direta de relacionamento com o mercado consumidor.
            </p>
            <p>
              O evento será um ponto de encontro entre{" "}
              <span className="font-bold">vendedores e compradores</span>,
              promovendo o lançamento de coleções, a fidelização de novos públicos
              e a ampliação de redes comerciais.
            </p>
            <p>
              A proposta é posicionar o <span className="font-bold">RSMM</span>{" "}
              como uma força estratégica dentro do calendário nacional de moda e
              negócios.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "ATRAÇÕES",
      content: (
        <div className="space-y-8 text-lg">
          <ul className="space-y-8 relative left-1/4 text-2xl font-normal">
            <li>
              • DESFILE DE{" "}
              <span className="font-extrabold">ESTILISTAS CONCEITUAIS</span>
            </li>
            <li>
              • DESFILE DE{" "}
              <span className="font-extrabold">MARCAS COMERCIAIS</span>
            </li>
            <li>
              • DESFILE <span className="font-extrabold">PROJETO LAB</span>
            </li>
            <li>
              • <span className="font-extrabold">AÇÕES SOCIAIS</span> INTEGRADAS
            </li>
            <li>
              • <span className="font-extrabold">FASHION LOUNGES</span> PARA
              ATIVAÇÕES DE MARCAS
            </li>
            <li>
              • TRANSMISSÃO <span className="font-extrabold">AO VIVO</span>
            </li>
            <li>
              • TALKS SOBRE{" "}
              <span className="font-extrabold">
                TENDÊNCIAS E EMPREENDEDORISMO
              </span>
            </li>
            <li>
              • EXPOSIÇÕES INTERATIVAS DE{" "}
              <span className="font-extrabold">MODA</span> E{" "}
              <span className="font-extrabold">DESIGN</span>
            </li>
            <li>
              • SHOW <span className="font-extrabold">NACIONAL</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "PÚBLICO ALVO",
      content: <PublicoAlvo />,
    },
    {
      title: "IDENTIDADE",
      variant: "white" as const,
      content: (
        <div className="space-y-5 text-lg">
          <p>
            O <span className="font-bold">RSMM</span> carrega uma identidade
            própria e ousada, que o posiciona como um dos eventos mais
            autênticos do setor. Com caráter conceitual e estético exigido pelos
            grandes palcos da moda, o evento se reinventa a cada edição,
            adotando sempre uma temática criativa que valoriza a estética, o
            conteúdo e a originalidade.
          </p>
          <p>
            Cada detalhe é cuidadosamente planejado para garantir a manutenção
            da proposta artística do projeto, tornando-o uma vitrine refinada
            tanto para marcas quanto para profissionais que buscam diferenciação
            e protagonismo no mercado.
          </p>
        </div>
      ),
    },
    {
      title: "OBJETIVO GERAL",
      variant: "white" as const,
      content: (
        <div className="space-y-5 text-lg">
          <p>
            Transformar o <span className="font-bold">RSMM</span> em uma
            plataforma estratégica de lançamento de produtos, estilistas,
            modelos e marcas, promovendo o glamour, o conceito e o
            posicionamento de imagem.
          </p>
          <p>O evento visa também:</p>
          <ul className="space-y-3 ml-6">
            <li>
              • VALORIZAR TALENTOS DO SUL DO BRASIL E INSERI-LOS NO CIRCUITO DA
              MODA NACIONAL;
            </li>
            <li>• POSICIONAR LAJEADO COMO UM POLO DE MODA E CRIATIVIDADE;</li>
            <li>• CONECTAR NEGÓCIOS LOCAIS AO MERCADO DE MODA E LIFESTYLE;</li>
            <li>
              • ESTIMULAR O TURISMO, A CULTURA E A MOVIMENTAÇÃO ECONÔMICA DA
              CIDADE E REGIÃO;
            </li>
            <li>
              • TORNAR-SE REFERÊNCIA COMO UM ESPAÇO DE VISIBILIDADE E
              TRANSFORMAÇÃO PROFISSIONAL.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "ESSÊNCIA",
      content: (
        <div className="space-y-5 text-lg">
          <p>
            O <span className="font-bold">RSMM</span> não é apenas um evento de
            moda — é uma declaração de propósito, um manifesto contemporâneo que
            reposiciona Lajeado e sua região como protagonistas no cenário
            criativo nacional.
          </p>
          <p>
            Sua essência está na intersecção entre conceito e mercado, entre
            inspiração e resultado. Ele nasce do desejo de provocar movimento:
            na estética, nos negócios e na percepção de valor. Aqui, moda não é
            apenas roupa. É linguagem, identidade, influência e poder de
            transformação.
          </p>
          <p>
            Mais do que promover desfiles, o evento impulsiona narrativas. Cada
            marca, cada stylist, cada modelo sobe à passarela não apenas com um
            look, mas com uma história, com um ponto de vista que deseja ser
            ouvido, visto e consumido. É uma experiência de pertencimento, de
            descoberta e de conexão — onde o profissionalismo encontra o
            encantamento, e onde o glamour anda de mãos dadas com o planejamento
            estratégico.
          </p>
          <p>
            O evento carrega em seu DNA o compromisso com a{" "}
            <span className="font-bold">
              evolução da moda enquanto vetor cultural e econômico.
            </span>{" "}
            Ele não apenas acolhe o novo — ele o provoca. Estimula a inovação
            estética, a valorização da mão de obra criativa e a abertura de
            mercados. Torna visíveis os talentos invisíveis. Consolida
            trajetórias e inaugura novas jornadas tantas.
          </p>
          <p>
            Além disso, sua essência está no fomento ao empreendedorismo, ao
            turismo cultural e ao fortalecimento da economia criativa local. Ao
            posicionar-se como uma vitrine nacional, o{" "}
            <span className="font-bold">RSMM</span> transforma o olhar do país
            para o interior do Rio Grande do Sul, revelando que a sofisticação,
            a ousadia e a excelência podem (e devem) surgir fora dos grandes
            centros urbanos.
          </p>
          <p>
            Trata-se de um evento que{" "}
            <span className="font-bold">inspira, conecta e movimenta.</span> Um
            espaço onde ideias ganham forma, pessoas se reinventam, marcas
            conquistam públicos e o futuro da moda é desenhado — com identidade,
            estratégia e alma.
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <VideoBanner />
      {/* Hero Section with Logo */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 lg:pt-10">
        {/* Accordion Container */}
        <Accordion items={accordionItems} />
      </section>
    </main>
  );
}
