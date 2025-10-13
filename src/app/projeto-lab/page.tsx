"use client";

import VideoBanner from "@/components/VideoBanner";
import Accordion from "@/components/Accordion";

export default function ProjetoLabPage() {
  const accordionItems = [
    {
      title: "PROPÓSITO",
      content: (
        <div className="space-y-5 text-lg">
          <p>
            O <span className="font-bold">Projeto LAB</span> nasce como uma
            plataforma dentro do RSMM – Rio Grande do Sul Mostra Moda – dedicada
            a{" "}
            <span className="font-bold">
              novos criadores e talentos da moda
            </span>
            , oferecendo a oportunidade de dar visibilidade às suas criações,
            fomentar conexões com o mercado e abrir espaço para a renovação do
            setor com propósito, conceito e atitude.
          </p>
          <p>
            O projeto tem o compromisso de{" "}
            <span className="font-bold">
              estimular o pensamento criativo com consciência social e ambiental
            </span>
            , sem perder o foco na estética contemporânea, nas tendências e na
            inovação.
          </p>
        </div>
      ),
    },
    {
      title: "CURADORIA DO TEMA",
      content: (
        <div className="space-y-5 text-lg">
          <p>A edição inaugural do LAB será guiada pelo tema:</p>
          <p className="text-2xl font-bold text-center my-6">
            &ldquo;Ressignificar — A Beleza que Renasce&rdquo;
          </p>
          <p>
            Inspirado pela força de superação do povo gaúcho após as catástrofes
            ambientais de 2024, o tema convida os participantes a pensar moda
            como ferramenta de reconstrução:{" "}
            <span className="font-bold">
              criando, transformando e olhando para o futuro com criatividade e
              responsabilidade.
            </span>
          </p>
        </div>
      ),
    },
    {
      title: "OBJETIVOS",
      content: (
        <div className="space-y-5 text-lg">
          <p>
            O <span className="font-bold">PROJETO LAB</span> tem como objetivos:
          </p>
          <ul className="space-y-3 ml-6">
            <li>
              • Fomentar a moda autoral e conceitual no Rio Grande do Sul;
            </li>
            <li>• Proporcionar visibilidade para novos talentos da moda;</li>
            <li>
              • Criar oportunidades de networking com profissionais do mercado;
            </li>
            <li>• Estimular a inovação e experimentação criativa;</li>
            <li>
              • Conectar estilistas emergentes ao circuito nacional de moda;
            </li>
            <li>• Promover a diversidade e inclusão no setor fashion.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "QUEM PODE PARTICIPAR",
      variant: "white" as const,
      content: (
        <div className="bg-white text-black py-12 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <ul className="space-y-4 text-lg ml-[30%]">
              <li>• ESTUDANTES DE MODA (A PARTIR DO 5º SEMESTRE)</li>
              <li>• ESTILISTAS INDEPENDENTES</li>
              <li>• CRIADORES AUTORAIS COM ATÉ 3 ANOS DE ATUAÇÃO</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "COMO PARTICIPAR",
      variant: "white" as const,
      content: (
        <div className="bg-white text-black py-12 px-6 -mx-[50vw] ml-[-60%] mr-[calc(-50vw+50%)] w-screen relative left-[50%] right-[50%]">
          <div className="max-w-7xl mx-auto">
            <p className="mb-6 text-lg text-center">
              Para concorrer a uma vaga no desfile LAB, o candidato deverá
              apresentar:
            </p>

            <div className="mb-8 flex flex-col items-center">
              <p className="font-bold text-lg mb-4 -ml-[20%]">
                • Projeto de criação da coleção, contendo:
              </p>
              <ul className="space-y-2 ml-8 text-lg">
                <li>□ NOME E CONCEITO DA COLEÇÃO</li>
                <li>□ TEXTO DE DEFESA CRIATIVA</li>
                <li>□ TEMA CENTRAL ALINHADO À PROPOSTA DO EVENTO</li>
                <li>□ CROQUIS COM FICHAS TÉCNICAS DAS PEÇAS</li>
              </ul>
            </div>

            <p className="text-lg mb-4 text-center">
              • Cada estilista poderá apresentar{" "}
              <span className="font-bold">até 10 looks no desfile</span>
            </p>

            <p className="text-lg text-center">
              • As seleções serão feitas por uma curadoria especializada ligada
              à direção criativa do RSMM
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "COMO FUNCIONARÁ",
      content: (
        <div className="max-w-7xl mx-auto py-12">
          <ul className="space-y-6 text-lg">
            <li>
              • Os desfiles do Projeto LAB acontecerão no{" "}
              <span className="font-bold">
                primeiro dia do RSMM, às 18h, abrindo o bloco inicial da
                programação da passarela.
              </span>
            </li>
            <li>
              • Os criadores selecionados terão à disposição estrutura de
              passarela, modelos profissionais e divulgação.
            </li>
            <li>
              • Durante os dois dias de evento, os looks também poderão ser
              expostos no <span className="font-bold">Lounge Business</span>,
              possibilitando networking direto com marcas, empresas, agências e
              formadores de opinião.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "PARTICIPAÇÃO DAS FACULDADES",
      content: (
        <div className="max-w-7xl mx-auto">
          <ul className="space-y-6 text-lg">
            <li>
              • Instituições de ensino superior em moda poderão indicar seus
              alunos como participantes do Projeto LAB.
            </li>
            <li>
              • As faculdades participantes receberão destaque institucional e
              poderão integrar professores e coordenadores ao processo
              curatorial e ao evento.
            </li>
            <li>
              • Essa conexão entre academia e mercado fortalece o objetivo
              principal do LAB:{" "}
              <span className="font-bold">
                inserir os estudantes no cenário real da moda
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "BENEFÍCIOS AOS PARTICIPANTES",
      variant: "white" as const,
      content: (
        <div className="max-w-7xl mx-auto py-12">
          <ul className="space-y-4 text-lg">
            <li>• INCLUSÃO NO LINE-UP OFICIAL DO RSMM</li>
            <li>
              • PARTICIPAÇÃO EM DESFILE PROFISSIONAL COM COBERTURA DE IMPRENSA
            </li>
            <li>• CERTIFICADO DE PARTICIPAÇÃO</li>
            <li>• VISIBILIDADE DIGITAL NAS REDES OFICIAIS</li>
            <li>
              • CONTATO DIRETO COM MARCAS, PROFISSIONAIS DO SETOR E AGÊNCIAS
            </li>
            <li>• PARTICIPAÇÃO EM UMA PLATAFORMA DE ALCANCE ESTADUAL</li>
            <li>• EXPOSIÇÃO DAS PEÇAS NO EVENTO COMO VITRINE COMERCIAL</li>
          </ul>
        </div>
      ),
    },
    {
      title: "IMPACTO E CONSCIÊNCIA",
      variant: "white" as const,
      content: (
        <div className="max-w-7xl mx-auto py-12">
          <p className="text-lg mb-6">
            O Projeto LAB também será o núcleo onde se concentra a veia{" "}
            <span className="font-bold">consciente e transformadora</span> do
            RSMM. Aqui, os participantes serão incentivados a:
          </p>
          <ul className="space-y-4 text-lg">
            <li>• REUTILIZAR MATERIAIS DE FORMA CRIATIVA</li>
            <li>• REFLETIR SOBRE OS IMPACTOS AMBIENTAIS DA INDÚSTRIA TÊXTIL</li>
            <li>• CRIAR A PARTIR DA ESCASSEZ COMO FORÇA CRIATIVA</li>
            <li>
              • DESENVOLVER UMA ESTÉTICA AUTÊNTICA QUE DIALOGUE COM O MUNDO
              ATUAL
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <VideoBanner
        videoUrl="https://res.cloudinary.com/dgbgqhrpa/video/upload/v1760372666/PROJETO_LAB_kwxnd9.mp4
"
      />

      {/* Hero Section with Logo */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #333 25%, transparent 25%), linear-gradient(-45deg, #333 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #333 75%), linear-gradient(-45deg, transparent 75%, #333 75%)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            }}
          ></div>
        </div> */}

        {/* Logo/Title */}
        <div className="relative z-10 mb-20 mt-16">
          <h1 className="text-5xl font-bold text-center tracking-wider">
            O futuro da moda começa agora
          </h1>
          {/* <p className="text-center text-xl md:text-2xl mt-4 text-gray-400">
            Plataforma de Novos Talentos
          </p> */}
        </div>

        {/* Accordion Container */}
        <Accordion items={accordionItems} />
      </section>
    </main>
  );
}
