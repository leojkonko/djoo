"use client";

import Image from "next/image";
import VideoBanner from "@/components/VideoBanner";

export default function ArenaInsightPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <VideoBanner />

      {/* Main Image Section */}
      <section className="relative w-full">
        <Image
          src="/arena.jpg"
          alt="Arena Insight"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
        />

        {/* Features Grid - Bottom 50% of Image */}
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black/95 via-black/80 to-transparent">
          <div className="py-8 px-8 lg:px-16 max-w-7xl lg:max-w-[85%] mx-auto mt-32">
            <p className="text-lg max-w-3xl mx-auto mb-32">
              Um espaço exclusivo para conhecimento, tendências e transformação.
            </p>
            <div className="h-full flex items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-36 w-full">
                {/* Feature 1 */}
                <div>
                  <div className="flex items-start space-x-8">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-12 uppercase">
                        Talks e Palestras Inspiradoras:
                      </h3>
                      <p className="text-gray-300 text-lg">
                        Com nomes relevantes do mercado de moda,
                        empreendedorismo, branding, inovação e cultura.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div>
                  <div className="flex items-start space-x-8">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-12 uppercase">
                        Painéis Temáticos:
                      </h3>
                      <p className="text-gray-300 text-lg">
                        Debates sobre comportamento, consumo, imagem,
                        posicionamento de marca, vendas e muito mais.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div>
                  <div className="flex items-start space-x-8">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-12 uppercase">
                        Participações Especiais:
                      </h3>
                      <p className="text-gray-300 text-lg">
                        Convidados com trajetórias únicas que compartilham
                        experiências reais de sucesso.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div>
                  <div className="flex items-start space-x-8">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-12 uppercase">
                        Ambiente Sofisticado e Convidativo:
                      </h3>
                      <p className="text-gray-300 text-lg">
                        Cenografia acolhedora, som e iluminação de qualidade
                        para oferecer conforto e foco ao conteúdo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm md:text-lg max-w-4xl mx-auto text-gray-300 mt-40 text-center">
              Esta praça terá programação contínua paralela aos desfiles e ao
              lounge, permitindo que o público circule entre conhecimento, moda
              e negócios.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
