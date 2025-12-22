import Head from "next/head";

export default function AnalistaDeDados() {
  return (
    <>
      <Head>
        <title>Analista de Dados na Saúde | TI & Saúde</title>
        <meta
          name="description"
          content="Entenda o papel do Analista de Dados na saúde, suas funções e oportunidades de carreira."
        />
      </Head>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Analista de Dados na Saúde
        </h1>

        <p className="text-gray-600 mb-6">
          O Analista de Dados transforma informações brutas em conhecimento
          estratégico. Na saúde, isso significa salvar tempo, recursos e vidas.
        </p>

        <p>
          Hospitais, clínicas e operadoras utilizam dados para prever demandas,
          melhorar atendimentos e reduzir custos.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          O que faz um Analista de Dados?
        </h2>

        <ul className="list-disc ml-6 mt-4">
          <li>Coleta e organização de dados</li>
          <li>Análise de indicadores</li>
          <li>Criação de dashboards</li>
          <li>Suporte à tomada de decisão</li>
        </ul>

        <p className="mt-6">
          Ferramentas comuns: Power BI, Excel, SQL e Python.
        </p>
      </article>
    </>
  );
}
