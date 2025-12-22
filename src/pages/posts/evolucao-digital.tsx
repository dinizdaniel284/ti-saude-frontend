import Head from "next/head";

export default function EvolucaoDigital() {
  return (
    <>
      <Head>
        <title>Evolução Digital na Saúde | TI & Saúde</title>
        <meta
          name="description"
          content="Veja como a evolução digital está mudando a saúde e criando novas oportunidades em TI."
        />
      </Head>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Evolução Digital na Saúde
        </h1>

        <p className="text-gray-600 mb-6">
          A transformação digital mudou completamente a forma como a saúde funciona.
          Dados e tecnologia agora guiam decisões importantes.
        </p>

        <p>
          Clínicas e hospitais dependem cada vez mais de sistemas inteligentes.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          Benefícios da digitalização
        </h2>

        <ul className="list-disc ml-6 mt-4">
          <li>Mais eficiência</li>
          <li>Menos erros</li>
          <li>Decisões baseadas em dados</li>
        </ul>
      </article>
    </>
  );
}
