/**
 * Exemplo de uso do componente Accordion
 * 
 * Este é um componente reutilizável para criar accordions com estilos padronizados.
 */

import Accordion from "@/components/Accordion";

export default function AccordionExamplePage() {
  // Definir os itens do accordion
  const items = [
    {
      title: "ITEM COM FUNDO ESCURO",
      content: (
        <div className="space-y-4 text-lg">
          <p>Este item usa o estilo padrão com fundo escuro.</p>
          <p>Você pode adicionar qualquer conteúdo JSX aqui.</p>
          <ul className="space-y-2 ml-6">
            <li>• Item 1</li>
            <li>• Item 2</li>
            <li>• Item 3</li>
          </ul>
        </div>
      ),
      // variant: "dark" é o padrão, não precisa especificar
    },
    {
      title: "ITEM COM FUNDO BRANCO",
      variant: "white" as const,
      content: (
        <div className="max-w-7xl mx-auto">
          <p className="text-lg mb-4">
            Este item usa o estilo com fundo branco full-width.
          </p>
          <ul className="space-y-2 text-lg">
            <li>• Fundo branco estende-se por toda a largura da tela</li>
            <li>• Texto em preto para contraste</li>
            <li>• Ícone circular com borda preta quando aberto</li>
            <li>• Agora o conteúdo também tem fundo branco full-width automático!</li>
          </ul>
        </div>
      ),
    },
    {
      title: "OUTRO ITEM ESCURO",
      content: (
        <div className="space-y-4 text-lg">
          <p>Mais um exemplo de item com fundo escuro.</p>
        </div>
      ),
    },
    {
      title: "MAIS UM ITEM BRANCO",
      variant: "white" as const,
      content: (
        <div className="max-w-7xl mx-auto">
          <p className="text-lg">
            Você pode ter múltiplos itens com fundo branco.
          </p>
          <p className="text-lg mt-4">
            O componente agora aplica automaticamente o fundo branco full-width tanto no título quanto no conteúdo!
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Título da página */}
        <div className="relative z-10 mb-16">
          <h1 className="text-6xl font-bold text-center">
            Exemplo de <span className="text-ladyj-purple">Accordion</span>
          </h1>
        </div>

        {/* Componente Accordion */}
        <Accordion items={items} />
      </section>
    </main>
  );
}

/**
 * PROPRIEDADES DO COMPONENTE ACCORDION:
 * 
 * items: Array<{
 *   title: string;           // Título do item (sempre em UPPERCASE)
 *   content: React.ReactNode; // Conteúdo JSX do item
 *   variant?: "dark" | "white"; // Estilo do fundo (padrão: "dark")
 * }>
 * 
 * className?: string;  // Classes adicionais para o container (opcional)
 * 
 * 
 * ESTILOS DE VARIANTE:
 * 
 * - "dark" (padrão):
 *   - Fundo escuro no hover
 *   - Texto branco
 *   - Ícone circular com borda branca
 * 
 * - "white":
 *   - Fundo branco full-width quando aberto (título E conteúdo)
 *   - Texto preto
 *   - Ícone circular com borda preta
 *   - Usa pseudo-elementos (::before e ::after) automaticamente
 *   - Remove a necessidade de classes complexas no conteúdo
 * 
 * 
 * ESTRUTURA SIMPLIFICADA DO CONTEÚDO PARA VARIANT="white":
 * 
 * Agora você só precisa de:
 * 
 * {
 *   variant: "white",
 *   content: (
 *     <div className="max-w-7xl mx-auto">
 *       {Seu conteúdo aqui}
 *     </div>
 *   )
 * }
 * 
 * O componente aplica automaticamente:
 * - bg-white
 * - text-black
 * - Pseudo-elementos para full-width
 * - Todos os estilos necessários
 */
