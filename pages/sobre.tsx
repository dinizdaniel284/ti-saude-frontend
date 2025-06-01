import React from 'react';

export default function SobrePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <section>
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Sobre o Projeto TI & Saúde</h1>
        <article className="space-y-5 text-lg leading-relaxed">
          <p>
            O <strong>TI & Saúde</strong> nasceu da jornada de um profissional determinado: Daniel, vindo do interior de São Paulo, com experiências nas áreas de segurança e maquinário agrícola, que decidiu iniciar uma nova trajetória na tecnologia.
          </p>
          <p>
            Durante seus estudos em Análise e Desenvolvimento de Sistemas, Daniel identificou um enorme potencial em unir dois campos fundamentais: <strong>tecnologia da informação</strong> e <strong>saúde</strong>. Foi assim que surgiu este projeto, com a missão de ser um guia acessível para iniciantes e profissionais em transição de carreira.
          </p>
          <p>
            Aqui você encontra guias práticos, conteúdos relevantes e ferramentas úteis para quem deseja aprender, se inspirar e transformar seu futuro. Acreditamos que a tecnologia salva vidas, otimiza processos e democratiza oportunidades.
          </p>
          <p className="font-semibold">
            Se você sonha em migrar para a TI, integrar saberes com a saúde ou apenas explorar um novo caminho, este espaço é seu.
          </p>
          <p className="italic text-blue-700 mt-8 text-center">
            “Não importa de onde você vem, e sim para onde quer ir.” — Vamos juntos!
          </p>
        </article>
      </section>
    </main>
  );
}
