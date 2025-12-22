import Head from "next/head";

export default function PowerBI() {
  return (
    <>
      <Head>
        <title>Power BI | TI & Saúde</title>
        <meta
          name="description"
          content="Aprenda o que é Power BI e como ele transforma dados em decisões inteligentes."
        />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          O que é Power BI?
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Power BI é uma ferramenta da Microsoft usada para analisar dados e
          criar relatórios interativos.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Ele transforma números e planilhas em gráficos fáceis de entender,
          ajudando na tomada de decisões.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          📈 Onde o Power BI é usado?
        </h2>

        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Empresas</li>
          <li>Hospitais</li>
          <li>Gestão financeira</li>
          <li>Análise de indicadores</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🩺 Power BI na Saúde
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Na saúde, ele ajuda a analisar atendimentos, custos, desempenho de
          equipes e qualidade dos serviços.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🚀 Vale a pena aprender?
        </h2>

        <p className="text-lg text-gray-700">
          Sim! É uma das ferramentas mais usadas no mercado e ótima para quem
          quer entrar na área de dados.
        </p>
      </main>
    </>
  );
}
