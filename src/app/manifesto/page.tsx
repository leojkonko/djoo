"use client";

import Accordion from "@/components/Accordion";
import VideoBanner from "@/components/VideoBanner";

const accordionData = [
  {
    title: "TEMA DO EVENTO",
    content: (
      <div className="space-y-6 text-left">
        <h2 className="text-3xl md:text-3xl font-bold text-center uppercase">
          “UM NOVO CENÁRIO: A MODA COMO RENASCIMENTO”
        </h2>
        <h3 className="text-2xl md:text-2xl font-light text-center italic mb-8">
          Recomeçar. Reconstruir. Reimaginar. Reequilibrar.
        </h3>

        <div className="relative w-full aspect-[21/9] bg-gray-800 rounded-lg flex items-center justify-center my-8">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="mt-2 text-lg font-semibold text-red-500">
              VÍDEO AINDA NÃO ESTÁ PRONTO
            </p>
          </div>
        </div>

        <p className="text-base md:text-lg leading-relaxed">
          <strong className="font-bold">O RSMM – Rio Grande do Sul</strong>{" "}
          Mostra Moda nasce como resposta direta a um momento histórico: as
          enchentes que devastaram o estado em 2024, especialmente no Vale do
          Taquari, não foram apenas uma tragédia climática – foram um alerta.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          A moda, que sempre refletiu o tempo e a cultura de uma sociedade,
          agora assume um novo papel:{" "}
          <strong className="font-bold">ser agente de transformação.</strong>
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Este evento une criatividade e consciência. Traz para a passarela{" "}
          <strong className="font-bold">
            não apenas tendências, mas também reflexões.
          </strong>{" "}
          Ele nasce no coração de um estado que viu cidades submersas, sonhos
          interrompidos e famílias forçadas a recomeçar do zero. E justamente
          por isso, se propõe a ser um{" "}
          <strong className="font-bold">
            símbolo de renascimento e de responsabilidade coletiva.
          </strong>
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Não há mais tempo para ignorar:{" "}
          <strong className="font-bold">
            a ação humana desequilibrada sobre o planeta tem consequências
            reais.
          </strong>{" "}
          O que aconteceu no Rio Grande do Sul é resultado de décadas de
          negligência com o meio ambiente: excesso de lixo, ocupações
          desordenadas, impermeabilização do solo, desmatamentos, poluição das
          águas, emissões desenfreadas – tudo isso forma um ecossistema doente.
        </p>
        <p className="text-base md:text-lg leading-relaxed font-semibold">
          E quando a natureza responde, o impacto é devastador.
        </p>

        <blockquote className="italic text-base md:text-lg my-8 max-w-xl mx-auto">
          “O planeta está gritando. O Rio Grande do Sul sentiu esse grito nas
          águas que destruíram lares e esperanças. Mas a moda, com sua força
          estética e simbólica, pode ser a linguagem da reconstrução. O RSMM é
          mais do que um desfile –{" "}
          <strong className="font-bold">
            é um manifesto pelo equilíbrio, pela beleza com propósito e por um
            novo ciclo para o nosso estado.
          </strong>
          ”
        </blockquote>
      </div>
    ),
  },
  {
    title: "MANIFESTO",
    variant: "white" as const,
    content: (
      <div className="space-y-6 text-left py-6">
        <h2 className="text-3xl md:text-3xl font-bold text-center uppercase mb-8">
          &ldquo;MODA COM PROPÓSITO. CRIATIVIDADE COM IMPACTO. UM EVENTO
          CONECTADO COM O AGORA.&rdquo;
        </h2>

        <p className="text-base md:text-lg leading-relaxed">
          O{" "}
          <strong className="font-bold">
            RSMM – Rio Grande do Sul Mostra Moda
          </strong>{" "}
          <strong className="font-bold">
            não é apenas uma vitrine de tendências
          </strong>{" "}
          — é uma plataforma de expressão, posicionamento e transformação.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          O evento nasce no sul do Brasil carregando consigo não apenas a força
          da moda, mas o espírito de um novo tempo. Um tempo que exige
          consciência, reinvenção e presença.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          Após a maior tragédia climática da história do estado, que impactou
          milhares de famílias e exigiu resiliência de toda uma região, o RSMM
          surge como um símbolo de recomeço e reconstrução — não com discurso de
          dor, mas com energia de mudança. Não com vitimização, mas com ação.
        </p>

        <p className="text-base md:text-lg leading-relaxed font-bold">
          A moda é o nosso idioma. A consciência, o nosso tom. O agora, o nosso
          palco.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          O RSMM promove o novo comportamento estético, urbano e conectado com
          as causas que definem o futuro. Sem clichês, sem estereótipos.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          O evento une design, identidade, cultura e propósito em experiências
          que ressoam dentro e fora das passarelas.
        </p>
      </div>
    ),
  },
];

export default function ManifestoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <VideoBanner />
      {/* Hero Section with Logo */}
      <section className="relative min-h-screen flex flex-col items-center px-4 lg:pt-10">
        {/* Accordion Container */}
        <Accordion items={accordionData} />
      </section>
    </main>
  );
}
